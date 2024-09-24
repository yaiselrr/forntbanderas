<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Settings from '~m/settings/settings/entities/settings.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import { RInput } from '~co/components/form'
import RDatePicker from '~co/components/form/src/datePicker/RDatePicker.vue'
import RSelect from '~co/components/form/src/select/RSelect.vue'
import REditor from '~co/components/form/src/editor/REditor.vue'

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
const settings = reactive(new Settings(model.value))
const settingsForm = ref()
const andNew = ref(false)

const {
  loading: loadingSettingsSave,
  toggleEnabled: toggleSettingsSave,
  onResult: onResultSettingsSave,
  enabled: enabledSettingsSave,
  onError: onErrorSettingsSave
} = Settings.useStaticSave(settings, { defaultEnabled: false })
const loadingAll = ref(false)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'settings_list' })
}
onErrorSettingsSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultSettingsSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'settings_list' })
  else {
    settingsForm.value?.clear()
    enabledSettingsSave.value = false
    Object.assign(settings, new Settings(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateSettingsForm() {
  const valid = await settingsForm.value?.validate()
  if (valid) {
    toggleSettingsSave()
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
          ref="settingsForm"
          :state="settings"
          :validations="Settings.validations[action]"
          :feedbacks="Settings.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="settings.settings"
                  path="settings"
                  label="Configuración"
                  @keyup.enter="validateSettingsForm"
                />
              </div>
              <div class="col-span-4">
                <REditor
                  :requiredMark="true"
                  v-model="settings.settings_value"
                  path="settings_value"
                  label="Valores de las configuraciones"
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
                  :loading="loadingSettingsSave"
                  @click="validateSettingsForm"
                >
                  {{ textButon }}
                  configuraciones
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
