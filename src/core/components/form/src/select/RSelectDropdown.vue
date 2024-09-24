<script lang="ts" setup>
import ADropdown from 'ant-design-vue/es/dropdown'
import 'ant-design-vue/es/dropdown/style'

import {pt} from '~h/types/propTypes'
import {RDropdownItem} from "~co/components/dropdown"
import '~co/components/dropdown/src/styles.scss'
import {EmptyProps} from 'ant-design-vue'
import {useFocus} from "~co/event/useFocus"
import {Spinner} from "~co/components/spinners"
import {usePopupContainer} from "~c/components/popup/usePopupContainer"
import {useVModels} from '@vueuse/core'
import {removeAccent} from "~h/utils/utils"

const empty: EmptyProps = {}
const props = defineProps({
  items: pt.arrayOf(pt.any),
  selected: pt.oneOfType([pt.string, pt.number, pt.arrayOf(String), pt.arrayOf(Number)]),
  multiple: pt.bool.def(false),
  loading: pt.bool.def(false),
  disabled: pt.bool.def(false),
  showFilter: pt.bool.def(false),
  trigger: pt.oneOf(['hover', 'click']).def('click'),
  getPopupContainer: pt.func,
  textKey: pt.string,
  idKey: pt.string,
  filter: pt.string.def(''),
  filterPlaceholder: pt.string,
  hideSelected: pt.bool,
})

const {filter} = useVModels(props)

const {items, loading, textKey, idKey, selected, multiple, trigger, getPopupContainer} = toRefs(
    props
)
const {container, triggerMode, getPopupContainerFn} = usePopupContainer(
    trigger,
    getPopupContainer as any
)

const selectedItem = computed!(() => {
  return Array.isArray(selected?.value) ? null : selected?.value
})

const selectedItems = computed!(() => {
  return Array.isArray(selected?.value) ? selected?.value : null
})

const emit = defineEmits(['clickedItem', 'update:filter'])

function clickedItem(item, e) {
  filter.value = ""
  emit('clickedItem', {item, key: item[idKey.value], event: e})
}

const filteredItems = computed!(() => {
  return items?.value?.filter((item) => {
        return removeAccent(item[textKey.value]?.toLowerCase()).includes(removeAccent(filter.value?.toLowerCase()))
      }
  )
})

const showEmpty = computed!(() => {
  return (
      !loading.value &&
      ((items?.value?.length != 0 && items?.value?.length == selectedItems.value?.length) ||
          filteredItems.value?.length == 0)
  )
})

const {ref: filterRef, focus} = useFocus()

defineExpose({
  focusFilter: focus,
})

const simpleImage = ref(empty.image)
</script>
<template>
  <div ref="container" class="flex">
    <a-dropdown
        :getPopupContainer="getPopupContainerFn"
        :disabled="disabled"
        v-bind="$attrs"
        :trigger="triggerMode"
    >
      <div class="dropdown-slot-container bg-white rounded-md">
        <slot></slot>
      </div>
      <template #overlay>
        <div
            class="bg-white dark:(border-slate-600) app-dropdown border rounded-lg py-1.5 shadow-md"
        >
          <div v-if="showFilter" class="py-1 px-2">
            <input
                ref="filterRef"
                v-model="filter"
                class="border outline-none px-2 py-1 w-full rounded-md dark:(bg-slate-800 border-slate-700 hover:bg-slate-700 active:bg-slate-800 focus:bg-slate-800 text-white)"
                type="text"
                placeholder="Filtrar Elemento"
                @click.prevent.stop="() => {}"
            />
          </div>

          <div v-if="loading" class="px-3 w-full mx-auto justify-center py-3 flex">
            <Spinner :loading="true" size="22" :inherit="true" class="text-gray-400"/>
          </div>
          <div
              v-else-if="multiple ? items?.length !== selectedItems?.length : true"
              class="max-h-300px overflow-auto"
          >
            <template v-for="(item, i) in filteredItems" :key="i">
              <RDropdownItem
                  v-if="!multiple || !hideSelected || !selectedItems?.includes(item[idKey])"
                  :active="selectedItem ? item[idKey] === selectedItem : false"
                  @click="(e) => clickedItem(item, e)"
              >
                <template v-if="item.icon" #icon>
                  <div class="ml-1">
                    <component :is="item.icon"/>
                  </div>
                </template>
                <span class="w-full flex color-inherit whitespace-nowrap flex-row space-x-3">
                  <span class="whitespace-nowrap color-inherit">
                    {{ item[textKey] }}
                  </span>

                  <span
                      v-if="selectedItems?.includes(item[idKey]) || selectedItem === item[idKey]"
                      w:hover=" text-white"
                      w:dark="text-primary-400 group-hover:(text-primary-400)"
                      class="text-primary-600 !ml-auto pl-5"
                      w:group-hover="text-white"
                  >
                    <div class="i-heroicons:check text-md font-normal !ml-auto text-17px"/>
                  </span>
                </span>
              </RDropdownItem>
            </template>
          </div>
          <div
              v-if="showEmpty"
              class="!opacity-90 text-center justify-center flex flex-col items-center py-3"
          >
            <div class="i-mdi:magnify-remove-outline text-4xl text-muted"/>
            <span class="text-muted">No results</span>
          </div>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>
