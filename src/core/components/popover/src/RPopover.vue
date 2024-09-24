<script lang="ts" setup>
import APopover from 'ant-design-vue/es/popover'
import 'ant-design-vue/es/popover/style'
import {pt} from '~h/types/propTypes'

const props = defineProps({
  showPopover: pt.bool.def(true),
  withPadding: pt.bool.def(true),
})

const style = computed!(() => {
  return {
    padding: props.withPadding ? '12px 16px' : '',
  }
})
</script>
<template>
  <APopover v-if="showPopover" v-bind="$attrs">
    <template #content>
      <div :style="style">
        <slot name="content"></slot>
      </div>
    </template>
    <slot></slot>
  </APopover>

  <slot v-else></slot>
</template>
<style lang="scss">
.ant-popover-inner {
  @apply: dark:bg-slate-800 text-white;
}

.ant-popover-title {
  @apply text-muted border-b border-slate-200;
}

.ant-popover-content {
  @apply border dark:(border-slate-700);
  border-radius: var(--radius);
}

.ant-popover-arrow-content {
  @apply dark:bg-slate-600;
}

//   .ant-popover-arrow {
//     display: none;
//   }

.ant-popover-inner-content {
  border-radius: var(--radius) !important;
  padding: 0px;
  overflow: hidden;
}

body.dark {
  .ant-popover-title {
    @apply border-b border-white border-opacity-5;
  }

  .ant-popover-inner {
    box-shadow: var(--boxShadow);
  }
}
</style>
