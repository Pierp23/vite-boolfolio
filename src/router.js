import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/portfolio/:id',
            name: 'portfolio-project',
            component: SingleProject
        }
        ,
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };