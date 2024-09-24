<script setup lang="ts">
import RForm from '~co/components/form/validationForm/RForm.vue'
import Users from '~m/security/users/entities/users.model'
import RButton from '~co/components/buttons/src/RButton.vue'
import { pt } from '~h/types/propTypes'
import AbsoluteLoader from '~co/components/spinners/src/AbsoluteLoader.vue'
import { openNotificationWithIcon } from '~h/utils/utils'
import { useRouter } from 'vue-router'
import Permissions from '~m/security/permissions/entities/permissions.model'
import { reactive, watch } from 'vue'

const router = useRouter()
const props = defineProps({
  modal: pt.bool.def(false),
  action: pt.string.def('create'),
  loading_text: pt.string.def(''),
  showLoading: pt.bool.def(true),
  data: Object
})

const emit = defineEmits(['closeModal', 'reload'])
const textButon = 'Cambiar permisos del rol'
const model = defineModel()
const users = reactive(new Users(model.value))
const usersForm = ref()
const andNew = ref(false)
const data = ref([])

const {
  loading: loadingPermissions,
  result: resultPermissions,
  onError,
  onResult,
  refetch: refetchCategoriesList
} = Permissions.useGetMany()

const {
  loading: loadingUsersSave,
  toggleEnabled: toggleUsersSave,
  onResult: onResultUsersSave,
  enabled: enabledUsersSave,
  onError: onErrorUsersSave
} = Users.useStaticSave(users, { defaultEnabled: false })

onResult((result) => {
  data.value = result.data.data.map((item) => item.label)
})

const cancel = () => {
  props.modal ? emit('closeModal') : router.push({ name: 'users_list' })
}
onErrorUsersSave((error) => {
  openNotificationWithIcon('error', 'Error en acción', 'Error en acción del elemento')
})
onResultUsersSave((response) => {
  openNotificationWithIcon('success', 'Acción  ' + textButon + '', 'Acción ejecutada correctamente')
  if (!andNew.value) props.modal ? emit('closeModal', true) : router.push({ name: 'users_list' })
  else {
    usersForm.value?.clear()
    enabledUsersSave.value = false
    Object.assign(users, new Users(model.value))
    if (props.modal) {
      emit('reload')
    }
  }
})

async function validateUsersForm() {
  const valid = await usersForm.value?.validate()
  if (valid) {
    toggleUsersSave()
  }
}

async function testPermissions(permissionsParamOld, permissionsParamNew, roleParam) {
  const uri = `http://localhost/banderas_backend/public/api/test_permissions_role`
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Accept: 'Application/json'
    },
    body: JSON.stringify({
      permissionsOld: permissionsParamOld,
      permissions: permissionsParamNew,
      role: roleParam
    })
  })
}

console.log('data user', props.data)
const plainOptionsPermission = props.data.array_permission
const permissionNames = plainOptionsPermission.map((item) => item.label)

const value = ref(permissionNames)
</script>
<template>
  <AbsoluteLoader
    :h-full="true"
    class=""
    :loading="loadingPermissions"
    :description="props.loading_text"
    v-if="showLoading"
  >
    <slot name="loading_icon"></slot>
  </AbsoluteLoader>
  <div class="r-container-form">
    <div class="mt-10 sm:mt-0">
      <div class="shadow overflow-hidden sm:rounded-md">
        <RForm
          ref="usersForm"
          :state="users"
          :validations="Users.validations[action]"
          :feedbacks="Users.feedbacks[action]"
          :loading="true"
        >
          <div class="px-4 py-5 bg-white dark:bg-slate-800 sm:p-6">
            <div class="grid grid-cols-2 gap-4">
              <a-checkbox-group v-model:value="value" style="width: 100%;">
                <a-row>
                  <a-col :span="8" v-for="(permission, index) in data" :key="index">
                    <a-checkbox :value="permission">{{ permission }}</a-checkbox>
                  </a-col>
                </a-row>
              </a-checkbox-group>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 dark:bg-slate-700 dark:bg-opacity-70 text-right sm:px-6">
            <div class="r-footer-form">
              <div class="r-footer-button-form">
                <RButton
                  class="ml-5"
                  shadow
                  color="primary"
                  :loading="loadingUsersSave"
                  @click="testPermissions(permissionNames, value, props.data.id)"
                >
                  {{ textButon }}
                </RButton>
                <RButton class="ml-5" shadow color="primary" @click="cancel"> Cancelar </RButton>
              </div>
            </div>
          </div>
        </RForm>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
