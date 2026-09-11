<template>
  <div class="parentescos">
    <div class="titulo">
      <h2>Gestión de Parentescos</h2>
    </div>
    <!-- FORMULARIO -->
    <div class="formulario">
      <div class="campo">
        <label>Nombre del parentesco</label>

        <input v-model="form.parentesco" type="text" placeholder="Ej: Padre" />
      </div>

      <div class="campo">
        <label>Línea</label>

        <select v-model="form.linea">
          <option value="">Seleccione...</option>

          <option value="Directa">Directa</option>

          <option value="Colateral">Colateral</option>
        </select>
      </div>

      <div class="campo">
        <label>Edad límite</label>

        <input
          v-model="form.edadlimite"
          type="number"
          min="0"
          placeholder="Ej: 25"
        />
      </div>
    </div>
    <br />
    <!-- CONTROLES DE TABLA -->
    <div class="tabla-controles">
      <div class="mostrar">
        <span>Mostrar</span>

        <select v-model="itemsPorPagina">
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
        </select>

        <span>registros</span>
      </div>

      <div class="buscar">
        <label>Buscar:</label>

        <input v-model="busqueda" type="text" placeholder="Buscar..." />
      </div>
    </div>

    <!-- TABLA -->
    <div class="tabla-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Parentesco</th>
            <th>Línea</th>
            <th>Edad Límite</th>
            <th>Cambiado Por</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="parentesco in parentescosPaginados"
            :key="parentesco.idparentesco"
          >
            <td>{{ parentesco.idparentesco }}</td>

            <td>{{ parentesco.parentesco }}</td>

            <td>{{ parentesco.linea }}</td>

            <td>{{ parentesco.edadlimite }}</td>

            <td>{{ parentesco.cambiadopor }}</td>

            <td class="acciones-tabla">
              <button class="btn-editar" @click="editar(parentesco)">
                ✏️ 
              </button>

              <button class="btn-eliminar" @click="eliminar(parentesco)">
                🗑️ 
              </button>
            </td>
          </tr>

          <!-- SIN RESULTADOS -->
          <tr v-if="parentescosPaginados.length === 0">
            <td colspan="6" class="sin-resultados">
              No se encontraron registros
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PAGINACIÓN -->
    <div class="tabla-footer">
      <div class="info-registros">
        Mostrando
        <strong>{{ registroInicio }}</strong>
        a
        <strong>{{ registroFin }}</strong>
        de
        <strong>{{ registrosFiltrados.length }}</strong>
        registros
      </div>

      <div class="paginacion">
        <button :disabled="paginaActual === 1" @click="paginaActual--">
          ‹
        </button>

        <button
          v-for="pagina in paginas"
          :key="pagina"
          :class="{ activa: pagina === paginaActual }"
          @click="paginaActual = pagina"
        >
          {{ pagina }}
        </button>

        <button
          :disabled="paginaActual === totalPaginas"
          @click="paginaActual++"
        >
          ›
        </button>
      </div>
    </div>

    <!-- BOTONES -->
    <div class="acciones">
      <button class="btn-nuevo" @click="nuevo">Nuevo</button>

      <button class="btn-guardar" @click="guardar" :disabled="!form.parentesco">
        Guardar
      </button>

      <button class="btn-cancelar" @click="cancelar">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import Swal from "sweetalert2";

import { parentescoStore } from "../../../stores/parametros/parentescoStore.js";

const parentescosStore = parentescoStore();

/* =====================================================
   FORMULARIO
===================================================== */

const parentescoSeleccionado = ref(null);

const form = ref({
  idparentesco: null,
  parentesco: "",
  linea: "",
  edadlimite: "",
});

/* =====================================================
   TABLA
===================================================== */
const busqueda = ref("");
const paginaActual = ref(1);
const itemsPorPagina = ref(10);

/* =====================================================
   FILTRO
===================================================== */

const registrosFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase().trim();

  if (!texto) {
    return parentescosStore.parentescos;
  }

  return parentescosStore.parentescos.filter((parentesco) => {
    return (
      String(parentesco.idparentesco).toLowerCase().includes(texto) ||
      String(parentesco.parentesco).toLowerCase().includes(texto) ||
      String(parentesco.linea).toLowerCase().includes(texto) ||
      String(parentesco.edadlimite).toLowerCase().includes(texto) ||
      String(parentesco.cambiadopor).toLowerCase().includes(texto)
    );
  });
});

/* =====================================================
   TOTAL PAGINAS
===================================================== */

const totalPaginas = computed(() => {
  return Math.ceil(registrosFiltrados.value.length / itemsPorPagina.value);
});

/* =====================================================
   REGISTROS DE LA PÁGINA
===================================================== */

const parentescosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * itemsPorPagina.value;

  const fin = inicio + itemsPorPagina.value;

  return registrosFiltrados.value.slice(inicio, fin);
});

/* =====================================================
   INFORMACIÓN MOSTRADA
===================================================== */

const registroInicio = computed(() => {
  if (registrosFiltrados.value.length === 0) {
    return 0;
  }

  return (paginaActual.value - 1) * itemsPorPagina.value + 1;
});

const registroFin = computed(() => {
  return Math.min(
    paginaActual.value * itemsPorPagina.value,

    registrosFiltrados.value.length
  );
});

/* =====================================================
   NÚMEROS DE PÁGINA
===================================================== */

const paginas = computed(() => {
  const total = totalPaginas.value;

  const actual = paginaActual.value;

  const resultado = [];

  let inicio = Math.max(1, actual - 2);

  let fin = Math.min(total, inicio + 4);

  if (fin - inicio < 4) {
    inicio = Math.max(1, fin - 4);
  }

  for (let i = inicio; i <= fin; i++) {
    resultado.push(i);
  }

  return resultado;
});

/* =====================================================
   REINICIAR PAGINA CUANDO SE BUSCA
===================================================== */

watch(busqueda, () => {
  paginaActual.value = 1;
});

/* =====================================================
   REINICIAR PAGINA AL CAMBIAR CANTIDAD
===================================================== */

watch(itemsPorPagina, () => {
  paginaActual.value = 1;
});

/* =====================================================
   CARGAR
===================================================== */


const cargar = async () => {
  Swal.fire({
    title: "Cargando",
    text: "Consultando parentescos...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    await parentescosStore.cargarParentescos();
  } catch (error) {
    console.error("Error cargando parentescos:", error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No fue posible cargar los parentescos.",
    });
  } finally {
    // Solo cerrar si todavía está abierto
    if (Swal.isVisible()) {
      Swal.close();
    }
  }
};


const cargar1 = async () => {
  Swal.fire({
    title: "Cargando",

    text: "Consultando parentescos...",

    allowOutsideClick: false,

    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    await parentescosStore.cargarParentescos();
  } finally {
    Swal.close();
  }
};

onMounted(async () => {
  await cargar();
});

/* =====================================================
   NUEVO
===================================================== */

const nuevo = () => {
  parentescoSeleccionado.value = null;

  form.value = {
    idparentesco: null,

    parentesco: "",

    linea: "",

    edadlimite: "",
  };
};

/* =====================================================
   EDITAR
===================================================== */

const editar = (parentesco) => {
  parentescoSeleccionado.value = parentesco;

  form.value = {
    idparentesco: parentesco.idparentesco,

    parentesco: parentesco.parentesco,

    linea: parentesco.linea,

    edadlimite: parentesco.edadlimite,
  };
};

/* =====================================================
   CANCELAR
===================================================== */

const cancelar = () => {
  parentescoSeleccionado.value = null;

  form.value = {
    idparentesco: null,

    parentesco: "",

    linea: "",

    edadlimite: "",
  };
};

/* =====================================================
   GUARDAR
===================================================== */

const guardar = () => {
  console.log("Datos para guardar:", form.value);
};

/* =====================================================
   ELIMINAR
===================================================== */

const eliminar = (parentesco) => {
  console.log("Eliminar:", parentesco);
};
</script>

<style scoped>
.parentescos {
  width: 100%;
}

/* =========================
   TITULO
========================= */

.titulo {
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.titulo h2 {
  margin: 0 0 10px;
  font-size: 20px;
}
/* =========================
   ACA ME PONE EL MODAL ENCIMA DE TODO
========================= */

:global(.swal2-container) {
  z-index: 20000 !important;
}

/* =========================
   CONTROLES
========================= */

.tabla-controles {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 10px;

  font-size: 13px;
}

.mostrar {
  display: flex;

  align-items: center;

  gap: 6px;
}

.mostrar select {
  padding: 5px 8px;

  border: 1px solid #cbd5e1;

  border-radius: 5px;
}

.buscar {
  display: flex;

  align-items: center;

  gap: 8px;
}

.buscar input {
  padding: 7px 10px;

  width: 220px;

  border: 1px solid #cbd5e1;

  border-radius: 5px;

  outline: none;
}

.buscar input:focus {
  border-color: #6366f1;
}

/* =========================
   TABLA
========================= */

.tabla-container {
  overflow-x: auto;

  border: 1px solid #e2e8f0;

  border-radius: 6px;
}

table {
  width: 100%;

  border-collapse: collapse;
}

th,
td {
  padding: 9px 10px;

  border-bottom: 1px solid #eee;

  text-align: left;

  white-space: nowrap;
}

th {
  background: #f5f5f5;

  font-size: 13px;
}

td {
  font-size: 13px;
}

tbody tr:hover {
  background: #f8fafc;
}

/* =========================
   ACCIONES TABLA
========================= */

.acciones-tabla {
  display: flex;

  gap: 5px;
}

.acciones-tabla button {
  padding: 5px 9px;

  font-size: 12px;
}

.btn-editar {
  background: #e0e7ff;

  color: #3730a3;
}

.btn-eliminar {
  background: #fee2e2;

  color: #b91c1c;
}

/* =========================
   SIN RESULTADOS
========================= */

.sin-resultados {
  text-align: center;

  padding: 25px;

  color: #64748b;
}

/* =========================
   FOOTER TABLA
========================= */

.tabla-footer {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-top: 10px;

  font-size: 13px;
}

.info-registros {
  color: #64748b;
}

/* =========================
   PAGINACION
========================= */

.paginacion {
  display: flex;

  gap: 4px;
}

.paginacion button {
  min-width: 32px;

  height: 30px;

  padding: 4px 8px;

  border: 1px solid #cbd5e1;

  background: white;

  border-radius: 5px;
}

.paginacion button:hover:not(:disabled) {
  background: #f1f5f9;
}

.paginacion button.activa {
  background: #6366f1;

  color: white;

  border-color: #6366f1;
}

.paginacion button:disabled {
  opacity: 0.4;

  cursor: not-allowed;
}

/* =========================
   FORMULARIO
========================= */

.formulario {
  display: grid;

  grid-template-columns: 2fr 1fr 1fr;

  gap: 15px;

  margin-top: 20px;

  padding: 15px;

  border: 1px solid #e2e8f0;

  border-radius: 8px;

  background: #f8fafc;
}

.campo {
  display: flex;

  flex-direction: column;

  gap: 6px;
}

.campo label {
  font-size: 13px;

  font-weight: 600;

  color: #475569;
}

.campo input,
.campo select {
  padding: 9px 10px;

  border: 1px solid #cbd5e1;

  border-radius: 6px;

  outline: none;
}

.campo input:focus,
.campo select:focus {
  border-color: #6366f1;
}

/* =========================
   BOTONES
========================= */

.acciones {
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 15px;
}

button {
  padding: 8px 15px;

  border: none;

  border-radius: 6px;

  cursor: pointer;
}

button:disabled {
  opacity: 0.5;

  cursor: not-allowed;
}

.btn-nuevo {
  background: #e2e8f0;
}

.btn-guardar {
  background: #6366f1;

  color: white;
}

.btn-cancelar {
  background: #f1f5f9;
}
</style>

