<script setup lang="ts">
  import Product_categoryForm from "~m/manage/product_category/views/form/Product_categoryForm.vue"
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
      <a-breadcrumb-item>Manage</a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link :to="{name:'product_category_list'}">Product_category</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Create</a-breadcrumb-item>
    </a-breadcrumb>
    <div>
      <h1 class="mt-5 flex"><div :class="iconTitle"></div> {{ action }} Product_category</h1>
    </div>
  </div>
  <div class="r-container-page">
    <product_category-form  v-model="model" :action="model?'update':'create'"
                :show-loading="true">
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </product_category-form>
  </div>
</template>

<style lang="scss" scoped>

</style>
