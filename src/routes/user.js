export default {
    path: '',
    component: () => import('@/layouts/User.vue'),
    children: [
        {
            path: '',
            component: () => import('@/views/user/Home.vue'),
        },
        {
            path: 'news/:id',
            component: () => import('@/views/user/news_detail.vue'),
        },
        {
            path: 'news',
            component: () => import('@/views/user/news.vue'),
        },
        {
            path: 'scrolling',
            component: () => import('@/views/user/scrolling.vue'),
        },
        {
            path: 'menu/:id_menu/:menu',
            component: () => import('@/views/user/pageAdd.vue'),
        },
    ]
    // path: '',
    // component: () => import('@/layouts/transnet.vue'),
}
