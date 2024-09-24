<script setup lang="ts">
  import Pay_waysForm from "~m/sale/pay_ways/views/form/Pay_waysForm.vue"
  import {pt} from "~h/types/propTypes"
  const model=ref()
  const props = defineProps({
    action: pt.string.def('Crear'),
    iconTitle: pt.string.def('i-heroicons:plus-20-solid'),
  })
</script>
<template>
  <div class="r-breadcumbs">
    <a-breadcrumb class="h-full">
      <a-breadcrumb-item>
        <router-link :to="{name:'index'}">Inicio</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Sale</a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link :to="{name:'pay_ways_list'}">Pay_ways</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Create</a-breadcrumb-item>
    </a-breadcrumb>
    <div>
      <h1 class="mt-5 flex"><div :class="iconTitle"></div> {{ action }} Pay_ways</h1>
    </div>
  </div>
  <div class="r-container-page">
    <pay_ways-form  v-model="model" :action="model?'update':'create'"
                :show-loading="true">
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </pay_ways-form>
  </div>
</template>

<style lang="scss" scoped>

</style>
