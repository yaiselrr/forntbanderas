<script setup lang="ts">
import {pt} from "~h/types/propTypes"

const props = defineProps({
  title: pt.object.def({
    value: '',
    classTitle: ''
  }),
  subtitle: pt.object.def({
    value: '',
    classSubTitle: ''
  }),
  icon: pt.object.def({
    value: '',
  }),
  numberStep: pt.object.def({
    value: '02',
    classTitle: ''
  }),
})
</script>
<template>
  <li class="relative overflow-hidden lg:flex-1">
    <div
        class="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0 dark:border-slate-700">
      <a class="h-full w-full">
                    <span
                        class="absolute top-0 left-0 w-1 h-full w-full bg-transparent  dark:group-hover:bg-slate-500 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                    ></span>
        <span class="px-6 py-2 flex items-start text-sm font-bold">
                      <span class="flex-shrink-0" v-if="icon.value!==''">
                        <span
                            class="w-10 h-10 flex items-center justify-center bg-primary-600 rounded-full"
                        >
                          <div class="w-6 h-6 text-white" :class="icon.value"/>
                        </span>
                      </span>
                      <span class="flex-shrink-0" v-if="numberStep.value!==''">
                        <span
                            class="w-10 h-10 flex items-center justify-center border-2 border-primary-600 rounded-full"
                        >
                          <span class="text-primary-600">{{ numberStep.value }}</span>
                        </span>
                      </span>
                      <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
                        <span class="text-xs font-bold tracking-wide uppercase">{{ title.value }}</span>
                        <span class="text-sm font-bold text-gray-500">
                          {{ subtitle.value }}
                        </span>
                      </span>
                    </span>
      </a>
    </div>
  </li>
</template>

<style lang="scss">
.ant-steps-item {
  @apply max-h-[100.5px] min-h-[100.5px]
}

.ant-steps-item:not(.ant-steps-item-active):hover {
  @apply border-b-blue-200 border-r-[#00000040]
}


.ant-steps-item-container {
  @apply w-full h-full
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-steps.ant-steps-navigation .ant-steps-item-container {
  display: inline-block;
  height: 100%;
  margin-inline-start: 0px;
  padding-bottom: 2px;
  text-align: start;
  transition: opacity 0.3s;
}

.ant-steps-item-content {
  @apply w-full h-full
}

.ant-steps {
  @apply bg-white
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-steps.ant-steps-navigation .ant-steps-item::after {
  position: absolute;
  top: calc(50% - 6px);
  inset-inline-start: 100%;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-top: 1px solid rgba(40, 95, 187);
  border-bottom: none;
  border-inline-start: none;
  border-inline-end: 1px solid rgb(40, 95, 187);
  transform: translateY(-50%) translateX(-50%) rotate(45deg);
  content: "";
}
.ant-steps.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {
  max-width: 100%;
  white-space: normal;
}

</style>
