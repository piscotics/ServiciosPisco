<script setup>
import TipoServicios from '../../components/Servicios/Captura_datos/FrmTipoServicio.vue'
import Contratante from '../../components/Servicios/Captura_datos/FrmContratante.vue'
import Fallecido from '../../components/Servicios/Captura_datos/FrmFallecido.vue'
import DatosFallecido from '../../components/Servicios/Captura_datos/FrmDatosFallecido.vue'
import { reactive } from 'vue'

const model = reactive({})

</script>


<template>
  <TipoServicios v-model="model" />
  <Contratante v-model="model" />
  <Fallecido v-model="model" />
  <DatosFallecido v-model="model" />
</template>



