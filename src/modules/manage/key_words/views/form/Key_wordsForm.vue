<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Key_words from '~m/manage/key_words/entities/key_words.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import { RInput } from '~co/components/form'
import RSelect from '~co/components/form/src/select/RSelect.vue'
import REditor from '~co/components/form/src/editor/REditor.vue'
import { ref, computed } from 'vue'

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
const key_words = reactive(new Key_words(model.value))
const key_wordsForm = ref()
const andNew = ref(false)
const { loading: loadingKey_words, result: resultKey_words } = Key_words.useGetMany()

const {
  loading: loadingKey_wordsSave,
  toggleEnabled: toggleKey_wordsSave,
  onResult: onResultKey_wordsSave,
  enabled: enabledKey_wordsSave,
  onError: onErrorKey_wordsSave
} = Key_words.useStaticSave(key_words, { defaultEnabled: false })
const loadingAll = computed!(() => loadingKey_words.value)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'key_words_list' })
}
onErrorKey_wordsSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultKey_wordsSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'key_words_list' })
  else {
    key_wordsForm.value?.clear()
    enabledKey_wordsSave.value = false
    Object.assign(key_words, new Key_words(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateKey_wordsForm() {
  const valid = await key_wordsForm.value?.validate()
  if (valid) {
    toggleKey_wordsSave()
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
          ref="key_wordsForm"
          :state="key_words"
          :validations="Key_words.validations[action]"
          :feedbacks="Key_words.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="key_words.name"
                  path="name"
                  label="Name"
                  @keyup.enter="validateKey_wordsForm"
                />
              </div>
              <div class="col-span-4">
                <REditor
                  :requiredMark="true"
                  v-model="key_words.description"
                  path="description"
                  label="Description"
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
                  :loading="loadingKey_wordsSave"
                  @click="validateKey_wordsForm"
                >
                  {{ textButon }}
                  Palabras claves
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
