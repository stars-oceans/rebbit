import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
  // 项目基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 超时时间
  timeout: 30000
})

// axios请求拦截器
http.interceptors.request.use((config) => {
  return config
},
  (err) => {
    return Promise.reject(err)
  })


// axios响应式拦截器
http.interceptors.response.use((res) => {
  return res.data
},
  (err) => {
    return Promise.reject(err)
  })
export default http