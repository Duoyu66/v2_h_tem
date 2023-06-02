export default [
    {
        path:'/home',
        name:'home',
        component:()=>import('../pages/home/index.vue')
    },
    {
        path:'/weather',
        name:'weather',
        component:()=>import('../pages/weather/index.vue')
    },
    {
        path:'*',
        redirect:'/home'
    }

]