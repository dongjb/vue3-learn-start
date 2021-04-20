import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/home', name: 'home', component: () => import('@/views/home/index.vue') },
  { path: '/vuex', name: 'vuex', component: () => import('@/views/vuex/index.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
