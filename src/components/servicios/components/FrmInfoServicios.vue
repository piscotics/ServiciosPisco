
<template>
  

  <div class="form">

<!-- 🔵 STEP 1 -->
<div v-if="step === 1">
  <FrmCrearServicio/>
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

<button v-if="step < 3" @click="nextStep">
  Siguiente
</button>

<button v-if="step === 3" @click="guardar">
  Guardar
</button>
</div>

</div>


</template>

<script setup>
import { ref } from 'vue'

import FrmCrearServicio from './Servicios/FrmCrearServicio.vue'
import FrmCrearServicioCmplemento from './Servicios/FrmServicioComplemento.vue'
import FrmPrestacionServicio from './Servicios/FrmPrestacionServicio.vue'
const step = ref(1)

const model = defineModel({
  default: () => ({
    noOrden: '',
    marcapaso: 'No',
    covid: 'No',
    preservado: false
  })
})

const nextStep = () => {
  if (step.value < 4) {
    step.value++
  }
}

const prevStep = () => {
  if (step.value > 1) {
    step.value--
  }
}

const guardar = () => {
  console.log('guardar')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.service-order-container {
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc;
  padding: 1px 2px;

  color: #1e293b;
}

.form-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* HEADER STYLES */
.form-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 20px;
}

.form-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
}

.form-header p {
  font-size: 14px;
  color: #64748b;
  margin: 4px 0 0 0;
}

.order-badge {
  text-align: right;
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.order-badge .label {
  display: block;
  font-size: 10px;
  font-weight: 800;
  color: #6366f1;
  letter-spacing: 1px;
}

.input-minimal {
  border: none;
  font-size: 18px;
  font-weight: 700;
  text-align: right;
  width: 120px;
  color: #1e293b;
  outline: none;
}

/* CARD STYLES */
.form-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  color: #6366f1;
}

.card-header h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* GRID SYSTEM */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

.field { display: flex; flex-direction: column; gap: 6px; }
.span-2 { grid-column: span 2; }
.span-3 { grid-column: span 3; }

label {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
}

input, select {
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 14px;
  color: #334155;
  transition: all 0.2s;
  background-color: #f8fafc;
}

input:focus, select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background-color: #fff;
}

.bg-light-pink { background-color: #fff1f2; }

/* TOGGLE BUTTONS */
.toggle-group {
  display: flex;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 8px;
  height: 40px;
}

.toggle-group button {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-group button.active {
  background: white;
  color: #6366f1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* CHECKBOX CUSTOM */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .span-2, .span-3 { grid-column: span 1; }
}
</style>