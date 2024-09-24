<script setup lang="ts" xmlns:w="http://www.w3.org/1999/xhtml">
import {pt} from '~h/types/propTypes'
import ValidationMessage from '../shared/ValidationMessage.vue'
import {isDef, useToggle} from '@vueuse/core'
import {useValidation} from '../shared/hooks'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

const editor = ClassicEditor
const props = defineProps({
  modelValue: pt.string,
  label: pt.string,
  hint: pt.string,
  loading: pt.bool.def(false),
  simple: pt.bool.def(false),
  labelClass: pt.string.def(''),
  height: pt.string.def('150px'),
  rounded: pt.bool.def(true),
  disabled: pt.bool.def(false),
  containerClass: pt.string.def('ctn-input'),
  type: pt.string.def('editor'),
  path: pt.string,
  placeholder: pt.string,
  requiredMark: pt.bool.def(false),
  optionalMark: pt.bool.def(false),
  successStatus: pt.bool.def(false),
  validations: pt.object.def({}),
  defaultValue: pt.string,
  feedbacks: pt.object,
  rows: pt.number.def(5),
})
const emit = defineEmits(['update:modelValue', 'change', 'onblur', 'changeFocus'])
onMounted!(() => {
  if (defaultValue && defaultValue.value) {
    handleChange({target: {value: defaultValue.value}})
  }
})
const {
  modelValue,
  label,
  hint,
  loading,
  defaultValue,
  simple,
  labelClass,
  rounded,
  disabled,
  containerClass,
  path,
  placeholder,
  requiredMark,
  optionalMark,
  validations,
  feedbacks,
  rows,
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
    </div>
    <div
        ref="formContainer"
        :class="[
        {
          focused,
          'mt-0.5': label,
          'cursor-not-allowed': disabled,
        },
      ]"
        class="relative !shadow-sm app-input-container"
    >
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
          },
        ]"
      >
        <ckeditor
            :editor="editor"
            :ref="label+'Ref'"
            :model-value="modelValue"
            @input="handleChange"
            @blur="blurInput"
            v-bind="$attrs"
            :placeholder="placeholder"
            class="!outline-none px-2 !py-2 p app-input !border-none !shadow-none !bg-transparent overflow-auto !placeholder-gray-500 text-black-600 !text-sm w-full"

        ></ckeditor>
      </div>

      <ValidationMessage v-if="!simple" :state="validateStatus" :hint="getText"/>
    </div>
  </div>
  <slot :$v="vobject"></slot>
</template>

<style lang="scss">
:root {
  --ck-color-focus-border: grat !important;
  --ck-border-radius: 8px !important;
  --ck-color-base-border: transparent !important;
  --ck-focus-ring: 0.1px solid var(--ck-color-focus-border) !important;
}

.ck.ck-reset.ck-editor {
  @apply w-full  #{!important} ;
}

.ck-editor__editable {
  min-height: v-bind(height) !important;
}
.ck-powered-by {
  display: none !important;
}

</style>

