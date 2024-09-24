<script lang="ts" setup>
import {RInput, RadioButton, RSelect} from "~co/components/form"
import {pt} from '~h/types/propTypes'
import {useGetFilters} from './hooks/useGetFilters'
import {logicalConditions} from './filters'
import {useFilter} from './hooks/useFilter'
import {useConcatFilters} from './hooks/useConcatFilters'

const props = defineProps({
  type: pt.oneOf(['string', 'numeric', 'boolean', 'id']).isRequired,
  filters: pt.object,
  field: pt.string,
})

const emit = defineEmits(['update:filters', 'filter'])

const filterOptions = useGetFilters(props.type as any)
const inputType = computed!(() => {
  return props.type == 'numeric' ? 'number' : 'text'
})

const logicalCondition = ref()
const {filter, condition, value, disabled, clear} = useFilter()
const {
  filter: filter2,
  condition: condition2,
  value: value2,
  disabled: disabled2,
  clear: clear2,
} = useFilter()

function clearFilters() {
  clear()
  clear2()
}

const concatedFilters = useConcatFilters(props.field, logicalCondition, filter, filter2)

watch!(concatedFilters, () => {
  emit('update:filters', concatedFilters.value)
})

function emitFilter() {
  emit('filter')
}

defineExpose({
  clearFilters,
})
</script>
<template>
  <div style="padding: 8px; width: 230px">
    <span class="mb-0">Show items with conditions:</span>

    <div class="space-y-2 mt-2">
      <RSelect
          v-model="condition"
          allowClear
          placeholder="Where"
          isGray
          simple
          size="medium"
          :items="filterOptions"
      />
      <RInput
          v-if="type !== 'boolean'"
          v-model="value"
          :disabled="disabled"
          :type="inputType"
          simple
          size="small"
          @keyup.enter="emitFilter"
      />
      <div v-else class="">
        <RadioButton.Group v-model:value="value">
          <div class="px-2 !mb-3 !mt-3 flex items-center space-x-3">
            <div class="flex items-center">
              <RadioButton v-model="value" :disabled="!condition" :value="true">
                <span class="text-sm font-bold text-gray-700"> True </span>
              </RadioButton>
            </div>

            <div class="flex items-center">
              <RadioButton v-model="value" :disabled="!condition" :value="false">
                <span class="text-sm font-bold text-gray-700"> False </span>
              </RadioButton>
            </div>
          </div>
        </RadioButton.Group>
        <div class="!py-1 h-1 border-t border-dashed border-gray-200 w-full"></div>
      </div>

      <div class="w-70px">
        <RSelect
            v-model="logicalCondition"
            isGray
            default-value="$and"
            simple
            size="medium"
            :items="logicalConditions"
        />
      </div>

      <RSelect
          v-model="condition2"
          allowClear
          placeholder="Where"
          isGray
          simple
          size="medium"
          :items="filterOptions"
      />
      <RInput
          v-if="type !== 'boolean'"
          v-model="value2"
          :disabled="disabled2"
          :type="inputType"
          simple
          size="small"
          @keyup.enter="emitFilter"
      />

      <RadioButton.Group v-else v-model:value="value2">
        <div class="px-2 !mb-2 !mt-3 flex items-center space-x-3">
          <div class="flex items-center">
            <RadioButton :disabled="!condition2" :value="true">
              <span class="text-sm font-bold text-gray-700"> True </span>
            </RadioButton>
          </div>

          <div class="flex items-center">
            <RadioButton :disabled="!condition2" :value="false">
              <span class="text-sm font-bold text-gray-700"> False </span>
            </RadioButton>
          </div>
        </div>
      </RadioButton.Group>
    </div>

    <div v-if="type === 'boolean'" class="h-1 border-t border-dashed border-gray-200 w-full"></div>

    <div class="flex flex-row space-x-2">
      <Button size="s" class="mt-3" type="outline" color="primary" @click="emitFilter">
        Filter
      </Button>
      <Button size="s" class="mt-3" type="border" color="neutro" @click="clearFilters">
        Clear
      </Button>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
