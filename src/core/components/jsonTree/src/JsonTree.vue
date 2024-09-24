<script lang="ts" setup>
import KeyValueEditorItem from './KeyValueEditorItem.vue'
import EmptyFields from './EmptyFields.vue'
import {pt} from '~h/types/propTypes'
import {useToggle, useVModel} from '@vueuse/core'
import {nextTick} from 'vue'
import {delay} from "~h/utils/utils"
import {Message} from "~co/components/messages"

const props = defineProps({
  fields: pt.array.def([]),
  label: pt.string,
  editable: pt.bool.def(true),
  maxDeep: pt.number.def(50),
})

const {editable, maxDeep} = toRefs(props)
const fields: Ref<any[]> = useVModel(props, 'fields')

const focusedLevel = ref()
const parentIndex = ref()

function changeLevelFocused(level, parentIndexVal) {
  focusedLevel.value = level
  parentIndex.value = parentIndexVal
}

function addField() {
  fields.value.push({field: '', type: 'string'})
}

function removeField(index) {
  fields.value.splice(index, 1)
}

const [validateKey, toggleValidateKey] = useToggle()
const invalidFields = ref(0)

function addInvalid() {
  invalidFields.value++
}

async function validate() {
  if (!fields.value.length) {
    Message.warn('Debe agregar al menos un campo')
    return false
  } else {
    invalidFields.value = 0
    toggleValidateKey(true)
    nextTick(() => toggleValidateKey(false))
    await delay(200)

    return invalidFields.value == 0
  }
}

provide!('editable', editable)
provide!('maxDeep', maxDeep)
provide!('addInvalid', addInvalid)
provide!('validateKey', validateKey)
provide!('focusedLevel', focusedLevel)
provide!('parentIndex', parentIndex)
provide!('changeLevelFocused', changeLevelFocused)

defineExpose({
  validate,
})
</script>
<template>
  <div class="relative json-tree flex flex-col items-center justify-center">
    <label for="" class="font-bold">{{ label }}</label>
    <div class="mt-10">
      <template v-if="fields.length">
        <template v-for="(field, i) in fields" :key="i">
          <KeyValueEditorItem
              v-model:field="fields[i]"
              :isFirst="i === 0"
              :isLast="i === fields.length - 1"
              :index="i"
              @addField="addField"
              @removeField="removeField"
          />
        </template>
      </template>
      <EmptyFields v-else @click="addField"/>
    </div>
  </div>
</template>
<style lang="scss">
@import './jsonTree.scss';
</style>
