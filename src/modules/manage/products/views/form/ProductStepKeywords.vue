<template>
    <div class="mx-10">
        <div class="mt-10">
            <p>Palabras clave y productos sugeridos</p>
        </div>

        <div class="mt-10 mb-10">
            <p>Palabras clave</p>
            <p>Principal instrumento de búsqueda de un cliente. Al definir una plabara clave estarás pasando 
                al navegador de interet y al buscador dela web como en contrar tu producto con un termino 
                específico.
            </p>
        </div>

        <div class="flex">
            <a-select
                mode="tags"
                style="width: 100%"
                placeholder="Tags Mode"
                :options="options"
                @change="handleChange"
            ></a-select>            
        </div>

        <div class="mt-10 mb-10">
            <p>Productos sugeridos</p>
            <p>Son los productos que la empresa sugiere que un cliente compre acompañando al producto 
                seleccionado.
            </p>
        </div>

        <div class="flex">
            <a-select
                mode="tags"
                style="width: 100%"
                placeholder="Tags Mode"
                :options="options"
                @change="handleChange"
            ></a-select>            
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>