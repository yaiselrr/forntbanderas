<script lang="ts" setup>
const props = defineProps({
  iconSize: {type: String, default: '1.7em'},
})
</script>
<template>
  <div class="w-fit-content h-fit-content rounded-full flex-center bg-opacity-10 bg-rose-500">
    <div
        :style="{ 'font-size': iconSize }"
        class="i-heroicons:exclamation-circle dark:(text-rose-600 text-opacity-80) text-rose-500"
    />
  </div>
</template>
<style lang="scss" scoped></style>
