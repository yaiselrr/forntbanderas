<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const keys = Object.keys(breakpoints)
const breakpoint = computed!(() => {
  const array = []
  Object.values(breakpoints).forEach((e, index) => {
    if (e.value) array.push(keys[index])
  })
  return array.slice(-1)[0]
})
const positions = ref(['bottomLeft', 'bottomRight', 'topRight', 'topLeft'])

function changePosition() {
  positions.value.push(positions.value.shift()!)
}

const positionClass = computed!(() => {
  switch (positions.value[0]) {
    case 'bottomLeft':
      return 'left-1px bottom-1px'
    case 'topLeft':
      return 'left-1px top-1px'
    case 'bottomRight':
      return 'right-1px bottom-1px'
    default:
      return 'right-1px top-1px'
  }
})
</script>
<template>
  <div
      class="fixed px-2 py-0 font-sans text-white bg-black rounded-sm cursor-pointer font-14px z-500"
      :class="positionClass"
      @click="changePosition"
  >
    {{ breakpoint }}
  </div>
</template>
<style scoped>

</style>
