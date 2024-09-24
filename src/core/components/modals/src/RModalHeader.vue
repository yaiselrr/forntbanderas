<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {RRoundedButton} from "~co/components/buttons"

const emit = defineEmits(['close'])

const props = defineProps({
  headTitle: pt.string,
  showCloseIcon: pt.bool.def(true),
  center: pt.bool.def(false),
  hoverableClose: pt.bool.def(true),
})
</script>

<template>
  <div v-if="showCloseIcon || headTitle || $slots.title" class="flex items-center px-4 pt-4 pb-1">
    <slot></slot>
    <h2
        v-if="headTitle"
        :class="{ 'text-center': center }"
        class="w-full font-bold m-0 h-fit-content text-lg text-heading text-opacity-70"
        v-html="headTitle"
    >
    </h2>
    <slot v-else name="title"></slot>
    <RRoundedButton v-if="showCloseIcon && !hoverableClose" class="ml-auto" @click="$emit('close')">
      <div style="font-size: 1em" class="i-heroicons:x-mark text-gray-700" w:dark="text-gray-300"/>
    </RRoundedButton>

    <div
        v-else-if="showCloseIcon && hoverableClose"
        style="font-size: 1.2em"
        class="i-heroicons:x-mark text-gray-500 hoverable-close ml-auto hover:text-gray-900"
        w:dark="text-gray-300"
        @click="$emit('close')"
    />
  </div>
</template>
<style lang="scss" scoped></style>
