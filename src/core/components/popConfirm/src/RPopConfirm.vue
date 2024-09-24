<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {AbsoluteLoader} from "~co/components/spinners/"
import {RButton} from "~co/components/buttons"
import {RPopover} from "~co/components/popover"
import {DangerCircle, InfoCircle, SuccessCircle, WarningCircle} from '~c/icons/circle'
import {usePopup} from '~h/component/popup/usePopup'
import {usePopupContainer} from '~h/component/popup/usePopupContainer'

const props = defineProps({
  type: pt.oneOf(['danger', 'warning', 'info']).def('warning'),
  okButtonProps: pt.object,
  cancelButtonProps: pt.object,
  title: pt.string,
  okText: pt.string.def('Ok'),
  cancelText: pt.string.def('Cancel'),
  confirm: pt.func,
  cancel: pt.func,
  loadingText: pt.string,
  placement: pt.string.def('topLeft'),
  loading: pt.bool,
  getPopupContainer: pt.func,
})

const {confirm, cancel, loading} = toRefs(props)

const Icon = computed!(() => {
  switch (props.type) {
    case 'danger':
      return DangerCircle
    case 'warning':
      return WarningCircle
    case 'info':
      return InfoCircle
    case 'success':
      return SuccessCircle
  }
})

const {toggleOpen, target, visible, toggle} = usePopup({loading})

//   const target = ref(null)
//   const isOpenedFromTarget = ref(false)
//   const [visible, toggle] = useToggle(false)

//   onClickOutside(target, async (_e) => {
//     await delay(50)
//     if (visible.value && !isOpenedFromTarget.value && !props.loading) {
//       nextTick(() => toggle(false))
//     }
//   })

//   function toggleOpen() {
//     isOpenedFromTarget.value = true
//     toggle()

//     setTimeout(() => {
//       isOpenedFromTarget.value = false
//     }, 100)
//   }

async function onCancel() {
  await cancel?.value?.()
  toggle(false)
}

async function onOk() {
  await confirm?.value?.()
  toggle(false)
}

const {getPopupContainerFn, triggerMode, container} = usePopupContainer(
    'click',
    props.getPopupContainer
)
</script>
<template>
  <div ref="container" class="relative">
    <RPopover
        :getPopupContainer="getPopupContainerFn"
        :trigger="triggerMode"
        overlayClassName="!w-300px"
        :visible="visible"
        class="p-0"
        v-bind="$attrs"
        :placement="placement"
        :withPadding="false"
    >
      <template #content>
        <div class="relative overflow-hidden">
          <AbsoluteLoader
              spinnerSize="20"
              descriptionClass="!mt-6"
              :loading="loading"
              :description="loadingText"
          />
          <div ref="target" class="pop-container" style="padding: 12px 16px">
            <div class="flex">
              <Icon iconSize="1em" class="mt-0.7"/>
              <div class="ml-2">
                <span v-if="title" class="dark:text-slate-300">{{ title }}</span>
                <slot v-else-if="$slots.title" name="title"></slot>
              </div>
            </div>
            <div class="flex space-x-2 items-end justify-end mt-3">
              <RButton size="xs" v-bind="cancelButtonProps" color="neutro" @click="onCancel">
                {{ cancelText }}
              </RButton>
              <Button size="xs" v-bind="okButtonProps" @click="onOk">
                {{ okText }}
              </Button>
            </div>
          </div>
        </div>
      </template>

      <div @click.capture="toggleOpen">
        <slot></slot>
      </div>
    </RPopover>
  </div>
</template>
<style lang="scss" scoped>
.pop-container {
  @apply bg-white dark:bg-slate-900;
}
</style>
