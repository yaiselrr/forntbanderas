<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Message_blocks from '~m/settings/message_blocks/entities/message_blocks.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import { RInput } from '~co/components/form'
import REditor from '~co/components/form/src/editor/REditor.vue'
import { ref, onMounted } from 'vue'

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
const message_blocks = reactive(new Message_blocks(model.value))
const blocksForm = ref()
const andNew = ref(false)

const {
  loading: loadingMessage_blocksSave,
  toggleEnabled: toggleMessage_blocksSave,
  onResult: onResultMessage_blocksSave,
  enabled: enabledMessage_blocksSave,
  onError: onErrorMessage_blocksSave
} = Message_blocks.useStaticSave(message_blocks, { defaultEnabled: false })
const loadingAll = ref(false)

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'message_blocks_list' })
}
const beforeUpload = (file) => {
  return false
}
onErrorMessage_blocksSave((error) => {
  openNotificationWithIcon('error', 'Error en accion', 'Error en accion del elemento')
})
onResultMessage_blocksSave((response) => {
  openNotificationWithIcon('success', 'Accion  ' + textButon + '', 'Accion ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'message_blocks_list' })
  else {
    blocksForm.value?.clear()
    enabledMessage_blocksSave.value = false
    Object.assign(message_blocks, new Message_blocks(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

const handleImageChange = (info) => {
  let reader = new FileReader()
  reader.onload = function (e) {
    document.getElementById('avatar').setAttribute('src', e.target.result as any)
  }
  if (props.action === 'update') {
    reader.readAsDataURL(info.file)
    message_blocks.image = info.file
    message_blocks.block_image = info.file
    message_blocks.isFormData = true
  }
  if (props.action === 'create') {
    reader.readAsDataURL(info.file)
    message_blocks.image = info.file
    message_blocks.block_image = info.file
    message_blocks.isFormData = true
  }
}

async function validateMessage_blocksForm() {
  const valid = await blocksForm.value?.validate()
  if (valid) {
    toggleMessage_blocksSave()
  }
}

const value2 = ref<string>('mysite')
const value3 = ref<string>('Http://')
const value4 = ref<string>('.com')
let urlArray = ref([])
let urlArrayUpdate = ref([])

const addUrl = () => {
  if (props.action === 'update') {
    urlArrayUpdate.value.push({ url: `${value3.value}${value2.value}${value4.value}` })
    message_blocks.data = JSON.stringify(urlArrayUpdate.value)
    value2.value = ''
  }
  if (props.action === 'create') {
    urlArray.value.push({ url: `${value3.value}${value2.value}${value4.value}` })
    message_blocks.data = JSON.stringify(urlArray.value)
    value2.value = ''
  }
}

const deleteItemUrl = (item) => {
  if (props.action === 'update') {
    urlArrayUpdate.value = urlArrayUpdate.value.filter((i) => i.url !== item.url)
    message_blocks.data = JSON.stringify(urlArrayUpdate.value)
  }
  if (props.action === 'create') {
    urlArray.value = urlArray.value.filter((i) => i.url !== item.url)
  }
}

const deleteAll = () => {
  if (props.action === 'update') {
    urlArrayUpdate.value = []
    message_blocks.data = JSON.stringify(urlArrayUpdate.value)
  }
  if (props.action === 'create') {
    urlArray.value = []
  }
}

onMounted(() => {
  // if (props.action === 'update') {
  //   urlArrayUpdate.value = JSON.parse(message_blocks.data)
  // }
})
</script>
<template>
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
          ref="blocksForm"
          :state="message_blocks"
          :validations="Message_blocks.validations[action]"
          :feedbacks="Message_blocks.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-4 gap-4">
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="message_blocks.name"
                  path="name"
                  label="Nombre"
                  @keyup.enter="validateMessage_blocksForm"
                />
              </div>
              <div class="grid-input">
                <RInput
                  type="text"
                  :requiredMark="true"
                  v-model="message_blocks.color"
                  path="color"
                  label="Color fuente"
                  @keyup.enter="validateMessage_blocksForm"
                />
              </div>
              <div class="col-span-4">
                <REditor v-model="message_blocks.message_text" path="message_text" label="Texto de mensaje" />
              </div>

              <!-- <div class="col-span-4">
                <a-space direction="vertical" @keyup.enter="addUrl">
                  <a-input v-model:value="value2">
                    <template #addonBefore>
                      <a-select v-model:value="value3" style="width: 90px">
                        <a-select-option value="Http://">Http://</a-select-option>
                        <a-select-option value="Https://">Https://</a-select-option>
                      </a-select>
                    </template>
                    <template #addonAfter>
                      <a-select v-model:value="value4" style="width: 80px">
                        <a-select-option value=".com">.com</a-select-option>
                        <a-select-option value=".jp">.jp</a-select-option>
                        <a-select-option value=".cn">.cn</a-select-option>
                        <a-select-option value=".org">.org</a-select-option>
                      </a-select>
                    </template>
                  </a-input>
                </a-space>
              </div>

              <div class="col-span-4" v-if="urlArray.length > 0 && action === 'create'">
                <a-list size="small" bordered :data-source="urlArray">
                  <template #renderItem="{ item }">
                    <a-list-item
                      >{{ item.url }}
                      <RButton class="ml-5" shadow color="danger" :loading="loadingBlocksSave">
                        <div
                          class="i-heroicons:trash w-2em h-2em text-white-600 cursor-pointer"
                          @click="deleteItemUrl(item)"
                        ></div> </RButton
                    ></a-list-item>
                  </template>
                  <template #header>
                    <div>Lista de urls</div>
                  </template>
                  <template #footer>
                    <div>
                      <RButton
                        class="ml-5"
                        shadow
                        color="primary"
                        :loading="loadingBlocksSave"
                        @click="deleteAll"
                      >
                        <div
                          class="i-heroicons:trash w-2em h-2em text-white-600 cursor-pointer"
                          @click="deleteAll"
                        ></div>
                        Limpiar lista
                      </RButton>
                    </div>
                  </template>
                </a-list>
              </div>
              <div class="col-span-4" v-if="urlArrayUpdate.length > 0 && action === 'update'">
                <a-list size="small" bordered :data-source="urlArrayUpdate">
                  <template #renderItem="{ item }">
                    <a-list-item
                      >{{ item.url }}
                      <RButton class="ml-5" shadow color="danger" :loading="loadingBlocksSave">
                        <div
                          class="i-heroicons:trash w-2em h-2em text-white-600 cursor-pointer"
                          @click="deleteItemUrl(item)"
                        ></div> </RButton
                    ></a-list-item>
                  </template>
                  <template #header>
                    <div>Lista de urls</div>
                  </template>
                  <template #footer>
                    <div>
                      <RButton
                        class="ml-5"
                        shadow
                        color="primary"
                        :loading="loadingBlocksSave"
                        @click="deleteAll"
                      >
                        <div
                          class="i-heroicons:trash w-2em h-2em text-white-600 cursor-pointer"
                          @click="deleteAll"
                        ></div>
                        Limpiar lista
                      </RButton>
                    </div>
                  </template>
                </a-list>
              </div> -->

              <div class="col-span-4">
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
                      v-if="message_blocks.block_image"
                      :src="message_blocks.block_image"
                      alt="Image"
                    />
                    <div v-else class="flex items-center justify-center">
                      <div class="i-heroicons:plus-circle insert-field-icon mr-2" />
                      <div class="ant-upload-text">Subir imagen</div>
                    </div>
                  </a-upload>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6">
            <div class="r-footer-form">
              <div class="flex">
                <div v-if="action === 'create'" class="flex-none items-center">
                  <ACheckbox
                    v-model:checked="andNew"
                    aria-describedby="offers-description"
                    id="andNew"
                  />
                </div>
                <div
                  v-if="action === 'create'"
                  @click="andNew.value !== andNew.value"
                  class="flex text-sm absolute mx-[2rem] my-[4px]"
                >
                  <label
                    for="andNew"
                    class="font-bold text-gray-700 dark:text-slate-200 !cursor-pointer"
                    >Insertar y nuevo
                    <span id="andNew-description" class="ml-1 text-muted"
                      >Se insertara un elemento y reiniciara el formuario</span
                    ></label
                  >
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton
                  class="ml-5"
                  shadow
                  color="primary"
                  :loading="loadingMessage_blocksSave"
                  @click="validateMessage_blocksForm"
                >
                  {{ textButon }}
                  bloques de mensajes
                </RButton>
                <RButton class="ml-5" shadow color="primary" @click="cancel"> Cancelar </RButton>
              </div>
            </div>
          </div>
        </RForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
