import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Home',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
    },
    {
        path: '/ComicList',
        name: 'ComicList',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/ComicList.vue')
    },
    {

        path: '/landingPage',
        name: 'Landing Page',
        // división del código a nivel de ruta
        // esto genera un chunk separado (about.[hash].js) para esta ruta
        // que se carga de forma perezosa (lazy-loaded) cuando se visita la ruta.
        component: () => import(/* webpackChunkName: "about" */ '@/views/LandingPage.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
