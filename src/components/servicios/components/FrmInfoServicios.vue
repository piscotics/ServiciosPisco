<template>
  <div class="form">
    <!-- 🔵 STEP 1 -->
    <div v-if="step === 1">
      <FrmCrearServicio />
    </div>
    <!-- 🔵 STEP 2 -->
    <div v-if="step === 2">
      <FrmCrearServicioCmplemento />
    </div>

    <!-- 🔵 STEP 3 -->
    <div v-if="step === 3">
      <FrmPrestacionServicio />
    </div>
    <!-- 🔥 BOTONES -->
    <div class="actions">
      <button v-if="step > 1" @click="prevStep">Atrás</button>

      <button v-if="step < 3" @click="nextStep">Siguiente</button>

      <button v-if="step === 3" @click="guardar">Guardar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FrmCrearServicio from "./Servicios/FrmCrearServicio.vue";
import FrmCrearServicioCmplemento from './Servicios/FrmServicioComplemento.vue';
import FrmPrestacionServicio from "./Servicios/FrmPrestacionServicio.vue";
const step = ref(1);

const model = defineModel({
  default: () => ({
    noOrden: "",
    marcapaso: "No",
    covid: "No",
    preservado: false,
  }),
});

const nextStep = () => {
  if (step.value < 4) {
    step.value++;
  }
};

const prevStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};

const guardar = () => {
  console.log("guardar");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
/* CARD STYLES */
.form-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}
</style>
