<template>
  <form>
    <div v-bind="$attrs">
      <slot :$v="vobject"></slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import {nextTick, provide, ref} from 'vue'
import {pt} from '~h/types/propTypes'

const props = defineProps({
  feedbacks: pt.object,
  state: pt.object.isRequired,
  autoDirty: pt.bool.def(false),
  validations: pt.object.isRequired,
  specific: pt.arrayOf(String).def([]), // specific paths instead of name
})

const validateKey = ref(false)
const clearKey = ref(false)
provide('validateKey', validateKey)
provide('clearKey', clearKey)
provide('feedbacks', props.feedbacks)

const {state} = toRefs(props)

const vobject = useVuelidate(props.validations, state, {
  $lazy: true,
  $autoDirty: props.autoDirty,
})
provide('vue_object', vobject)

const validate = async (
    specificPaths: string | RegExp[] = [],
    exclude = false
): Promise<boolean> => {
  delete vobject.value.password
  vobject.value.$touch?.()
  validateKey.value = true
  nextTick(() => (validateKey.value = false))
  if (specificPaths.length || props.specific?.length) {
    let includesSpecific = false
    let valid = true
    let specifics = specificPaths.length > 0 ? specificPaths : props.specific
    const errors = vobject.value.$errors
    for (let i = 0; i < errors!.length && valid; i++) {
      const propertyPath = errors![i].$propertyPath
      for (let i = 0; i < specifics.length; i++) {
        const specific = specifics[i]
        if (typeof specific == 'string' && specific === propertyPath) {
          includesSpecific = true
        } else if ((specific as RegExp).test?.(propertyPath)) {
          includesSpecific = true
        }
      }
      if (!exclude && includesSpecific) {
        valid = false
      } else if (exclude && !includesSpecific) {
        valid = false
      }
    }
    return valid
  } else {
    return await vobject.value.$validate?.()
  }
}

const clear = async () => {
  vobject.value.$reset?.()
  clearKey.value = true
  nextTick(() => (clearKey.value = false))
}

function resetValidations() {
  vobject.value.$reset?.()
}

defineExpose({
  clear,
  validate,
  resetValidations,
  vobject

})
</script>
