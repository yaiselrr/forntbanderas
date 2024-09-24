<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Dealers from '~m/security/dealers/entities/dealers.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import { RInput } from '~co/components/form'
import RSelect from '~co/components/form/src/select/RSelect.vue'
import REditor from '~co/components/form/src/editor/REditor.vue'
import Users from '~m/security/users/entities/users.model'
import Business_sectors from '~m/manage/business_sectors/entities/business_sectors.model'
import { ref, onMounted, computed } from 'vue'

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
const dealers = reactive(new Dealers(model.value))
const dealersForm = ref()
const andNew = ref(false)

const {
  loading: loadingDealersSave,
  toggleEnabled: toggleDealersSave,
  onResult: onResultDealersSave,
  enabled: enabledDealersSave,
  onError: onErrorDealersSave
} = Dealers.useStaticSave(dealers, { defaultEnabled: false })
const { loading: loadingUsers, result: resultUsers } = Users.useGetMany()
const { loading: loadingBusiness_sectors, result: resultBusiness_sectors } =
  Business_sectors.useGetMany()
// const  loadingAll= ref(false);
const loadingAll = computed!(() => loadingUsers.value || loadingBusiness_sectors.value)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'dealers_list' })
}
onErrorDealersSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultDealersSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'dealers_list' })
  else {
    dealersForm.value?.clear()
    enabledDealersSave.value = false
    Object.assign(dealers, new Dealers(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateDealersForm() {
  const valid = await dealersForm.value?.validate()
  if (valid) {
    toggleDealersSave()
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
          ref="dealersForm"
          :state="dealers"
          :validations="Dealers.validations[action]"
          :feedbacks="Dealers.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="dealers.contact"
                  path="contact"
                  label="Contacto"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="text"
                  v-model="dealers.company"
                  path="company"
                  label="Compañía"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="text"
                  v-model="dealers.cif"
                  path="cif"
                  label="CIF"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="email"
                  v-model="dealers.company_email"
                  path="company_email"
                  label="Correo de la compañía"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="text"
                  v-model="dealers.phone"
                  path="phone"
                  label="Teléfono"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="text"
                  v-model="dealers.web_page"
                  path="web_page"
                  label="Página web"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="col-span-4">
                <REditor v-model="dealers.address" path="address" label="Dirección" />
              </div>
              <div class="grid-input">
                <RSelect
                  v-model="dealers.business_sector_id"
                  id-key="id"
                  :required-mark="true"
                  ref="selectId"
                  :loading-data="loadingBusiness_sectors"
                  :loading="loadingBusiness_sectors"
                  text-key="name"
                  :allowClear="true"
                  showFilter
                  :items="resultBusiness_sectors?.data"
                  path="business_sector_id"
                  label="Sectores de negocios"
                  @keyup.enter="validateDealersForm"
                />
              </div>
              <div class="grid-input">
                <RSelect
                  v-model="dealers.user_id"
                  id-key="id"
                  :required-mark="true"
                  ref="selectId"
                  :loading-data="loadingUsers"
                  :loading="loadingUsers"
                  text-key="name"
                  :allowClear="true"
                  showFilter
                  :items="resultUsers?.data"
                  path="user_id"
                  label="Usuarios"
                  @keyup.enter="validateDealersForm"
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
                  :loading="loadingDealersSave"
                  @click="validateDealersForm"
                >
                  {{ textButon }}
                  Dealers
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
