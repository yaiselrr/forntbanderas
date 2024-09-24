<script setup lang="ts">
  import Wp1u_postmetaForm from "~m/wp/wp1u_postmeta/views/form/Wp1u_postmetaForm.vue"
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
      <a-breadcrumb-item>Wp</a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link :to="{name:'wp1u_postmeta_list'}">Wp1u_postmeta</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Create</a-breadcrumb-item>
    </a-breadcrumb>
    <div>
      <h1 class="mt-5 flex"><div :class="iconTitle"></div> {{ action }} Wp1u_postmeta</h1>
    </div>
  </div>
  <div class="r-container-page">
    <wp1u_postmeta-form  v-model="model" :action="model?'update':'create'"
                :show-loading="true">
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </wp1u_postmeta-form>
  </div>
</template>

<style lang="scss" scoped>

</style>
