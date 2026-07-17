<script setup>
import ContratoServicios from '../../components/Servicios/Captura_datos/FrmContratoServicios.vue'
import { reactive } from 'vue'

const model = reactive({})

</script>

<template>
  <ContratoServicios v-model="model" />
</template>



