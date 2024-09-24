<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  title: pt.string,
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>
<template>
  <div class="bg-gradient-to-r from-primary-600 to-primary-500">
    <div class="flex items-center p-5">
      <h2 class="text-gray-100 w-full text-lg font-bold m-0 h-fit-content"> {{ title }} </h2>

      <div
          style="font-size: 1.3em"
          class="i-heroicons:x-mark text-gray-300 hoverable-close hover:text-white"
          w:dark="text-white"
          @click="close"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
