<script setup lang="ts">
import {siteStore} from "~cf/store/site.store"

const {logout} = inject('auth')
const site = siteStore()
</script>
<template>
  <!-- Main navigation container -->
  <nav
      class="z-0 fixed top-0 left-0 right-0 shadow-md transition-all text-black duration-300 bg-primary-950 text-white h-12 lg:pl-64">
    <div class="flex w-full h-full flex-wrap items-center justify-between">
      <div class="relative flex items-center w-full h-full">
        <div class="flex items-center justify-end w-full">
          <div
              class="flex"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end">
            <!-- Second dropdown trigger -->
            <a
                class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-twe-dropdown-toggle-ref
                aria-expanded="false">
              <!-- User avatar -->
              <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  class="rounded-full"
                  style="height: 25px; width: 25px"
                  alt=""
                  loading="lazy"/>
            </a>

          </div>
          <div class=" cursor-pointer px-3">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                {{ site.user.email }}
              </a>
              <template #overlay>
                <a-menu @click="logout">
                  <a-menu-item key="3">
                    <div class="flex items-center">
                      <div class="i-mdi:exit-run w-1em h-1em"></div>
                      <p class="px-3">Salir</p>
                    </div>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>
