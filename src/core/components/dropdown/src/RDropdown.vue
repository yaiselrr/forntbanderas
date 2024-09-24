<script lang="ts" setup>
import DropdownItem from './RDropdownItem.vue'
import ADropdown from 'ant-design-vue/es/dropdown'
import Divider from 'ant-design-vue/es/divider'
import {pt} from '~h/types/propTypes'
import {IDropdownItem} from '~co/components/dropdown'
import {usePopupContainer} from "~c/components/popup/usePopupContainer"
import {usePopup} from "~c/components/popup/usePopup"
import 'ant-design-vue/es/divider/style'
import 'ant-design-vue/es/dropdown/style'
import './styles.scss'
import {dropdownPlacement} from '../'

const props = defineProps({
  items: pt.arrayOf(
      pt.shape<IDropdownItem>({
        icon: pt.any,
        text: pt.string,
        cb: pt.func,
        separator: pt.bool,
      })
  ),

  trigger: pt.oneOf(['hover', 'click', 'contextmenu']).def('click'),
  getPopupContainer: pt.func,
  placement: pt.oneOf<typeof dropdownPlacement>(dropdownPlacement).def('bottom'),
})
const emit = defineEmits(['selected'])

function clicked(item) {
  emit('selected', item)
  item.cb()
}

const {items, trigger, getPopupContainer} = toRefs(props)

const {container, triggerMode, getPopupContainerFn} = usePopupContainer(
    trigger,
    getPopupContainer
)

const {toggleOpen, target, triggerTarget, visible} = usePopup({trigger})
</script>
<template>
  <div ref="container" class="flex z-10 relative">
    <ADropdown
        :open="visible"
        :getPopupContainer="getPopupContainerFn"
        v-bind="$attrs"
        :placement="placement"
        :trigger="triggerMode"
    >
      <div ref="triggerTarget" class="dropdown-slot-container" @click.capture="toggleOpen">
        <slot></slot>
      </div>

      <template #overlay>
        <div ref="target">
          <div class="bg-white dark:border-white app-dropdown rounded-lg py-1.5 shadow-md min-w-50">
            <template v-if="items">
              <template v-for="(item, i) in items" :key="i">
                <Divider v-if="item.separator" class="!mb-1 !mt-1.5"/>
                <DropdownItem v-else @click="clicked(item)">
                  <template #icon>
                    <component
                        :is="item.icon"
                        class="group-hover:text-white text-primary-600 dark:text-primary-500"
                    />
                  </template>
                  {{ item.text }}
                </DropdownItem>
              </template>
            </template>
            <slot v-else name="content"></slot>
          </div>
        </div>
      </template>
    </ADropdown>
  </div>
</template>
