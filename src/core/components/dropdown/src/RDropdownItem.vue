<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  active: pt.bool.def(false),
})

const {active} = toRefs(props)
</script>
<template>
  <div class="dropdown-item px-1.5 group cursor-pointer">
    <div
        class="relative flex items-center justify-start w-full p-2 bg-transparent rounded-md h-9"
        w:hover="bg-primary-500 text-white"
        w:dark="text-primary-200 text-opacity-90"
        w:dark:hover=" text-white bg-slate-700 text-opacity-90"
        :class="{
        'active font-bold dark:bg-slate-700 dark:text-opacity-90': active,
      }"
    >
      <div class="pr-2">
        <slot name="icon"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dropdown-item {
  .active {
    ::after {
      @apply bg-primary-500 h-full absolute left-0;
      height: 60%;
      border-radius: 35px !important;
      transform: translateY(-50%);
      top: 50%;
      content: '';
      width: 4px;
    }
  }
}
</style>
