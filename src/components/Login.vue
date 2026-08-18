<template>
  <div class="login-container">

    <section class="login-panel">

      <div class="brand">
        <span class="brand-mark">P</span>

        <div>
          <p class="eyebrow">Servicios Pisco</p>
          <h1>Bienvenido</h1>
        </div>
      </div>

      <!-- LOGIN -->
      <template v-if="step === 'login'">

        <p class="subtitle">
          Ingresa tus credenciales para acceder al panel.
        </p>

        <form @submit.prevent="login" class="login-form">

          <label>
            <span>Usuario</span>

            <input
              v-model="username"
              type="text"
              placeholder="PISCO"
              required
            />
          </label>

          <label>
            <span>Contraseña</span>

            <input
              v-model="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </label>

          <button type="submit">
            Ingresar
          </button>

        </form>

        <button
          class="link-button"
          @click="step = 'forgot'"
        >
          ¿Olvidaste tu contraseña?
        </button>

      </template>

      <!-- RECUPERAR -->
      <template v-if="step === 'forgot'">

        <p class="subtitle">
          Ingresa tu usuario para enviar el código.
        </p>

        <form
          @submit.prevent="sendCode"
          class="login-form"
        >

          <label>
            <span>Usuario</span>

            <input
              v-model="recoveryUser"
              type="text"
              placeholder="Usuario"
              required
            />
          </label>

          <button type="submit">
            Enviar código
          </button>

        </form>

        <button
          class="link-button"
          @click="step = 'login'"
        >
          Volver al login
        </button>

      </template>

      <!-- VALIDAR CÓDIGO -->
      <template v-if="step === 'code'">

        <p class="subtitle">
          Ingresa el código enviado a tu correo.
        </p>

        <form
          @submit.prevent="validateCode"
          class="login-form"
        >

          <label>
            <span>Código</span>

            <input
              v-model="code"
              type="text"
              placeholder="123456"
              required
            />
          </label>

          <button type="submit">
            Validar código
          </button>

        </form>
        
        <button
          class="link-button"
          @click="step = 'login'"
        >
          Volver al login
        </button>

      </template>

    </section>

  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/users.js'
import userServices from '../services/user.services.js'
import { startInactivityTimer } from '../utils/session.js' 
import Swal from 'sweetalert2'

const router = useRouter()

// LOGIN
const username = ref('')
const password = ref('')

// RECUPERACIÓN
const recoveryUser = ref('')
const code = ref('')

// CONTROL VISTAS
const step = ref('login')

// LOGIN
const login = async () => {
  // Mostrar cargando
  Swal.fire({
    title: 'Iniciando sesión...',
    text: 'Por favor espere',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })
  try {

    console.log(username.value, password.value);

    const response = await userServices.Login(
      username.value,
      password.value
    )

    localStorage.setItem(
      'token',
      response.data.token
    )

    localStorage.setItem(
      'user',
      JSON.stringify(response.data.user)
    )

    useUserStore().setUsuario(
      response.data.user
    )

    startInactivityTimer(router)

    await Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: `Hola ${response.data.user.nombre}`,
      timer: 1800,
      showConfirmButton: false
    })

   // router.push('/home')
   router.push('/home?view=Informacion')
    //router.push('/home?view=Usuarios')

  } catch (err) {

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text:
        err.response?.data?.message ||
        'Credenciales incorrectas'
    })
  }
}

// ENVIAR CÓDIGO
const sendCode = async () => {

  try {

    // 🔵 PETICIÓN BACKEND
    // await userServices.SendRecoveryCode(
    //   recoveryUser.value
    // )

    await Swal.fire({
      icon: 'success',
      title: 'Código enviado',
      text: 'Revisa tu correo electrónico'
    })

    step.value = 'code'

  } catch (err) {

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo enviar el código'
    })
  }
}

// VALIDAR CÓDIGO
const validateCode = async () => {

  try {

    // 🔵 VALIDAR BACKEND
    // await userServices.ValidateCode(
    //   recoveryUser.value,
    //   code.value
    // )

    await Swal.fire({
      icon: 'success',
      title: 'Código válido',
      text: 'Ahora puedes cambiar tu contraseña'
    })

    // AQUÍ PUEDES MOSTRAR
    // FORM NUEVA CONTRASEÑA

  } catch (err) {

    Swal.fire({
      icon: 'error',
      title: 'Código incorrecto'
    })
  }
}

</script>
<style scoped>
.link-button {
  width: 100%;
  margin-top: 14px;
  border: none;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
}

.link-button:hover {
  text-decoration: underline;
}
.login-container {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 18px;
}

.login-panel {
  width: min(100%, 420px);
  padding: 34px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(219, 227, 239, 0.9);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: var(--radius);
  background: var(--primary);
  color: white;
  font-size: 24px;
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--primary-dark);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  font-size: 30px;
  line-height: 1.1;
}

.subtitle {
  margin: 0 0 26px;
  color: var(--muted);
  line-height: 1.5;
}

label {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}

input {
  width: 100%;
  min-height: 46px;
  padding: 0 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  background: var(--surface-soft);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

input:focus {
  border-color: var(--primary);
  background: var(--surface);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.12);
}

button {
  width: 100%;
  min-height: 48px;
  margin-top: 4px;
  border: 0;
  border-radius: var(--radius);
  background: var(--primary);
  color: white;
  font-weight: 800;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  background: var(--primary-dark);
  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.22);
  transform: translateY(-1px);
}

.error-message {
  margin: 16px 0 0;
  padding: 11px 12px;
  border: 1px solid rgba(220, 38, 38, 0.22);
  border-radius: var(--radius);
  color: var(--danger);
  background: rgba(220, 38, 38, 0.08);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 480px) {
  .login-panel {
    padding: 26px 20px;
  }

  h1 {
    font-size: 26px;
  }
}
</style>
