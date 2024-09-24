<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {classes, overlay} from './buttonClasses'
import {Spinner} from "~co/components/spinners"
import {buttonColorDefinition, buttonTypeDefinition, buttonSizeDefinition} from './types'

const props = defineProps({
  type: pt.oneOf(buttonTypeDefinition).def('filled'),
  color: pt.oneOf(buttonColorDefinition).def('primary'),
  size: pt.oneOf(buttonSizeDefinition).def('default'),
  typeButton: pt.string.def('button'),
  loading: pt.oneOfType([pt.bool.def(false), pt.object.isRequired]),
  disabled: pt.oneOfType([pt.bool.def(false), pt.object.isRequired]),
  icon: pt.bool.def(false),
  circle: pt.bool.def(false),
  block: pt.bool.def(false),
  shadow: pt.bool,
  press: pt.bool.def(true),
})
const {type, press, color, loading, disabled, circle} = toRefs(props)

const isDisabled: ComputedRef<boolean> = computed!(() => disabled?.value || loading?.value) as any
</script>

<template>
  <button
      :disabled="isDisabled"
      :type="typeButton"
      class="!font-bold press border-none relative app-button select-none overflow-hidden w-max group inline-flex items-center justify-center !outline-none ring-0 rounded-md transition-all duration-75"
      :class="[
      size,
      classes[type][color].class,
      press,
      {
        'pointer-events-none !opacity-80': isDisabled,
        '!w-full flex-center': block,
        'button-icon': icon,
        '!rounded-full': circle,
        'text-sm font-medium px-4 py-2 h-9': size === 'default',
        'p-2 text-11px h-6': size === 'xs',
        'p-3 text-12px h-8': size === 's',
        'p-4 text-12px h-10': size === 'l',
        'p-5 text-13px h-12': size === 'xl',
        shadow,
      },
    ]"
  >
    <div
        v-if="loading"
        :class="overlay[color]"
        class="absolute top-0 left-0 w-full h-full text-white bg-opacity-80 flex items-center justify-center"
    >
      <spinner :inherit="true" :loading="true"/>
    </div>
    <div v-if="$slots.prefix" class="">
      <slot name="prefix"></slot>
    </div>
    <span class="!w-max whitespace-nowrap inline-flex items-center flex-row" style="color: inherit">
      <slot></slot>
    </span>
    <slot name="sufix"></slot>
  </button>
</template>
<style lang="scss">
.app-button {
  min-width: min-content;

  .button-icon {
    @apply flex content-center px-2 rounded-xl;
    width: 37px !important;
    height: 37px !important;
  }

  svg {
    width: min-content !important;
  }

  // transition: background 400ms;
}
</style>
