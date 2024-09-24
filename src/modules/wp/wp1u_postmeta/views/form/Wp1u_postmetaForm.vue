<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Wp1u_postmeta from "~m/wp/wp1u_postmeta/entities/wp1u_postmeta.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
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
const wp1u_postmeta = reactive(new Wp1u_postmeta(model.value))
const wp1u_postmetaForm = ref()
const andNew = ref(false)

const {
  loading: loadingWp1u_postmetaSave,
  toggleEnabled: toggleWp1u_postmetaSave,
  onResult: onResultWp1u_postmetaSave,
  enabled: enabledWp1u_postmetaSave,
  onError: onErrorWp1u_postmetaSave
} = Wp1u_postmeta.useStaticSave(wp1u_postmeta, {defaultEnabled: false})
const  loadingAll= ref(false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'wp1u_postmeta_list'})
}
onErrorWp1u_postmetaSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultWp1u_postmetaSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'wp1u_postmeta_list'})
  else{
    wp1u_postmetaForm.value?.clear()
    enabledWp1u_postmetaSave.value=false
    Object.assign(wp1u_postmeta,new Wp1u_postmeta(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateWp1u_postmetaForm() {
  const valid = await wp1u_postmetaForm.value?.validate()
  if (valid) {
    toggleWp1u_postmetaSave()
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
          <RForm ref="wp1u_postmetaForm" :state="wp1u_postmeta" :validations="Wp1u_postmeta.validations[action]" :feedbacks="Wp1u_postmeta.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="wp1u_postmeta.post_id" path="post_id" label="Post_id"
                          @keyup.enter="validateWp1u_postmetaForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_postmeta.meta_key" path="meta_key" label="Meta_key"
                          @keyup.enter="validateWp1u_postmetaForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_postmeta.meta_value" path="meta_value" label="Meta_value"/>
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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingWp1u_postmetaSave"
                         @click="validateWp1u_postmetaForm"> {{ textButon }}
                  Wp1u_postmeta
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
