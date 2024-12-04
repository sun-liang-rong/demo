<template>
  <div>
    {{ num }}
    <button @click="num++"></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref<number>(0)
</script>

<style lang="scss" scoped>

</style>