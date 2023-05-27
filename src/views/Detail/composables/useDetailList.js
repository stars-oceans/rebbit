import { getDetail } from '@/apis/detail';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export function useDetailList() {
  
  const detailList = ref([])
  // 获取路由参数对象
  const route = useRoute()
  async function getDetailData() {
    const res = await getDetail(route.params.id)
    // console.log(res);
    // 保存列表数据到变量中，方便后续操作。
    detailList.value = res.result;
  }
  onMounted(() => {
    getDetailData()
  })

  return { detailList }
}
