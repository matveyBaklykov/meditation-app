import { API_ROUTES, client } from '@/api'
import type { LoginResponse, RegisterResponse } from '@/interfaces/auth.interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN_STORE_KEY = 'auth-store'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY)

  if (initialValue) {
    token.value = initialValue
  }

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  function clearToken() {
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY)
  }

  const getToken = computed(() => {
    return token.value
  })

  async function login(username: string, password: string) {
    const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
      username,
      password,
    })

    setToken(data.data.token)
  }

  async function register(username: string, email: string, password: string) {
    await client().post<RegisterResponse>(API_ROUTES.auth.register, {
      username,
      email,
      password,
    })
    await login(username, password)
  }

  return { getToken, login, setToken, clearToken, register }
})
