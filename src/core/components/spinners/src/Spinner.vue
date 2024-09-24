<script lang="ts" setup>
  import { pt } from '~h/types/propTypes'

  const props = defineProps({
    loading: pt.bool.def(false),
    inherit: pt.bool.def(false),
    size: pt.oneOfType([pt.string, pt.number]),
    color: pt.oneOf(['primary', 'secondary', 'danger', 'warning']).def('primary'),
  })
  const { loading, size, inherit } = toRefs(props)

  const containerStyle = computed!(() => {
    if (!size?.value) {
      return {width: '20px', height: '20px'}
    } else {
      return {width: `${size.value}px`, height: `${size.value}px`}
    }
  })

  const strokeColor = computed!(() => {
    if (inherit.value) {
      return ''
    }
    switch (props.color) {
      case 'light':
        return 'text-white'
      case 'primary':
        return 'text-primary-700 dark:text-primary-500'
      case 'secondary':
        return 'text-secondary-400'
      case 'danger':
        return 'text-rose-400'
      case 'warning':
        return 'text-yellow-300'
    }
  })
</script>
<template>
  <div :style="containerStyle">
    <svg
      v-if="loading"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      class="uil-ring-alt"
    >
      <rect x="0" y="0" width="100" height="100" fill="none" class="bk" />
      <!-- <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#d7d7d7"
        fill="none"
        stroke-width="10"
        stroke-linecap="round"
        style=""
      /> -->
      <circle
        cx="50"
        cy="50"
        r="40"
        class="stroke-current"
        :class="strokeColor"
        fill="none"
        stroke-width="13"
        stroke-linecap="round"
        :style="{ color: strokeColor }"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          repeatCount="indefinite"
          from="0"
          to="-502"
        />
        <animate
          attributeName="stroke-dasharray"
          dur="2s"
          repeatCount="indefinite"
          values="150.6 100.4;1 250;150.6 100.4"
        />
      </circle>
    </svg>
  </div>
</template>
<style lang="scss" scoped></style>
