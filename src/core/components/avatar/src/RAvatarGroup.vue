<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import AppAvatar from './RAvatar.vue'

const props = defineProps({
  images: pt.arrayOf(pt.string).def([]),
  max: pt.oneOfType([pt.string, pt.number]).def(8),
  float: pt.bool.def(false),
  size: pt.oneOfType([pt.string, pt.number]).def(40),
})

const {images, max} = toRefs(props)

const showImages = computed(() => {
  return images.value.slice(0, Number(max.value))
})

const excedent = computed(() => {
  return images.value.length - showImages.value?.length
})
</script>
<template>
  <div
      :class="{ 'float flex-wrap': float }"
      class="app-avatar-group m-2 flex -space-x-1 overflow-hidden"
  >
    <AppAvatar
        v-for="(img, i) in showImages"
        :key="i"
        class="transform transition-all duration-200 border-2 border-white dark:border-slate-700"
        :class="{ '!bg-white': !float }"
        w:first="!ml-0"
        :size="size"
        w:hover="-translate-x-2.5"
        :img="img"
        :scale="float"
        :excedent="i == showImages.length - 1 ? excedent : 0"
    />
  </div>
</template>
<style lang="scss" scoped>
.app-avatar-group {
  padding-left: 18px;

  .app-avatar-container {
    margin-left: 0px;
    position: relative;
  }

  &.float .app-avatar-container {
    transform: none !important;
    border: none;
  }

  &:not(.float) .app-avatar-container {
    margin-left: -18px;
    z-index: 2;
  }
}
</style>
