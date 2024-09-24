<script lang="ts" setup>
import {pt} from '~h/types/propTypes'
import type {TreeProps} from 'ant-design-vue'
import {onMounted, ref} from 'vue'

const props = defineProps({
  data: pt.arrayOf(pt.object).isRequired | undefined
})

const array = ref([])
const expandedKeys = ref<string[]>(['0-0', '0-1'])
const selectedKeys = ref<string[]>([])
let treeData: TreeProps['treeData'] = []

const extractKeys = (data) => {
  const keys = data.map((item, index) => `0-${index}`)
  return keys
}

const handleData = (data) => {
  array.value = []
  Object.values(props.data).forEach((element, index) => {
    let objParent = {
      title: '',
      key: '',
      children: []
    }
    objParent.title = element.field
    objParent.key = `0-${index}`
    if (element.type === 'object') {
      if (Array.isArray(element.fields))
        Object.values(element.fields).forEach((item, index) => {
          objParent.children.push({title: item.field, key: `0-${index}-${index}`, isLeaf: true})
        })
    }

    array.value.push(objParent)
  })
}
const refresh=()=>{
  handleData(props.data)
  expandedKeys.value = extractKeys(props.data)
  treeData = array.value
}
watch!(props.data, () => {
  if (props.data != null) {
    refresh()
  }
})
onMounted(()=>{
  refresh()
})
</script>

<template>
  <div ref="container" class="overflow-hidden mt-5">
    <a-directory-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        multiple
        :tree-data="treeData"
    ></a-directory-tree>
  </div>
</template>
