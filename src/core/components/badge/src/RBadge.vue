<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {buttonColorDefinition} from '../../buttons/src/types'
import {badgeClasses} from './badgeClasses'

const props = defineProps({
  large: pt.bool.def(false),
  dot: pt.bool.def(false),
  square: pt.bool.def(false),
  closeIcon: pt.bool.def(false),
  color: pt.oneOf(buttonColorDefinition).def('primary'),
  closeIconClass: pt.oneOfType([pt.string, pt.object]),
})

const emit = defineEmits(['close'])
const {large, dot, square, closeIcon, color} = toRefs(props)

const classes = computed!(() => {
  return [
    badgeClasses[color.value],
    {
      'px-3 py-0.5 text-sm': large.value,
      'px-2.5 py-0.5 text-xs': !large.value,
      '!rounded-md': square.value,
    },
  ]
})
</script>
<template>
  <span :class="classes" class="inline-flex items-center rounded-full font-bold">
    <div v-if="dot" class="-ml-1 mr-1.5 h-2 w-2">
      <svg class="color-inherit" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3"/>
      </svg>
    </div>

    <slot></slot>

    <div
        v-if="closeIcon"
        :class="[closeIconClass]"
        class="ml-2 cursor-pointer p-1 rounded-full transition-all duration-100 flex items-center justify-center"
        w:hover="bg-gray-300"
        w:dark:hover="bg-gray-100 bg-opacity-10"
        @click.prevent.stop="$emit('close')"
    >
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7"/>
      </svg>
    </div>
  </span>
</template>
<style lang="scss" scoped></style>
