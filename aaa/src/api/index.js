import { post, get } from '../utils/http'
import http from '../utils/http'

//登录接口
export function loginFun(data) {
    return post('/adminapi/login', data)
}

//商品管理  商品顶部信息
export function shop_oneOne(data) {
    return get('adminapi/product/product/type_header', data)
}
//商品分类  商品分类
export function shop_twoOne(data) {
    return get('adminapi/product/category/tree/1', data)
}
//商品规格  商品规格数据渲染
export function shop_fourOne(data) {
    return get('adminapi/product/product/rule', data)
}
//商品规格  商品规格删除数据
export function shop_fourDel(data) {
    return get('adminapi/product/product/rule/delete', data)
}
//商品规格  商品规格搜索数据
export function shop_fourSerach(data) {
    return get('adminapi/product/product/rule', data)
}
//订单管理 头部
export function orderTop(data) {
    return get('adminapi/order/chart', data)
}
//订单管理 列表
export function orderData(data) {
    return get('adminapi/order/list', data)
}
//用户管理 列表
export function userData(data) {
    return get('adminapi/user/user', data)
}
//用户分组 列表
export function userThreeData(data) {
    return get('adminapi/user/user_group/list', data)
}

//用户等级 列表
export function userTwoData(data) {
    return get('adminapi/user/user_level/vip_list', data)
}
//用户标签 列表
export function userFourData(data) {
    return get('adminapi/user/user_label', data)
}
