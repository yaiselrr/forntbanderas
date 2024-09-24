<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Products_attribute from "~m/manage/products_attribute/entities/products_attribute.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import RSelect from "~co/components/form/src/select/RSelect.vue"
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
const products_attribute = reactive(new Products_attribute(model.value))
const products_attributeForm = ref()
const andNew = ref(false)
const {loading: loadingAttributes, result: resultAttributes} = Attributes.useGetMany()
const {loading: loadingProducts, result: resultProducts} = Products.useGetMany()

const {
  loading: loadingProducts_attributeSave,
  toggleEnabled: toggleProducts_attributeSave,
  onResult: onResultProducts_attributeSave,
  enabled: enabledProducts_attributeSave,
  onError: onErrorProducts_attributeSave
} = Products_attribute.useStaticSave(products_attribute, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingAttributes.value || loadingProducts.value);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'products_attribute_list'})
}
onErrorProducts_attributeSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultProducts_attributeSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'products_attribute_list'})
  else{
    products_attributeForm.value?.clear()
    enabledProducts_attributeSave.value=false
    Object.assign(products_attribute,new Products_attribute(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateProducts_attributeForm() {
  const valid = await products_attributeForm.value?.validate()
  if (valid) {
    toggleProducts_attributeSave()
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
          <RForm ref="products_attributeForm" :state="products_attribute" :validations="Products_attribute.validations[action]" :feedbacks="Products_attribute.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RSelect
                      v-model="products_attribute.product_id"
                      id-key="id"
                      :required-mark="true"
                      path="product_id"
                      ref="selectId"
                      :loading-data="loadingProducts"
                      :loading="loadingProducts"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultProducts?.data"
                      label="Products"
                      @keyup.enter="validateProducts_attributeForm"

                  />
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="products_attribute.attribute_id"
                      id-key="id"
                      :required-mark="true"
                      path="attribute_id"
                      ref="selectId"
                      :loading-data="loadingAttributes"
                      :loading="loadingAttributes"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultAttributes?.data"
                      label="Attributes"
                      @keyup.enter="validateProducts_attributeForm"

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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingProducts_attributeSave"
                         @click="validateProducts_attributeForm"> {{ textButon }}
                  Products_attribute
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
