import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import Honors from '../views/Honors.vue';
import Order from '../views/Order.vue';

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
