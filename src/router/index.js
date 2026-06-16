import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const Contact = () => import('@/pages/Contact.vue');

const routes = [
    { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
    history: createWebHistory('/popadrondev/'),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 80,
                behavior: 'smooth',
            };
        }
        return { top: 0 };
    },
});

export default router;