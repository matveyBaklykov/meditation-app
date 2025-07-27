import axios from 'axios'
import { useAuthStore } from './stores/auth.store'

export const API_BASE = 'http://localhost:3000/api'

export const API_ROUTES = {
  meditations: `${API_BASE}/meditations`,
  auth: {
    login: `${API_BASE}/auth/login`,
    register: `${API_BASE}/auth/register`,
  },
  profile: `${API_BASE}/profile`,
  stats: `${API_BASE}/stats`,
}

export function client() {
  const authStore = useAuthStore()

  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  })
}
