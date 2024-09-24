<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Wp1u_yoast_indexable from "~m/wp/wp1u_yoast_indexable/entities/wp1u_yoast_indexable.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
import RDatePicker from "~co/components/form/src/datePicker/RDatePicker.vue"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import REditor from "~co/components/form/src/editor/REditor.vue"

const router = useRouter()
const props = defineProps({
  modal: pt.bool.def(false),
  action: pt.string.def('create'),
  loading_text: pt.string.def(''),
  showLoading: pt.bool.def(true),

})
const emit = defineEmits(['closeModal','reload'])
const textButon = props.action == 'create' ? 'Crear' : 'Actualizar'
const model = defineModel()
const wp1u_yoast_indexable = reactive(new Wp1u_yoast_indexable(model.value))
const wp1u_yoast_indexableForm = ref()
const andNew = ref(false)

const {
  loading: loadingWp1u_yoast_indexableSave,
  toggleEnabled: toggleWp1u_yoast_indexableSave,
  onResult: onResultWp1u_yoast_indexableSave,
  enabled: enabledWp1u_yoast_indexableSave,
  onError: onErrorWp1u_yoast_indexableSave
} = Wp1u_yoast_indexable.useStaticSave(wp1u_yoast_indexable, {defaultEnabled: false})
const  loadingAll= ref(false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'wp1u_yoast_indexable_list'})
}
onErrorWp1u_yoast_indexableSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultWp1u_yoast_indexableSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'wp1u_yoast_indexable_list'})
  else{
    wp1u_yoast_indexableForm.value?.clear()
    enabledWp1u_yoast_indexableSave.value=false
    Object.assign(wp1u_yoast_indexable,new Wp1u_yoast_indexable(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateWp1u_yoast_indexableForm() {
  const valid = await wp1u_yoast_indexableForm.value?.validate()
  if (valid) {
    toggleWp1u_yoast_indexableSave()
  }
}
</script>
<template>
  <AbsoluteLoader :h-full="true" class="" :loading="loadingAll"
                  :description="props.loading_text"
                  v-if="showLoading">
    <slot name="loading_icon"></slot>
  </AbsoluteLoader>
  <div class="r-container-form">
      <div class="mt-10 sm:mt-0">
        <div class="shadow overflow-hidden sm:rounded-md">
          <RForm ref="wp1u_yoast_indexableForm" :state="wp1u_yoast_indexable" :validations="Wp1u_yoast_indexable.validations[action]" :feedbacks="Wp1u_yoast_indexable.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.permalink" path="permalink" label="Permalink"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.permalink_hash" path="permalink_hash" label="Permalink_hash"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.object_id" path="object_id" label="Object_id"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_yoast_indexable.object_type" path="object_type" label="Object_type"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.object_sub_type" path="object_sub_type" label="Object_sub_type"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.author_id" path="author_id" label="Author_id"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.post_parent" path="post_parent" label="Post_parent"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.title" path="title" label="Title"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.description" path="description" label="Description"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.breadcrumb_title" path="breadcrumb_title" label="Breadcrumb_title"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.post_status" path="post_status" label="Post_status"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_public</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_public" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_protected</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_protected" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Has_public_posts</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.has_public_posts" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.number_of_pages" path="number_of_pages" label="Number_of_pages"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.canonical" path="canonical" label="Canonical"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.primary_focus_keyword" path="primary_focus_keyword" label="Primary_focus_keyword"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.primary_focus_keyword_score" path="primary_focus_keyword_score" label="Primary_focus_keyword_score"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.readability_score" path="readability_score" label="Readability_score"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_cornerstone</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_cornerstone" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_robots_noindex</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_robots_noindex" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_robots_nofollow</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_robots_nofollow" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_robots_noarchive</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_robots_noarchive" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_robots_noimageindex</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_robots_noimageindex" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Is_robots_nosnippet</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.is_robots_nosnippet" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.twitter_title" path="twitter_title" label="Twitter_title"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.twitter_image" path="twitter_image" label="Twitter_image"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.twitter_description" path="twitter_description" label="Twitter_description"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.twitter_image_id" path="twitter_image_id" label="Twitter_image_id"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.twitter_image_source" path="twitter_image_source" label="Twitter_image_source"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.open_graph_title" path="open_graph_title" label="Open_graph_title"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.open_graph_description" path="open_graph_description" label="Open_graph_description"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.open_graph_image" path="open_graph_image" label="Open_graph_image"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.open_graph_image_id" path="open_graph_image_id" label="Open_graph_image_id"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.open_graph_image_source" path="open_graph_image_source" label="Open_graph_image_source"/>
                </div>
                <div class="col-span-4">
                   <REditor   v-model="wp1u_yoast_indexable.open_graph_image_meta" path="open_graph_image_meta" label="Open_graph_image_meta"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.link_count" path="link_count" label="Link_count"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.incoming_link_count" path="incoming_link_count" label="Incoming_link_count"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.prominent_words_version" path="prominent_words_version" label="Prominent_words_version"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="wp1u_yoast_indexable.blog_id" path="blog_id" label="Blog_id"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.language" path="language" label="Language"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.region" path="region" label="Region"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.schema_page_type" path="schema_page_type" label="Schema_page_type"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text"  v-model="wp1u_yoast_indexable.schema_article_type" path="schema_article_type" label="Schema_article_type"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
<div class="flex  mt-8">
                    <p class="mr-3">Has_ancestors</p>
                    <a-switch v-model:checked="wp1u_yoast_indexable.has_ancestors" checked-children="Si" un-checked-children="No"/>
                  </div>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.estimated_reading_time_minutes" path="estimated_reading_time_minutes" label="Estimated_reading_time_minutes"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.version" path="version" label="Version"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
                <div class="grid-input">
                  <RDatePicker    v-model="wp1u_yoast_indexable.object_last_modified" path="object_last_modified" label="Object_last_modified" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RDatePicker    v-model="wp1u_yoast_indexable.object_published_at" path="object_published_at" label="Object_published_at" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number"   v-model="wp1u_yoast_indexable.inclusive_language_score" path="inclusive_language_score" label="Inclusive_language_score"
                          @keyup.enter="validateWp1u_yoast_indexableForm"/>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6 ">
            <div class="r-footer-form">
              <div class="flex">
                <div v-if="action==='create'" class="flex-none items-center">
                  <ACheckbox v-model:checked="andNew" aria-describedby="offers-description" id="andNew"/>
                </div>
                <div v-if="action==='create'" @click="andNew.value!==andNew.value"
                     class="flex text-sm absolute mx-[2rem] my-[4px] ">
                  <label for="andNew" class="font-bold text-gray-700 dark:text-slate-200 !cursor-pointer ">Insertar y
                    nuevo <span id="andNew-description" class="ml-1 text-muted">Se insertara un elemento y reiniciara el formuario</span></label>
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton class=" ml-5" shadow color="primary" :loading="loadingWp1u_yoast_indexableSave"
                         @click="validateWp1u_yoast_indexableForm"> {{ textButon }}
                  Wp1u_yoast_indexable
                </RButton>
                <RButton class=" ml-5" shadow color="primary"
                         @click="cancel"> Cancelar
                </RButton>
              </div>
             </div>
            </div>
          </RForm>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
