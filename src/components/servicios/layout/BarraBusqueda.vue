<template>
  <section class="search-bar">
    <div class="tools">
  <input
    v-model="contrato"
    type="text"
    placeholder="Buscar..."
    class="input"
    @keyup.enter="seleccionarContrato"
  />

  <select v-model="tipo" class="select">
    <option value="">Por # de Orden Servicio</option>
    <option value="agua">Por Cédula de Fallecido</option>
  </select>

  <button
    class="btn-buscar"
    type="button"
    @click="seleccionarContrato"
    title="Buscar"
  >
    <i class="fa-solid fa-magnifying-glass"></i>
  </button>
</div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useOrdenesStore } from "../../../stores/OrdenServicios/ordenStore.js";
import Swal from "sweetalert2";
const contrato = ref("");
const ordenesStore = useOrdenesStore();
const tipo = ref("");

const seleccionarContrato = async () => {
  if (!contrato.value || !contrato.value.trim()) {
    Swal.fire({
      icon: "warning",
      title: "Buscar orden",
      text: "Ingrese un número de Orden de Servicio",
    });

    return;
  }

  try {
    loading.value = true;

    await ordenesStore.cargarOrdenIndividual(
      contrato.value.trim()
    );

    // Verificamos si encontró información
    if (!ordenesStore.contrato || !ordenesStore.contrato.idscontrato) {
      Swal.fire({
        icon: "info",
        title: "No encontrada",
        text: "No se encontró la Orden de Servicio",
      });

      return;
    }

    // Aquí mandamos la orden encontrada a la pantalla
    seleccionarContratoPantalla(ordenesStore.contrato);

  } catch (error) {
    console.error("Error buscando contrato:", error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No fue posible consultar la Orden de Servicio",
    });
  } finally {
    loading.value = false;
  }
};

const seleccionarContratoe = async (contrato) => {
  const estabaAbierto = open[contrato.idscontrato];
  // Cerrar todos
  contratos.value.forEach((c) => {
    open[c.idscontrato] = false;
  });

  // Si estaba cerrado, lo abrimos
  if (!estabaAbierto) {
    open[contrato.idscontrato] = true;

    //  await ordenesStore.cargarOrdenIndividual(contrato.idscontrato);

    emit("change-component", {
      component: "ResumenOrden",
      tipo: "contrato",
      idServicio: contrato.idservicio,
      idContrato: contrato.idscontrato,
    });
  }
};
</script>

<style scoped>
.btn-buscar {
  width: 42px;
  height: 32px;
  border: none;
  border-radius: 10px;
  background: #f1f5f9;
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}

.btn-buscar:hover {
  background: #e2e8f0;
  color: #2563eb;
  transform: scale(1.05);
}

.btn-buscar:active {
  transform: scale(0.95);
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  margin-bottom: 16px;
  padding: 8px 12px; /* 🔥 antes 14px */

  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
}

h3 {
  margin: 0;
  font-size: 13px; /* 🔥 antes 16px */
  font-weight: 600;
}

.tools {
  display: flex;
  align-items: center;
  gap: 6px; /* 🔥 más compacto */
}

.input,
.select {
  height: 32px; /* 🔥 antes 40px */
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--surface-soft);
  font-size: 13px;
}

/* input */
.input {
  padding: 0 10px;
}

/* select */
.select {
  padding: 0 8px;
}

.input:focus,
.select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.12);
}

.btn {
  height: 32px; /* 🔥 igual que inputs */
  padding: 0 12px;
  border-radius: 6px;
  border: none;

  background: #334155;
  color: white;
  font-size: 13px;
}

.btn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

@media (max-width: 780px) {
  .search-bar {
    gap: 8px;
    padding: 12px;
  }

  h3 {
    font-size: 14px;
  }

  .tools {
    gap: 8px;
  }

  .input {
    min-width: 0;
    width: 100%;
  }

  .select {
    width: 105px;
  }

  .btn {
    padding: 0 12px;
  }
}
</style>
