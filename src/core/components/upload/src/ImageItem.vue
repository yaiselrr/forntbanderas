<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import {Popconfirm} from "ant-design-vue"

const props = defineProps({
  img: pt.string,
  id: pt.oneOfType([pt.number, pt.string]),
  withPopover: pt.bool.def(false),
  loadingRemove: pt.bool.def(false),
})

const emit = defineEmits(['remove'])
</script>
<template>
  <div class="!rounded-2xl flex">
    <img :src="img" class="!rounded-2xl h-full w-full" style="object-fit: contain"/>

    <div v-if="withPopover" class="absolute -top-2 -right-2">
      <PopConfirm
          title="¿Seguro que desea eliminar la imagen?"
          :confirm="() => $emit('remove')"
          placement="left"
          :ok-button-props="{ color: 'danger' }"
          loading-text="Eliminando imagen..."
      >
        <div
            w:hover="bg-red-700"
            class="bg-red-500 h-8 w-8 shadow border-white border-2 rounded-full flex items-center justify-center"
        >
          <div class="i-heroicons:x-mark text-white"/>
        </div>
      </PopConfirm>
    </div>

    <div
        v-else
        w:hover="bg-red-700"
        class="bg-red-500 h-8 w-8 absolute shadow border-white border-2 -top-2 -right-2 rounded-full flex items-center justify-center"
        @click="$emit('remove', id)"
    >
      <div class=" i-heroicons:x-mark text-white"/>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
