<script lang="ts" setup>
import {whenever} from '@vueuse/core'
import {pt} from '~h/types/propTypes'
import {useLoadImage} from "~c/core/useLoadImage"

const props = defineProps({
  src: pt.string.isRequired,
  smallSrc: pt.string.isRequired,
  bigImageClass: pt.string,
  smallImageClass: pt.string,
  blur: pt.string.def('20px'),
})

const {smallSrc, src} = toRefs(props)

const currentSrc = ref(smallSrc.value)

const smallImgLoaded = useLoadImage(smallSrc)
const bigImgLoaded = useLoadImage(src)

whenever(bigImgLoaded, () => (currentSrc.value = src.value))

watch!(src, () => {
  currentSrc.value = smallSrc.value
})

onMounted!(() => {
  if (!smallSrc.value || !src.value) {
    throw new Error('No source specified for big/small image')
  }
})
</script>
<template>
  <div ref="root" class="relative">
    <div
        v-if="!smallImgLoaded"
        class="absolute w-full flex items-center content-center justify-center h-full bg-rgb(60, 60, 60)"
    >
      <slot></slot>
    </div>

    <img
        v-bind="$attrs"
        class="lazy"
        :src="currentSrc"
        :class="{
        [smallImageClass]: smallSrc === currentSrc,
        [bigImageClass]: src === currentSrc,
        'img-small': smallSrc === currentSrc,
        loaded: (smallSrc === currentSrc && smallImgLoaded) || (src === currentSrc && bigImgLoaded),
      }"
    />
  </div>
</template>
<style lang="scss" scoped>
.img-small {
  @apply block opacity-0 w-full;
  transform: scale(1);
  filter: blur(v-bind(blur));
}

img.lazy {
  transition: all 300ms linear;
}

img.lazy.loaded {
  opacity: 1;
}
</style>
