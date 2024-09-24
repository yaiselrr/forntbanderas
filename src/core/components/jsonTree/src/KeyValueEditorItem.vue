<script lang="ts" setup>
import {RInput, RSelect} from "~co/components/form"
import {fieldTypesSelect} from './templateTypes'
import {usePopupContainer} from "~c/components/popup/usePopupContainer"
import {useToggle, useVModel, whenever} from '@vueuse/core'
import {not} from '@vueuse/math'

import {pt} from '~h/types/propTypes'
import EmptyFields from './EmptyFields.vue'
import {required} from '@vuelidate/validators'

const props = defineProps({
  isLast: pt.bool.def(false),
  isFirst: pt.bool.def(false),
  field: pt.object,
  level: pt.number.def(1),
  index: pt.number.isRequired,
  parentIndex: pt.number.def(1),
})

const emit = defineEmits(['addField', 'removeField'])

const field = useVModel(props, 'field')
const [focused, toggleFocus] = useToggle()
const itemLevel = ref(props.level)

const focusedLevel = inject!<Ref<number>>('focusedLevel')
const maxDeep = inject!<Ref<number>>('maxDeep')
const editable = inject!<Ref<boolean>>('editable')
const parentIndex = inject!<Ref<number>>('parentIndex')
const changeLevelFocused = inject!<Fn>('changeLevelFocused')
const validateKey: Ref<boolean> = inject!('validateKey') as any
const addInvalid = inject!<Fn>('addInvalid')

watch!(validateKey, async () => {
  const valid = await input.value.validate()
  if (!valid) {
    addInvalid?.()
  }
})

const activeLevel = computed!(() => {
  return itemLevel.value == focusedLevel?.value && parentIndex?.value == props.parentIndex
})

const canAdd = computed!(() => {
  return itemLevel.value < unref(maxDeep as any)
})

function addField() {
  emit('addField')
}

function removeField() {
  emit('removeField', props.index)
}

function removeFieldFromField(index) {
  field.value.fields.splice(index, 1)
}

whenever(focused, () => changeLevelFocused?.(itemLevel.value, props.parentIndex))
whenever(not(focused), () => {
  setTimeout(() => {
    if (!focused.value) {
      changeLevelFocused?.(null)
    }
  }, 200)
})

function addFieldToField() {
  if (!field.value.fields) {
    field.value.fields = []
  }
  field.value.fields.push({field: '', type: 'string'})
}

const validations = {required}
const feedbacks = {required: 'Obligatorio'}
const input = ref()

const {getPopupContainerFn, container} = usePopupContainer('click')
</script>
<template>
  <div ref="container" class="key-value-editor flex flex-col pl-5">
    <div class="flex flex-row">
      <div class="vert-dots" :class="{ first: isFirst, active: activeLevel }"><p></p></div>
      <div :class="{ 'pb-5': isLast && itemLevel === 1 }" class="flex flow-row items-center">
        <div :class="{ active: activeLevel }" class="hor-dots"><p></p></div>

        <div class="ml-0 flex flow-row items-center space-x-3">
          <div class="input-container !ml-0">
            <RInput
                ref="input"
                v-model="field.field"
                :feedbacks="feedbacks"
                :validations="validations"
                :disabled="!editable"
                label="Campo"
                @changeFocus="toggleFocus"
            />
          </div>
          <span>=</span>
          <div class="input-container">
            <RSelect
                v-model="field.type"
                :getPopupContainer="getPopupContainerFn"
                id-key="key"
                :items="fieldTypesSelect"
                :disabled="!editable"
                label="Tipo"
            />
          </div>
          <span v-if="editable" title="Eliminar este campo">
            <div class="i-heroicons:minus-circle-solid remove-field-icon" @click="removeField"/>
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div :class="{ active: activeLevel }" class="vert-dots"><p></p></div>
      <div v-if="field.fields && field.fields.length" class="flex flex-col pb-4">
        <template v-for="(childField, i) in field.fields" :key="i">
          <KeyValueEditorItem
              v-model:field="field.fields[i]"
              :isFirst="i === 0"
              :isLast="i === field.fields.length - 1"
              :level="itemLevel + 1"
              class="pl-15"
              :index="i"
              :parentIndex="index"
              @remove-field="removeFieldFromField"
              @add-field="addFieldToField"
          />
        </template>
      </div>
      <EmptyFields
          v-else-if="field.type === 'object' && editable"
          class="pl-15"
          @click="addFieldToField"
      />
    </div>

    <div v-if="isLast && editable && canAdd" class="flex flex-row">
      <div :class="{ active: activeLevel }" class="hor-dots">
        <p></p>
      </div>
      <div class="transform -translate-y-1">
        <span v-if="!activeLevel" title="Agregar campo" @click="addField">
          <div
              class="i-heroicons:plus-circle insert-field-icon"
              :class="{ active: activeLevel }"
          />
        </span>

        <span v-else class="cursor-pointer group flex items-center" @click="addField">
          <div
              w:group-hover="text-dark-900"
              w:dark="group-hover:(text-slate-200)"
              class="i-heroicons:plus-circle-solid text-gray-500 remove-field-icon"
          />
          <span
              class="ml-2 mb-1 text-gray-500"
              w:dark="group-hover:(text-slate-400)"
              w:group-hover="text-dark-900"
          >
            Agregar campo
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
