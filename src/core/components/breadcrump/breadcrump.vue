<template>
    <div>
        <a-breadcrumb class="h-full">
            <a-breadcrumb-item>
              <router-link :to="{name:'index'}" >
                <div class="flex justify-center items-center">
                  <div class="i-heroicons:home w-1em h-1em mr-1"></div>
                  <p>Inicio</p>
                </div>
              </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
              {{ item.title }}
            </a-breadcrumb-item>
          </a-breadcrumb>
      
    </div>
</template>

<script setup>
    defineProps({
        breadcrumb: {
            type: Array,
            default: () => {},
        },
    })    

</script>

<style scoped>

</style>