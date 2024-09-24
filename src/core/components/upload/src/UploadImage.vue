<script lang="ts" setup>
import {useVModels} from '@vueuse/core'
import {useUploadImages} from '~/global/hooks/component/upload/useUploadImages'
import {pt} from '~h/types/propTypes'
import ImageItem from './ImageItem.vue'

const props = defineProps({
  defaultImages: pt.oneOfType([String, pt.arrayOf(String)]),
  showPopoverRemove: pt.bool.def(false),
  loadingRemove: pt.bool.def(false),
})

const emit = defineEmits(['changeImgFile', 'changeImageFiles', 'remove'])
const {defaultImages} = toRefs(props)

const {
  changeImageFile,
  images,
  clear,
  inputFile,
  imageFile: imgFile,
  imageFiles: imgFiles,
  openReader,
  remove: removeImg,
  loadImages,
} = useUploadImages({defaultImages: defaultImages?.value as any})

function remove(i) {
  if (props.showPopoverRemove) {
    emit('remove', () => removeImg(i))
  } else {
    removeImg(i)
  }
}

watch(imgFile, (val) => {
  emit('changeImgFile', val)
})

watch(imgFiles, (val) => {
  emit('changeImageFiles', val)
})

defineExpose({
  clear,
  load: loadImages,
})
</script>
<template>
  <div
      v-if="!images.length"
      class="cursor-pointer relative mt-1 flex justify-center px-6 pt-5 pb-6 border-2 group-hover:border-primary-400 border-gray-300 border-dashed rounded-md"
      @click="openReader"
  >
    <!-- accept=".png,.jpg,.jpeg" -->
    <div class="space-y-1 text-center">
      <svg
          class="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
      >
        <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
      <div class="flex text-sm text-gray-600 justify-center">
        <label for="file-upload" class="!outline-none relative bg-white rounded-md font-bold">
          <span class="text-primary-600">Subir una imagen</span>
          <input
              id="upload-picture"
              ref="inputFile"
              class="hidden absolute sr-only"
              type="file"
              accept="image/*"
              @change="changeImageFile"
          />
        </label>
      </div>
      <p class="text-xs text-gray-500"> PNG, JPG, GIF up to 5MB </p>
    </div>
  </div>
  <div
      v-else
      class="border relative flex !rounded-2xl justify-center p-2 !max-w-230px !max-h-150px"
  >
    <ImageItem :id="0" :withPopover="showPopoverRemove" :img="images[0]" @remove="remove"/>
  </div>
</template>
<style lang="scss" scoped></style>
