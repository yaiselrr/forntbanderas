<script lang="ts" setup>
const props = defineProps({
  iconSize: {type: String, default: '1.7em'},
})
</script>
<template>
  <div class="w-fit-content h-fit-content rounded-full flex-center bg-opacity-10 bg-green-500">
    <div
        :style="{ 'font-size': iconSize }"
        class="i-heroicons:check-circle dark:(text-green-400 text-opacity-80) text-green-400"
    />
  </div>
</template>
<style lang="scss" scoped></style>
