<script lang="ts" setup>
const props = defineProps({
  iconSize: {type: String, default: '1.7em'},
})
</script>
<template>
  <div class="w-fit-content h-fit-content bg-yellow-500 rounded-full flex-center bg-opacity-10">
    <div
        :style="{ 'font-size': iconSize }"
        class="i-heroicons:exclamation-circle dark:(text-yellow-400 text-opacity-80) text-yellow-500"
    />
  </div>
</template>
<style lang="scss" scoped></style>
