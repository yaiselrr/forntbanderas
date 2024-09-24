<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Products from "~m/manage/products/entities/products.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
import RDatePicker from "~co/components/form/src/datePicker/RDatePicker.vue"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import REditor from "~co/components/form/src/editor/REditor.vue"
import Brand from "~m/masters/brand/entities/brand.model"

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
const {loading: loadingBrand, result: resultBrand} = Brand.useGetMany()

const {
  loading: loadingProductsSave,
  toggleEnabled: toggleProductsSave,
  onResult: onResultProductsSave,
  enabled: enabledProductsSave,
  onError: onErrorProductsSave
} = Products.useStaticSave(products, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingBrand.value);

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
        <div class="shadow overflow-hidden sm:rounded-md">
          <RForm ref="productsForm" :state="products" :validations="Products.validations[action]" :feedbacks="Products.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">                
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="products.name" path="name" label="Name"
                          @keyup.enter="validateProductsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="products.code" path="code" label="Code"
                          @keyup.enter="validateProductsForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="products.summary" path="summary" label="Summary"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="products.description" path="description" label="Description"/>
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="products.brand_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingBrand"
                      :loading="loadingBrand"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultBrand?.data"
                      label="Brand"
                      @keyup.enter="validateProductsForm"

                  />
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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingProductsSave"
                         @click="validateProductsForm"> {{ textButon }}
                  Products
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
