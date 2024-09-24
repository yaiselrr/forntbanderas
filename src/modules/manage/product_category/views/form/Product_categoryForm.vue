<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Product_category from "~m/manage/product_category/entities/product_category.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import RDatePicker from "~co/components/form/src/datePicker/RDatePicker.vue"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import Categories from "~m/masters/categories/entities/categories.model"
import Products from "~m/manage/products/entities/products.model"

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
const product_category = reactive(new Product_category(model.value))
const product_categoryForm = ref()
const andNew = ref(false)
const {loading: loadingCategories, result: resultCategories} = Categories.useGetMany()
const {loading: loadingProducts, result: resultProducts} = Products.useGetMany()

const {
  loading: loadingProduct_categorySave,
  toggleEnabled: toggleProduct_categorySave,
  onResult: onResultProduct_categorySave,
  enabled: enabledProduct_categorySave,
  onError: onErrorProduct_categorySave
} = Product_category.useStaticSave(product_category, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingCategories.value || loadingProducts.value);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'product_category_list'})
}
onErrorProduct_categorySave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultProduct_categorySave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'product_category_list'})
  else{
    product_categoryForm.value?.clear()
    enabledProduct_categorySave.value=false
    Object.assign(product_category,new Product_category(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateProduct_categoryForm() {
  const valid = await product_categoryForm.value?.validate()
  if (valid) {
    toggleProduct_categorySave()
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
          <RForm ref="product_categoryForm" :state="product_category" :validations="Product_category.validations[action]" :feedbacks="Product_category.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RSelect
                      v-model="product_category.product_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingProducts"
                      :loading="loadingProducts"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultProducts?.data"
                      label="Products"
                      @keyup.enter="validateProduct_categoryForm"

                  />
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="product_category.category_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingCategories"
                      :loading="loadingCategories"
                      text-key="description"
                      :allowClear="true"
                      showFilter
                      :items="resultCategories?.data"
                      label="Categories"
                      @keyup.enter="validateProduct_categoryForm"

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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingProduct_categorySave"
                         @click="validateProduct_categoryForm"> {{ textButon }}
                  Product_category
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
