<script setup lang="ts">
import Products from "~m/manage/products/entities/products.model"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import ProductStep from "~m/manage/products/views/form/ProductSteps.vue"
import WizardProduct from "~m/manage/products/views/form/WizardProduct.vue"

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
const products = reactive(new Products(model.value))
const productsForm = ref()
const andNew = ref(false)

const {
  loading: loadingProductsSave,
  toggleEnabled: toggleProductsSave,
  onResult: onResultProductsSave,
  enabled: enabledProductsSave,
  onError: onErrorProductsSave
} = Products.useStaticSave(products, {defaultEnabled: false})
const  loadingAll= computed!(()=>false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'products_list'})
}
onErrorProductsSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultProductsSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'products_list'})
  else{
    productsForm.value?.clear()
    enabledProductsSave.value=false
    Object.assign(products,new Products(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateProductsForm() {
  const valid = await productsForm.value?.validate()
  if (valid) {
    toggleProductsSave()
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
        <div class="shadow overflow-hidden sm:rounded-md m-10">                  
          <!-- <ProductStep/>           -->
          <WizardProduct/>          
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
