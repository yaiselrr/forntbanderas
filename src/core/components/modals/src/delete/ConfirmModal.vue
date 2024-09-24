<script setup lang="ts">
import {pt} from "~h/types/propTypes"

const props = defineProps({
  text: pt.string,
  textClass: pt.string,
  iconClass: pt.string,
})
</script>
<template>
  <div class="flex">
    <div :class="iconClass"></div>
    <div :class="textClass">{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped>

</style>
