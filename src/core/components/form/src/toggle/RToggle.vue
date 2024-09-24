<script lang="ts" setup>
import {useToString} from "@vueuse/core"
import {PropType} from 'vue'
import {pt} from '~h/types/propTypes'

const props = defineProps({
  options: {type: Array as PropType<(string | number)[]>, default: []},
  round: pt.bool,
  icons: pt.bool,
  idKey: pt.string.def('id'),
  textKey: pt.string.def('text'),
  modelValue: [String, Number],
  small: pt.bool.def(false),
})

const {options, idKey} = toRefs(props)

const emit = defineEmits(['update:modelValue'])
const activeIndex = ref(0)

function selectValue(i: number) {
  activeIndex.value = i

  const newValue = stringOptions.value ? options.value[i] : options.value[i][unref(idKey)]
  emit('update:modelValue', newValue)
}

function selectNext() {
  if (!options.value[activeIndex.value + 1]) {
    selectValue(0)
    return
  }
  selectValue(activeIndex.value + 1)
}

function selectPrev() {
  if (!options.value[activeIndex.value - 1]) {
    selectValue(options.value.length - 1)
    return
  }
  selectValue(activeIndex.value - 1)
}

const width = computed!(() => (100 / options.value.length).toFixed(2))
const opacity = computed!(() => {
  if (!stringOptions.value) {
    return options.value.some((option) => option[unref(idKey)] == props.modelValue)
  }
  return options.value.includes(props.modelValue!) ? 1 : 0
})

const sliderPosition = computed!(() => {
  const pos = options.value.findIndex(
      (option) =>
          option === props.modelValue ||
          (!stringOptions.value && option[unref(idKey)] === props.modelValue)
  )
  return (pos === -1 ? 0 : pos) * 100
})

const stringOptions = computed!(() => {
  return options.value.length > 0 && useToString(options.value[0])
})
</script>

<template>
  <div
      w:dark="!bg-slate-700 !border-slate-700 "
      class="app-toggle bg-light-700 border-solid border-width-3px border-light-700 flex relative transition-all ease-out duration-200 rounded-md !outline-none"
      tabindex="0"
      :class="{ 'app-toggle--round': round }"
      @keyup.left.prevent="selectPrev"
      @keyup.right.prevent="selectNext"
  >
    <label
        v-for="(option, i) in options"
        :key="i"
        w:dark="!text-white"
        class="app-toggle-value z-1 flex-center relative w-full text-center cursor-pointer select-none"
        :class="{
        '!p-1': small,
        'app-toggle-value--selected':
          (stringOptions && option === modelValue) ||
          (!stringOptions && option[idKey] === modelValue),
      }"
        @click="selectValue(i)"
    >
      <span v-if="!$slots.renderItem" class="!font-bold">
        <template v-if="stringOptions">
          {{ option }}
        </template>
        <template v-else>
          {{ option[textKey] }}
        </template>
      </span>
      <slot
          v-else
          name="renderItem"
          :current="
          (stringOptions && option === modelValue) ||
          (!stringOptions && option[idKey] === modelValue)
        "
          :option="option"
      ></slot>
    </label>

    <div
        w:dark="bg-slate-900/70 shadow-lg"
        class="app-toggle-slider absolute bg-white dark:!bg-slate-900/90 left-0 bottom-0 top-0"
        :style="{
        width: width + '%',
        transform: `translateX(${sliderPosition}%)`,
        opacity,
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.app-toggle {
  min-width: 60px;
  width: auto;

  &--round {
    @apply rounded-full;

    & > .app-toggle-value {
      &::before {
        width: 0 !important;
      }
    }
  }

  &-value {
    flex-grow: 1;
    padding: 6px;
    line-height: 1;

    &:not(&--selected) {
      @apply opacity-60 dark:opacity-60;
    }

    &--selected {
      & + .app-toggle-value::before {
        opacity: 0 !important;
      }
    }

    &:not(:first-of-type) {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 4px;
        bottom: 4px;
        width: 1px;
        transition: all 0.2s ease-out;
      }
    }

    & > span,
    & > i {
      position: relative;
      z-index: 5;
      font-weight: 500;
    }
  }

  &-slider {
    border-radius: inherit;
    transition: inherit;
    box-shadow: rgba(0, 0, 0, 0.17) 0 1px 3px 0;
  }
}
</style>
