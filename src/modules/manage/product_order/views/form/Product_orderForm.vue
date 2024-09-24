<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Product_order from '~m/manage/product_order/entities/product_order.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import RSelect from '~co/components/form/src/select/RSelect.vue'
import Orders from '~m/manage/orders/entities/orders.model'

const router = useRouter()
const props = defineProps({
  modal: pt.bool.def(false),
  action: pt.string.def('create'),
  loading_text: pt.string.def(''),
  showLoading: pt.bool.def(true)
})
const emit = defineEmits(['closeModal', 'reload'])
const textButon = props.action == 'create' ? 'Crear' : 'Actualizar'
const model = defineModel()
const product_order = reactive(new Product_order(model.value))
const product_orderForm = ref()
const andNew = ref(false)
const { loading: loadingOrders, result: resultOrders } = Orders.useGetMany()

const {
  loading: loadingProduct_orderSave,
  toggleEnabled: toggleProduct_orderSave,
  onResult: onResultProduct_orderSave,
  enabled: enabledProduct_orderSave,
  onError: onErrorProduct_orderSave
} = Product_order.useStaticSave(product_order, { defaultEnabled: false })
const loadingAll = computed!(() => loadingOrders.value)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'product_order_list' })
}
onErrorProduct_orderSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultProduct_orderSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({ name: 'format_product_order_list' })
  else {
    product_orderForm.value?.clear()
    enabledProduct_orderSave.value = false
    Object.assign(product_order, new Product_order(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateProduct_orderForm() {
  const valid = await product_orderForm.value?.validate()
  if (valid) {
    toggleProduct_orderSave()
  }
}
</script>
<template>
  <AbsoluteLoader
    :h-full="true"
    class=""
    :loading="loadingAll"
    :description="props.loading_text"
    v-if="showLoading"
  >
    <slot name="loading_icon"></slot>
  </AbsoluteLoader>
  <div class="r-container-form">
    <div class="mt-10 sm:mt-0">
      <div class="shadow overflow-hidden sm:rounded-md">
        <RForm
          ref="format_product_orderForm"
          :state="product_order"
          :validations="Product_order.validations[action]"
          :feedbacks="Product_order.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  :onlyNumbers="true"
                  type="number"
                  :requiredMark="true"
                  v-model="product_order.quantity"
                  path="quantity"
                  label="Quantity"
                  @keyup.enter="validateProduct_orderForm"
                />
              </div>
              <div class="grid-input">
                <RSelect
                  v-model="product_order.order_id"
                  id-key="id"
                  :required-mark="true"
                  ref="selectId"
                  :loading-data="loadingOrders"
                  :loading="loadingOrders"
                  text-key="code"
                  :allowClear="true"
                  showFilter
                  :items="resultOrders?.data"
                  label="Orders"
                  @keyup.enter="validateProduct_orderForm"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6">
            <div class="r-footer-form">
              <div class="flex">
                <div v-if="action === 'create'" class="flex-none items-center">
                  <ACheckbox
                    v-model:checked="andNew"
                    aria-describedby="offers-description"
                    id="andNew"
                  />
                </div>
                <div
                  v-if="action === 'create'"
                  @click="andNew.value !== andNew.value"
                  class="flex text-sm absolute mx-[2rem] my-[4px]"
                >
                  <label
                    for="andNew"
                    class="font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"
                    >Insertar y nuevo
                    <span id="andNew-description" class="ml-1 text-muted"
                      >Se insertara un elemento y reiniciara el formuario</span
                    ></label
                  >
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton
                  class="ml-5"
                  shadow
                  color="primary"
                  :loading="loadingProduct_orderSave"
                  @click="validateProduct_orderForm"
                >
                  {{ textButon }}
                  Ordenes Productos
                </RButton>
                <RButton class="ml-5" shadow color="primary" @click="cancel"> Cancelar </RButton>
              </div>
            </div>
          </div>
        </RForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
