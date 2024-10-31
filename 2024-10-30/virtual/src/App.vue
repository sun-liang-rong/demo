<template>
  <div>
    <h1>虚拟列表示例</h1>
    <VirtualList :dataList="dataList" :itemHeight="itemHeight"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VirtualList from './components/virtual.vue';
import { faker } from '@faker-js/faker';
const dataList = ref(
  new Array(100).fill({}).map((item, index) => ({ id: faker.music.album() }))
);
const itemHeight = ref(60);
</script>

<style>

</style>
