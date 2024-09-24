<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  src: pt.string,
  name: pt.string,
  fileSize: pt.string,
})

const emit = defineEmits(['remove'])
</script>
<template>
  <div class="round overflow-hidden h-full w-full min-h-40 max-h-40 image-preview">
    <div class="w-full relative h-full flex">
      <img :src="src" class="mx-auto round object-contain" :alt="'image-preview-'+name"/>
    </div>
    <div
        w:dark="group-hover:bg-black/10"
        class="absolute top-0 left-0 w-full h-full group-hover:bg-black/7"
    ></div>
    <div
        w:dark="from-dark-900/50"
        class="absolute top-0 pb-15 pt-3 left-0 bg-gradient-to-b from-dark-900/30 to-white/0 w-full"
    >
      <div class="flex flex-row">
        <div class="flex flex-col truncate justify-start ml-3">
          <h3 class="text-white truncate text-sm mb-0 font-bold">{{ name }}</h3>
          <small class="text-white">{{ fileSize }}</small>
        </div>
        <div class="ml-auto mr-3">
          <button class="btn-circle opacity-0 group-hover:opacity-100" @click="$emit('remove')">
            <div class="i-heroicons:x-mark"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
