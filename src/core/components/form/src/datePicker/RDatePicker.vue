<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import ClearButton from '../shared/ClearButton.vue'
import ValidationMessage from '../shared/ValidationMessage.vue'
import {useValidation} from '../shared/hooks'
import {sharedProps} from '../shared/validation'

import DatePicker from 'ant-design-vue/es/date-picker'
import 'ant-design-vue/es/date-picker/style'
import './picker.scss'

import {Spinner} from "~co/components/spinners"
import {usePopupContainer} from "~c/components/popup/usePopupContainer"

const props = defineProps({
  ...sharedProps,
  modelValue: pt.any,
  picker: pt.oneOf['week', 'month', 'quarter', 'year'],
  defaultValue: pt.oneOfType([pt.string, pt.number, pt.any]),
  simple: pt.bool.def(false),
  format: pt.string,
  type: pt.oneOf(['date']).def('date'),
  autofill: pt.oneOfType([pt.string, pt.bool]).def(false),
})

const emit = defineEmits(['change', 'onblur', 'changeFocus'])

onMounted!(() => {
  if (defaultValue && defaultValue.value) {
    handleChange({target: {value: defaultValue.value}})
  }
})

const {
  modelValue,
  requiredMark,
  optionalMark,
  labelClass,
  containerClass,
  type,
  label,
  loading,
  disabled,
  allowClear,
  defaultValue,
  rounded,
  size,
} = toRefs(props)

const single = !props.path

const {
  blurInput,
  isBlur,
  clear,
  inputRef,
  focused,
  handleChange,
  vobject,
  stateClasses,
  getText,
  validateStatus,
  formContainer,
  validate,
  isLoading,
  status,
} = useValidation(single)

const {container, triggerMode, getPopupContainerFn} = usePopupContainer()

watch!(focused, (val) => {
  emit('changeFocus', val)
  if (!focused.value)
    validate()
})


function setFocus(val) {
  focused.value = val
}

const maxLength = computed!(() => {
  return vobject.value?.maxLength?.$params?.max
})
const top = computed!(() => {
  let top = 'mt-1'
  return props.path ? 'mt-0' : top
})
defineExpose({
  validate,
  clear,
  status,
})
</script>
<template>
  <div ref="container" class="w-full">
    <div class=" flex flex-row">
      <label v-if="label" w:dark="text-slate-300" :class="labelClass" class="mb-1 text-dark-200">
        {{ label }}
        <span v-if="vobject?.required && requiredMark" class="text-lg text-red-600">*</span>
        <span v-if="optionalMark" class="text-lg text-gray-500">(optional)</span>
      </label>
    </div>
    <div
        ref="formContainer"
        :class="[
        {
          focused,
          top,
          'cursor-not-allowed': disabled,
          'h-9 min-h-9': size === 'large',
          'h-8 min-h-8': size === 'medium',
          'h-7 min-h-7': size === 'small',
        },
      ]"
        class="relative flex !shadow-sm app-input-container"
    >
      <slot name="addonBefore"></slot>
      <div
          w:focus-within="ring-1 !bg-white dark:(bg-slate-800)"
          class="dark:border-slate-500 flex items-center bg-surface transition-all duration-200 border-1 border rounded-md relative !w-full"
          :class="[
          containerClass,
          {
            ...stateClasses,
            'rounded-md':rounded,
            'cursor-not-allowed': disabled,
            'hover:(bg-light-500) dark:hover:(bg-slate-700)': !disabled,
            'rounded-l-none': $slots.addonBefore,
            'rounded-r-none': $slots.addonAfter,
          },
        ]"
      >
        <div v-if="$slots.iconPrefix" class="pl-3 pr-2 rounded-md text-gray-500">
          <slot name="iconPrefix"></slot>
        </div>

        <DatePicker
            v-bind="props"
            class="w-full"
            :allowClear="false"
            suffix-icon=""
            :get-popup-container="getPopupContainerFn"
            :value="modelValue"
            @change="handleChange"
            @focus="setFocus(true)"
            @blur="setFocus(false)"
        />

        <ClearButton
            v-if="allowClear && !loading"
            v-show="modelValue"
            class="px-2 text-slate-300"
            @click="clear"
        />

        <div v-if="isLoading" class="px-3">
          <Spinner :loading="true" size="18" :inherit="true" class="text-gray-400"/>
        </div>

        <div v-if="$slots.suffix" class="px-3 dark:text-slate-300">
          <slot name="suffix"></slot>
        </div>

        <div v-else-if="(!allowClear || !modelValue) && !loading" class="px-2 pointer-events-none">
          <div class="i-heroicons:calendar dark:text-slate-300 text-slate-400"/>
        </div>
      </div>
      <slot name="addonAfter"></slot>
    </div>

    <ValidationMessage v-if="!simple" :state="validateStatus" :hint="getText"/>
  </div>

  <slot :$v="vobject"></slot>
</template>
<style lang="scss">
.ant-picker-dropdown .ant-picker-header-view button:hover {
  @apply text-primary-700 #{!important};
}
</style>
