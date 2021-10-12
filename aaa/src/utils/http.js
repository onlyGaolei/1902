import axios from "axios";
import qs from 'qs'
import store from "../store/index";

const http = axios.create({
    baseURL: 'http://bw.gsruiying.com.cn',
    timeout: 1000000,
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.data && !(config.data instanceof FormData)) {
        config.data = qs.stringify(config.data)
    }
    config.headers['Authori-zation'] = 'Bearer ' + store.state.token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status==200){
        
    }else{
        alert('失败')
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

let post = (url, data) => {
    return new Promise((reslove, reject) => {
        http.post(url, data).then((res) => {
            reslove(res)
        })
    })
}
let get = (url, data) => {
    return new Promise((reslove, reject) => {
        http.get(url, { params: data }).then((res) => {
            reslove(res)
        })
    })
}

export { post, get }
export default http