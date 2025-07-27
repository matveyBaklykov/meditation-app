import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

export const router = createRouter({
  routes: [
    {
      path: '/auth',
      component: () => import('./views/AuthView.vue'),
      name: 'auth',
      children: [
        {
          path: 'register',
          component: () => import('./views/RegisterView.vue'),
        },
        {
          path: 'login',
          component: () => import('./views/LoginView.vue'),
          name: 'login',
        },
        {
          path: '',
          component: () => import('./views/MainAuthView.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/IndexView.vue'),
          name: 'main',
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

router.beforeEach((to) => {
  const authStore = useAuthStore()
  const publicPaths = ['/auth/login', '/auth/register', '/auth']

  if (!authStore.getToken && !publicPaths.includes(to.path)) {
    return { path: '/auth' }
  }
})
