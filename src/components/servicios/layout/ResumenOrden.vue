<script setup>
import { computed } from "vue";
import { useOrdenesStore } from "../../../stores/OrdenServicios/ordenStore.js";
import { watch } from "vue";

const ordenesStore = useOrdenesStore();

const contrato = computed(() => ordenesStore.contrato);

watch(
  contrato,
  (nuevo) => {
  },
  { immediate: true }
);

const formatoMoneda = (valor) => {
  return Number(valor || 0).toLocaleString("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
</script>

<template>


  <div class="dashboard-container">
    <header class="header">
      <div class="title-group">
        <i class="fa-solid fa-file-contract icon-main"></i>
        <h1>Resumen de la Orden de Servicio</h1>
      </div>
    </header>

    <div class="resumen-servicio">
      <div class="fila">
        <label>Contrato De Servicios No:</label>
        <span>{{ contrato.idscontrato }}</span>
      </div>

      <div class="fila">
        <label>Fecha:</label>
        <span>{{ contrato.sfecha }}</span>
      </div>

      <div class="fila">
        <label>Nombre del Fallecido:</label>
        <span>{{ contrato.nombre }} {{ contrato.apellidos }}</span>
      </div>

      <div class="fila">
        <label>No. Identificación:</label>
        <span>{{ contrato.idfallecido }}</span>
      </div>

      <div class="fila">
        <label>Tipo:</label>
        <span>{{ contrato.tiposervicio }}</span>
      </div>

      <div class="fila">
        <label>Total Servicio:</label>
        <span>{{ formatoMoneda(contrato.total) }}</span>
      </div>

      <div class="fila">
        <label>Abonos:</label>
        <span>{{ formatoMoneda(contrato.abonos) }}</span>
      </div>

      <div class="fila">
        <label>Saldo:</label>
        <span>{{ formatoMoneda(contrato.saldo) }}</span>
      </div>

      <div class="fila">
        <label>Por Facturar:</label>
        <span>{{ formatoMoneda(contrato.porFacturar) }}</span>
      </div>

      <div class="fila">
        <label>Factura:</label>
        <span>{{ contrato.factura }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor Principal */
.dashboard-container {
  padding: 30px;
  background: #f8fafc;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  font-family: "Inter", sans-serif;
  color: #1e293b;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f1f5f9;
}

.title-group {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-main {
  font-size: 24px;
  color: #6366f1;
}

h1 {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.status-badge {
  background: #ecfdf5;
  color: #059669;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* Grilla de Torticas */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.chart-card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #f1f5f9;
}

.chart-card h3 {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 20px;
}

/* Lógica de la Tortica en CSS Puro */
.pie-chart {
  --w: 120px;
  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  place-content: center;
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
}

.pie-chart:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: conic-gradient(var(--c) calc(var(--p) * 1%), #f1f5f9 0);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 15px),
    #000 calc(100% - 15px)
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - 15px),
    #000 calc(100% - 15px)
  );
}

/* Etiquetas de los gráficos */
.chart-labels {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  font-size: 12px;
  font-weight: 500;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
}
.mascot {
  background: #6366f1;
}
.human {
  background: #e2e8f0;
}
.complete {
  background: #10b981;
}
.pending {
  background: #f1f5f9;
}
.individual {
  background: #f59e0b;
}
.group {
  background: #f1f5f9;
}

/* Footer de Stats */
.stats-footer {
  display: flex;
  gap: 40px;
  background: #1e293b;
  padding: 20px 30px;
  border-radius: 12px;
  color: white;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
}

.stat-label {
  font-size: 12px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

.dashboard-container {
  padding: 25px;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #dfe6ee;
}

.header {
  margin-bottom: 30px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 15px;
}

.title-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-main {
  font-size: 22px;
  color: #2563eb;
}

.title-group h1 {
  margin: 0;
  font-size: 22px;
}

.resumen-servicio {
  width: 600px;
  margin: 0 auto;
}

.fila {
  display: grid;
  grid-template-columns: 230px 1fr;
  align-items: center;
  margin: 12px 0;
}

.fila label {
  font-weight: 700;
  text-align: right;
  padding-right: 20px;
  color: #222;
}

.fila span {
  color: #0b63f6;
  font-weight: 500;
}
</style>
