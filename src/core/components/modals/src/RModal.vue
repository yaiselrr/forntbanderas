<script lang="ts" setup>
import Modal from 'ant-design-vue/es/modal'
import 'ant-design-vue/es/modal/style'
import {pt} from '~h/types/propTypes'
import {AbsoluteLoader} from "~co/components/spinners"
import {ButtonProps} from '../../buttons'
import ModalHeader from './RModalHeader.vue'
import ModalFooter from './RModalFooter.vue'
import AppModalPrimaryHeader from './RModalPrimaryHeader.vue'

const props = defineProps({
  open: pt.bool.def(false),
  maskClosable: pt.bool.def(false),
  loading: pt.bool.def(false),
  showHeader: pt.bool.def(true),
  showFooter: pt.bool.def(true),
  noPadding: pt.bool.def(false),
  primaryHeader: pt.bool.def(false),
  keyboard: pt.bool.def(false),
  headTitle: pt.string,
  okBtnProps: pt.objectOf<ButtonProps>({}),
  cancelBtnProps: pt.objectOf<ButtonProps>({}),
  footerClass: pt.string,
  containerClass: pt.string,
  loadingDescription: pt.string.def('Please wait...'),
  hoverableClose: pt.bool.def(true),
  showCloseIcon: pt.bool.def(true),
  border: pt.bool.def(true),
})

const emit = defineEmits(['update:open', 'cancel', 'close', 'accept'])

function close() {
  emit('update:open', false)
  emit('close')
}
</script>
<template>
  <Modal
      v-model:open="props.open"
      :keyboard="keyboard"
      :bodyStyle="{ padding: '0px', overflow: 'hidden' }"
      :footer="null"
      :title="null"
      :closeIcon="false"
      :afterClose="close"
      :closable="false"
      :maskClosable="maskClosable"
      v-bind="$attrs"
  >
    <div
        :class="[{ 'border-app': border }, containerClass]"
        class="z-10 dark:(backdrop-blur-md) backdrop-blur-sm backdrop-filter blur bg-surface overflow-hidden round-big"
    >
      <AbsoluteLoader :loading="loading" :description="loadingDescription"/>

      <slot v-if="$slots.header" name="header"></slot>

      <AppModalPrimaryHeader
          v-else-if="showHeader && primaryHeader"
          :title="headTitle"
          @close="close"
      />

      <ModalHeader
          v-else-if="showHeader"
          :hoverableClose="hoverableClose"
          :headTitle="headTitle"
          :showCloseIcon="showCloseIcon"
          @close="close"
      />

      <div class="p-5 text-muted" :class="{ 'p-0': noPadding }">
        <slot></slot>
      </div>
      <ModalFooter
          v-if="!$slots.footer && showFooter"
          :class="footerClass"
          :okBtnProps="okBtnProps"
          :cancelBtnProps="cancelBtnProps"
          @accept="$emit('accept')"
          @cancel="$emit('cancel')"
      />
      <slot v-else name="footer"></slot>
    </div>
  </Modal>
</template>
<style lang="scss" scoped></style>
