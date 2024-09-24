<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Products from '~m/manage/products/entities/products.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import { RInput } from '~co/components/form'
import REditor from '~co/components/form/src/editor/REditor.vue'
import { ref, onMounted } from 'vue'
import RSelect from '~co/components/form/src/select/RSelect.vue'
import Categories from '~m/masters/categories/entities/categories.model'
import { Modal } from 'ant-design-vue'
import CategoriesForm from '~m/masters/categories/views/form/CategoriesForm.vue'

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
const products = reactive(new Products(model.value))
const productsForm = ref()
const andNew = ref(false)
const {
  loading: loadingCategories,
  result: resultCategories,
  onError,
  onResult,
  refetch: refetchCategoriesList
} = Categories.useGetMany({ relations: 'all' })

const selected = ref(null)

const {
  loading: loadingProductsSave,
  toggleEnabled: toggleProductsSave,
  onResult: onResultProductsSave,
  enabled: enabledProductsSave,
  onError: onErrorProductsSave
} = Products.useStaticSave(products, { defaultEnabled: false })
// const loadingAll = ref(false)
const loadingAll = computed!(() => loadingCategories.value)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'products_list' })
}
const beforeUpload = (file) => {
  return false
}
onErrorProductsSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultProductsSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'products_list' })
  else {
    productsForm.value?.clear()
    enabledProductsSave.value = false
    Object.assign(products, new Products(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateProductsForm() {
  products.enabled = checked.value
  const valid = await productsForm.value?.validate()
  if (valid) {
    toggleProductsSave()
  }
}

onMounted(() => {})

const checked = ref<boolean>(true)

const openModal = ref(false)
const showModal = (refresh = false) => {
  openModal.value = !openModal.value
  if (refresh) {
    Modal.destroyAll()
    refetchCategoriesList()
  }
}
const updateElement = (record) => {
  selected.value = record
  showModal()
}
const createElmenent = () => {
  selected.value = null
  showModal()
}
const reloadCategories = () => {
  console.log('reload')
  refetchCategoriesList()
}
const closeModal = (refresh = false) => {
  selected.value = null
  showModal(refresh)
}
</script>
<template>
  <a-modal
    v-model:open="openModal"
    :footer="null"
    :destroy-on-close="true"
    @cancel="selected = null"
    wrap-class-name="modal-form"
    width="55%"
  >
    <template #closeIcon>
      <div class="r-close-icon hoverable-close" />
    </template>
    <template #title>
      <div class="flex">
        <div
          :class="selected ? 'i-heroicons:pencil-square' : 'i-heroicons:plus-20-solid'"
          class="w-1em h-1em p-3.5 mr-2"
        ></div>
        <h1>{{ selected ? 'Actualizar Categorias' : 'Crear Categorias' }}</h1>
      </div>
    </template>
    <categories-form
      :modal="true"
      v-model="selected"
      :action="selected ? 'update' : 'create'"
      @closeModal="closeModal"
      @reload="reloadCategories"
      :show-loading="true"
    >
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </categories-form>
  </a-modal>
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
          ref="productsForm"
          :state="products"
          :validations="Products.validations[action]"
          :feedbacks="Products.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="products.code"
                  path="code"
                  label="Código"
                  @keyup.enter="validateProductsForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="products.name"
                  path="name"
                  label="Titulo del producto"
                  @keyup.enter="validateProductsForm"
                />
              </div>
              <div class="grid-input">
                <RSelect
                  v-model="products.category_id"
                  id-key="id"
                  :required-mark="true"
                  ref="selectId"
                  :loading-data="loadingCategories"
                  :loading="loadingCategories"
                  text-key="name"
                  :allowClear="true"
                  showFilter
                  :items="resultCategories?.data"
                  path="category_id"
                  label="Categoría"
                  @keyup.enter="validateProductsForm"
                />
              </div>
              <RButton class="mr-3" shadow @click="createElmenent" style="margin-top: 29px;">
                <span class="i-heroicons:plus-16-solid text-lg mr-1 mb-1"></span>
              </RButton>
            </div>
          </div>
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <!-- <div class="col-span-4">
              <REditor
                v-model="products.description"
                path="conditions"
                label="Descripción"
                @keyup.enter="validateProductsForm"
              />
            </div> -->
            <a-form-item label="Producto habilitado" v-if="checked">
              <a-switch v-model:checked="checked" />
            </a-form-item>
            <a-form-item label="Producto inhabilitado" v-else>
              <a-switch v-model:checked="checked" />
            </a-form-item>
          </div>

          <div class="r-footer-button-form">
            <RButton
              class="ml-5 mb-5"
              shadow
              color="primary"
              :loading="loadingProductsSave"
              @click="validateProductsForm"
            >
              {{ textButon }}
              Productos
            </RButton>
          </div>
        </RForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
