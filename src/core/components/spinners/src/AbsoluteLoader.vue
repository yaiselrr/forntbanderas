<script lang="ts" setup>
  import { pt } from '~h/types/propTypes'
  import Spinner from './Spinner.vue'
  import DotsSpinning from '~co/components/spinners/loaders/DotsSpinning.vue'

  const props = defineProps({
    loading: pt.oneOfType([pt.bool.def(true), pt.object]).def(true),
    description: pt.string,
    spinnerSize: pt.oneOfType([pt.string, pt.number]).def('40'),
    descriptionClass: pt.string,
    type: pt.string.def('dots'),
    hFull: pt.bool.def(true)
  })

  const { loading } = toRefs(props)

  const showLoader = computed!(() => {
    return loading.value
  })
</script>
<template>
  <transition name="fade" mode="out-in" appear>
    <div
        v-if="showLoader"
        class="w-full  absolute top-0 left-0 bg-white dark:(bg-slate-800) !bg-opacity-80 z-10 !m-0"
        :class="{
        'h-full':props.hFull
      }"
        style="backdrop-filter: blur(2px)"
    >
      <div v-if="$slots.default" class="absolute-center">
        <slot></slot>
      </div>

      <div v-else-if="type === 'dots'" class="absolute-center">
        <DotsSpinning class="mb-3"/>
      </div>

      <Spinner
          v-else-if="type === 'spinner'"
          :size="spinnerSize"
          :loading="true"
          :inherit="true"
          class="text-primary-500 absolute-center dark:(text-white)"
      />

      <h6
        v-if="description"
        class="whitespace-nowrap mt-10 font-bold absolute-center text-primary-700"
        w:dark="text-primary-500"
        :class="[descriptionClass]"
      >
        {{ description }}
      </h6>
    </div>
  </transition>
</template>
<style lang="scss" scoped></style>
