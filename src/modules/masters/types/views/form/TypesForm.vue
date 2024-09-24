<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Types from "~m/masters/types/entities/types.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
import RDatePicker from "~co/components/form/src/datePicker/RDatePicker.vue"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import REditor from "~co/components/form/src/editor/REditor.vue"

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
const types = reactive(new Types(model.value))
const typesForm = ref()
const andNew = ref(false)

const {
  loading: loadingTypesSave,
  toggleEnabled: toggleTypesSave,
  onResult: onResultTypesSave,
  enabled: enabledTypesSave,
  onError: onErrorTypesSave
} = Types.useStaticSave(types, {defaultEnabled: false})
const  loadingAll= ref(false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'types_list'})
}
onErrorTypesSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultTypesSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'types_list'})
  else{
    typesForm.value?.clear()
    enabledTypesSave.value=false
    Object.assign(types,new Types(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateTypesForm() {
  const valid = await typesForm.value?.validate()
  if (valid) {
    toggleTypesSave()
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
          <RForm ref="typesForm" :state="types" :validations="Types.validations[action]" :feedbacks="Types.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="types.name" path="name" label="Name"
                          @keyup.enter="validateTypesForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="types.description" path="description" label="Description"/>
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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingTypesSave"
                         @click="validateTypesForm"> {{ textButon }}
                  Types
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
