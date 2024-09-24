<script lang="ts" setup>
import {CSSProperties} from 'vue'
import {pt} from '~h/types/propTypes'
import {colorDefinition, ColorDefinitionEnum} from '../../shared/types/types'
import AvatarBadge from './RAvatarBadge.vue'

const props = defineProps({
  text: pt.string,
  img: pt.string,
  size: pt.oneOfType([pt.string, pt.number]).def(40),
  badgeColor: pt.oneOf(colorDefinition).def(ColorDefinitionEnum.SUCCESS),
  badgePosition: pt.oneOf(['topRight', 'topLeft', 'bottomLeft', 'bottomRight']),
  badge: pt.bool.def(false),
  circle: pt.bool.def(false),
  loading: pt.bool.def(false),
  scale: pt.bool.def(true),
  excedent: pt.number,
  badgeClass: pt.string,
})

const {size, circle, loading, text, img, scale} = toRefs(props)

const style = computed!<CSSProperties>(() => {
  return {
    width: `${size.value}px`,
    'min-width': `${size.value}px`,
    height: `${size.value}px`,
    'mini-height': `${size.value}px`,
  }
})

const avatarClass = computed!(() => {
  return {
    'rounded-full': circle.value,
    'rounded-2xl': !circle.value,
  }
})
</script>
<template>
  <div
      :style="style"
      w:dark="!bg-slate-700 text-white"
      :class="avatarClass"
      v-bind="$attrs"
      class="text-primary-800 group text-xs font-bold relative app-avatar-container bg-gray-200 flex items-center justify-center"
  >
    <slot v-if="$slots.text" name="text"></slot>
    <span v-else-if="text" class="color-inherit">{{ text }}</span>

    <div v-else-if="img" :class="avatarClass" class="overflow-hidden w-full h-full">
      <img
          class="backface-hidden transform scale-105 w-full h-full object-cover"
          :src="img"
          :class="{ ' transition-all scale-102 duration-300 group-hover:scale-110': scale }"
          alt=""
      />
    </div>

    <div v-else class="text-lg">
      <slot></slot>
    </div>

    <AvatarBadge
        v-if="badge"
        :badgeClass="badgeClass"
        :circle="circle"
        :color="badgeColor"
        :position="badgePosition"
    >
      <slot name="badge"></slot>
    </AvatarBadge>

    <div
        v-if="excedent"
        :class="avatarClass"
        class="bg-dark-900 bg-opacity-60 absolute w-full h-full flex items-center justify-center"
    >
      <span class="text-white font-bold text-lg">+{{ excedent }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
