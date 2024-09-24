<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  type: pt.string,
  extension: pt.string,
  size: pt.oneOf(['lg', 'md', 'sm']).def('sm'),
})

const bgClass = computed(() => {
  switch (props.type) {
    case 'image':
      return 'dark:(from-sky-400 via-sky-500 to-sky-700) from-sky-300 via-sky-400 to-sky-600'
    case 'audio':
      return 'dark:(from-green-400 via-green-500 to-green-700) from-green-300 via-green-400 to-green-600'
    case 'application':
      return 'dark:(from-pink-400 via-pink-500 to-pink-700) from-pink-300 via-pink-400 to-pink-600'
    case 'video':
      return 'dark:(from-violet-400 via-violet-500 to-violet-700) from-violet-300 via-violet-400 to-violet-600'
    case 'text':
      return 'dark:(from-slate-400 via-slate-500 to-slate-600) from-slate-300 via-slate-400 to-slate-500'
    default:
      return 'dark:(from-slate-400 via-slate-500 to-slate-700) from-slate-300 via-slate-400 to-slate-500'
  }
})
</script>
<template>
  <div
      class="file-icon"
      :class="[bgClass, { 'file-icon-lg': size == 'lg', 'file-icon-md': size == 'md' }]"
      :extension="extension"
  >
  </div>
</template>
<style lang="scss" scoped>
.file-icon {
  @apply backface-hidden relative inline-block rounded-md antialiased bg-gradient-to-b;
  width: 30px;
  height: 38px;
  min-width: 30px;
  min-height: 38px;
  text-align: left;

  &::before {
    content: '';
    border-bottom-left-radius: 2px;
    border-width: 5px;
    border-style: solid;
    @apply block absolute top-0 right-0 w-0 h-0;
    @apply border-t-slate-200 border-r-slate-200 border-b-sky-50/40 border-l-sky-50/40;
    @apply group-hover:(border-t-slate-300 border-r-slate-300);

    @apply dark:(border-t-slate-800 border-r-slate-800 border-b-sky-50/40 border-l-sky-50/40);
    @apply dark:(group-hover:(border-t-slate-700 border-r-slate-700));
  }

  &::after {
    @apply block absolute text-white content-center lowercase flex-nowrap overflow-hidden;
    content: attr(extension);
    font-size: 10px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.file-icon-md {
  width: 48px;
  min-width: 48px;
  height: 64px;
  min-height: 64px;
  border-radius: 8px;

  &::after {
    font-size: 16px;
    padding: 4px 6px;
  }

  &::before {
    border-bottom-left-radius: 4px;
    border-width: 8px;
  }
}

.file-icon-lg {
  min-width: 96px;
  height: 128px;
  min-height: 128px;
  border-radius: 10px;

  &::before {
    border-bottom-left-radius: 8px;
    border-width: 16px;
  }

  &::after {
    font-size: 24px;
    padding: 4px 10px;
  }
}
</style>
