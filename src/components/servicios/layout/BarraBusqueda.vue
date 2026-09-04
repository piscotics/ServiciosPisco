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
        <option value="orden">Por # de Orden Servicio</option>
        <option value="cedula">Por Cédula de Fallecido</option>
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
const emit = defineEmits(["change-component"]);
const contrato = ref("");
const ordenesStore = useOrdenesStore();
const tipo = ref("orden");
const loading = ref(false);

const seleccionarContrato = async () => {
  const valor = contrato.value.trim();

  if (!valor) {
    Swal.fire({
      icon: "warning",
      title: "Buscar",
      text:
        tipo.value === "cedula"
          ? "Ingrese la cédula del fallecido"
          : "Ingrese un número de Orden de Servicio",
    });

    return;
  }

  try {
    loading.value = true;

    // =========================
    // BUSCAR POR ORDEN
    // =========================
    if (tipo.value === "orden") {
      await ordenesStore.cargarOrdenIndividual(valor);

      if (!ordenesStore.contrato) {
        Swal.fire({
          icon: "info",
          title: "No encontrada",
          text: "No se encontró información con el dato ingresado",
        });
        return;
      }

      // 🔥 Mandamos el contrato encontrado al Sidebar
      ordenesStore.seleccionarContratoBuscado(ordenesStore.contrato);
    }
    // =========================
    // BUSCAR POR CÉDULA
    // =========================
    else if (tipo.value === "cedula") {
      await ordenesStore.buscarPorCedula(valor);

      if (!ordenesStore.contrato) {
        Swal.fire({
          icon: "info",
          title: "No encontrada",
          text: "No se encontraron órdenes para la cédula ingresada",
        });
        return;
      }

      ordenesStore.seleccionarContratoBuscado(ordenesStore.contrato);
    }

    // =========================
    // VALIDAR RESULTADO
    // =========================
    if (!ordenesStore.contrato || !ordenesStore.contrato.idscontrato) {
      Swal.fire({
        icon: "info",
        title: "No encontrada",
        text: "No se encontró información con el dato ingresado",
      });

      return;
    }

    // =========================
    // IR A LA PANTALLA
    // =========================
    emit("change-component", {
      component: "ResumenOrden",
      // contrato: ordenesStore.contrato,
    });
  } catch (error) {
    console.error("Error buscando:", error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No fue posible realizar la búsqueda",
    });
  } finally {
    loading.value = false;
  }
};

const seleccionarContrato1 = async () => {
  const valor = contrato.value.trim();

  if (!valor) {
    Swal.fire({
      icon: "warning",
      title: "Buscar",
      text:
        tipo.value === "cedula"
          ? "Ingrese la cédula del fallecido"
          : "Ingrese un número de Orden de Servicio",
    });

    return;
  }

  try {
    loading.value = true;

    // Buscar por número de Orden de Servicio
    if (tipo.value === "orden") {
      await ordenesStore.cargarOrdenIndividual(valor);
    }

    // Buscar por cédula del fallecido
    else if (tipo.value === "cedula") {
      await ordenesStore.buscarPorCedula(valor);
    }

    // Verificamos si encontró información
    if (!ordenesStore.contrato || !ordenesStore.contrato.idscontrato) {
      Swal.fire({
        icon: "info",
        title: "No encontrada",
        text: "No se encontró información con el dato ingresado",
      });

      return;
    }
  } catch (error) {
    console.error("Error buscando:", error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No fue posible realizar la búsqueda",
    });
  } finally {
    loading.value = false;
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
}
</style>
