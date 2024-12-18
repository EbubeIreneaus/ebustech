import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {path: 'about-me', component: ()=> import('pages/AboutPage.vue')},
      {path: 'service-we-provide', component: ()=> import('pages/ServicePage.vue')},
      {path: 'contact', component: ()=> import('pages/ContactPage.vue')},
      {path: 'blogs', component: ()=>import('pages/BlogPage.vue')},
      {path: 'blogs/:page', name: 'blogs', component: ()=>import('pages/BlogPage.vue')},
      {path: 'blog/:id', component: ()=>import('pages/BlogDetails.vue')}
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
