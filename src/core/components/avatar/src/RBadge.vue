<script lang="ts" setup>
import {isDef} from '@vueuse/core'
import {CSSProperties, useSlots} from 'vue'
import {pt} from '~h/types/propTypes'
import {colorDefinition, ColorDefinitionEnum} from '../../shared/types/types'
import {classes, positionClasses} from './classes'

const props = defineProps({
  color: pt.oneOf(colorDefinition).def(ColorDefinitionEnum.SUCCESS),
  position: pt.oneOf(['topRight', 'topLeft', 'bottomLeft', 'bottomRight']).def('bottomRight'),
  circle: pt.bool.def(false),
  badgeClass: pt.string,
})

const slots = useSlots()

const {color, position, circle, badgeClass} = toRefs(props)

const shape = computed(() => {
  return circle.value ? 'circle' : 'round'
})

const aBadgeClass = computed(() => {
  return [
    classes[color.value],
    positionClasses[position.value],
    badgeClass.value,
    {
      'px-0.5 py-0.5 rounded-md': isDef(slots.default),
      'rounded-full': !isDef(slots.default),
    },
  ]
})

const style = computed<CSSProperties>(() => {
  return {
    minWidth: '13px',
    minHeight: '13px',
  }
})
</script>
<template>
  <div
      w:dark="border-dark-400"
      class="border transform border-light-50 border-2 absolute"
      :class="aBadgeClass"
      :style="style"
  >
    <div
        class="font-bold text-white"
        w:dark="text-dark-900"
        style="font-size: 10px; line-height: 10px"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
