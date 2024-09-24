<template>
  <div class="mx-10 mt-5">
    <h1 style="color: black; margin-bottom: 25px">Palabras claves y productos sugeridos</h1>
    <h2 style="color: black">Palabras clave</h2>
    <p style="color: black; width: 600px; margin-bottom: 25px">
      Principal instrumento de búsqueda de un cliente. Al definir una palabra clave estaráas pasando al navegador de internet y al buscador de la web como encontrar
      tu producto con un término específico.
    </p>

    <div class="grid grid-cols-2 gap-3 mt-5">
      <a-form-item label="Palabras claves" name="tax2">
        <!-- <div class="grid grid-cols-4 gap-3"> -->
          <div class="grid-input">
            <!-- <a-form-item label="Precio normal (Є)"> -->
              <a-input v-model:value="formState.wordKey" placeholder="Introduzca la palabra clava" @keyup.enter="addWordKey(formState.wordKey)" />
            <!-- </a-form-item> -->
          </div>
        <!-- </div> -->
      </a-form-item>
    </div>
    <div class="grid grid-cols-1 gap-3 mt-5">
      <a-form-item label="Palabras claves" name="tax2">
        <a-select
          v-model:value="value"
          mode="tags"
          style="width: 100%"
          placeholder="Tags Mode"
          :options="options.value"
          @change="handleChange"
        ></a-select>
      </a-form-item>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
<script lang="ts" setup>
import { ref } from 'vue'

interface FormState {
  wordKey: string
}
const formState: UnwrapRef<FormState> = reactive({
  wordKey: ''
})
const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

const value = ref([])
// const options = [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))
const options = ref([])

const addWordKey = (value: string) => {
  console.log(`add ${value}`)
  options.value.push(value)
  formState.wordKey = ''
  console.log(options.value);

}
</script>
