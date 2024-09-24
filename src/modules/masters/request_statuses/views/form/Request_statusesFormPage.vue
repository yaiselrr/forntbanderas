<script setup lang="ts">
  import Request_statusesForm from "~m/masters/request_statuses/views/form/Request_statusesForm.vue"
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
      <a-breadcrumb-item>Masters</a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link :to="{name:'request_statuses_list'}">Request_statuses</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Create</a-breadcrumb-item>
    </a-breadcrumb>
    <div>
      <h1 class="mt-5 flex"><div :class="iconTitle"></div> {{ action }} Request_statuses</h1>
    </div>
  </div>
  <div class="r-container-page">
    <request_statuses-form  v-model="model" :action="model?'update':'create'"
                :show-loading="true">
      <template v-slot:loading_icon>
        <div class="r-loading-default"></div>
      </template>
    </request_statuses-form>
  </div>
</template>

<style lang="scss" scoped>

</style>
