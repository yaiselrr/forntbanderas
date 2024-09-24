<template>
  <div class="bg-gray-200 bg-opacity-50">
    <div class="flex w-[10rem] ml-6">
      <loader-image class="inset-0 w-full h-full"/>
    </div>
    <div class="loader-line"></div>
  </div>
</template>
<script setup lang="ts">
import LoaderImage from "~t/admin/template/layouts/home/components/LoaderImage.vue"
</script>
<style lang="scss">
.loader-line {
  width: 200px;
  height: 3px;
  position: relative;
  overflow: hidden;
  margin: 50% auto;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.loader-line {
  @apply bg-primary-800
}

.loader-line:before {
  @apply bg-primary-800
}

.loader-line:before {
  content: "";
  position: absolute;
  left: -50%;
  height: 3px;
  width: 40%;
  background-color: white;
  -webkit-animation: lineAnim 1s linear infinite;
  -moz-animation: lineAnim 1s linear infinite;
  animation: lineAnim 1s linear infinite;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.ant-spin-nested-loading > div > .ant-spin {
  max-height: max-content !important;
}

.ant-spin .ant-spin-dot {
  position: absolute;
  top: 50%;
  inset-inline-start: 40% !important;
  margin: 0px;
}

@keyframes lineAnim {
  0% {
    left: -40%;
  }
  50% {
    left: 20%;
    width: 80%;
  }
  100% {
    left: 100%;
    width: 100%;
  }
}
</style>
