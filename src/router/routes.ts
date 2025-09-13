import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
      { path: 'catalog', component: () => import('src/pages/CatalogPage.vue') },
      { path: 'about', component: () => import('src/pages/AboutPage.vue') },
      { path: 'blog', component: () => import('src/pages/BlogPage.vue') },
      { path: 'contact', component: () => import('src/pages/ContactPage.vue') },
      {
        path: 'products/container',
        component: () => import('src/pages/products/ContainerPage.vue'),
      },
      {
        path: 'products/foil',
        component: () => import('src/pages/products/FoilPage.vue'),
      },
      {
        path: 'products/lids',
        component: () => import('src/pages/products/LidsPage.vue'),
      },
      {
        path: 'products/pizza',
        component: () => import('src/pages/products/PizzaPage.vue'),
      },
      {
        path: 'products/tablecover',
        component: () => import('src/pages/products/TableCoverPage.vue'),
      },
      {
        path: 'products/papercup',
        component: () => import('src/pages/products/PaperCupPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
