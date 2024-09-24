<script setup lang="ts">
import Breadcrump from '~co/components/breadcrump/breadcrump.vue'
import UsersTab from "~m/security/users/views/list/UsersTab.vue"
import ClientsTab from "~m/security/users/views/list/ClientsTab.vue"
import DealersTab from "~m/security/dealers/views/list/DealersTab.vue"
import Loader from "~t/admin/template/layouts/home/components/Loader.vue"

const activeKey = ref('1')
const arrayBreadcrumb = reactive([
  {
    title: 'Seguridad',
    disabled: false,
    href: '/guarantee'
  },
  {
    title: 'Usuarios',
    disabled: true
  }
])

</script>
<template>
  <div class="r-breadcumbs">
    <Breadcrump :breadcrumb="arrayBreadcrumb"/>
    <div>
      <h1 class="mt-5">Usuarios</h1>
    </div>
  </div>
  <div class="r-container-list">
    <a-tabs v-model:activeKey="activeKey" class="w-full" type="card">
      <a-tab-pane key="1" tab="Administradores">
        <users-tab/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Distribuidores">
        <dealers-tab/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Clientes">
        <clients-tab/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
