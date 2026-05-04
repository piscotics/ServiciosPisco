<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Correo" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = () => {
  if (email.value === 'admin@test.com' && password.value === '1234') {
    router.push('/home')
  } else {
    error.value = 'Credenciales incorrectas'
  }
}
</script>

<style>
.login-container {
  max-width: 300px;
  margin: auto;
  padding-top: 100px;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  padding: 10px;
  width: 100%;
}
</style>
