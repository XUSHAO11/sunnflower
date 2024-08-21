import { createRouter, createWebHistory } from "vue-router";
const Layout = () => import("../layout/index.vue");
const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/layout/home",
    children: [
      {
        path: "/layout/home",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "/About",
        name: "about",
        component: () => import("../views/about.vue"),
      },
      {
        path: "/ArticlePage",
        name: "ArticlePage",
        component: () => import("../views/ArticlePage.vue"),
      },
      {
        path: "/Link",
        name: "link",
        component: () => import("../views/link.vue"),
      },
    ],
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
