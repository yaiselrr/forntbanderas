<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Categories from "~m/masters/categories/entities/categories.model"
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
const categories = reactive(new Categories(model.value))
const categoriesForm = ref()
const andNew = ref(false)
const {loading: loadingCategories, result: resultCategories} = Categories.useGetMany()

const {
  loading: loadingCategoriesSave,
  toggleEnabled: toggleCategoriesSave,
  onResult: onResultCategoriesSave,
  enabled: enabledCategoriesSave,
  onError: onErrorCategoriesSave
} = Categories.useStaticSave(categories, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingCategories.value);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'categories_list'})
}
onErrorCategoriesSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultCategoriesSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'categories_list'})
  else{
    categoriesForm.value?.clear()
    enabledCategoriesSave.value=false
    Object.assign(categories,new Categories(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateCategoriesForm() {
  const valid = await categoriesForm.value?.validate()
  if (valid) {
    toggleCategoriesSave()
    emit("reload")
  }
}
const beforeUpload = (file) => {
  return false
}

const handleImageChange = (info) => {
  let reader = new FileReader()
  reader.onload = function (e) {
    document.getElementById('avatar').setAttribute('src', e.target.result as any)
  }
  reader.readAsDataURL(info.file)
  categories.image = info.file
  categories.category_image = info.file
  categories.isFormData = true
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
          <RForm ref="categoriesForm" :state="categories" :validations="Categories.validations[action]" :feedbacks="Categories.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <div class="flex items-start justify-center">
                    <div class="grid grid-col-1">
                      <a-upload
                          name="image"
                          listType="picture-card"
                          style="display: inline-table"
                          :showUploadList="false"
                          :beforeUpload="beforeUpload"
                          @change="handleImageChange"
                      >
                        <img
                            id="avatar"
                            class="h-full w-full"
                            v-if="categories.category_image"
                            :src="categories.category_image"
                            alt="Image"
                        />
                        <div v-else class="flex flex-col items-center justify-center">
                          <div class="i-heroicons:plus-circle insert-field-icon mr-2" />
                          <div class="ant-upload-text mt-3">Subir imagen</div>
                        </div>
                      </a-upload>
                    </div>
                  </div>
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="categories.category_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingCategories"
                      :loading="loadingCategories"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultCategories?.data"
                      label="Categoría padre"
                      @keyup.enter="validateCategoriesForm"

                  />
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="categories.name" path="name" label="Nombre"
                          @keyup.enter="validateCategoriesForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="categories.slug" path="slug" label="Slug"
                          @keyup.enter="validateCategoriesForm"/>
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="categories.description" path="description" label="Descripción"/>
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
                    nuevo <span id="andNew-description" class="ml-1 text-muted">Se insertará un elemento y reiniciará el formuario</span></label>
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton class=" ml-5" shadow color="primary" :loading="loadingCategoriesSave"
                         @click="validateCategoriesForm"> {{ textButon }}
                  categorías
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
