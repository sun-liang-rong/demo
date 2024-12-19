<script setup lang="ts">
import { getCurrentInstance, ref} from 'vue'
const { proxy } = getCurrentInstance()!
const count = ref<number>(0)
proxy!.$bus.on('add', (val: any) => count.value = val)

</script>

<template>
  {{ count }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
