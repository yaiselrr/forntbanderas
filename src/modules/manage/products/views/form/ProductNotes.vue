<template>
    <div>
        <div class="grid grid-cols-1 gap-10">
            <div class="grid-input">
                <RInput  type="text" :requiredMark="true" path="name" label="Nota"></RInput>                   
            </div>
        </div>
    </div>
</template>

<script setup>
import {RInput} from "~co/components/form"
</script>

<style scoped>

</style>