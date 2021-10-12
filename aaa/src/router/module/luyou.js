export default [
    {
        path: '/admin/home/',
        name: 'index',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/admin/product/product_list',
        name: 'shop-one',
        component: () => import('@/views/shop-one.vue'),
        meta: [
            { "name": '商品', title: '商品管理' }
        ]
    },
    {
        path: '/admin/product/product_classify',
        name: 'shop-two',
        component: () => import('@/views/shop-two.vue'),
        meta: [
            { "name": '商品', title: '商品分类' }
        ]
    },
    {
        path: '/admin/product/add_product',
        name: 'shop-three',
        component: () => import('@/views/shop-three.vue'),
        meta: [
            { "name": '商品', title: '产品添加' }
        ]
    },
    {
        path: '/admin/product/product_reply',
        name: 'shop-four',
        component: () => import('@/views/shop-four.vue'),
        meta: [
            { "name": '商品', title: '商品评论' }
        ]
    },
    {
        path: '/admin/product/product_attr',
        name: 'shop-five',
        component: () => import('@/views/shop-five.vue'),
        meta: [
            { "name": '商品', title: '商品规格' }
        ]
    },
    {
        path: '/admin/order/list',
        name: 'order',
        component: () => import('@/views/order.vue'),
        meta: [
            { "name": '订单', title: '订单管理' }
        ]
    },
    {
        path: '/admin/user/list',
        name: 'user-one',
        component: () => import('@/views/user-one.vue'),
        meta: [
            { "name": '用户', title: '用户管理' }
        ]
    },
    {
        path: '/admin/user/level',
        name: 'user-two',
        component: () => import('@/views/user-two.vue'),
        meta: [
            { "name": '用户', title: '会员等级' }
        ]
    },
    {
        path: '/admin/user/group',
        name: 'user-three',
        component: () => import('@/views/user-three.vue'),
        meta: [
            { "name": '用户', title: '用户分组' }
        ]
    },
    {
        path: '/admin/user/label',
        name: 'user-four',
        component: () => import('@/views/user-four.vue'),
        meta: [
            { "name": '用户', title: '用户标签' }
        ]
    },
    {
        path: '/admin/setting/system_config_retail/3/9',
        name: 'distribution-one',
        component: () => import('@/views/distribution-one.vue'),
        meta: [
            { "name": '分销', title: '分销设置' }
        ]
    }
]