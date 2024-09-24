<script setup lang="ts">
import {RForm, RInput} from "~co/components/form"
import {RButton} from "~co/components/buttons"
import {email, required} from '@vuelidate/validators'
import {siteStore} from "~cf/store/site.store"
import {RSimpleAlert} from "~co/components/alert"

const form: Ref<FormValidation> = ref()
const currentScenario = ref('create')
const loading = ref(false)
const error = ref(false)
const site = siteStore()
const user = reactive({email: 'admin@banderas.com', password: 'adminbanderas'})

function setScenario(newScenario) {
  currentScenario.value = newScenario
}

const validations = reactive({
  email: {required, email},
  password: {required},
})

async function validate() {
  loading.value = true
  const valid = await form.value?.validate()
  if (valid) {
    const response = await site.login(user).then(() => {
      location.reload()
    }).catch(() => {
      error.value = true
      setTimeout(() => error.value = false, 4000)
    }).finally(() => {
      loading.value = false
    })
  } else {
    loading.value = false
  }
}
</script>
<template>
  <!-- component -->
  <div class="flex h-screen w-screen">
    <!-- Left Pane -->
    <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
      <img alt="banderas_logo" class="h-full w-fit-content" src="/src/themes/admin/assets/img/banderas.png">
    </div>
    <!-- Right Pane -->
    <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
      <div class="max-w-md w-full p-6">
        <div class="flex justify-center items-center mb-3 ">
          <img alt="bandera_logo" class="h-10 items-center justify-center flex"
               src="/src/themes/admin/assets/img/logo_login.png">
        </div>
        <h1 class="text-3xl font-semibold mb-6 text-black text-center">Autenticarse en Banderas Puertas de Hierro</h1>
        <div class="mt-1 w-full">
          <RSimpleAlert :description="'Error en usuario o contraseña'" type="danger" :closable="false" v-if="error"
                        :showIcon="false"/>
          <RForm ref="form" class="space-y-2" :validations="validations" :state="user" @keyup.enter="validate">
            <RInput v-model="user.email" path="email" labelClass="text-black" label="Correo" class=""/>
            <RInput v-model="user.password" path="password" label="Contraseña" labelClass="text-black" type="password"/>
            <div class="">
              <RButton class="!w-full" @click="validate" shadow :loading="loading">
                Entrar
              </RButton>
            </div>
          </RForm>
        </div>
        <div class="mt-4 text-sm text-gray-600 text-center">
          <p>No tiene cuenta todavia? <a href="#" class="text-black hover:underline">Entrar aqui</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
