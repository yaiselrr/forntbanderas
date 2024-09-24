<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Invoices from "~m/manage/invoices/entities/invoices.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
import RDatePicker from "~co/components/form/src/datePicker/RDatePicker.vue"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import REditor from "~co/components/form/src/editor/REditor.vue"
import Orders from "~m/manage/orders/entities/orders.model"

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
const invoices = reactive(new Invoices(model.value))
const invoicesForm = ref()
const andNew = ref(false)
const {loading: loadingOrders, result: resultOrders} = Orders.useGetMany()

const {
  loading: loadingInvoicesSave,
  toggleEnabled: toggleInvoicesSave,
  onResult: onResultInvoicesSave,
  enabled: enabledInvoicesSave,
  onError: onErrorInvoicesSave
} = Invoices.useStaticSave(invoices, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingOrders.value);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'invoices_list'})
}
onErrorInvoicesSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultInvoicesSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'invoices_list'})
  else{
    invoicesForm.value?.clear()
    enabledInvoicesSave.value=false
    Object.assign(invoices,new Invoices(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateInvoicesForm() {
  const valid = await invoicesForm.value?.validate()
  if (valid) {
    toggleInvoicesSave()
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
          <RForm ref="invoicesForm" :state="invoices" :validations="Invoices.validations[action]" :feedbacks="Invoices.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="invoices.code" path="code" label="Código"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="invoices.year" path="year" label="Año"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="invoices.phone" path="phone" label="Teléefono"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="invoices.address" path="address" label="Dirección"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="invoices.subtotal" path="subtotal" label="Subtotal"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="invoices.total" path="total" label="Total"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="invoices.pay_way" path="pay_way" label="Forma de pago"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="invoices.observations" path="observations" label="Observaciones"/>
                </div>
                <div class="grid-input">
                  <RDatePicker  :requiredMark="true"  v-model="invoices.invoice_date" path="invoice_date" label="Fecha factura" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="invoices.order_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingOrders"
                      :loading="loadingOrders"
                      text-key="code"
                      :allowClear="true"
                      showFilter
                      :items="resultOrders?.data"
                      label="Ordenes"
                      @keyup.enter="validateInvoicesForm"

                  />
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="invoices.prefix" path="prefix" label="Prefijo"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="invoices.discount" path="discount" label="Descuento"
                          @keyup.enter="validateInvoicesForm"/>
                </div>
                <div class="grid-input">
                  <RDatePicker    v-model="invoices.cancelled_at" path="cancelled_at" label="Cancelado en" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="invoices.cancelled_by" path="cancelled_by" label="Cancelado por"
                          @keyup.enter="validateInvoicesForm"/>
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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingInvoicesSave"
                         @click="validateInvoicesForm"> {{ textButon }}
                  facturas
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
