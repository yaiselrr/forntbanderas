<script lang="ts" setup>
import {readImageAsUrl} from "~h/image/images"
import {pt} from '~h/types/propTypes'
import {FileType} from "~co/components/utils"
import {useFileMeta} from './hooks/useFileMeta'
import ImagePreview from './ImagePreview.vue'
import {RPopover} from "~co/components/popover"

const props = defineProps({
  file: pt.object,
  showFileTypeIcon: pt.bool.def(true),
  showPopoverInfo: pt.bool.def(true),
  showImagePreview: pt.bool.def(false),
  fileTypeIconSize: pt.oneOf(['sm', 'md', 'lg']),
})

const image = ref('')

const {fileExt, fileSizeStr, lastModified, metatype, name, size, type} = useFileMeta(props.file)

const showImage = computed!(() => {
  return props.showImagePreview && metatype == 'image'
})

onMounted!(() => {
  if (showImage.value) {
    readImageAsUrl(props.file, (data) => {
      if (data.result) {
        image.value = data.result
      }
    })
  }
})

const popoverAttrs = computed!(() => {
  if (props.showPopoverInfo) {
    return {}
  } else {
    return {visible: false}
  }
})
</script>
<template>
  <div
      w:dark="bg-slate-800"
      class="file-item flex flex-row overflow-hidden group bg-slate-200 relative round animated !animate-duration-200"
      :class="{
      'animate-zoom-in hover:bg-slate-300 dark:hover:bg-slate-700': !showImage,
      'animate-fade-in': showImage,
    }"
  >
    <ImagePreview
        v-if="showImage"
        :src="image"
        :name="name"
        :file-size="fileSizeStr"
        @remove="$emit('remove')"
    />

    <RPopover v-else v-bind="popoverAttrs" overlayClassName="max-w-300px" :title="null">
      <template #content>
        <div class="flex popover-file-icon">
          <FileType :type="metatype" :extension="fileExt" size="md"/>
          <div class="flex flex-col truncate justify-start ml-3 min-w-300px">
            <h3 :title="name" class="mb-0 dark:text-white truncate font-bold mb-2">{{ name }}</h3>
            <small class="text-muted">
              <span class="font-bold">Size:</span> {{ fileSizeStr }}
            </small>
            <small class="text-muted"> <span class="font-bold">Type:</span> {{ type }} </small>
            <small class="text-muted">
              <span class="font-bold">Last modified:</span> {{ lastModified }}
            </small>
          </div>
        </div>
      </template>

      <div class="py-3 px-4 w-full flex">
        <button
            class="btn-circle absolute right-2 !p-0.5 opacity-0 group-hover:opacity-90 top-2"
            @click="$emit('remove')"
        >
          <div class="i-heroicons:x-mark "/>

        </button>
        <FileType
            v-if="showFileTypeIcon"
            :type="metatype"
            :extension="fileExt"
            :size="fileTypeIconSize"
        />
        <div class="flex flex-col truncate justify-start ml-3">
          <h3 class="truncate mb-0 text-sm font-bold">{{ name }}</h3>
          <small class="text-muted">{{ fileSizeStr }}</small>
        </div>
      </div>
    </RPopover>
  </div>
</template>
<style lang="scss">
.app-file-upload {
  .file-item {
    .btn-circle {
      @apply bg-black/60 p-1 cursor-pointer rounded-full flex items-center justify-center border-2 border-transparent transition-all duration-200 text-white text-xs;
      @apply hover:(border-white);
    }
  }
}

.popover-file-icon {
  .file-icon {
    &::before {
      @apply border-t-white border-r-white dark:(border-t-slate-800 border-r-slate-800) #{!important};
    }
  }
}
</style>
