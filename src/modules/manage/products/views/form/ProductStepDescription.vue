<template>
    <div class="mx-10">
        <div class="mb-10">
            <p>Describe el producto a los clientes</p>
        </div>

        <div class="col-span-4">
            <REditor :requiredMark="true"  path="descriptions" label="Breve descripción del producto"/>
        </div>

        <div class="mb-10">
            <p>Notas del producto</p>
        </div>

        <ProductNote/>

    </div>
</template>

<script setup>
import {RInput} from "~co/components/form"
import REditor from "~co/components/form/src/editor/REditor.vue"
import ProductNote from "~m/manage/products/views/form/ProductNotes.vue"
</script>

<style scoped>

</style>