<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {useCollapsable} from "~c/components/collapse/useCollapsable"
import {useColorType} from '../../shared/hooks/useColorType'
import {colorDefinition, ColorDefinitionEnum} from '../../shared/types/types'
import {useAlertClasses} from './hooks/useAlertClasses'

const props = defineProps({
  color: pt.oneOf(colorDefinition).def(ColorDefinitionEnum.PRIMARY),
  title: pt.string,
  description: pt.string,
  shadow: pt.bool,
  gradient: pt.bool.def(true),
  closable: pt.bool,
  defaultOpen: pt.bool.def(true),
})

const {title, closable, description, gradient, shadow, color} = toRefs(props)
const {isPrimary, isSecondary, isDanger, isSuccess, isWarn} = useColorType(color)

const {toggle, el, id, isOpen} = useCollapsable(props.defaultOpen)
defineExpose({toggle})

const alertClasses = useAlertClasses(
    shadow,
    isOpen,
    isPrimary,
    gradient,
    isSecondary,
    isDanger,
    isSuccess,
    isWarn
)
</script>
<template>
  <div
      :id="id"
      ref="el"
      :class="alertClasses"
      class="flex flex-col overflow-hidden transition-all duration-200 border-l-2 dark:bg-opacity-10 dark:text-white rounded-r-xl"
  >
    <div class="flex flex-row pt-2 pb-4">
      <div class="flex items-center justify-center pl-5">
        <slot name="icon"></slot>
      </div>
      <div class="flex flex-col px-6 pt-1">
        <h2 v-if="title" style="color: inherit" class="font-semibold text-md">{{ title }}</h2>
        <p v-if="description"> {{ description }} </p>
        <div v-else class="">
          <slot></slot>
        </div>
      </div>

      <div v-if="closable" class="ml-auto mr-2" @click="toggle">
        <div
            style="font-size: 1.1em"
            class="i-heroicons:x-mark text-gray-500 hoverable-close"
            w:hover="text-gray-800"
            w:dark="text-gray-300"
        />
      </div>
    </div>
  </div>
</template>
