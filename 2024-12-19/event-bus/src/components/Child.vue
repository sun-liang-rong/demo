<script setup lang="ts">
import { getCurrentInstance, ref, ComponentCustomProperties} from 'vue'
const { proxy } = getCurrentInstance() as ComponentCustomProperties;
let count = ref<number>(0)
const addHandler = () => {
    count.value++
    proxy?.$bus.emit('add', count.value)
}
</script>
<template>
    <button @click="addHandler">add</button>
</template>
<style>
</style>