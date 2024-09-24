<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Orders from "~m/manage/orders/entities/orders.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
import RDatePicker from "~co/components/form/src/datePicker/RDatePicker.vue"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import REditor from "~co/components/form/src/editor/REditor.vue"
import Users from "~m/security/users/entities/users.model"
import Pay_ways from "~m/sale/pay_ways/entities/pay_ways.model"
import Request_statuses from "~m/masters/request_statuses/entities/request_statuses.model"

const router = useRouter()
const props = defineProps({
  modal: pt.bool.def(false),
  action: pt.string.def('create'),
  loading_text: pt.string.def(''),
  showLoading: pt.bool.def(true),

})
const emit = defineEmits(['closeModal','reload'])
const textButon = props.action == 'create' ? 'Crear' : 'Actualizar'
const model = defineModel()
const orders = reactive(new Orders(model.value))
const ordersForm = ref()
const andNew = ref(false)
const {loading: loadingUsers, result: resultUsers} = Users.useGetMany()
const {loading: loadingPay_ways, result: resultPay_ways} = Pay_ways.useGetMany()
const {loading: loadingRequest_statuses, result: resultRequest_statuses} = Request_statuses.useGetMany()

const {
  loading: loadingOrdersSave,
  toggleEnabled: toggleOrdersSave,
  onResult: onResultOrdersSave,
  enabled: enabledOrdersSave,
  onError: onErrorOrdersSave
} = Orders.useStaticSave(orders, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingUsers.value || loadingPay_ways.value || loadingRequest_statuses.value);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'orders_list'})
}
onErrorOrdersSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultOrdersSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'orders_list'})
  else{
    ordersForm.value?.clear()
    enabledOrdersSave.value=false
    Object.assign(orders,new Orders(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateOrdersForm() {
  const valid = await ordersForm.value?.validate()
  if (valid) {
    toggleOrdersSave()
  }
}
</script>
<template>
  <AbsoluteLoader :h-full="true" class="" :loading="loadingAll"
                  :description="props.loading_text"
                  v-if="showLoading">
    <slot name="loading_icon"></slot>
  </AbsoluteLoader>
  <div class="r-container-form">
      <div class="mt-10 sm:mt-0">
        <div class="shadow overflow-hidden sm:rounded-md">
          <RForm ref="ordersForm" :state="orders" :validations="Orders.validations[action]" :feedbacks="Orders.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="orders.code" path="code" label="Código"
                          @keyup.enter="validateOrdersForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="orders.phone" path="phone" label="Teléfono"
                          @keyup.enter="validateOrdersForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="orders.address" path="address" label="Dirección"
                          @keyup.enter="validateOrdersForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="orders.price" path="price" label="Precio"
                          @keyup.enter="validateOrdersForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="orders.observations" path="observations" label="Observaciones"/>
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="orders.request_status_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingRequest_statuses"
                      :loading="loadingRequest_statuses"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultRequest_statuses?.data"
                      label="Estado de solicitud"
                      @keyup.enter="validateOrdersForm"

                  />
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="orders.pay_way_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingPay_ways"
                      :loading="loadingPay_ways"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultPay_ways?.data"
                      label="Forma de pago"
                      @keyup.enter="validateOrdersForm"

                  />
                </div>
                <div class="grid-input">
                  <RDatePicker    v-model="orders.delivery_date" path="delivery_date" label="Fecha de envío" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RDatePicker  :requiredMark="true"  v-model="orders.requested_date" path="requested_date" label="Fecha del pedido" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RDatePicker    v-model="orders.cancelled_at" path="cancelled_at" label="Cancelado en" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="orders.cancelled_by"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingUsers"
                      :loading="loadingUsers"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultUsers?.data"
                      label="Cancelado por"
                      @keyup.enter="validateOrdersForm"

                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6 ">
            <div class="r-footer-form">
              <div class="flex">
                <div v-if="action==='create'" class="flex-none items-center">
                  <ACheckbox v-model:checked="andNew" aria-describedby="offers-description" id="andNew"/>
                </div>
                <div v-if="action==='create'" @click="andNew.value!==andNew.value"
                     class="flex text-sm absolute mx-[2rem] my-[4px] ">
                  <label for="andNew" class="font-bold text-gray-700 dark:text-slate-200 !cursor-pointer ">Insertar y
                    nuevo <span id="andNew-description" class="ml-1 text-muted">Se insertara un elemento y reiniciara el formuario</span></label>
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton class=" ml-5" shadow color="primary" :loading="loadingOrdersSave"
                         @click="validateOrdersForm"> {{ textButon }}
                  pedidos
                </RButton>
                <RButton class=" ml-5" shadow color="primary"
                         @click="cancel"> Cancelar
                </RButton>
              </div>
             </div>
            </div>
          </RForm>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
