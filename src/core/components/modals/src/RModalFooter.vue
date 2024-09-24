<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {buttonColorDefinition, buttonTypeDefinition} from '../../buttons'
import type {ButtonProps} from '../../buttons'
import {RButton} from '../../buttons'

const emit = defineEmits(['cancel', 'accept'])

const props = defineProps({
  okBtnProps: pt.objectOf<ButtonProps>({}),
  cancelBtnProps: pt.objectOf<ButtonProps>({}),
  center: pt.bool.def(false),
  showOkButton: pt.bool.def(true),
  showCancelButton: pt.bool.def(true),
})
const {okBtnProps, cancelBtnProps} = toRefs(props)
const {text = 'Accept', ...okProps} = okBtnProps.value
const {
  color: cancelColor = 'neutro',
  text: cancelText = 'Cancel',
  ...cancelProps
} = cancelBtnProps.value
</script>
<template>
  <div class="flex px-4 py-3" :class="{ 'justify-center': center }">
    <RButton
        v-if="showCancelButton"
        v-bind="cancelProps"
        :class="{ 'ml-auto': !center }"
        :color="cancelColor"
        @click="$emit('cancel')"
    >
      {{ cancelText }}
    </RButton>

    <RButton v-if="showOkButton" v-bind="okProps" class="ml-3" @click="$emit('accept')">
      {{ text }}
    </RButton>
  </div>
</template>
<style lang="scss" scoped></style>
