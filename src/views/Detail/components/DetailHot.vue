<script setup>
import { onMounted, ref, defineProps, computed} from 'vue'
import { fetchHotGoodsAPI } from '@/apis/detail'
import { useRoute } from  'vue-router'
const route = useRoute()

 const hotGoodsList = ref([])
// 接受父组件传过来的 type 的值, 用props 来接收
   const props =  defineProps({
    HotType : {
      type : Number
    }
   })

// 适配 title 1——24小时热榜  2——周热榜
// console.log(props);

const TYPEMAP = {
  1 : '4小时热榜',
  2 :  '周热榜',
}

 const title =  computed(()=>{
  // ### 对象可以这样子取值
  return TYPEMAP[props.HotType]
 })

// 接口封装
async function fetchHotGoods() {
  const res = await fetchHotGoodsAPI({
     id : route.params.id,
      type : props.HotType,
  })
  hotGoodsList.value = res.result
  // console.log( hotGoodsList.value);
}

onMounted(() => {
  fetchHotGoods()
})
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotGoodsList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>