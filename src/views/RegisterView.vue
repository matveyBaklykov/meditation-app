<script setup lang="ts">
import ButtonBig from '@/components/ButtonBig.vue'
import InputString from '@/components/InputString.vue'
import { useAuthStore } from '@/stores/auth.store'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const form = ref<{ username?: string; email?: string; password?: string }>({})

const authStore = useAuthStore()

const router = useRouter()

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' })
    }
  },
)

function onSubmit(event: Event) {
  event.preventDefault()
  if (!form.value.username || !form.value.email || !form.value.password) {
    return
  }
  authStore.register(form.value.username, form.value.email, form.value.password)
  form.value = {}
}
</script>

<template>
  <form action="" class="auth__form" @submit="onSubmit">
    <InputString placeholder="Электронная почта" v-model="form.email" />
    <InputString placeholder="Имя" v-model="form.username" />
    <InputString placeholder="Пароль" type="password" v-model="form.password" />
    <ButtonBig type="submit">Создать аккаунт</ButtonBig>
  </form>
</template>

<style scoped>
.auth__form {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52px;
}
</style>
