<script setup>
import { useSubList } from './composables/useSubList'
const { subList } = useSubList()
import { useRoute } from 'vue-router'
import { getSubCategoryAPI } from '@/apis/category.js'
import { onMounted, ref } from 'vue'

// 导入商品 item 组件
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const route = useRoute()
// 二级商品列表 总数据
const goodList = ref([])

// 传递给后端的参数
const reqData = ref({
  categoryId: route.params.id,
  page: 2,
  pageSize: 20,
  sortField: ''
})

// 请求的函数
async function getGoodList() {
  const res = await getSubCategoryAPI(reqData.value)
  console.log(res);
  goodList.value = res.result.items
}

// 生命周期钩子
onMounted(() => {
  getGoodList()
})

// 筛选的函数
const tabChang = () => {
  getGoodList()
}

// 是否滚动完了
const disabled  =ref(false)
// 无限加载 的函数
const load = async () => {
  console.log('加载');
     reqData.value.page ++;
  // console.log(reqData.value.page );

  const res = await getSubCategoryAPI(reqData.value)

  goodList.value = [ ...goodList.value, ...res.result.items ]
  
console.log(res.result.items.length ==0 );
if(res.result.items.length == 0){
 disabled.value  = true
}
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subList.parentId}` }">{{ subList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChang">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <!-- 无限滚动的数据绑定和 数据加载完了的提示 -->
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem  :goodId="item.id" v-for="item in goodList" :good="item"></GoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>