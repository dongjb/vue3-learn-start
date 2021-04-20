import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/home', name: 'home', component: () => import('@/views/home/index.vue') },
  { path: '/vuex', name: 'vuex', component: () => import('@/views/vuex/index.vue') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
