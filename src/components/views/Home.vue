<template>
  <div>
    <h1>{{ usuario.name }}</h1>
    <p>Login exitoso</p>
  </div>
</template>

<script setup>
import { useUserStore } from '../../stores/users';

  const userStore = useUserStore()


const usuario = ref('')


onMounted(() => {
  usuario.value = useUserStore.usuario
})
</script>