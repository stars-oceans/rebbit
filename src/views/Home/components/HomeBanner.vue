<script setup>
import { ref } from 'vue'
// 导入 axios
import { getBannerApi } from '@/apis/layout.js'
// 导入 pinia 数据
import { useCategoryStore } from '@/stores/category.js'
import { onMounted } from 'vue'
let categoryStore = useCategoryStore()
// banner数据
let bannerList = ref([])
// 钩子
onMounted( async () => {
  let data = await getBannerApi()
  // console.log(data.result);
  bannerList.value = data.result
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>