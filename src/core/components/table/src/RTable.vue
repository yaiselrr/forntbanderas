<script setup lang="ts">
import ATable, {tableProps} from "ant-design-vue/es/table"
import {AbsoluteLoader} from "~co/components/spinners/index"
import "ant-design-vue/es/table/style"
import "ant-design-vue/es/pagination/style"
import {pt} from "~h/types/propTypes"
import {computed, ref, unref} from "vue"
import {Table} from "ant-design-vue"
import {TableRowSelection} from "ant-design-vue/es/table/interface"
import RPagination from "~co/components/table/src/components/RPagination.vue"

const rowClassName = (_record, index) => (index % 2 === 1 ? "table-striped" : null)
const table = ref(null)
const emit = defineEmits(['changePagination'])

const props = defineProps({
  ...tableProps(),
  columns: pt.arrayOf(pt.object).isRequired,
  ref_name: pt.string,
  on_select: pt.func.def(() => null),
  on_select_change: pt.func,
  size: pt.string.def('small'),
  type_selection: pt.string.def('checkbox'),
  data: pt.arrayOf(pt.object).isRequired | undefined,
  id_element: pt.number | pt.string,
  loading_icon: pt.bool.isRequired,
  pagination: pt.bool.def(true),
  refresh: pt.func,
  selectedRowKeys: pt.any.def(null),
  totalElements: pt.number,
  row_selection: pt.any.def(null),
  has_selection: pt.bool.def(false),
  currentPage: pt.number,
  paginate: pt.bool,
  pageSize: pt.number,
  expanded: pt.bool.def(false),
  selection_type: pt.string.def("checkbox"),
  striped: pt.bool.def(true),
  loading_text: pt.string.def("Cargando..."),
  indicator: pt.object,
  selection: pt.arrayOf(pt.object).def([]),
  hideDefaultSelections: pt.bool.def(true),
  bordered: pt.bool.def(true),
}) as any
const selectedRowKeys = props.selectedRowKeys || ref<any[]>([]) // Check here to configure the default column
const onSelectChange = props.on_select_change ? props.on_select_change : (changableRowKeys: string[]) => {
  selectedRowKeys.value = changableRowKeys
}
const rowSelection: ComputedRef<TableRowSelection<any>> = computed!(() => {
  return {
    selectedRowKeys: props.selectedRowKeys ? props.selectedRowKeys : unref(selectedRowKeys),
    type: props.type_selection,
    onChange: onSelectChange,
    onSelect: props.on_select,
    hideDefaultSelections: props.hideDefaultSelections,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_NONE,
      ...props.selection
    ],
  } as TableRowSelection
})
const clearSelection = () => {
  selectedRowKeys.value = []
}
defineExpose({
  selectedRowKeys,
  onSelectChange,
  rowSelection,
  clearSelection
})
</script>
<template>
  <div ref="container" class="overflow-hidden">
    <AbsoluteLoader class="top-70px" :loading="loading_icon" :description="props.loading_text">
      <slot name="loading_icon"></slot>
    </AbsoluteLoader>
    <ATable
        ref="table"
        v-bind="props"
        :size="size"
        :row-selection="props.has_selection?props.row_selection||rowSelection:null"
        :data-source="props.data"
        :class="{ 'ant-table-striped': props.striped }"
        :row-class-name="rowClassName"
        :pagination="{
          onChange:(e)=>{
            console.log('Change',e)
          },
           onShowSizeChange: (e)=>{console.log('onShowSizeChange',e)},
          'onUpdate:current': (e)=>{console.log( 'onUpdate:current',e)},
          'onUpdate:pageSize': (e)=>{
            emit('changePagination',{e})
            console.log('onUpdate:pageSize',e)
          }
          }" ,
        :rowKey="record => record[props.id_element]"
    >
      <template #bodyCell="{ column, record }">
        <template v-for="(_, name) in $slots" :key="name">
          <slot v-if="column.key===name " v-bind="{ column, record }" :name="name"></slot>
        </template>
      </template>
      <template v-if="props.expanded" #expandedRowRender="{ record }">
        <slot name="expandedRowRender" :record="record"></slot>
      </template>
    </ATable>
  </div>


</template>

<style lang="scss">
.ant-table-wrapper {
  @apply rounded-[8px] #{!important}
}
.ant-table-row{
  height:5px!important;
}

</style>
