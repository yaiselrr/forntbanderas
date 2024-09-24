<template>
  <div>
    <a-steps :current="current" :items="items"></a-steps>
    <div class="steps-content">
      <div v-if="current == 0">
        
      </div>
      <div v-if="current == 1">
        <ProductStepInformation/>  
      </div>
      <div v-if="current == 2">
        <ProductStepVariants/>        
      </div>
      <div v-if="current == 3">
        <ProductPrice/>
      </div>
      <div v-if="current == 4">
        <ProductImages/>
      </div>
      <div v-if="current == 5">
        <ProductStepDescription/>
      </div>
      <div v-if="current == 6">
        <ProductStepKeywords/>
      </div>
      <div v-if="current == 7">
        <ProductStepResumen/>
      </div>
      
    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">Previous</a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductStep1 from "~m/manage/products/views/form/ProductStep1.vue"
import ProductStepInformation from "~m/manage/products/views/form/ProductStepInformation.vue"
import ProductStepVariants from "~m/manage/products/views/form/ProductStepVariants.vue"
import ProductStepImages from "~m/manage/products/views/form/ProductStepImages.vue"
import ProductStepDescription from "~m/manage/products/views/form/ProductStepDescription.vue"
import ProductStepResumen from "~m/manage/products/views/form/ProductStepResumen.vue"
import ProductStepPrice from "~m/manage/products/views/form/ProductStepPrice.vue"
import ProductStepKeywords from "~m/manage/products/views/form/ProductStepKeywords.vue"
import ProductImages from "~m/manage/products/views/form/ProductImages.vue"
import ProductPrice from "~m/manage/products/views/form/ProductPrice.vue"

const current = ref(0);
const next = () => {
  current.value++;
};
const prev = () => {
  current.value--;
};
const steps = [
  {
    title: 'Categoria',
    content: 'First-content',
  },
  {
    title: 'Información',
    content: 'Second-content',
  },
  {
    title: 'Variantes',
    content: 'Last-content',
  },
  {
    title: 'Precio y Almacen',
    content: 'Last-content',
  },
  {
    title: 'Imagenes',
    content: 'Last-content',
  },
  {
    title: 'Descripción',
    content: 'Last-content',
  },
  {
    title: 'Palabras Claves',
    content: 'Last-content',
  },
  {
    title: 'Resumen',
    content: 'Last-content',
  },

];
const items = steps.map(item => ({
  key: item.title,
  title: item.title,
}));
</script>

<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;

  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

[data-theme='dark'] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}
</style>