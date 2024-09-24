<template>
    <div class="mx-10">
        <div class="flow-root mb-10">
            <div class="float-left">
                <p>Precio, ofertas y almacén</p>
            </div>

            <div class="flex float-right">
                <p>Todas las variantes tienen el mismo precio</p>
                <a-switch v-model:checked="checked" />
            </div>
        </div>

        <div class="mb-5">
            <p>Precio</p>
        </div>

        <div class="grid grid-cols-4 gap-10">
            <div class="grid-input">
                <RInput type="number" :requiredMark="true" path="name" label="Tu precio"></RInput>                   
            </div>
            <div class="grid-input">    
                <RInput type="text" :requiredMark="true" path="name" label="Moneda"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput type="number" :requiredMark="true" path="name" label="Costo"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput type="text" :requiredMark="true" path="name" label="Moneda"></RInput>                   
            </div>
        </div>

        <div class="mb-5">
            <p>Oferta</p>
        </div>

        <div class="grid grid-cols-4 gap-10">
            <div class="grid-input">
                <RInput  type="number" :requiredMark="true" path="name" label="Precio oferta"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Moneda"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="date" :requiredMark="true" path="name" label="Fecha inicio oferta"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="date" :requiredMark="true" path="name" label="Fecha fin oferta"></RInput>                   
            </div>
        </div>

        <div class="mb-5">
            <p>Almacén</p>
        </div>

        <div class="grid grid-cols-3 gap-10">
            <div class="grid-input">
                <RInput  type="number" :requiredMark="true" path="name" label="Cantidad en Stock"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="UM"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="number" :requiredMark="true" path="name" label="Stock mínimo"></RInput>                   
            </div>
        </div>
    
    </div>
</template>

<script setup>
import {RInput} from "~co/components/form"
import REditor from "~co/components/form/src/editor/REditor.vue"

const checked = ref(false);
</script>

<style scoped>
.RInput{
    padding-right: 16px;
}
</style>