<template>
    <div class="cementerios">
  
      <!-- =====================================================
           TITULO
      ====================================================== -->
      <div class="titulo">
        <h2>Gestión de Cementerios</h2>
      </div>
  
  
      <!-- =====================================================
           FORMULARIO
      ====================================================== -->
      <div class="formulario">
  
        <div class="campo">
          <label>Nombre del cementerio</label>
          <input
            v-model="form.cementerio"
            type="text"
            placeholder="Ej: Cementerio Central"
          />
        </div>
  
        <div class="campo">
          <label>Dirección</label>
          <input
            v-model="form.direccion"
            type="text"
            placeholder="Dirección"
          />
        </div>
  
        <div class="campo">
          <label>Ciudad</label>
          <input
            v-model="form.ciudad"
            type="text"
            placeholder="Ciudad"
          />
        </div>
  
        <div class="campo">
          <label>Teléfono</label>
          <input
            v-model="form.telefono"
            type="text"
            placeholder="Teléfono"
          />
        </div>
  
        <div class="campo">
          <label>Localidad</label>
          <input
            v-model="form.localidad"
            type="text"
            placeholder="Localidad"
          />
        </div>
  
        <div class="campo">
          <label>Barrio</label>
          <input
            v-model="form.barrio"
            type="text"
            placeholder="Barrio"
          />
        </div>
  
        <div class="campo">
          <label>Alias</label>
          <input
            v-model="form.alias"
            type="text"
            placeholder="Alias"
          />
        </div>
  
        <div class="campo">
          <label>Departamento</label>
          <input
            v-model="form.departamento"
            type="text"
            placeholder="Departamento"
          />
        </div>
  
        <div class="campo">
          <label>Estado</label>
          <select v-model="form.estado">
            <option :value="0">Inactivo</option>
            <option :value="1">Activo</option>
          </select>
        </div>
  
      </div>
  
  
      <!-- =====================================================
           CONTROLES DE TABLA
      ====================================================== -->
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
  
          <input
            v-model="busqueda"
            type="text"
            placeholder="Buscar cementerio..."
          />
        </div>
  
      </div>
  
  
      <!-- =====================================================
           TABLA
      ====================================================== -->
      <div class="tabla-container">
  
        <table>
  
          <thead>
            <tr>
              <th>ID</th>
              <th>Cementerio</th>
              <th>Dirección</th>
              <th>Ciudad</th>
              <th>Teléfono</th>
              <th>Departamento</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
  
  
          <tbody>
  
            <tr
              v-for="cementerio in cementeriosPaginados"
              :key="cementerio.idcementerio"
            >
  
              <td>
                {{ cementerio.idcementerio }}
              </td>
  
              <td>
                {{ cementerio.cementerio }}
              </td>
  
              <td>
                {{ cementerio.direccion || "-" }}
              </td>
  
              <td>
                {{ cementerio.ciudadcementerio || cementerio.ciudad || "-" }}
              </td>
  
              <td>
                {{ cementerio.telefono || "-" }}
              </td>
  
              <td>
                {{ cementerio.departamento || "-" }}
              </td>
  
              <td>
  
                <span
                  :class="[
                    'estado',
                    cementerio.estado === 1
                      ? 'activo'
                      : 'inactivo'
                  ]"
                >
                  {{ cementerio.estado === 1 ? "Activo" : "Inactivo" }}
                </span>
  
              </td>
  
              <td class="acciones-tabla">
  
                <button
                  class="btn-editar"
                  @click="editar(cementerio)"
                >
                  ✏️
                </button>
  
                <button
                  class="btn-eliminar"
                  @click="eliminar(cementerio)"
                >
                  🗑️
                </button>
  
              </td>
  
            </tr>
  
  
            <!-- SIN RESULTADOS -->
            <tr v-if="cementeriosPaginados.length === 0">
  
              <td
                colspan="8"
                class="sin-resultados"
              >
                No se encontraron registros
              </td>
  
            </tr>
  
          </tbody>
  
        </table>
  
      </div>
  
  
      <!-- =====================================================
           PAGINACIÓN
      ====================================================== -->
      <div class="tabla-footer">
  
        <div class="info-registros">
  
          Mostrando
  
          <strong>
            {{ registroInicio }}
          </strong>
  
          a
  
          <strong>
            {{ registroFin }}
          </strong>
  
          de
  
          <strong>
            {{ registrosFiltrados.length }}
          </strong>
  
          registros
  
        </div>
  
  
        <div class="paginacion">
  
          <button
            :disabled="paginaActual === 1"
            @click="paginaActual--"
          >
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
  
  
      <!-- =====================================================
           BOTONES
      ====================================================== -->
      <div class="acciones">
  
        <button
          class="btn-nuevo"
          @click="nuevo"
        >
          Nuevo
        </button>
  
  
        <button
          class="btn-guardar"
          @click="guardar"
          :disabled="!form.cementerio"
        >
          Guardar
        </button>
  
  
        <button
          class="btn-cancelar"
          @click="cancelar"
        >
          Cancelar
        </button>
  
      </div>
  
    </div>
  </template>
  
  
  <script setup>
  
  import {
    ref,
    computed,
    watch,
    onMounted
  } from "vue";
  
  import Swal from "sweetalert2";
  
  import {useCementerioStore} from "../../../stores/parametros/cementerios/cementerioStore.js";
  
  
  const cementerioStore = useCementerioStore();
  
  
  /* =====================================================
     FORMULARIO
  ===================================================== */
  
  const cementerioSeleccionado = ref(null);
  
  const form = ref({
  
    idcementerio: null,
  
    cementerio: "",
  
    direccion: "",
  
    ciudad: "",
  
    telefono: "",
  
    localidad: "",
  
    barrio: "",
  
    alias: "",
  
    departamento: "",
  
    estado: 0
  
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
  
    const texto = busqueda.value
      .toLowerCase()
      .trim();
  
  
    if (!texto) {
  
      return cementerioStore.cementerios;
  
    }
  
  
    return cementerioStore.cementerios.filter(
      (cementerio) => {
  
        return (
  
          String(
            cementerio.idcementerio
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.cementerio
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.direccion
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.ciudad
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.ciudadcementerio
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.telefono
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.localidad
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.barrio
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.alias
          )
            .toLowerCase()
            .includes(texto)
  
          ||
  
          String(
            cementerio.departamento
          )
            .toLowerCase()
            .includes(texto)
  
        );
  
      }
    );
  
  });
  
  
  /* =====================================================
     TOTAL PAGINAS
  ===================================================== */
  
  const totalPaginas = computed(() => {
  
    return Math.ceil(
      registrosFiltrados.value.length /
      itemsPorPagina.value
    );
  
  });
  
  
  /* =====================================================
     REGISTROS DE LA PÁGINA
  ===================================================== */
  
  const cementeriosPaginados = computed(() => {
  
    const inicio =
      (paginaActual.value - 1) *
      itemsPorPagina.value;
  
    const fin =
      inicio +
      itemsPorPagina.value;
  
    return registrosFiltrados.value.slice(
      inicio,
      fin
    );
  
  });
  
  
  /* =====================================================
     INFORMACIÓN MOSTRADA
  ===================================================== */
  
  const registroInicio = computed(() => {
  
    if (
      registrosFiltrados.value.length === 0
    ) {
  
      return 0;
  
    }
  
    return (
      (paginaActual.value - 1) *
      itemsPorPagina.value
    ) + 1;
  
  });
  
  
  const registroFin = computed(() => {
  
    return Math.min(
  
      paginaActual.value *
      itemsPorPagina.value,
  
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
  
  
    let inicio = Math.max(
      1,
      actual - 2
    );
  
  
    let fin = Math.min(
      total,
      inicio + 4
    );
  
  
    if (fin - inicio < 4) {
  
      inicio = Math.max(
        1,
        fin - 4
      );
  
    }
  
  
    for (
      let i = inicio;
      i <= fin;
      i++
    ) {
  
      resultado.push(i);
  
    }
  
  
    return resultado;
  
  });
  
  
  /* =====================================================
     REINICIAR PAGINA CUANDO SE BUSCA
  ===================================================== */
  
  watch(
    busqueda,
    () => {
  
      paginaActual.value = 1;
  
    }
  );
  
  
  /* =====================================================
     REINICIAR PAGINA AL CAMBIAR CANTIDAD
  ===================================================== */
  
  watch(
    itemsPorPagina,
    () => {
  
      paginaActual.value = 1;
  
    }
  );
  
  
  /* =====================================================
     CARGAR
  ===================================================== */
  
  const cargar = async () => {
  
    Swal.fire({
  
      title: "Cargando",
  
      text: "Consultando cementerios...",
  
      allowOutsideClick: false,
  
      didOpen: () => {
  
        Swal.showLoading();
  
      }
  
    });
  
  
    try {
  
      await cementerioStore.cargarCementerios();
  
    } catch (error) {
  
      console.error(
        "Error cargando cementerios:",
        error
      );
  
  
      Swal.fire({
  
        icon: "error",
  
        title: "Error",
  
        text:
          "No fue posible cargar los cementerios."
  
      });
  
    } finally {
  
      if (Swal.isVisible()) {
  
        Swal.close();
  
      }
  
    }
  
  };
  
  
  /* =====================================================
     ON MOUNTED
  ===================================================== */
  
  onMounted(async () => {
  
    await cargar();
  
  });
  
  
  /* =====================================================
     NUEVO
  ===================================================== */
  
  const nuevo = () => {
  
    cementerioSeleccionado.value = null;
  
  
    form.value = {
  
      idcementerio: null,
  
      cementerio: "",
  
      direccion: "",
  
      ciudad: "",
  
      telefono: "",
  
      localidad: "",
  
      barrio: "",
  
      alias: "",
  
      departamento: "",
  
      estado: 0
  
    };
  
  };
  
  
  /* =====================================================
     EDITAR
  ===================================================== */
  
  const editar = (cementerio) => {
  
    cementerioSeleccionado.value =
      cementerio;
  
  
    form.value = {
  
      idcementerio:
        cementerio.idcementerio,
  
      cementerio:
        cementerio.cementerio || "",
  
      direccion:
        cementerio.direccion || "",
  
      ciudad:
        cementerio.ciudad || "",
  
      telefono:
        cementerio.telefono || "",
  
      localidad:
        cementerio.localidad || "",
  
      barrio:
        cementerio.barrio || "",
  
      alias:
        cementerio.alias || "",
  
      departamento:
        cementerio.departamento || "",
  
      estado:
        cementerio.estado ?? 0
  
    };
  
  };
  
  
  /* =====================================================
     CANCELAR
  ===================================================== */
  
  const cancelar = () => {
  
    cementerioSeleccionado.value = null;
  
    nuevo();
  
  };
  
  
  /* =====================================================
     GUARDAR
  ===================================================== */
  
  const guardar = () => {
  
    console.log(
      "Datos para guardar:",
      form.value
    );
  
  };
  
  
  /* =====================================================
     ELIMINAR
  ===================================================== */
  
  const eliminar = (cementerio) => {
  
    console.log(
      "Eliminar:",
      cementerio
    );
  
  };
  
  </script>
  
  
  <style scoped>
  
  .cementerios {
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
     SWEET ALERT
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
     ESTADO
  ========================= */
  
  .estado {
  
    padding: 4px 8px;
  
    border-radius: 12px;
  
    font-size: 11px;
  
    font-weight: 600;
  
  }
  
  .estado.activo {
  
    background: #dcfce7;
  
    color: #166534;
  
  }
  
  .estado.inactivo {
  
    background: #fee2e2;
  
    color: #991b1b;
  
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
  
    grid-template-columns:
      repeat(3, 1fr);
  
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