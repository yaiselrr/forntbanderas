<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {Spinner} from "~co/components/spinners"
import ClearButton from '../shared/ClearButton.vue'
import ValidationMessage from '../shared/ValidationMessage.vue'
import SelectDropdown from './RSelectDropdown.vue'
import SelectedTags from './multiple/RSelectedTags.vue'
import {useValidation} from '../shared/hooks'
import {sharedProps} from '../shared/validation'
import {useSelections} from './useMultipleSelections'
import {nextTick} from 'vue'
import {useVModels, watchDebounced} from '@vueuse/core'

const props = defineProps({
  ...sharedProps,
  modelValue: pt.oneOfType([pt.string, pt.number, pt.arrayOf(String), pt.arrayOf(Number)]),
  defaultValue: pt.oneOfType([pt.string, pt.number, pt.arrayOf(String), pt.arrayOf(Number)]),
  selectedItem: pt.object,
  selectedItems: pt.arrayOf(Object).def([]),
  simple: pt.bool.def(false),
  textKey: pt.string.def('text'),
  idKey: pt.string.def('id'),
  multiple: pt.bool.def(false),
  showFilter: pt.bool.def(false),
  hideSelected: pt.bool.def(false),
  maxTagCount: pt.number,
  maxTagTextLength: pt.number.def(10),
  loadingData: pt.bool.def(false),
  maxSelections: pt.number,
  debounceMs: pt.number.def(500),
  filterPlaceholder: pt.string.def('Filtrar Elemento`'),
  items: pt.arrayOf(pt.any),
  isGray: pt.bool,
  filter: pt.string.def(''),
  trigger: pt.oneOf(['hover', 'click']).def('click'),
  getPopupContainer: pt.func,
})

const emit = defineEmits([
  'update:modelValue',
  'update:selectedItem',
  'update:selectedItems',
  'onblur',
  'onUpdate:filter',
  'update:filter',
  'changeValue',
  'clickedItem',
])

const {
  modelValue,
  multiple,
  idKey,
  requiredMark,
  containerClass,
  optionalMark,
  labelClass,
  textKey,
  rounded,
  items,
  label,
  loading,
  disabled,
  defaultValue,
  size,
  placeholder,
} = toRefs(props)

const single = !props.path

const {
  clear: clearModel,
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
  blurInput,
} = useValidation(single)

onMounted!(() => {
  if (defaultValue && defaultValue.value) {
    handleChange({target: {value: defaultValue.value}})
  }
})

watch!(
    () => props.modelValue,
    (val) => {
      emit('changeValue', val)
    }
)
const filterValue = ref()


const currentText = computed!(() => {
  return selectedItem?.value ? selectedItem.value[textKey.value] : null
})

const {onSelect, removeSelection, clearSelection} = useSelections()

async function focusFilter() {
  // await delay(100)
  nextTick(() => selectDropdown.value?.focusFilter())
}

function clear() {
  clearSelection()
  clearModel()
  blurInput()
}

const selectDropdown = ref()
const itemsMap: Map<string | number, any> = reactive(new Map())

watch!(
    () => items?.value,
    (val) => {
      itemsMap.clear()
      val?.forEach((item) => {
        itemsMap.set(item[unref(idKey)], item)
      })
    },
    {immediate: true}
)

const selectedItems = computed!(() => {
  if (multiple.value && modelValue && Array.isArray(modelValue.value)) {
    let result: any[] = []
    for (let i = 0; i < modelValue.value.length; i++) {
      const key = modelValue.value[i]
      result.push(itemsMap.get(key))
    }
    return result
  }
  return []
})

const selectedItem = computed!(() => {
  if (!multiple.value && modelValue?.value) {
    return itemsMap.get(modelValue?.value as string)
  }
  return null
})

watch!(selectedItem, () => {
  emit('update:selectedItem', selectedItem.value)
})

watch!(selectedItems, () => {
  emit('update:selectedItems', selectedItems.value)
})

const {filter} = useVModels(props)


watchDebounced(filterValue, () => (filter.value = filterValue.value), {
  debounce: props.debounceMs,
})

defineExpose({
  validate,
  clear,
  selectedItems,
  selectedItem,
  filterValue
})
</script>
<template>
  <div class="w-full">
    <div class="flex flex-row">
      <label v-if="label" w:dark="text-gray-300" :class="labelClass" class="mb-1 text-dark-200">
        {{ label }}
        <span v-if="vobject?.required && requiredMark" class="text-lg text-red-600">*</span>
        <span v-if="optionalMark" class="text-lg text-gray-500">(optional)</span>
      </label>
      <label v-if="maxSelections && multiple" class="mb-0 relative ml-auto !text-xs text-gray-700">
        <span class="absolute bottom-0 right-1">
          {{ modelValue?.["length"] || 0 }}/{{ maxSelections }}
        </span>
      </label>
    </div>
    <div
        ref="formContainer"

        :class="[
             'ctn-input',
        {
          focused,
          'mt-0.5': label,
          'rounded-md': rounded,
          'cursor-not-allowed': disabled,
          'min-h-9': size === 'large' && !$slots.default,
          'min-h-8': size === 'medium' && !$slots.default,
          'min-h-7': size === 'small' && !$slots.default,
        },
      ]"
        class="relative flex !shadow-sm app-input-container "
    >
      <slot name="addonBefore"></slot>
      <SelectDropdown
          ref="selectDropdown"
          v-model:filter="filterValue"
          :multiple="multiple"
          :items="items"
          class="!block w-full !h-full"
          :class="{
          'min-h-9': size === 'large' && !$slots.default,
          'min-h-8': size === 'medium' && !$slots.default,
          'min-h-7': size === 'small' && !$slots.default,
        }"
          :selected="modelValue"
          :hideSelected="hideSelected"
          :text-key="textKey"
          :id-key="idKey"
          :disabled="disabled"
          :loading="loadingData"
          :show-filter="showFilter"
          :trigger="trigger"
          :getPopupContainer="getPopupContainer"
          @clickedItem="onSelect"
      >
        <div
            v-if="!$slots.default"
            w:focus-within="ring-1 !bg-transparent"
            class="ring-1 flex items-center border-1 border rounded-md relative w-full"
            :class="{
            ...stateClasses,
            'py-1': multiple,
            'cursor-not-allowed': disabled,
            'hover:(bg-light-500) dark:hover:(bg-slate-700)': !disabled,
            'bg-slate-200 hover:bg-slate-200 bg-opacity-70': isGray,
            'bg-surface': !isGray,
            'rounded-l-none': $slots.addonBefore,
            'rounded-r-none': $slots.addonAfter,
            'min-h-9': size === 'large' && !$slots.default,
            'min-h-8': size === 'medium' && !$slots.default,
            'min-h-7': size === 'small' && !$slots.default,
          }"
            @click="focusFilter"
        >
          <input
              v-if="!multiple"
              ref="inputRef"
              autocomplete="off"
              readonly
              role="combobox"
              v-bind="$attrs"
              :value="currentText"
              :disabled="disabled"
              :placeholder="placeholder"
              class="outline-none w-full text-sm bg-transparent rounded-md w-full text-sm text-black-600 placeholder-gray-500 border-none"
              :class="{
              'pl-3': !$slots.iconPrefix && !$slots.prefix,
              'cursor-not-allowed': disabled,
              'py-2': size === 'large',
              'pl-2 py-1 ': size === 'medium',
              'pl-2 py-0': size === 'small',
            }"
              @input="handleChange"
          />

          <SelectedTags
              v-else
              :tags="selectedItems"
              :text-key="textKey"
              :id-key="idKey"
              :maxTagCount="maxTagCount"
              :maxTagTextLength="maxTagTextLength"
              @removeTag="removeSelection"
          />
          <ClearButton
              v-if="
              (allowClear && !loading && !multiple && modelValue) ||
              (multiple && modelValue?.['length'])
            "
              v-show="modelValue "
              class="pl-1 pr-2"
              @click.prevent.stop="clear"
          />

          <div v-if="isLoading" class="px-3 w-fit-content inline-flex">
            <Spinner :loading="true" size="18" :inherit="true" class="text-gray-400"/>
          </div>

          <div v-else class="w-fit-content rounded-full mr-2">
            <div class="i-heroicons:chevron-up-down cursor-pointer" style="width: 1.2em"/>
          </div>

          <div v-if="$slots.suffix" class="px-3">
            <slot name="suffix"></slot>
          </div>
        </div>

        <div
            v-else
            class=""
            :class="{ 'opacity-60 pointer-events-none !cursor-not-allowed': disabled }"
        >
          <slot></slot>
        </div>
      </SelectDropdown>
      <slot name="addonAfter"></slot>
    </div>

    <ValidationMessage v-if="!simple && !$slots.default" :state="validateStatus" :hint="getText"/>
  </div>
</template>
