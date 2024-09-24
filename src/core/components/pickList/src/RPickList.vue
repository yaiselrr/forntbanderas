<script lang="ts" setup>
import {refDebounced, useVModels} from '@vueuse/core'
import {useInfiniteScroll} from "~c/components/infiniteScroll/useInfiniteScroll"
import {pt} from '~h/types/propTypes'
import {RInput, RCheckbox} from "~co/components/form"
import {RButton} from "~co/components/buttons"
import NoDataIcon from '../../icons/illustrations/NoDataIcon.vue'
import DotsSpinning from '../../spinners/loaders/DotsSpinning.vue'
import {useTransfer} from './hooks/useTransfer'

const props = defineProps({
  targetKeys: pt.array,
  selectedKeys: pt.array.def([]),
  disabledKeys: pt.arrayOf(pt.oneOfType([pt.string, pt.number])).def([]),
  dataSource: pt.arrayOf(pt.any).isRequired,
  titles: pt.array,
  idKey: pt.string.def('id'),
  textKey: pt.string,
  availableText: pt.string.def('Available'),
  selectedText: pt.string.def('Selected'),
  showFilter: pt.bool.def(false),
  isDisabled: pt.bool.def(false),
  loadingData: pt.bool.def(false),
  oneWay: pt.bool.def(false),
})

const emit = defineEmits(['changeFilterTarget', 'changeFilterSelected', 'loadMore'])

const {targetKeys, selectedKeys} = useVModels(props)
const {idKey, disabledKeys, dataSource, loadingData} = toRefs(props)

const filterTarget = ref('')
const filterSelected = ref('')

const filterTargetDebounced = refDebounced(filterTarget, 500)
const filterSelectedDebounced = refDebounced(filterSelected, 500)

watch!(filterTargetDebounced, () => emit('changeFilterTarget'))
watch!(filterSelectedDebounced, () => emit('changeFilterSelected'))

const [
  targetCheckedKeys,
  isIndeterminateTarget,
  isCheckedAllTarget,
  availableTargetKeys,
] = useTransfer(disabledKeys, targetKeys)

const [
  selectedCheckedKeys,
  isIndeterminateSelected,
  isCheckedAllSelected,
  availableSelectedKeys,
] = useTransfer(disabledKeys, selectedKeys)

onMounted!(() => {
  if (!targetKeys.value.length && dataSource.value.length) {
    targetKeys.value = dataSource.value.map((item) => item[idKey.value])
  }
})

function onChangeCheckedSelected(e, key) {
  const val = e.target.checked

  if (val) {
    selectedCheckedKeys.value.push(key)
  } else {
    selectedCheckedKeys.value = selectedCheckedKeys.value.filter((itemkey) => itemkey !== key)
  }
}

function onChangeCheckedAvailable(e, key: any) {
  const val = e.target.checked

  if (val) {
    targetCheckedKeys.value.push(key)
  } else {
    targetCheckedKeys.value = targetCheckedKeys.value.filter((itemkey) => itemkey !== key)
  }
}

function onTargetCheckAllChange(e) {
  const val = e.target.checked
  if (val) {
    targetCheckedKeys.value = Array.from(availableTargetKeys.value)
  } else {
    targetCheckedKeys.value = []
  }
}

function onSelectedCheckAllChange(e) {
  const val = e.target.checked
  if (val) {
    selectedCheckedKeys.value = Array.from(availableSelectedKeys.value)
  } else {
    selectedCheckedKeys.value = []
  }
}

function transferCheckedToSelected() {
  if (targetCheckedKeys.value.length) {
    selectedKeys.value.push(...targetCheckedKeys.value)
    targetKeys.value = targetKeys.value.filter((key) => !targetCheckedKeys.value.includes(key))
    targetCheckedKeys.value = []
  }
}

function transferCheckedToAvailable() {
  if (selectedCheckedKeys.value.length) {
    targetKeys.value.push(...selectedCheckedKeys.value)
    selectedKeys.value = selectedKeys.value.filter(
        (key) => !selectedCheckedKeys.value.includes(key)
    )

    selectedCheckedKeys.value = []
  }
}

const {scrollElement} = useInfiniteScroll(() => emit('loadMore'), {loading: loadingData})

function removeSelected(key) {
  selectedCheckedKeys.value.push(key)
  transferCheckedToAvailable()
}
</script>
<template>
  <div class="flex flex-col max-h-300px sm:flex-row space-x-2">
    <div class="relative card min-h-300px flex flex-col w-full sm:w-1/2 !p-0 overflow-hidden">
      <div
          v-if="isDisabled"
          class="absolute cursor-not-allowed w-full h-full bg-gray-200/50 dark:bg-slate-900/70 z-10 top-0 left-0 round"
      ></div>

      <!-- Target Items -->
      <div class="border-gray-200 dark:border-slate-700 border-b py-3 px-4 flex space-x-4">
        <RCheckbox
            :indeterminate="isIndeterminateTarget"
            :checked="isCheckedAllTarget"
            @change="onTargetCheckAllChange"
        />

        <h6 class="mb-0 font-bold">
          {{ targetCheckedKeys.length }}/{{ targetKeys.length }} {{ availableText }}
        </h6>
      </div>

      <div v-if="showFilter" class="px-2 py-3">
        <RInput v-model="filterTarget" simple class="" placeholder="Filtrar Elemento...">
          <template #iconPrefix>
            <div class="i-heroicons:search"/>
          </template>
        </RInput>
      </div>
      <div v-if="loadingData" class="w-full flex justify-center absolute-center">
        <DotsSpinning/>
      </div>
      <ul
          v-else
          ref="scrollElement"
          style="height: -webkit-fill-available"
          class="relative scrollbox"
      >
        <template v-for="item in dataSource" :key="item[idKey]">
          <li
              v-if="
              !selectedKeys.includes(item[idKey]) &&
              item[textKey].toLowerCase().includes(filterTarget.toLowerCase())
            "
              class="mb-1 items-center relative cursor-pointer px-4 py-2 flex hover:bg-primary-100 dark:hover:bg-primary-700/20"
              @click="
              onChangeCheckedAvailable(
                { target: { checked: !targetCheckedKeys.includes(item[idKey]) } },
                item[idKey]
              )
            "
          >
            <div class="flex items-center h-5">
              <RCheckbox
                  :checked="targetCheckedKeys.includes(item[idKey])"
                  :disabled="disabledKeys.includes(item[idKey])"
                  @change="(e) => onChangeCheckedAvailable(e, item[idKey])"
              />
            </div>
            <div v-if="!$slots.renderItem" class="ml-3 text-sm">
              <label class="font-bold text-gray-700 dark:text-white cursor-pointer">
                {{ item[textKey] }}
              </label>
            </div>
            <slot v-else :item="item" name="renderItem"></slot>
          </li>
        </template>
        <div
            w:first="flex"
            class="absolute-center hidden !opacity-90 text-center justify-center flex flex-col items-center py-3"
        >
          <NoDataIcon class="w-80px h-auto"/>
          <span class="text-muted mt-1">No items available</span>
        </div>
      </ul>
      <div
          v-if="$slots.targetFooter"
          class="mt-auto border-t-gray-200 dark:border-t-slate-700 border-t p-2 px-3"
      >
        <slot name="targetFooter"></slot>
      </div>
    </div>

    <div
        class="justify-center flex flex-row sm:flex-col items-baseline sm:(items-center space-x-0) py-4 space-x-4 space-y-3"
    >
      <RButton
          :disabled="isDisabled || targetCheckedKeys.length === 0"
          circle
          icon
          color="primary"
          class="flex w-auto"
          @click="transferCheckedToSelected"
      >
        <div class="i-heroicons:chevron-right transform rotate-90 sm:rotate-0"/>
      </RButton>
      <RButton
          v-if="!oneWay"
          :disabled="isDisabled || selectedCheckedKeys.length === 0"
          circle
          icon
          color="primary"
          class="flex w-auto"
          @click="transferCheckedToAvailable"
      >
        <div class="i-heroicons:chevron-left transform rotate-90 sm:rotate-0"/>
      </RButton>
    </div>

    <!-- Selected Items -->
    <div class="relative min-h-300px overflow-hidden card flex flex-col w-full sm:w-1/2 !p-0">
      <div
          v-if="isDisabled"
          class="absolute cursor-not-allowed w-full h-full bg-gray-200/50 dark:bg-slate-900/70 z-10 top-0 left-0 round"
      ></div>
      <div class="border-gray-200 dark:border-slate-700 border-b py-3 px-4 flex space-x-4">
        <RCheckbox
            v-if="!oneWay"
            :indeterminate="isIndeterminateSelected"
            :checked="isCheckedAllSelected"
            @change="onSelectedCheckAllChange"
        />

        <h6 class="mb-0 font-bold">
          {{ selectedCheckedKeys.length }}/{{ selectedKeys.length }} {{ selectedText }}
        </h6>
      </div>

      <div v-if="showFilter" class="px-2 py-3">
        <RInput v-model="filterSelected" simple placeholder="Filtrar Elemento...">
          <template #iconPrefix>
            <div class="i-heroicons:magnifying-glass"></div>
          </template>
        </RInput>
      </div>
      <ul style="height: -webkit-fill-available; min-height: inherit" class="scrollbox relative">
        <template v-for="item in dataSource" :key="item[idKey]">
          <li
              v-if="
              selectedKeys.includes(item[idKey]) &&
              item[textKey].toLowerCase().includes(filterSelected.toLowerCase())
            "
              class="mb-1 relative px-4 py-2 flex items-center"
              :class="{
              'hover:bg-primary-100 cursor-pointer dark:hover:bg-primary-700/20': !oneWay,
            }"
              @click="
              !oneWay &&
                onChangeCheckedSelected(
                  { target: { checked: !selectedCheckedKeys.includes(item[idKey]) } },
                  item[idKey]
                )
            "
          >
            <div class="flex items-center h-5">
              <RCheckbox
                  v-if="!oneWay"
                  :disabled="disabledKeys.includes(item[idKey])"
                  :checked="selectedCheckedKeys.includes(item[idKey])"
                  @change="(e) => onChangeCheckedSelected(e, item[idKey])"
              />
            </div>
            <div class="ml-3 text-sm flex items-center w-full">
              <div v-if="!$slots.renderItem" class="ml-3 text-sm">
                <label class="font-bold text-gray-700 dark:text-white cursor-pointer">
                  {{ item[textKey] }}
                </label>
              </div>
              <slot v-else :item="item" name="renderItem"></slot>
              <div
                  v-if="oneWay"
                  class="i-heroicons:trash ml-auto text-red-300 cursor-pointer hover:text-red-500"
                  w:dark="text-red-400 hover:text-red-300"
                  @click="removeSelected(item[idKey])"
              />
            </div>
          </li>
        </template>
        <div
            w:first="flex"
            class="absolute-center !opacity-90 text-center justify-center hidden flex-col items-center py-3"
        >
          <NoDataIcon class="w-80px h-auto"/>
          <span class="text-muted mt-1">No items selected</span>
        </div>
      </ul>
      <div
          v-if="$slots.selectedFooter"
          class="mt-auto border-t-gray-200 dark:border-t-slate-700 border-t p-2 px-3"
      >
        <slot name="selectedFooter"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
