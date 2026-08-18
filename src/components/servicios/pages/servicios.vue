<template>
  <div class="dashboard">
    <Sidebar @change-component="cambiarComponente" />
    <div class="main">
      <Header @change-component="cambiarComponente" />
      <main class="content">
        <section class="content-body">
          <div v-if="loading">
          </div>
          <component
            v-else
            :is="components[currentComponent]"
          />
        </section>
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
import Header from "../layout/Cabecera.vue";
import Sidebar from "../layout/Sidebar.vue";
import Informacion from "../layout/Informacion.vue";
import ResumenOrden from "../layout/ResumenOrden.vue";
import Cabecera from "../layout/Cabecera.vue";
//ACA SE CARGA DIGAMOS QUE ES SERVICIOS EN VISUAL BASIC
import InfoServicios from "../components/FrmInfoServicios.vue";
import OrdenServicio from "../components/Servicios/FrmPrestacionServicio.vue";
import { useOrdenesStore } from "../../../stores/OrdenServicios/ordenStore.js";
//import { useOrdenesStore } from "../../../stores/OrdenServicios/ordenStore.js";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
const loading = ref(false);
const model = reactive({});
const currentComponent = ref("ContratoComponent");
//const currentComponent = computed(() => ordenesStore.componenteActual);
const ordenesStore = useOrdenesStore();

const components = {
  InfoServicios,
  OrdenServicio,
  Informacion,
  ResumenOrden,
  Cabecera,
};
const route = useRoute();
//const contrato = computed(() => ordenesStore.contrato);
watch(
  () => route.query.view,
  (view) => {
    if (view && components[view]) {
      currentComponent.value = view;
    }
  },
  { immediate: true }
);

const form = ref({});

const cambiarComponente = async ({
  component,
  tipo,
  idContrato,
}) => {

  if (tipo) {
    loading.value = true;

    Swal.fire({
      title: "Cargando información...",
      html: "<b>Consultando datos...</b>",
      background: "#1e293b",
      color: "#fff",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
    });

    try {

      if (tipo === "contrato") {
        await ordenesStore.cargarOrdenIndividual(idContrato);
        await ordenesStore.cargarAbonos(idContrato);
        ordenesStore.setConsulta();
      }

      if (tipo === "prestacion") {
        //await ordenesStore.cargarPrestacion(idServicio);
      }

    } finally {
      loading.value = false;
      Swal.close();
    }
  }

  currentComponent.value = component;
};

</script>

<style scoped>
.form-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
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

.content h2 {
  margin: 0;
  color: var(--text);
  font-size: 30px;
  line-height: 1.15;
}

@media (max-width: 780px) {
  .main {
    padding-left: 0;
    padding-top: 64px;
  }

  .content {
    padding: 88px 18px 24px;
  }
}
</style>
