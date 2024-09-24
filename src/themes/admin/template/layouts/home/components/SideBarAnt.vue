<script lang="ts" setup>
import { reactive, watch } from 'vue'
import type { ItemType, MenuProps } from 'ant-design-vue'
import { pt } from '~h/types/propTypes'
import menuJson from '../../../../menu/menu.json'
import menuJsonUserAdvanced from '../../../../menu/menu_user_advanced.json'
import menuJsonUser from '../../../../menu/menu_user.json'
import { useRouter } from 'vue-router'
import { siteStore } from '~cf/store/site.store'

const router = useRouter()
const site = siteStore()

const props = defineProps({
  class: pt.string,
  classHeader: pt.string,
  width: pt.string.def('280px')
})

const state = reactive({
  rootSubmenuKeys: [],
  openKeys: [],
  selectedKeys: [],
  collapsed: false,
  preOpenKeys: []
})

const menu = menuJson
  .filter((e) => !e.hidden)
  .map((e, index) => {
    const children = e.childrens
      .filter((e) => !e.hidden)
      .map((s, sindex) => {
        return {
          label: s.caption,
          key: 's-' + (index + 1) + sindex,
          icon: h!('div', { class: 'i-mdi:circle-small w-1em h-1em' }),
          target: s.name
        }
      })
    state.rootSubmenuKeys.push('m-' + (index + 1))
    return {
      label: e.caption,
      key: 'm-' + (index + 1),
      icon: h!('div', { class: e.icon }),
      children
    }
  })

const itemsMenu: ItemType[] = reactive(menu)
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  }
)
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.preOpenKeys
}
const handleClick: MenuProps['onClick'] = (e) => {
  router.push({ name: e.item.target })
}
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1)
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : []
  }
}
</script>
<template>
  <a-layout class="z-10 shadow-2xl h-100%">
    <a-layout-sider
      :class="{
        'ant-layout-sider-normal': !state.collapsed
      }"
      v-model:collapsed="state.collapsed"
      :trigger="null"
      collapsible
    >
      <div class="h-full">
        <div
          :class="[
            props.classHeader,
            {
              'p-10': !state.collapsed
            }
          ]"
          class="flex items-center justify-start flex-none bg-primary-100 h-12 w-full p-6"
        >
          <img
            alt="bandera_logo"
            v-if="!state.collapsed"
            class="h-10 mt-4"
            src="/src/themes/admin/assets/img/logo.png"
          />
          <img
            alt="bandera_logo"
            v-else
            class="h-10 mt-4"
            src="/src/themes/admin/assets/img/only_logo.png"
          />
          <div
            class="flex bg-primary-900 hover:bg-primary-900 border-1 border-solid !text-white rounded-full w-2em h-2em absolute cursor-pointer transition-all duration-200"
            :class="{
              'ml-60': !state.collapsed,
              'ml-12': state.collapsed
            }"
            @click="toggleCollapsed"
          >
            <div
              class="i-heroicons:chevron-left-20-solid w-2em h-2em !text-white bg-white hover:bg-white-500 shadow-lg"
              v-if="!state.collapsed"
            ></div>
            <div
              class="i-heroicons:chevron-right-20-solid w-2em h-2em !text-white bg-white hover:bg-white-500 shadow-lg"
              v-else
            ></div>
          </div>
        </div>
        <div :class="props.class" class="p-3 flex items-center align-center">
          <span
            class="font-bold px-3 uppercase text-12px cursor-pointer"
            v-if="!state.collapsed"
          ></span>
        </div>
        <a-menu
          id="sidebarant"
          v-model:selectedKeys="state.selectedKeys"
          :open-keys="state.openKeys"
          class="h-full"
          :class="props.class"
          v-bind="props"
          mode="inline"
          :inline-collapsed="state.collapsed"
          :items="itemsMenu"
          @click="handleClick"
          @openChange="onOpenChange"
        >
        </a-menu>
      </div>
    </a-layout-sider>
  </a-layout>
</template>
<style scoped>
.ant-layout-sider-normal {
  flex: 0 0 260px !important;
  max-width: 260px !important;
  min-width: 260px !important;
  width: 260px !important;
}
</style>
