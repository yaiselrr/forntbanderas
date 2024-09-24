<script setup lang="ts">
import RForm from "~co/components/form/validationForm/RForm.vue"
import Users from "~m/security/users/entities/users.model"
import RButton from "~co/components/buttons/src/RButton.vue"
import {pt} from "~h/types/propTypes"
import AbsoluteLoader from "~co/components/spinners/src/AbsoluteLoader.vue"
import {openNotificationWithIcon} from "~h/utils/utils"
import {useRouter} from "vue-router"
import {RInput} from "~co/components/form"
import RSelect from "~co/components/form/src/select/RSelect.vue"
import REditor from "~co/components/form/src/editor/REditor.vue"
import Roles from "~m/security/roles/entities/roles.model"

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
const users = reactive(new Users(model.value))
const usersForm = ref()
const andNew = ref(false)
const {loading: loadingRoles, result: resultRoles} = Roles.useGetMany()

const {
  loading: loadingUsersSave,
  toggleEnabled: toggleUsersSave,
  onResult: onResultUsersSave,
  enabled: enabledUsersSave,
  onError: onErrorUsersSave
} = Users.useStaticSave(users, {defaultEnabled: false})
const  loadingAll= computed!(()=>loadingRoles.value);

const cancel=()=>{
  props.modal ? emit('closeModal') : router.push({name: 'users_list'})
}
onErrorUsersSave((error) => {
  openNotificationWithIcon('error', "Error en acción", "Error en acción del elemento")
})
onResultUsersSave((response) => {
  openNotificationWithIcon('success', "Accion  "+textButon+"", "Accion ejecutada correctamente")
  if (!andNew.value)
    props.modal ? emit('closeModal', true) : router.push({name: 'users_list'})
  else{
    usersForm.value?.clear()
    enabledUsersSave.value=false
    Object.assign(users,new Users(model.value))
    if(props.modal){
      emit("reload")
    }
   }
})

async function validateUsersForm() {
  const valid = await usersForm.value?.validate()
  if (valid) {
    toggleUsersSave()
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
          <RForm ref="usersForm" :state="users" :validations="Users.validations[action]" :feedbacks="Users.feedbacks[action]" :loading="true">
            <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid-input">
                  <RInput  type="text" :requiredMark="true" v-model="users.name" path="name" label="Nombre"
                          @keyup.enter="validateUsersForm"/>
                </div>
                <div class="grid-input">
                  <RInput  type="email" :requiredMark="true" v-model="users.email" path="email" label="Correo"
                          @keyup.enter="validateUsersForm"/>
                </div>
                <div v-if="action==='create'" class="grid-input">
                  <RInput type="password" :requiredMark="true" v-model="users.password" path="password"
                          label="Contraseña"
                          @keyup.enter="validateUsersForm"/>
                </div>
                <div v-if="action==='create'" class="grid-input">
                  <RInput type="password" :requiredMark="true" v-model="users.confirm_password" path="confirm_password"
                          label="Confirmar Contraseña"
                          @keyup.enter="validateUsersForm"/>
                </div>
                <div class="grid-input">
                  <RSelect
                      v-model="users.role_id"
                      id-key="id"
                      :required-mark="true"
                      ref="selectId"
                      :loading-data="loadingRoles"
                      :loading="loadingRoles"
                      text-key="name"
                      :allowClear="true"
                      showFilter
                      :items="resultRoles?.data"
                      path="role_id"
                      label="Rol"
                      @keyup.enter="validateUsersForm"

                  />
                </div>
                <div class="grid-input">
                  <RInput :requiredMark="true" v-model="users.phones" path="phones"
                          label="Telefono"
                          @keyup.enter="validateUsersForm"/>
                </div>
                <div class="col-span-2">
                   <REditor   v-model="users.addresses" path="addresses" label="Dirección"/>
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
                    nuevo <span id="andNew-description" class="ml-1 text-muted">Se insertará un elemento y reiniciará el formulario</span></label>
                </div>
              </div>
              <div class="r-footer-button-form">
                <RButton class=" ml-5" shadow color="primary" :loading="loadingUsersSave"
                         @click="validateUsersForm"> {{ textButon }}
                  Usuarios
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
