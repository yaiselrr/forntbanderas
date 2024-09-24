<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  tags: pt.arrayOf(pt.any).def([]),
  textKey: pt.string.isRequired,
  idKey: pt.string.isRequired,
  maxTagCount: pt.number,
  maxTagTextLength: pt.number,
})

const {tags, maxTagCount, maxTagTextLength} = toRefs(props)

const emit = defineEmits(['removeTag'])

function removeTag(tag) {
  emit('removeTag', tag[props.idKey])
}

const exceedingCount = computed!(() => {
  if (maxTagCount.value) {
    return (tags.value?.length || 0) - maxTagCount.value
  }
  return 0
})

const visibleTags = computed!(() => {
  return maxTagCount.value ? tags.value?.slice(0, maxTagCount.value) : tags.value
})
</script>
<template>
  <div class="flex flex-row flex-wrap gap-x-1 gap-y-1.4 pl-1">
    <span
        v-for="tag in visibleTags"
        :key="tag[idKey]"
        class="bg-gray-200 inline-flex rounded w-fit-content mr-1 items-center"
        w:dark="bg-gray-700"
    >
      <span
          v-if="maxTagTextLength"
          style="text-overflow: ellipsis; white-space: nowrap"
          class="block px-2"
      >
        <a-tooltip v-if="tag[textKey].length > maxTagTextLength" :title="tag[textKey]">
          <span> {{ tag[textKey].substring(0, maxTagTextLength) }}... </span>
        </a-tooltip>
        <span v-else>{{ tag[textKey] }} </span>
      </span>
      <span v-else style="text-overflow: ellipsis; white-space: nowrap" class="block">
        <a-tooltip :title="tag[textKey]"> {{ tag[textKey] }}</a-tooltip>
      </span>
      <span
          w:hover="bg-gray-300"
          w:dark="bg-gray-700 border-l-gray-700"
          class="border-l-gray-300 border-l h-full items-center justify-center px-1 rounded-r flex"
          @click.prevent.stop="removeTag(tag)"
      >
        <div class="i-heroicons:x-mark text-gray-500 text-xs" style="width: 1.2em" w:dark="text-gray-300"/>
      </span>
    </span>
    <span
        v-if="exceedingCount > 0"
        w:dark="bg-gray-700 text-primary-300"
        class="bg-gray-200 text-primary-700 inline-flex w-fit-content rounded px-2"
    >
      +{{ exceedingCount }} ...
    </span>
  </div>
</template>
<style lang="scss" scoped></style>
