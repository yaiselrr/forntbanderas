<script setup lang="ts">
import {useVModel} from '@vueuse/core'
import {pt} from '~h/types/propTypes'
import {RInput} from "~co/components/form"
import {useFileUploadInput} from './hooks/useFileUploadInput'
import ShowFileItem from './ShowFileItem.vue'
import UploadIcon from './UploadIcon.vue'
import {RButton} from "~co/components/buttons"

const props = defineProps({
  description: pt.string.def('Drop file(s) here'),
  urlUpload: pt.bool.def(false),
  maxSizeMb: pt.oneOfType([Number, String]).def('25'),
  showImagesPreview: pt.bool.def(false),
  showFileTypeIcon: pt.bool.def(true),
  showPopoverInfo: pt.bool.def(true),
  fileTypeIconSize: pt.oneOf(['sm', 'md', 'lg']),
  accept: pt.string.def('*'),
  numberFiles: pt.number.def(10),
  filesDescription: pt.string,
  gridContainerClass: pt.string,
  files: pt.arrayOf(pt.any).def([]),
})

const {accept, numberFiles, maxSizeMb} = toRefs(props)
const files = useVModel(props, 'files')

const {
  dropZoneRef,
  isOverDocument,
  isOverDropZone,
  onChangeFiles,
  inputFile,
  openReader,
  removeFile,
  removeAll,
  countLeft,
} = useFileUploadInput(files, accept, numberFiles, maxSizeMb)

defineExpose({
  removeFile,
  removeAll,
})
</script>

<template>
  <div
      ref="dropZoneRef"
      class="app-file-upload border bg-slate-100 border-slate-300 relative p-5 border-dashed !border-2 round"
      w:dark="border-slate-700 bg-slate-900/50"
      :class="{ '!border-primary-500': isOverDropZone }"
  >
    <div class="flex-center">
      <div class="flex flex-col justify-center w-full items-center">
        <UploadIcon v-if="!files.length" class="!w-100px !bg-transparent" :animated="false" gray/>

        <div
            v-else
            class="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
            :class="[gridContainerClass]"
        >
          <ShowFileItem
              v-for="(file, i) in files"
              :key="`${file.name}${i}`"
              :file="file"
              :showFileTypeIcon="showFileTypeIcon"
              :showPopoverInfo="showPopoverInfo"
              :fileTypeIconSize="fileTypeIconSize"
              :showImagePreview="showImagesPreview"
              @remove="() => removeFile(i)"
          />
        </div>

        <div v-if="countLeft > 0" class="pt-7 flex-center flex-col">
          <span class="font-bold" @click="openReader">
            {{ description }} or <a class="text-primary-500 dark:text-primary-400">Browse</a>
          </span>
          <span v-if="filesDescription" class="text-muted font-bold mt-2">
            {{ filesDescription }} (max {{ numberFiles }} files)
          </span>
          <span v-else class="text-muted font-bold mt-2">
            Max. File Size: {{ maxSizeMb }} MB (max {{ numberFiles }} files)
          </span>
        </div>
      </div>
    </div>

    <div
        v-if="isOverDocument"
        class="absolute w-full h-full top-0 left-0 round bg-white/10 dark:bg-slate-900/10 backdrop-blur-md backdrop-filter animated animate-fade-in animate-duration-200"
    >
      <div class="h-full p-4">
        <div class="h-full w-full round flex-center flex-col">
          <UploadIcon
              class="max-h-120px !w-100px !bg-transparent -mt-4 animated animate-zoom-in animate-duration-300"
          />
          <h1
              class="animated animate-zoom-in animate-duration-300 font-bold transform -translate-y-3"
          >
            Drop your file(s) here
          </h1>
        </div>
      </div>
    </div>

    <input
        id="upload-picture"
        ref="inputFile"
        class="hidden absolute sr-only"
        type="file"
        :accept="accept"
        :multiple="numberFiles > 1"
        @change="onChangeFiles"
    />
  </div>

  <div v-if="urlUpload" class="mt-5">
    <span class="font-bold">Or select from URL</span>
    <div class="mt-2 flex flex-row items-center space-x-4">
      <RInput simple placeholder="https://example.com/image.png" class="py-2"/>
      <RButton color="neutro"> Upload</RButton>
    </div>
  </div>
</template>
<style lang="scss"></style>
