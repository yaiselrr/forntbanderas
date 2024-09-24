<script setup lang="ts">
import SideBarAnt from "~t/admin/template/layouts/home/components/SideBarAnt.vue"
import NavBar from "~t/admin/template/layouts/home/components/NavBar.vue"
import {siteStore} from "~cf/store/site.store"

const site = siteStore()
import { h } from 'vue';
import Loader from "~t/admin/template/layouts/home/components/Loader.vue"
const indicator = h(Loader, {
  style: {
    fontSize: '24px',
  },
  spin: true,
});
</script>
<template>
  <div class="flex h-full overflow-hidden">
    <nav-bar/>
    <side-bar-ant :class-header="'bg-primary-950'" class="bg-primary-950 text-white"/>
    <div class="w-full">
      <a-spin :spinning="site.loading" :indicator="indicator">
        <div class="border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-12">
          <router-view/>
        </div>
      </a-spin>
    </div>
  </div>
</template>

