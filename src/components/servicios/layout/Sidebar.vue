<template>
  <aside class="sidebar">

    <nav class="tree-panel">

      <ul class="tree">
        <li>

          <!-- PISCO -->
          <button class="node root" :class="{ active: selected === 'Informacion' }" @click="handlePisco">
            <span class="chevron">
              {{ open.pisco ? 'v' : '>' }}
            </span>
            <span class="node-icon">PS</span>
            <span class="node-text">
              PISCO
            </span>
          </button>

          <ul v-if="open.pisco" class="branch">

            <!-- CONTRATOS -->
            <li>
              <button class="node" @click="toggle('contratos')">
                <span class="chevron">{{ open.contratos ? 'v' : '>' }}</span>
                <span class="node-icon">CS</span>
                <span class="node-text">Contratos De Servicios</span>
              </button>

            <ul v-if="open.contratos" class="branch">

                <!-- CONTRATOS DINAMICOS -->
             <li v-for="contrato in contratos" :key="contrato.id">

              <button
                class="node"
                @click="toggle(contrato.idscontrato)"
              >
                <span class="chevron">
                  {{ open[contrato.id] ? 'v' : '>' }}
                </span>

                <span class="node-text">
                  Contrato: {{ contrato.idscontrato }}
                </span>
              </button>

              <!-- HIJOS -->
              <ul v-if="open[contrato.idscontrato]" class="branch">

                <!-- CONTRATO -->
                <li>
                  <button
                    class="leaf"
                    :class="{ active: selected === `Informacion-${contrato.idscontrato}` }"
                    @click="selectComponent('InfoServicios', contrato)"
                  >
                    <span class="leaf-dot"></span>
                    Contrato
                  </button>
                </li>

                <!-- PRESTACION -->
                <li>
                  <button
                    class="leaf"
                    :class="{ active: selected === `InfoServicios-${contrato.idscontrato}` }"
                    @click="selectComponent('InfoServicios', contrato)"
                  >
                    <span class="leaf-dot"></span>
                    Prestacion
                  </button>
                </li>

              </ul>

              </li>

              </ul>
            </li>

            <!-- EMPLEADOS -->
            <li>
              <button
                class="leaf"
                :class="{ active: selected === 'InfoServicios' }"
                @click="selectComponent('InfoServicios')"
              >
                <span class="leaf-dot"></span>
                Empleados
              </button>
            </li>

          </ul>
        </li>
      </ul>

    </nav>
  </aside>
</template>


<script setup>
import { reactive, ref, onMounted  } from 'vue'
import { storeToRefs } from 'pinia'
//import ordenServicios from '../../../services/ordenServicios.js'
import { useOrdenesStore } from '../../../stores/OrdenServicios/ordenStore.js'
import Swal from 'sweetalert2'
const emit = defineEmits(['change-component'])
const selected = ref('ContratoComponent')
//const contratos = ref([])
const open = reactive({
  pisco: true,
  contratos: true,
  contrato1: true
})
const ordenesStore = useOrdenesStore()
const { contratos, loading } = storeToRefs(ordenesStore)


const handlePisco = () => {
  toggle('pisco')
  selectComponent('Informacion')
}

const toggle = (key) => {
  open[key] = !open[key]
}
const selectComponent1 = (component) => {
  selected.value = component
  emit('change-component', component)
}

const selectComponent2 = (component, contrato) => {
  selected.value = component

  emit('change-component', {
    component,
    idServicio: contrato.idservicio
  })
}

const selectComponent = (component, contrato = null) => {

selected.value = component

emit('change-component', {
  component,
  idServicio: contrato?.idservicio ?? null
})

}

onMounted(async () => {

  Swal.fire({
  title: 'Cargando órdenes...',
  text: 'Por favor espera',
  background: 'rgba(0,0,0,0.7)',
  color: '#fff',
  allowOutsideClick: false,
  allowEscapeKey: false,
  showConfirmButton: false,
  didOpen: () => {
    Swal.showLoading()
  }
})

try {

  await ordenesStore.cargarOrdenes(
    '2026-03-01',
    '2026-05-12'
  )

} catch (error) {

  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudieron cargar las órdenes'
  })

} finally {

  Swal.close()

}

})




 
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  padding: 20px;
  background: #0f172a;
  color: #e5e7eb;
  border-right: 1px solid rgba(189, 122, 122, 0.08);
  z-index: 1100;

  overflow-y: auto;
}
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
}


.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  margin-bottom: 22px;
}

.sidebar-brand span {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: var(--radius);
  background: var(--primary);
  color: white;
  font-size: 21px;
  font-weight: 900;
}

.sidebar-brand strong {
  font-size: 20px;
  letter-spacing: 0;
}

.tree-panel {
  display: grid;
  gap: 10px;
}

.tree-title {
  margin: 0;
  padding: 0 8px;
  color: #94a3b8;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.tree,
.branch {
  list-style: none;
  margin: 0;
  padding: 0;
}

.branch {
  position: relative;
  margin-left: 14px;
  padding-left: 12px;
}

.branch::before {
  content: "";
  position: absolute;
  top: 4px;
  bottom: 8px;
  left: 0;
  width: 1px;
  background: rgba(148, 163, 184, 0.22);
}

.node,
.leaf {
  width: 100%;
  min-height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 2px 0;
  border: 0;
  border-radius: var(--radius);
  background: transparent;
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  transition: background 0.2s ease, color 0.2s ease;
}

.node {
  padding: 0 8px;
}

.node.root {
  color: #ffffff;
}

.leaf {
  padding: 0 10px;
}

.node:hover,
.leaf:hover,
.leaf.active {
  background: rgba(221, 146, 146, 0.09);
  color: #ffffff;
}

.chevron {
  width: 14px;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 900;
}

.node-icon {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 7px;
  background: rgba(15, 118, 110, 0.24);
  color: #99f6e4;
  font-size: 10px;
  font-weight: 900;
}

.node-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.leaf-dot {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #3b6aac;
}

.leaf.active .leaf-dot {
  background: var(--primary);
}

@media (max-width: 780px) {
  .sidebar {
    top: 64px;
    width: 100%;
    height: auto;
    max-height: 210px;
    padding: 12px;
    overflow: auto;
  }

  .sidebar-brand {
    display: none;
  }
}
</style>
