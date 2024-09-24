<script lang="ts" setup>
import {useCollapsable} from "~c/components/collapse/useCollapsable"
import {pt} from '~h/types/propTypes'
import {useSimpleAlertClasses} from './hooks/useSimpleAlertClasses'

const props = defineProps({
  type: pt.oneOf(['info', 'warning', 'success', 'danger']).def('success'),
  title: pt.string,
  description: pt.string,
  showIcon: pt.bool,
  accentBorder: pt.bool,
  closable: pt.bool,
  defaultOpen: pt.bool.def(true),
})

const {type} = toRefs(props)

const {toggle: toggleOpen, el, id, isOpen} = useCollapsable(props.defaultOpen)
defineExpose({toggleOpen})

const classes = useSimpleAlertClasses(type)
</script>
<template>
  <div
      :id="id"
      ref="el"
      :class="[classes?.bg, accentBorder ? classes?.border : '', { 'border-l-4': accentBorder }]"
      class="round w-full"
  >
    <div class="flex p-4">
      <div class="flex-shrink-0">
        <div v-if="type === 'warning'" class="i-heroicons:exclamation-triangle-solid h-5 w-5 text-yellow-400"/>
        <div v-else-if="type === 'danger'" class="i-heroicons:x-circle h-5 w-5 mt-1.5 text-red-400"/>
        <div
            v-else-if="type === 'success'"
            class="i-heroicons:check-circle-solid h-5 w-5 text-green-400"
        />
        <div
            v-else-if="type === 'info'"
            class="i-heroicons:information-circle-solid h-5 w-5 text-blue-400"
        />
      </div>
      <div v-if="!$slots.content" class="ml-3">
        <h3
            class="text-sm font-bold"
            :class="[classes?.title, { 'mb-0': !description && !$slots.description }]"
        >
          {{ title }}
        </h3>
        <div v-if="description || $slots.description" class="mt-2 text-sm">
          <p v-if="description" class="mb-0" :class="classes?.description">{{ description }}</p>
          <slot name="description"></slot>
        </div>
        <div v-if="$slots.actions" class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
      <slot v-else name="content"></slot>

      <div v-if="closable" class="ml-auto mr-2">
        <div
            style="font-size: 1.1em"
            :class="classes?.title"
            class="i-heroicons:exclamation-circle hoverable-close"
            w:dark="text-gray-300"
            @click="toggleOpen"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
