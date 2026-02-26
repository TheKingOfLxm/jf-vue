import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Products = () => import('../views/Products.vue');
const Honors = () => import('../views/Honors.vue');
const Order = () => import('../views/Order.vue');

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    },
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/products', component: Products },
        { path: '/honors', component: Honors },
        { path: '/order', component: Order }
    ]
});

export default router;
