<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Request_statuses from "~m/masters/request_statuses/entities/request_statuses.model"
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
const request_statuses = reactive(new Request_statuses(model.value))
const request_statusesForm = ref()
const andNew = ref(false)

const {
  loading: loadingRequest_statusesSave,
  toggleEnabled: toggleRequest_statusesSave,
  onResult: onResultRequest_statusesSave,
  enabled: enabledRequest_statusesSave,
  onError: onErrorRequest_statusesSave
} = Request_statuses.useStaticSave(request_statuses, {defaultEnabled: false})
const  loadingAll= ref(false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'request_statuses_list'})
}
onErrorRequest_statusesSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultRequest_statusesSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'request_statuses_list'})
  else{
    request_statusesForm.value?.clear()
    enabledRequest_statusesSave.value=false
    Object.assign(request_statuses,new Request_statuses(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateRequest_statusesForm() {
  const valid = await request_statusesForm.value?.validate()
  if (valid) {
    toggleRequest_statusesSave()
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
          <RForm ref="request_statusesForm" :state="request_statuses" :validations="Request_statuses.validations[action]" :feedbacks="Request_statuses.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="request_statuses.name" path="name" label="Nombre"
                          @keyup.enter="validateRequest_statusesForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="request_statuses.decription" path="decription" label="Descripción"/>
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
                    nuevo <span id="andNew-description" class="ml-1 text-muted">Se insertará un elemento y reiniciará el formulario</span></label>
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton class=" ml-5" shadow color="primary" :loading="loadingRequest_statusesSave"
                         @click="validateRequest_statusesForm"> {{ textButon }}
                  estado de solicitud
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
