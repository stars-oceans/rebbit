<script setup>
import { onMounted } from 'vue'
// 导入封装好的卡片组件
import GoodsItem from '../Home/components/GoodsItem.vue' 	// 阴影页面中显示品牌的组件
// 导入 useBanner 封装好的功能函数
import { useBanner } from './composables/useBanner'
// 将 usebanner的变量解构出来
const { bannerList, getBanner } = useBanner()
// 导入 useCategory 封装好的功能
import { useCategory } from './composables/useCategory'
// 将 useCategory 返回的变量解构出来
const { categoryDate, getCategory } = useCategory()

// 钩子
onMounted(() => {
  //  banner 图
  getBanner()
  // 路由面包屑
  getCategory()
})

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
          <RouterLink :to="`/category/sub/${i.id}`">
            <img :src="i.picture"/>
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
        <GoodsItem :goodId="good.id" v-for="good in item.goods" :good="good" :key="good.id" />
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