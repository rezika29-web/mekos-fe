export default {
    path: '/admin',
    name: 'admin',
    meta: {
        forAuth: true
    },
    component: () => import('@/views/admin/Admin.vue'),
    children: [{
            path: '',
            component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
            path: 'content',
            name: 'content',
            component: () => import('@/views/admin/content/Content.vue'),
        },
        {
            path: 'content/add',
            name: 'content-add',
            component: () => import('@/views/admin/content/input.vue')
        },
        {
            path: 'content/:id/edit',
            name: 'content-edit',
            component: () => import('@/views/admin/content/edit.vue')
        },
        {
            path: 'product',
            name: 'product',
            component: () => import('@/views/admin/product/Product.vue'),
        },
        {
            path: 'product/add',
            name: 'product-add',
            component: () => import('@/views/admin/product/input.vue')
        },
        {
            path: 'product/:id/edit',
            name: 'product-edit',
            component: () => import('@/views/admin/product/edit.vue')
        },
        {
            path: 'services',
            name: 'services',
            component: () => import('@/views/admin/services/Service.vue'),
        },
        {
            path: 'service/add',
            name: 'service-add',
            component: () => import('@/views/admin/services/input.vue')
        },
        {
            path: 'service/:id/edit',
            name: 'service-edit',
            component: () => import('@/views/admin/services/edit.vue')
        },
        {
            path:'infrastructure',
            name:'infrastructure',
            component: () => import('@/views/admin/infrastructure/Infrastructure.vue'),
        },
        {
            path:'infrastructure/add',
            name:'infrastructure-add',
            component: () => import('@/views/admin/infrastructure/input.vue')
        },
        {
            path:'infrastructure/:id/edit',
            name:'infrastructure-edit',
            component: () => import('@/views/admin/infrastructure/edit.vue')
        },
        {
            path:'kommentar/:id/edit',
            name:'kommentar-edit',
            component: () => import('@/views/admin/kommentar/edit.vue'),
        },
        {
            path:'kommentar',
            name:'kommentar',
            component: () => import('@/views/admin/kommentar/Kommentar.vue'),
        },
        {
            path:'comment/:id/edit',
            name:'comment-edit',
            component: () => import('@/views/admin/comment/edit.vue'),
        },
        {
            path:'comment',
            name:'comment',
            component: () => import('@/views/admin/comment/Comment.vue'),
        },

        {
            path:'culture',
            name:'culture',
            component: () => import('@/views/admin/culture/Culture.vue'),
        },
        {
            path:'culture/add',
            name:'culture-add',
            component: () => import('@/views/admin/culture/input.vue')
        },
        {
            path:'culture/:id/edit',
            name:'culture-edit',
            component: () => import('@/views/admin/culture/edit.vue')
        },
        {
            path:'about',
            name:'about',
            component: () => import('@/views/admin/about/About.vue'),
        },
        {
            path:'about/add',
            name:'about-add',
            component: () => import('@/views/admin/about/input.vue')
        },
        {
            path:'about/:id/edit',
            name:'about-edit',
            component: () => import('@/views/admin/about/edit.vue')
        },



        {
            path: 'rangearea',
            name: 'rangeareas',
            component: () => import('@/views/admin/rangearea/Rangearea.vue'),
        },
        {
            path: 'rangearea/:id/edit',
            name: 'rangearea-edit',
            component: () => import('@/views/admin/rangearea/edit.vue')
        },

        {
            path: 'footer',
            name: 'footers',
            component: () => import('@/views/admin/footer/Footer.vue'),
        },
        {
            path: 'footer/:id/edit',
            name: 'footer-edit',
            component: () => import('@/views/admin/footer/edit.vue')
        },

        {
            path: 'colaborationservice',
            name: 'colaborationservices',
            component: () => import('@/views/admin/colaborationservices/ColaborationService.vue'),
        },
        {
            path: 'colaborationservice/add',
            name: 'colaborationservice-add',
            component: () => import('@/views/admin/colaborationservices/input.vue')
        },
        {
            path: 'colaborationservice/:id/edit',
            name: 'colaborationservice-edit',
            component: () => import('@/views/admin/colaborationservices/edit.vue')
        },

        {
            path: 'header',
            name: 'header',
            component: () => import('@/views/admin/header/Header.vue'),
        },
        {
            path: 'header/add',
            name: 'header-add',
            component: () => import('@/views/admin/header/input.vue')
        },
        {
            path: 'header/:id/edit',
            name: 'header-edit',
            component: () => import('@/views/admin/header/edit.vue')
        },

        {
            path: 'item/:id_menu',
            name: 'item',
            component: () => import('@/views/admin/item/Item.vue'),
        },
        {
            path: 'item/:id_menu/add',
            name: 'item-add',
            component: () => import('@/views/admin/item/input.vue')
        },
        {
            path: ':id_menu/item/:id/edit',
            name: 'item-edit',
            component: () => import('@/views/admin/item/edit.vue')
        },

    ]
}