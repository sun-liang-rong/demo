<template>
  <!-- 内容区域 -->
  <div class="virtual" ref="virtualRef" @scroll="handlerScroll">
    <!-- 占位元素 -->
    <div class="placeholder" :style="{height: placeholderHeight + 'px'}"></div>
    <!-- 渲染数据区域 -->
    <div class="list" :style="{transform: getTransForm}">
      <div
        v-for="item in virtualData"
        :key="item"
        class="item"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, onMounted, computed } from "vue";
const props = defineProps({
  dataList: {
    type: Array,
    default: () => [],
  },
  itemHeight: {
    type: Number,
    default: 60,
  },
});
//
const virturlInfo = reactive({
  startIndex: 0,
  endIndex: 0,
  height: 0,
});
// 定义偏移量
const startOffset = ref(0)
const virtualRef = ref(null)
// 计算出 每次渲染的元素
const virtualData = computed(() => {
  // 每次根据新的 起始和结束索引 计算出 渲染元素
  console.log(virturlInfo, 'vvvv')
  return props.dataList.slice(
    virturlInfo.startIndex,
    Math.min(virturlInfo.endIndex, props.dataList.length)
  );
});
// 计算除渲染区域能放多少个元素
const virtualCount = computed(() => {
  return Math.ceil(virturlInfo.height / props.itemHeight)
})
const getTransForm = computed(() => {
  return `translate3d(0, ${startOffset.value}px, 0)`
})
const placeholderHeight = ref(0);
// 计算除占位元素的高度
onMounted(() => {
  let virtualRefHeight = virtualRef.value.clientHeight
  placeholderHeight.value = props.dataList.length * props.itemHeight;
  virturlInfo.height = virtualRefHeight
  virturlInfo.startIndex = 0
  virturlInfo.endIndex = virturlInfo.startIndex + virtualCount.value
});
const handlerScroll = (e) => {
  let scrollTop = e.target.scrollTop
  virturlInfo.startIndex = Math.floor(scrollTop / props.itemHeight)
  virturlInfo.endIndex = virturlInfo.startIndex + virtualCount.value
  console.log(scrollTop, 'scrollTop')
  startOffset.value = virturlInfo.startIndex * props.itemHeight
}
</script>

<style lang="less" scoped>
.virtual {
  width: 200px;
  height: 400px;
  overflow-y: auto;
  background-color: pink;
  position: relative;
  .list {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .item {
      background-color: yellowgreen;
    }
  }
}
</style>
