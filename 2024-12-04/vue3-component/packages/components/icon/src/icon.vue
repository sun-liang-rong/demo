<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>
<script setup lang="ts">
import { createNamespace } from '@sun-sun/utils/create'
import { iconProps } from './icon'
import { computed } from 'vue'
defineOptions({
  name: 's-icon'
})
const props = defineProps(iconProps)
const bem = createNamespace('icon')
const style = computed(() => {
  if (!props.color && !props.size) {
    return {}
  }
  return {
    color: props.color ? props.color : '',
    fontSize: props.size ? props.size + 'px' : ''
  }
})
</script>
<style>
</style>