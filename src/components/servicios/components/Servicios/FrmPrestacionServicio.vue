<script setup>
import OrdenServicio from '../../components/Servicios/Captura_datos/FrmOrdenServicio.vue'
import { reactive } from 'vue'

const model = reactive({})

</script>

<template>
  <OrdenServicio v-model="model" />
</template>

