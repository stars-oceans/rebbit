<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 添加 key 破坏服复用实例机制 强制销毁重建 -->
  <!-- <router-view :key="$route.fullPath"></router-view> -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFixed from './components/LayoutFixed.vue'
// 获取导航的 action
import { useCategoryStore } from '@/stores/category.js'
import { onMounted } from "vue";

const categoryStore = useCategoryStore()
// 调用一下里面的方法
onMounted(()=> categoryStore.gerCategory())

</script>

<style scoped lang="scss">

</style>