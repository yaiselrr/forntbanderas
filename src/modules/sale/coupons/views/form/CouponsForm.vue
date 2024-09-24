<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Coupons from '~m/sale/coupons/entities/coupons.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import { RInput } from '~co/components/form'
import REditor from '~co/components/form/src/editor/REditor.vue'
import { ref, onMounted } from 'vue'
import RDatePicker from '~co/components/form/src/datePicker/RDatePicker.vue'
import RSelect from '~co/components/form/src/select/RSelect.vue'
import Types from '~m/masters/types/entities/types.model'

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
const coupons = reactive(new Coupons(model.value))
const couponsForm = ref()
const andNew = ref(false)
const { loading: loadingTypes, result: resultTypes } = Types.useGetMany()

const {
  loading: loadingCouponsSave,
  toggleEnabled: toggleCouponsSave,
  onResult: onResultCouponsSave,
  enabled: enabledCouponsSave,
  onError: onErrorCouponsSave
} = Coupons.useStaticSave(coupons, { defaultEnabled: false })
// const loadingAll = ref(false)
const loadingAll = computed!(() => loadingTypes.value)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'coupons_list' })
}
const beforeUpload = (file) => {
  return false
}
onErrorCouponsSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultCouponsSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'coupons_list' })
  else {
    couponsForm.value?.clear()
    enabledCouponsSave.value = false
    Object.assign(coupons, new Coupons(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateCouponsForm() {
  const valid = await couponsForm.value?.validate()
  if (valid) {
    toggleCouponsSave()
  }
}

onMounted(() => {})
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
          ref="couponsForm"
          :state="coupons"
          :validations="Coupons.validations[action]"
          :feedbacks="Coupons.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="coupons.code"
                  path="code"
                  label="Código"
                  @keyup.enter="validateCouponsForm"
                />
              </div>
              <div class="grid-input">
                <RSelect
                  v-model="coupons.type_id"
                  id-key="id"
                  :required-mark="true"
                  ref="selectId"
                  :loading-data="loadingTypes"
                  :loading="loadingTypes"
                  text-key="name"
                  :allowClear="true"
                  showFilter
                  :items="resultTypes?.data"
                  path="type_id"
                  label="Tipo"
                  @keyup.enter="validateCouponsForm"
                />
              </div>

              <div class="grid-input">
                <RInput
                  type="number"
                  :requiredMark="true"
                  v-model="coupons.coupon_value"
                  path="size"
                  label="Valor de cupón"
                  @keyup.enter="validateCouponsForm"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="number"
                  :requiredMark="true"
                  v-model="coupons.available_quantity"
                  path="available_quantity"
                  label="Cantidad disponible"
                  @keyup.enter="validateCouponsForm"
                />
              </div>
              <!-- <div class="grid-input">
                <RDatePicker
                  :requiredMark="true"
                  v-model="coupons.start_date"
                  path="start_date"
                  label="Fecha inicio"
                  :allowClear="true"
                  @keyup.enter="validateCouponsForm"
                />
              </div>
              <div class="grid-input">
                <RDatePicker
                  :requiredMark="true"
                  v-model="coupons.end_date"
                  path="end_date"
                  label="Fecha Fin"
                  :allowClear="true"
                  @keyup.enter="validateCouponsForm"
                />
              </div> -->
            </div>
            <div class="col-span-4">
              <REditor v-model="coupons.conditions" path="conditions" label="Condiciones" @keyup.enter="validateCouponsForm" />
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
                  :loading="loadingCouponsSave"
                  @click="validateCouponsForm"
                >
                  {{ textButon }}
                  cupones
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
