<template>
  <aside class="sidebar">

    <nav class="tree-panel">

      <ul class="tree">
        <li>

          <!-- PISCO -->
          <button
            class="node root"
            :class="{ active: selected === 'Informacion' }"
            @click="handlePisco"
          >
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

                <!-- CONTRATO 1 -->
                <li>
                  <button class="node" @click="toggle('contrato1')">
                    <span class="chevron">{{ open.contrato1 ? 'v' : '>' }}</span>
                    <span class="node-icon">05</span>
                    <span class="node-text">Contrato 0051</span>
                  </button>

                  <ul v-if="open.contrato1" class="branch">

                    <!-- CONTRATO -->
                    <li>
                      <button
                        class="leaf"
                        :class="{ active: selected === 'Informacion' }"
                        @click="selectComponent('Informacion')"
                      >
                        <span class="leaf-dot"></span>
                        Contrato
                      </button>
                    </li>

                    <!-- PRESTACION -->
                    <li>
                      <button
                        class="leaf"
                        :class="{ active: selected === 'InfoServicios' }"
                        @click="selectComponent('InfoServicios')"
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
import { reactive, ref } from 'vue'
const emit = defineEmits(['change-component'])
const selected = ref('ContratoComponent')

const open = reactive({
  pisco: true,
  contratos: true,
  contrato1: true
})
const handlePisco = () => {
  toggle('pisco')
  selectComponent('Informacion')
}

const toggle = (key) => {
  open[key] = !open[key]
}
const selectComponent = (component) => {
  selected.value = component
  emit('change-component', component)
}
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
