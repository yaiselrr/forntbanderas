<script setup lang="ts">
import ResponsiveTag from "~co/components/responsive/ResponsiveTag.vue"
import esEs from 'ant-design-vue/es/locale/es_Es'
import {siteStore} from "~cf/store/site.store"

const site = siteStore()
const auth = ref(false)
provide!("auth", {logout})

async function logout() {
  await site.logout()
}

onMounted!(() => {
  auth.value = !!site.user
})
</script>
<template>
  <a-config-provider :locale="esEs">
    <router-view v-if="auth" ref="homeCmp" v-slot="{ Component }">
      <template v-if="Component">
        <transition>
          <component
              :is="Component"
              :key="$route.path"
          />
        </transition>
      </template>
    </router-view>
    <router-view v-else name="login" ref="loginCmp" v-slot="{ Component }">
      <template v-if="Component">
        <transition
            name="fade"
            mode="out-in"
        >
          <component
              :is="Component"
              :key="$route.path"
          />
        </transition>
      </template>
    </router-view>
  </a-config-provider>
  <responsive-tag/>
</template>

<style lang="scss">
.router-enter-active,
.router-leave-active {
  transition: opacity 5.3s ease;
}

.router-enter-from,
.router-leave-to {
  opacity: 0;
}
</style>

