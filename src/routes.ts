import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/AuthView.vue'),
    },
    {
      path: '/main',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/IndexView.vue'),
        },
        {
          path: 'statistic',
          component: () => import('./views/StatisticsView.vue'),
        },
        {
          path: 'meditation',
          component: () => import('./views/MeditationView.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
})
