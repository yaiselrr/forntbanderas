<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Product_type from "~m/masters/product_type/entities/product_type.model"
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
const product_type = reactive(new Product_type(model.value))
const product_typeForm = ref()
const andNew = ref(false)

const {
  loading: loadingProduct_typeSave,
  toggleEnabled: toggleProduct_typeSave,
  onResult: onResultProduct_typeSave,
  enabled: enabledProduct_typeSave,
  onError: onErrorProduct_typeSave
} = Product_type.useStaticSave(product_type, {defaultEnabled: false})
const  loadingAll= ref(false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'product_type_list'})
}
onErrorProduct_typeSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultProduct_typeSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'product_type_list'})
  else{
    product_typeForm.value?.clear()
    enabledProduct_typeSave.value=false
    Object.assign(product_type,new Product_type(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateProduct_typeForm() {
  const valid = await product_typeForm.value?.validate()
  if (valid) {
    toggleProduct_typeSave()
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
          <RForm ref="product_typeForm" :state="product_type" :validations="Product_type.validations[action]" :feedbacks="Product_type.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="product_type.name" path="name" label="Nombre"
                          @keyup.enter="validateProduct_typeForm"/>
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="product_type.description" path="description" label="Descripción"/>
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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingProduct_typeSave"
                         @click="validateProduct_typeForm"> {{ textButon }}
                  tipo de productos
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
