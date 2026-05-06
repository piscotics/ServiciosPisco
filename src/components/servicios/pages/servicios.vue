<template>
  <div class="dashboard">

    <Sidebar />

    <div class="main">

      <Header />

      <div class="top-bars">
        <BarraOpciones />
        <BarraBusqueda />
      </div>

      <main class="content">

        <section class="content-body">

          <div class="form">

        <!-- 🔵 STEP 1 -->
        <div v-if="step === 1">
          <div class="form-header">
            DATOS TIPO DE SERVICIO Y TITULAR
          </div>
          <InfoServicios />
        </div>

        <!-- 🔵 STEP 2 -->
        <div v-if="step === 2">
          <div class="form-header">
            INFORMACIÓN DEL CONTRATANTE DEL SERVICIO
          </div>
          <InfoTitular />
        </div>

        <!-- 🔵 STEP 3 -->
        <div v-if="step === 3">
          <div class="form-header">
            INFORMACIÓN DEL FALLECIDO
          </div>
          <InfoFallecido v-model="form" />
        </div>

        <!-- 🔵 STEP 4 -->
        <div v-if="step === 4">
          <div class="form-header">
            DATOS DEL FALLECIMIENTO
          </div>
          <InfoFallecimiento />
        </div>

        <!-- 🔥 BOTONES -->
        <div class="actions">
          <button v-if="step > 1" @click="prevStep">Atrás</button>

          <button v-if="step < 4" @click="nextStep">
            Siguiente
          </button>

          <button v-if="step === 4" @click="guardar">
            Guardar
          </button>
        </div>

</div>

        </section>

      </main>

    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Header from '../layout/Cabecera.vue'
import Sidebar from '../layout/Sidebar.vue'
import BarraBusqueda from '../layout/BarraBusqueda.vue'
import BarraOpciones from '../layout/BarraOpciones.vue'
import InfoServicios from '../components/FrmInfoServicios.vue'
import InfoTitular from '../components/FrmInfoTitular.vue'
import InfoFallecido from '../components/FrmInfoFallecido.vue'
import InfoFallecimiento from '../components/FrmInfoFallecimiento.vue'
const listaServicios = ref([])

onMounted(() => {

})


const step = ref(1)

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

const form = ref({})

const guardar = () => {
  console.log('Datos finales:', form.value)
}
</script>

<style scoped>

.stepper {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.step {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #cbd5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step.active {
  background: #1e3a8a;
  color: white;
}

.dashboard {
  min-height: 100vh;
  background: var(--bg);
}

.main {
  min-height: 100vh;
  padding-left: 260px;
  padding-top: 72px;
}

.content {
  min-height: calc(100vh - 72px);
  padding: 10px;
}

.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.section-label {
  margin: 0 0 6px;
  color: var(--primary-dark);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.content h2 {
  margin: 0;
  color: var(--text);
  font-size: 30px;
  line-height: 1.15;
}

.view-chip {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 12px;
  border: 1px solid rgba(15, 118, 110, 0.18);
  border-radius: var(--radius);
  background: rgba(15, 118, 110, 0.08);
  color: var(--primary-dark);
  font-size: 13px;
  font-weight: 800;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.stats article {
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
}

.stats span {
  display: block;
  color: var(--primary-dark);
  font-size: 28px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 8px;
}

.stats p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.lista li {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 14px;
  min-height: 78px;
  padding: 15px 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.lista li:hover {
  transform: translateY(-2px);
  border-color: rgba(15, 118, 110, 0.35);
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.08);
}

.service-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: var(--radius);
  background: var(--primary-soft);
  color: var(--primary-dark);
  font-weight: 900;
}

.lista strong {
  display: block;
  color: var(--text);
  font-size: 16px;
  margin-bottom: 4px;
}

.lista p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.4;
}

.status {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.1);
  color: var(--primary-dark);
  font-size: 12px;
  font-weight: 800;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 🔵 barra azul tipo sistema */
.form-header {
  background: #1e3a8a; /* azul fuerte */
  color: white;
  font-weight: 800;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

/* secciones debajo del header */
.form > *:not(.form-header):not(.actions) {
  margin-bottom: 4px;
}

/* botón */
.actions {
  margin-top: 12px;
}

.actions button {
  padding: 8px 16px;
  background: #334155;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.actions button:hover {
  background: #1e293b;
}
.top-bars {
  position: sticky;
  top: 72px;
  z-index: 900;

  display: flex;
  flex-direction: row; /* 🔥 antes column */
  align-items: center;
  gap: 10px;

  padding: 8px 10px;
  background: var(--bg);
}
.search-bar {
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 780px) {
  .main {
    padding-left: 0;
    padding-top: 64px;
  }

  .content {
    padding: 88px 18px 24px;
  }

  .content-header {
    display: grid;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .view-chip {
    width: 100%;
    justify-content: center;
  }

  .lista li {
    grid-template-columns: 44px 1fr;
  }

  .status {
    grid-column: 2;
    width: fit-content;
  }


  
}
</style>
