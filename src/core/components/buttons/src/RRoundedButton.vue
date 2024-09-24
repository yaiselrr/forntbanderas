<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  size: pt.string.def('medium'),
})
const {size} = toRefs(props)

const buttonClass = computed!(() => {
  return {
    'w-8 h-8 max-w-8 min-w-8 min-h-8': size.value == 'medium',
    'w-6 h-6  max-w-6 min-w-6 min-h-6': size.value == 'small',
  }
})
</script>
<template>
  <div
      :class="buttonClass"
      class="relative flex items-center justify-center transition duration-100 rounded-full press surface2 rounded-button"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped></style>
