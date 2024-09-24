<script lang="ts" setup xmlns:w="http://www.w3.org/1999/xhtml">
import {pt} from '~h/types/propTypes'
import ClearButton from '../shared/ClearButton.vue'
import ValidationMessage from '../shared/ValidationMessage.vue'
import {isDef, useToggle} from '@vueuse/core'
import {useValidation} from '../shared/hooks'
import {sharedProps} from '../shared/validation'
import {validateLetters, validateNumbers} from "~h/utils/utils"

import Input from 'ant-design-vue/es/input'
import 'ant-design-vue/es/input/style'

import InputNumber from 'ant-design-vue/es/input-number'
import 'ant-design-vue/es/input-number/style'

import {Spinner} from "~co/components/spinners"

const ATextArea = Input.TextArea

const props = defineProps({
  ...sharedProps,
  modelValue: pt.oneOfType([pt.string, pt.number]),
  defaultValue: pt.oneOfType([pt.string, pt.number]),
  showCharCount: pt.bool.def(false),
  onlyAlpha: pt.bool.def(false),
  simple: pt.bool.def(false),
  onlyNumbers: pt.bool.def(false),
  textarea: pt.bool.def(false),
  minRows: pt.number.def(2),
  maxRows: pt.number.def(5),
  max: pt.number,
  min: pt.number,
  type: pt.oneOf(['text', 'password', 'number', 'email']).def('text'),
  autofill: pt.oneOfType([pt.string, pt.bool]).def(false),
})

const emit = defineEmits(['update:modelValue', 'change', 'onblur', 'changeFocus'])

onMounted!(() => {
  if (defaultValue && defaultValue.value) {
    handleChange({target: {value: defaultValue.value}})
  }
})

const {
  modelValue,
  requiredMark,
  optionalMark,
  showCharCount,
  labelClass,
  containerClass,
  onlyAlpha,
  onlyNumbers,
  type,
  label,
  loading,
  disabled,
  allowClear,
  min,
  max,
  rounded,
  defaultValue,
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

watch!(focused, (val) => {
  emit('changeFocus', val)
})

const maxLength = computed!(() => {
  return vobject.value?.maxLength?.$params?.max
})

modelValue &&
watch!(modelValue, (val) => {
  if (type.value == 'number' && val) {
    if (isDef(max.value) && val > max.value) {
      emit('update:modelValue', max.value)
    }
    if (isDef(min.value) && val < min.value) {
      emit('update:modelValue', min.value)
    }
  }
})

const invalidLength = computed!(() => {
  let invalid = vobject.value?.maxLength === false
  if (invalid) {
    vobject.value?.$touch()
  }
  return invalid
})

function handleKeypress(e: any) {
  if (onlyNumbers.value || type.value == 'number') {
    validateNumbers(e)
  } else if (onlyAlpha.value) {
    validateLetters(e)
  }
}

const [showPassword, toggle] = useToggle(false)
const toggleShowPassword = () => toggle()

const inputType = computed!(() => {
  return type.value == 'password' ? (showPassword.value ? 'text' : 'password') : type.value
})
const top = computed!(() => {
  let top = 'mt-1'
  return props.path ? 'mt-0' : top
})
defineExpose({
  validate,
  loading,
  isLoading,
  clear,
  status,
})
</script>
<template>
  <div class="w-full">
    <div class="-mb-0.5 flex flex-row">
      <label v-if="label" w:dark="text-slate-300" :class="labelClass" class="mb-1 text-dark-200">
        {{ label }}
        <span v-if="vobject?.required && requiredMark" class="text-lg text-red-600">*</span>
        <span v-if="optionalMark" class="text-lg text-gray-500">(optional)</span>
      </label>

      <label
          v-if="maxLength && showCharCount"
          :class="{ 'text-red-600': invalidLength,...labelClass }"
          w:dark="text-white"
          class="relative ml-auto !text-xs text-gray-700"
      >
        <span class="absolute bottom-0 right-1">
          {{ modelValue?.length || 0 }}/{{ maxLength }}
        </span>
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
          w:focus-within="ring-1 bg-white dark:(bg-slate-800)"
          class="dark:(border-slate-500 text-white) flex items-center bg-surface border-1 border  relative !w-full"
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
        <div v-if="$slots.iconPrefix" class="pl-2 rounded-md text-gray-500">
          <slot name="iconPrefix"></slot>
        </div>
        <a-input
            v-if="!textarea && inputType !== 'number'"
            ref="inputRef"
            :type="inputType"
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            :disabled="disabled"
            autocomplete="off"
            class="!w-full app-input !outline-none text-sm bg-transparent text-black-600 placeholder-gray-500 h-full"
            :class="{
            'pl-1': !$slots.iconPrefix && !$slots.prefix,
            'cursor-not-allowed': disabled,
            // 'py-2': size == 'large',
            'pl-2 py-1 ': size === 'medium',
            'pl-2 py-0': size === 'small',
          }"
            :maxlength="maxLength"
            @input="handleChange"
            @blur="blurInput"
            @keypress="handleKeypress"
        />

        <InputNumber
            v-else-if="inputType === 'number'"
            v-bind="$attrs"
            ref="inputRef"
            :value="modelValue"
            :disabled="disabled"
            class="!w-full app-input !outline-none !border-none !shadow-none text-sm !bg-transparent text-black-600 placeholder-gray-500"
            :class="{ 'pl-3': !$slots.iconPrefix && !$slots.prefix, 'cursor-not-allowed': disabled }"
            :bordered="false"
            :min="min"
            :max="max"
            @change="handleChange"
            @blur="blurInput"
            @keypress="handleKeypress"
        />

        <ATextArea
            v-else
            ref="inputRef"
            :value="modelValue"
            v-bind="$attrs"
            :disabled="disabled"
            style="resize: none"
            :placeholder="placeholder"
            :maxlength="maxLength"

            :auto-size="{ minRows, maxRows }"
            :class="{ 'cursor-not-allowed': disabled }"
            class="!outline-none px-2 !py-2 p app-input !border-none !shadow-none !bg-transparent overflow-auto !placeholder-gray-500 text-black-600 !text-sm w-full"
            @input="handleChange"
            @blur="blurInput"
            @keypress="handleKeypress"
        />

        <ClearButton
            v-if="allowClear && !loading && !textarea"
            v-show="modelValue"
            class="px-3"
            @click="clear"
        />

        <div v-if="isLoading" class="px-3">
          <Spinner :loading="isLoading" color="secondary" size="18" :inherit="true" class="text-gray-400"/>
        </div>

        <div v-if="$slots.suffix && type !== 'password'" class="px-3 dark:text-slate-300">
          <slot name="suffix"></slot>
        </div>
        <div v-else-if="type === 'password' && modelValue" class="px-3">
          <div
              v-if="!showPassword"
              class="i-heroicons:eye w-1em h-1em"
              :class="'cursor-pointer'"
              @click="toggleShowPassword"
          />
          <div v-else class="i-heroicons:eye-slash w-1em h-1em" :class="'cursor-pointer'"
               @click="toggleShowPassword"></div>
        </div>
      </div>
      <slot name="addonAfter"></slot>
    </div>

    <ValidationMessage v-if="!simple" :state="validateStatus" :hint="getText"/>
  </div>

  <slot :$v="vobject"></slot>
</template>
