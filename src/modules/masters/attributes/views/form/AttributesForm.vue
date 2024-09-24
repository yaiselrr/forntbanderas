<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Attributes from '~m/masters/attributes/entities/attributes.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import {pt} from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import {openNotificationWithIcon} from '~h/utils/utils'
import {useRouter} from 'vue-router'
import {RInput} from '~co/components/form'
import JsonTree from '~co/components/jsonTree/src/JsonTree.vue'
import RAttribute from '~co/components/attribute/src/RAttribute.vue'

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
const attributes = reactive(new Attributes(model.value))
const attributesForm = ref()
const andNew = ref(false)
let fields = reactive(attributes.strcuture?JSON.parse(attributes.strcuture):[])

const {
  loading: loadingAttributesSave,
  toggleEnabled: toggleBlocksSave,
  onResult: onResultBlocksSave,
  enabled: enabledBlocksSave,
  onError: onErrorBlocksSave
} = Attributes.useStaticSave(attributes, {defaultEnabled: false})

const loadingAll = ref(false)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({name: 'blocks_list'})
}

onErrorBlocksSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultBlocksSave((response) => {
  openNotificationWithIcon('success', 'Acción  ' + textButon + '', 'Acción ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({name: 'blocks_list'})
  else {
    attributesForm.value?.clear()
    enabledBlocksSave.value = false
    Object.assign(attributes, new Attributes(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateAttributesForm() {
  attributes.strcuture = JSON.stringify(fields)
  const valid = await attributesForm.value?.validate()
  if (valid) {
    toggleBlocksSave()
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
            ref="attributesForm"
            :state="attributes"
            :validations="Attributes.validations[action]"
            :feedbacks="Attributes.feedbacks[action]"
            :loading="true"
        >
          <div class="grid grid-cols-2">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class=" gap-4">
                <div class="grid-input">
                  <RInput
                      type="text"
                      :requiredMark="true"
                      v-model="attributes.name"
                      path="name"
                      label="Nombre"
                      @keyup.enter="validateAttributesForm"
                  />
                </div>
                <div class="grid-input">
                  <RInput
                      type="text"
                      :requiredMark="true"
                      v-model="attributes.type"
                      path="type"
                      label="Tipo"
                      @keyup.enter="validateAttributesForm"
                  />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <RAttribute :data="fields"/>
                </div>
              </div>
            </div>
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="gap-4">
                <div class="col-span-2">
                  <JsonTree
                      ref="jsonTree"
                      v-model:fields="fields"
                      label="Esquema de atributos"
                      class="w-full"
                  />
                </div>

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
                    >Se insertará un elemento y reiniciará el formulario</span
                    ></label
                  >
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton
                    class="ml-5"
                    shadow
                    color="primary"
                    :loading="loadingAttributesSave"
                    @click="validateAttributesForm"
                >
                  {{ textButon }}
                  atributos
                </RButton>
                <RButton class="ml-5" shadow color="primary" @click="cancel"> Cancelar</RButton>
              </div>
            </div>
          </div>
        </RForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
