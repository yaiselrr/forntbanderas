<script setup lang="ts">
import {pt} from "~h/types/propTypes"
import {paginationProps} from "ant-design-vue/es/pagination"

const props = defineProps({
  ...paginationProps(),
  pageSizeOptions: pt.array.def(['2', '10', '20', '30', '40']),
  size: pt.string.def('small'),
  totalElements: pt.number
})
</script>
<template>
  <div class="flex flex-row items-center pt-4 mt-auto">
    <div class="ml-auto">
      <APagination
          v-bind="props"
          :size="size"
          :total="totalElements"
          show-size-changer
          show-quick-jumper
          :defaultCurrent="1"
          :show-total="(total) => `1-10 of ${total} items`"
          :pageSizeOptions="pageSizeOptions"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
