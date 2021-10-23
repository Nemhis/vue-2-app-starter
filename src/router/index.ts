import Vue from 'vue';
import VueRouter, {Route, RouteConfig} from 'vue-router';

import { Routes } from './routes';

const Home = () => import('@/views/Home/Home.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: Routes.HOME.path,
    name: Routes.HOME.name,
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
