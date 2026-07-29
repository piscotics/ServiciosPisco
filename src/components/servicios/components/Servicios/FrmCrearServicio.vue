<script setup>
import TipoServicios from '../../components/Captura_datos/FrmTipoServicio.vue'
import Contratante from '../../components/Captura_datos/FrmContratante.vue'
import Fallecido from '../../components/Captura_datos/FrmFallecido.vue'
import DatosFallecido from '../../components/Captura_datos/FrmDatosFallecido.vue'
import { reactive } from 'vue'

const model = reactive({})

</script>


<template>
  <TipoServicios v-model="model" />
  <Contratante v-model="model" />
  <Fallecido v-model="model" />
  <DatosFallecido v-model="model" />
</template>



