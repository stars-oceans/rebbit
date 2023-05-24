<script setup>
import { getCategoryApi } from '@/apis/category'
import { onMounted, onUpdated, watch, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
// 导入接口
import { getBannerApi } from '@/apis/category.js'
import GoodsItem from '../Home/components/GoodsItem.vue' 	// 阴影页面中显示品牌的组件
const route = useRoute()

// 存数据的响应式变量
let categoryDate = ref({})
// 因为 route.params 是一个对象不是一个响应式数据,我们得通过函数进行监听
watch(() => route.params, (newParams, oldParams) => {
  // 监听$route.params的变化
  // console.log('路由参数已更改');
  // console.log('新的参数:', newParams.id);
  // console.log('旧的参数:', oldParams.id);
  // 执行其他逻辑...
  // console.log(newParams.id);
  if (newParams.id) {
    getCategory()
  }
});


// 请求的函数
const getCategory = async () => {
  // 利用 route 给参数
  const res = await getCategoryApi(route.params.id)
  categoryDate.value = res.result
  // console.log(categoryDate.value);
}

// 钩子
onMounted(() => {
  // 路由面包屑
  getCategory()

  //  banner 图
  getBanner()
})

// 定义banner数据存储地
let bannerList = ref([])
const getBanner = async function () {
  let res = await getBannerApi()
  //  赋值
  bannerList.value = res.result
}

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryDate.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <!-- banner 图 -->
    <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 全部分类 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="i in categoryDate.children" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" />
            <p>{{ i.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="ref-goods" v-for="item in categoryDate.children" :key="item.id">
      <div class="head">
        <h3>- {{ item.name }}-</h3>
      </div>
      <div class="body">
        <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
      </div>
    </div>

    <!-- 父的底 -->
  </div>

</template>


<style scoped lang="scss">
// 面包屑
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

// banner图
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>