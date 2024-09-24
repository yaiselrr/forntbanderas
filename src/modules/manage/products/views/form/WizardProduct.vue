<script setup lang="ts">
import {ref} from 'vue'
import {createVNode} from "vue-demi"
import SingleStep from "~co/components/steps/src/componnets/steps/SingleStep.vue"
import {pt} from "~h/types/propTypes"
import Step1 from "~m/manage/products/views/form/steps/Step1.vue"
import Step2 from "~m/manage/products/views/form/steps/Step2.vue"
import Step3 from "~m/manage/products/views/form/steps/Step3.vue"
import Step4 from "~m/manage/products/views/form/steps/Step4.vue"
import Step5 from "~m/manage/products/views/form/steps/Step5.vue"
import Step6 from "~m/manage/products/views/form/steps/Step6.vue"

const current = ref<number>(0)
const props = defineProps({
  modal: pt.bool.def(false),
  action: pt.string.def('create'),
  loading_text: pt.string.def(''),
  showLoading: pt.bool.def(true),
})
const steps = [
  {
    description: createVNode(SingleStep, {
      icon: {value: 'i-heroicons:check-circle-solid'},
      title: {value: 'Información esencial'},
      numberStep: {value: '1'},
      subtitle: {value: 'Información esencial del producto'}
    }),
    content: createVNode(Step1, {
      modal: false,
      action: props.action,
      loading_text: props.loading_text,
      showLoading: props.showLoading
    })
  },
  {
    description: createVNode(SingleStep, {
      icon: {value: 'i-heroicons:check-circle-solid'},
      title: {value: 'Descripción'},
      numberStep: {value: '2'},
      subtitle: {value: 'Descripción del producto'}
    }),
    content: createVNode(Step2, {
      modal: false,
      action: props.action,
      loading_text: props.loading_text,
      showLoading: props.showLoading
    })
  },
  {
    description: createVNode(SingleStep, {
      icon: {value: 'i-heroicons:check-circle-solid'},
      title: {value: 'Datos del producto'},
      numberStep: {value: '3'},
      subtitle: {value: 'Datos del producto'}
    }),
    content: createVNode(Step3, {
      modal: false,
      action: props.action,
      loading_text: props.loading_text,
      showLoading: props.showLoading
    })
  },
  {
    description: createVNode(SingleStep, {
      icon: {value: 'i-heroicons:check-circle-solid'},
      title: {value: 'Imágenes'},
      numberStep: {value: '04'},
      subtitle: {value: 'Imágenes del producto'}
    }),
    content: createVNode(Step4, {
      modal: false,
      action: props.action,
      loading_text: props.loading_text,
      showLoading: props.showLoading
    })
  },
  {
    description: createVNode(SingleStep, {
      icon: {value: 'i-heroicons:check-circle-solid'},
      title: {value: 'Palabras claves'},
      numberStep: {value: '05'},
      subtitle: {value: 'Palabras claves del producto'}
    }),
    content: createVNode(Step5, {
      modal: false,
      action: props.action,
      loading_text: props.loading_text,
      showLoading: props.showLoading
    })
  },
  // {
  //   description: createVNode(SingleStep, {
  //     icon: {value: 'i-heroicons:check-circle-solid'},
  //     title: {value: 'Sexto Paso'},
  //     numberStep: {value: '06'},
  //     subtitle: {value: 'subtitulo'}
  //   }),
  //   content: createVNode(Step6, {
  //     modal: false,
  //     action: props.action,
  //     loading_text: props.loading_text,
  //     showLoading: props.showLoading
  //   })
  // },
]
</script>
<template>
  <div :style="{ height: '650px' }">
    <a-steps
        v-model:current="current"
        type="navigation"
        size="large"
        :items="steps"
    >
    </a-steps>
    <div class="steps-content">
      <keep-alive>
        <component :is="steps[current].content"></component>
      </keep-alive>
    </div>
  </div>
</template>

<style lang="scss">
.ant-steps-item-tail, .ant-steps-item-icon {
  display: none !important;
}

:where(.css-dev-only-do-not-override-1hsjdkk).ant-steps.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {
  max-width: 100%;
  white-space: normal;
}
</style>
