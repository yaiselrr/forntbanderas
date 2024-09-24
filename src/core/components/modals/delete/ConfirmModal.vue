<script setup lang="ts">
import {pt} from "~h/types/propTypes"
import {Modal} from "ant-design-vue"

const props = defineProps({
  text: pt.string,
  textClass: pt.string,
  iconClass: pt.string,
  onOk: pt.func,
  loading: pt.object,
})
</script>
<template>
  <div class="flex">
    <div :class="iconClass"></div>
    <div :class="textClass">{{ text }}</div>
  </div>
  <div class="ant-modal-confirm-btns">
    <a-button class="ant-btn ant-btn-default" @click="Modal.destroyAll()"><span>No</span>
    </a-button>
    <a-button class="ant-btn ant-btn-default ant-btn-dangerous" :loading="loading.value" @click="onOk"><span>Si</span>
    </a-button>
  </div>
</template>

<style lang="scss" scoped>

</style>
