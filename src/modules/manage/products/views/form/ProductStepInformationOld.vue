<template>
    <div class="mx-10">

        <div class="mb-10">
            <p>Datos básicos</p>
            <p>La información primordial del producto para crear inventario</p>
        </div>

        <div class="grid grid-cols-2 gap-10">
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Codigo del producto"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Tipo de Identificador"></RInput>                   
            </div>
        </div>

        <div class="grid grid-cols-1 gap-10">
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Titulo del producto"></RInput>                   
            </div>
        </div>

        <div class="grid grid-cols-2 gap-10">
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Marca"></RInput>                   
            </div>
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Fabricante"></RInput>                   
            </div>
        </div>

        <div class="col-span-4">
            <REditor :requiredMark="true"  path="descriptions" label="Descripción de la garantia"/>
        </div>

        <div class="mt-10">
            <p><strong>Valoración</strong></p>
            <p>Aunque seleccione una clasificación por estrellas, tendremos nuestro criterio propio basado en las evaluaciones de los clientes.</p>
        </div>
    </div>
</template>

<script setup>
import {RInput} from "~co/components/form"
import REditor from "~co/components/form/src/editor/REditor.vue"
</script>

<style scoped>

</style>