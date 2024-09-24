<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Wp1u_posts from "~m/wp/wp1u_posts/entities/wp1u_posts.model"
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
const wp1u_posts = reactive(new Wp1u_posts(model.value))
const wp1u_postsForm = ref()
const andNew = ref(false)

const {
  loading: loadingWp1u_postsSave,
  toggleEnabled: toggleWp1u_postsSave,
  onResult: onResultWp1u_postsSave,
  enabled: enabledWp1u_postsSave,
  onError: onErrorWp1u_postsSave
} = Wp1u_posts.useStaticSave(wp1u_posts, {defaultEnabled: false})
const  loadingAll= ref(false);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'wp1u_posts_list'})
}
onErrorWp1u_postsSave((error) => {
  openNotificationWithIcon('error', "Error en accion", "Error en accion del elemento")
})
onResultWp1u_postsSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'wp1u_posts_list'})
  else{
    wp1u_postsForm.value?.clear()
    enabledWp1u_postsSave.value=false
    Object.assign(wp1u_posts,new Wp1u_posts(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateWp1u_postsForm() {
  const valid = await wp1u_postsForm.value?.validate()
  if (valid) {
    toggleWp1u_postsSave()
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
          <RForm ref="wp1u_postsForm" :state="wp1u_posts" :validations="Wp1u_posts.validations[action]" :feedbacks="Wp1u_posts.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="wp1u_posts.post_author" path="post_author" label="Post_author"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RDatePicker  :requiredMark="true"  v-model="wp1u_posts.post_date" path="post_date" label="Post_date" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RDatePicker  :requiredMark="true"  v-model="wp1u_posts.post_date_gmt" path="post_date_gmt" label="Post_date_gmt" :allowClear="true" />
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="wp1u_posts.post_content" path="post_content" label="Post_content"/>
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="wp1u_posts.post_title" path="post_title" label="Post_title"/>
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="wp1u_posts.post_excerpt" path="post_excerpt" label="Post_excerpt"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.post_status" path="post_status" label="Post_status"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.comment_status" path="comment_status" label="Comment_status"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.ping_status" path="ping_status" label="Ping_status"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="password" :requiredMark="true" v-model="wp1u_posts.post_password" path="post_password" label="Post_password"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.post_name" path="post_name" label="Post_name"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="wp1u_posts.to_ping" path="to_ping" label="To_ping"/>
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="wp1u_posts.pinged" path="pinged" label="Pinged"/>
                </div>
                <div class="grid-input">
                  <RDatePicker  :requiredMark="true"  v-model="wp1u_posts.post_modified" path="post_modified" label="Post_modified" :allowClear="true" />
                </div>
                <div class="grid-input">
                  <RDatePicker  :requiredMark="true"  v-model="wp1u_posts.post_modified_gmt" path="post_modified_gmt" label="Post_modified_gmt" :allowClear="true" />
                </div>
                <div class="col-span-4">
                   <REditor :requiredMark="true"  v-model="wp1u_posts.post_content_filtered" path="post_content_filtered" label="Post_content_filtered"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="wp1u_posts.post_parent" path="post_parent" label="Post_parent"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.guid" path="guid" label="Guid"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="wp1u_posts.menu_order" path="menu_order" label="Menu_order"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.post_type" path="post_type" label="Post_type"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="wp1u_posts.post_mime_type" path="post_mime_type" label="Post_mime_type"
                          @keyup.enter="validateWp1u_postsForm"/>
                </div>
                <div class="grid-input">
                  <RInput  :onlyNumbers="true" type="number" :requiredMark="true"  v-model="wp1u_posts.comment_count" path="comment_count" label="Comment_count"
                          @keyup.enter="validateWp1u_postsForm"/>
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
                <RButton class=" ml-5" shadow color="primary" :loading="loadingWp1u_postsSave"
                         @click="validateWp1u_postsForm"> {{ textButon }}
                  Wp1u_posts
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
