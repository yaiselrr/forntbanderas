<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {InputState} from './enums'
import {debouncedRef} from '@vueuse/core'

const props = defineProps({
  state: pt.oneOf(['success', 'warning', 'error', 'none']).def('none'),
  hint: pt.string,
})

const {state, hint} = toRefs(props)
const debouncedState = debouncedRef(state, 100)
const messageHint = debouncedRef(hint, 100)

const messageClass = computed!(() => {
  return {
    'text-red-500': debouncedState.value == InputState.ERROR,
    'text-yellow-500': debouncedState.value == InputState.WARNING,
    'text-green-500': debouncedState.value == InputState.SUCCESS,
    'text-blue-500': debouncedState.value == InputState.NONE,
  }
})

const Icon = computed!(() => {
  switch (debouncedState.value) {
    case InputState.ERROR:
      return h!('div', {class: "i-heroicons:exclamation-circle m-0.5 w-1em h-1em color-inherit"})
    case InputState.SUCCESS:
      return h!('div', {class: "i-heroicons:information-circle m-0.5 w-1em h-1em color-inherit"})
    case InputState.WARNING:
      return h!('div', {class: "i-heroicons:exclamation-circle m-0.5 w-1em h-1em color-inherit"})
    case InputState.NONE:
      return h!('div', {class: "i-heroicons:information-circle m-0.5 w-1em h-1em color-inherit"})
  }
})
</script>
<template>
  <div class="relative pb-5 overflow-hidden input-animation">
    <transition
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp"
    >
      <span v-if="messageHint" :class="messageClass" class="absolute flex items-start top-0">
        <Icon class="color-inherit"/>
        <small class="ml-1 color-inherit">{{ messageHint }}</small>
      </span>
    </transition>
  </div>
</template>
<style lang="scss" scoped></style>
