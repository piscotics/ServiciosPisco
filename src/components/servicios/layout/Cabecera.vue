<template>
  <header class="header">
    <div class="actions">
      <div class="icon" @click="nuevo" :class="{ disabled: !puedeNuevo }">
        📃
      </div>

      <div class="icon" @click="guardar" :class="{ disabled: !puedeGuardar }">
        💾
      </div>

      <div
        class="icon"
        @click="editar"
        :style="{
          pointerEvents: puedeEditar ? 'auto' : 'none',
          opacity: puedeEditar ? 1 : 0.4,
        }"
      >
        ✏️
      </div>
      <div class="icon">🖨️</div>
      <div class="icon">🧾</div>
      <div class="icon">📩</div>
      <!-- Grupo extra -->
      <div class="more">
        ⋯
        <div class="dropdown">
          <div>📅 Calendario</div>
          <div>📌 Tareas</div>
          <div>💬 Chat</div>
          <div>🔒 Seguridad</div>
          <div>🌐 Red</div>
          <div>🗂️ Archivos</div>
          <div>🧠 IA</div>
          <div>⚡ Procesos</div>
        </div>
      </div>
      <BarraBusqueda />
      <div class="user-wrapper">
        <div class="user" @click="showMenu = !showMenu">
          <span class="avatar">A</span>
          <span> {{ user?.nombre || user?.username }}</span>
        </div>

        <div v-if="showMenu" class="menu">
          <div class="user-wrapper">
            <div v-if="showMenu" class="">
              <div class="menu-bar">
                <div class="menu-item">
                  Archivo

                  <div class="menu-dropdown">
                    <div class="dropdown-item">Cambiar Clave</div>
                  </div>
                </div>

                <div class="menu-item">
                  Contrato

                  <div class="menu-dropdown">
                    <div class="dropdown-item">Nuevo</div>
                    <div class="dropdown-item">Editar</div>
                    <div class="dropdown-item">Guardar</div>
                    <div class="dropdown-item">Imprimir</div>
                    <div class="dropdown-item">Carnets</div>
                    <div class="dropdown-item">Borrar</div>
                    <div class="dropdown-item">Pagos Colectivos</div>
                    <div class="dropdown-item">Renovación</div>

                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item">Entrega Contratos</div>
                    <div class="dropdown-item">Entrega Recibos</div>
                    <div class="dropdown-item">Relacionar Contratos</div>
                    <div class="dropdown-item">Inactivar</div>
                    <div class="dropdown-item">Trasladar</div>
                    <div class="dropdown-item">Retirar</div>
                    <div class="dropdown-item">
                      Traslado de Cartera por Recaudador
                    </div>
                    <div class="dropdown-item">Reingresar</div>
                    <div class="dropdown-item">
                      Historial de Movimientos del Contrato
                    </div>
                    <div class="dropdown-item">Buscar Recibo</div>
                    <div class="dropdown-item">Buscar Factura Empresarial</div>
                    <div class="dropdown-item">Cambiar Contratante</div>
                    <div class="dropdown-item">Cambiar Cedula Beneficiario</div>
                    <div class="dropdown-item">Retirar Empresa</div>
                    <div class="dropdown-item">
                      Retirar Contratos Relacionados
                    </div>
                    <div class="dropdown-item">Seguro de Vida</div>
                    <div class="dropdown-item">Posfechar Tarjetas</div>
                    <div class="dropdown-item">Entregar Tarjetas de Cobro</div>
                  </div>
                </div>
                <div class="menu-item">Mensajes de Texto</div>
                <div class="menu-item">
                  Operaciones ▼

                  <div class="menu-dropdown">
                    <div class="dropdown-item">Facturacion Empresarial</div>

                    <div class="dropdown-item">Certificados Digitales</div>

                    <div class="dropdown-item">Planeacion Empresarial</div>

                    <div class="dropdown-item submenu-parent" @mouseenter="abrirSubmenu($event)" @mouseleave="cerrarSubmenu($event)">
                      Convenios de Recaudo
                      <span class="submenu-arrow">‹</span>

                      <div class="submenu-dropdown">
                        <div class="dropdown-item">Generar</div>
                        <div class="dropdown-item">Importar</div>
                      </div>
                    </div>

                    <div class="dropdown-item">
                      Migrar Contratos desde Excel
                    </div>

                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item menu-shortcut">
                      <span>Buscar</span>
                      <span>Ctrl+B</span>
                    </div>

                    <div class="dropdown-item">Cierre Contable</div>

                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item">
                      Generar Libro de Ventas (Recaudo Movil)
                    </div>

                    <div class="dropdown-item">
                      Generacion De Rutas (Recaudo Movil)
                    </div>

                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item">Crear Plantilla</div>

                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item">Registro Entrega De Carnets</div>

                    <div class="dropdown-item">
                      Registro Cambios De Cobertura
                    </div>

                    <div class="dropdown-item">
                      Valida Facturas Electronicas
                    </div>
                  </div>
                </div>

                <div class="menu-item">
                  Configuración ▼

                  <div class="menu-dropdown">
                    <div class="menu-dropdown-scroll">
                    <div class="dropdown-item">Crear Usuarios</div>

                    <div class="dropdown-item">
                      Parametrizar Cambio de Contraseña
                    </div>

                    <div class="dropdown-item">Crear Perfil</div>

                    <div class="dropdown-item">
                      Asignar Privilegios a Perfil
                    </div>

                    <div class="dropdown-item">Asignar Cajas a Usuarios</div>

                    <div class="dropdown-item">Crear Zonas</div>

                    <div class="dropdown-item">Crear Tipo Planes</div>

                    <div class="dropdown-item">Crear Servicios</div>

                    <div class="dropdown-item">Crear Planes</div>

                    <div class="dropdown-item">Crear Comunas</div>

                    <div class="dropdown-item">Crear Grupo Comercial</div>

                    <div class="dropdown-item">Crear Ciudades</div>

                    <div class="dropdown-item">
                      Asignación de Zonas y Comunas
                    </div>

                    <div class="dropdown-item">Crear Cuentas</div>

                    <div class="dropdown-item">Crear Tipo de Novedades</div>

                    <div class="dropdown-item">
                      Crear Departamentos / Municipios / Barrios
                    </div>

                    <div class="dropdown-item">Crear Financiacion</div>

                    <div class="dropdown-item">Parametrización Encuesta</div>

                    <div class="dropdown-divider"></div>

                    <!-- MÓDULO PREVISIÓN -->
                    <div class="dropdown-item submenu-parent" @mouseenter="abrirSubmenu($event)" @mouseleave="cerrarSubmenu($event)">
                      Modulo Previsión
                      <span class="submenu-arrow">‹</span>

                      <div class="submenu-dropdown">
                        <div class="dropdown-item">Opción 1</div>
                        <div class="dropdown-item">Opción 2</div>
                        <div class="dropdown-item">Opción 3</div>
                      </div>
                    </div>

                    <!-- MÓDULO SERVICIOS -->
                    <div class="dropdown-item submenu-parent" @mouseenter="abrirSubmenu($event)" @mouseleave="cerrarSubmenu($event)">
                      Modulo Servicios
                      <span class="submenu-arrow">‹</span>

                      <div class="submenu-dropdown">
                        <div class="dropdown-item">Crear Cargos</div>
                        <div class="dropdown-item">
                          Crear Conceptos de Facturación
                        </div>
                        <div class="dropdown-item">Crear Cofres</div>
                        <div class="dropdown-item">Crear Productos</div>
                        <div class="dropdown-item">Crear Salas</div>
                        <div class="dropdown-item">Crear Iglesias</div>
                        <div class="dropdown-item">Crear Cementerios</div>
                        <div class="dropdown-item">Crear Carrozas</div>
                        <div class="dropdown-item">Crear Proveedores</div>
                        <div class="dropdown-item">
                          Crear Convenios Funerarios
                        </div>
                        <div class="dropdown-item">Crear Celebrantes</div>
                        <div class="dropdown-item">Crear Medicos</div>
                        <div class="dropdown-item">
                          Crear Clinicas / Hospitales
                        </div>
                        <div class="dropdown-item">Crear Notarias</div>
                        <div class="dropdown-item">Crear Religion O Credo</div>
                      </div>
                    </div>

                    <!-- MÓDULO MASCOTAS -->
                    <div class="dropdown-item submenu-parent" @mouseenter="abrirSubmenu($event)" @mouseleave="cerrarSubmenu($event)">
                      Modulo Mascotas
                      <span class="submenu-arrow">‹</span>

                      <div class="submenu-dropdown">
                        <div class="dropdown-item">Opción 1</div>
                        <div class="dropdown-item">Opción 2</div>
                      </div>
                    </div>

                    <div class="dropdown-item">Inactivar Contratos</div>

                    <div class="dropdown-item">Retirar Contratos</div>

                    <div class="dropdown-item">Parametrizar Sistema</div>

                    <div class="dropdown-item">Listado de Usuarios</div>

                    <div class="dropdown-item">Parametrizar Poliza de Vida</div>

                    <div class="dropdown-item">
                      Parametrizar Valor de Adicionales
                    </div>

                    <div class="dropdown-item">
                      Crear Periodos de Facturación
                    </div>

                    <div class="dropdown-item">Parametrizar Cierres de Mes</div>

                    <div class="dropdown-item disabled">
                      Parametrizar Rutas de Imagenes
                    </div>

                    <div class="dropdown-item">Parametrizar Impuestos</div>

                    <!-- ADMINISTRAR DATOS -->
                    <div class="dropdown-item submenu-parent" @mouseenter="abrirSubmenu($event)" @mouseleave="cerrarSubmenu($event)">
                      Administrar Datos
                      <span class="submenu-arrow">‹</span>

                      <div class="submenu-dropdown">
                        <div class="dropdown-item">Opción 1</div>
                        <div class="dropdown-item">Opción 2</div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                <!-- 🔴 CERRAR SESIÓN -->
                <div class="menu-item logout" @click="logout">
                  Cerrar sesión
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useOrdenesStore } from "../../../stores/OrdenServicios/ordenStore.js";
import { ref, onMounted, computed } from "vue";
import BarraBusqueda from "../layout/BarraBusqueda.vue";
import { useRouter } from "vue-router";

const ordenStore = useOrdenesStore();
const showMenu = ref(false);
const router = useRouter();
const user = ref(null);
const emit = defineEmits(["change-component"]);
const submenuAbierto = ref(null);

const puedeEditar = computed(() => ordenStore.modo === "consulta");
const puedeNuevo = computed(() => ordenStore.modo === "consulta");
const puedeGuardar = computed(
  () => ordenStore.modo === "editar" || ordenStore.modo === "nuevo"
);

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  router.push("/");
};

onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  }
});

const editar = () => {
  if (!puedeEditar.value) return;
  ordenStore.setEditar();
};

const nuevo = () => {
  if (!puedeNuevo.value) return;
  ordenStore.setNuevo();
  ordenStore.limpiarContrato();
  ordenStore.abrirArbolContratos();
  emit("change-component", {
    component: "InfoServicios",
  });
};

const guardar = async () => {
  console.log(ordenStore.contrato);
  if (!puedeGuardar.value) return;
  await ordenStore.guardarOrden();
};

// Funciones para manejar submenús
// Funciones para manejar submenús - VERSIÓN MEJORADA
const abrirSubmenu = (event) => {
  const parent = event.currentTarget;
  const submenu = parent.querySelector('.submenu-dropdown');
  
  // Cerrar cualquier otro submenú abierto
  if (submenuAbierto.value && submenuAbierto.value !== submenu) {
    submenuAbierto.value.style.display = 'none';
  }
  
  if (submenu) {
    const rect = parent.getBoundingClientRect();
    const submenuWidth = 260;
    
    // Posicionar a la IZQUIERDA del item
    let left = rect.left - submenuWidth - 8;
    let top = rect.top;
    
    // Si no cabe a la izquierda, poner a la derecha
    if (left < 10) {
      left = rect.right + 8;
    }
    
    // Ajustar verticalmente
    if (top + 400 > window.innerHeight) {
      top = window.innerHeight - 410;
    }
    if (top < 10) top = 10;
    
    submenu.style.left = left + 'px';
    submenu.style.top = top + 'px';
    submenu.style.display = 'block';
    submenuAbierto.value = submenu;
  }
};

const cerrarSubmenu = (event) => {
  const parent = event.currentTarget;
  const submenu = parent.querySelector('.submenu-dropdown');
  
  // Aumentar el tiempo de espera para permitir mover el mouse al submenú
  setTimeout(() => {
    if (submenu && !submenu.matches(':hover') && !parent.matches(':hover')) {
      submenu.style.display = 'none';
      if (submenuAbierto.value === submenu) {
        submenuAbierto.value = null;
      }
    }
  }, 200); // Aumentado de 150 a 200ms
};


// Mantener submenú abierto cuando el mouse está sobre él
// Prevenir cierre cuando el mouse está en el submenú
onMounted(() => {
  document.addEventListener('mouseover', (e) => {
    const submenu = e.target.closest('.submenu-dropdown');
    if (submenu) {
      const parent = submenu.closest('.dropdown-item.submenu-parent');
      if (parent) {
        submenu.style.display = 'block';
        submenuAbierto.value = submenu;
      }
    }
  });

  // Cuando el mouse sale del submenú, verificar si debe cerrarse
  document.addEventListener('mouseleave', (e) => {
    const submenu = e.target.closest('.submenu-dropdown');
    if (submenu) {
      const parent = submenu.closest('.dropdown-item.submenu-parent');
      setTimeout(() => {
        if (parent && !parent.matches(':hover') && !submenu.matches(':hover')) {
          submenu.style.display = 'none';
          if (submenuAbierto.value === submenu) {
            submenuAbierto.value = null;
          }
        }
      }, 200);
    }
  });
});
</script>

<style scoped>
/* ============================================
   ESTILOS BASE
   ============================================ */
.icon.disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px 0 288px;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #e2e8f0;
  backdrop-filter: blur(14px);
  z-index: 1000;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  cursor: pointer;
  background: #f1f5f9;
  color: #334155;
  font-size: 13px;
  font-weight: 700;
  transition: all 0.2s ease;
}

.icon:hover {
  background: #e2e8f0;
}

.more {
  position: relative;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  background: #f1f5f9;
}

.more .dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  width: 180px;
  display: none;
  flex-direction: column;
  padding: 10px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.more:hover .dropdown {
  display: flex;
}

.more .dropdown div {
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
}

.more .dropdown div:hover {
  background: #f1f5f9;
}

.user-wrapper {
  position: relative;
}

.user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 12px 5px 6px;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  background: #ffffff;
  font-size: 14px;
  cursor: pointer;
}

.avatar {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #334155;
  color: white;
  font-size: 13px;
}

/* ============================================
   MENÚ PRINCIPAL (el que se abre al hacer click en el usuario)
   ============================================ */
.menu {
  position: absolute;
  top: 52px;
  right: 0;
  width: max-content;
  max-height: calc(100vh - 65px);
  background: #ffffff;
  z-index: 1200;
  animation: fadeDown 0.2s ease;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
}

.menu-bar {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 200px;
}

.menu-item {
  position: relative;
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
  color: #334155;
}

.menu-item:hover {
  background: #eef2ff;
  color: #4f46e5;
}

.menu-item.logout {
  border-top: 1px solid #e2e8f0;
  margin-top: 4px;
  padding-top: 12px;
  color: #ef4444;
}

.menu-item.logout:hover {
  background: #fef2f2;
  color: #dc2626;
}

/* ============================================
   MENÚ DESPLEGABLE (Contrato, Operaciones, Configuración)
   Se abre a la IZQUIERDA
   ============================================ */
.menu-dropdown {
  position: absolute;
  top: -8px;
  right: 100%;
  margin-right: 6px;
  width: 260px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: none;
  z-index: 1300;
  padding: 6px 0;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
}

.menu-item:hover > .menu-dropdown {
  display: block;
}

.menu-dropdown::-webkit-scrollbar {
  width: 7px;
}

.menu-dropdown::-webkit-scrollbar-track {
  background: transparent;
}

.menu-dropdown::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.menu-dropdown::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.menu-dropdown-scroll {
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  overflow-x: visible;
  padding: 2px 0;
}

/* ============================================
   ITEMS DEL MENÚ DESPLEGABLE
   ============================================ */
.dropdown-item {
  position: relative;
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.3;
  color: #334155;
  border-radius: 6px;
  transition: background 0.15s ease, color 0.15s ease;
}

.dropdown-item:hover {
  background: #eef2ff;
  color: #4f46e5;
}

.dropdown-divider {
  height: 1px;
  margin: 6px 8px;
  background: #e2e8f0;
}

.menu-shortcut {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-shortcut span:last-child {
  color: #94a3b8;
  font-size: 12px;
}

/* ============================================
   SUBMENÚS ANIDADOS (Convenios de Recaudo, Módulo Previsión, etc)
   Se abren a la IZQUIERDA como menú flotante
   ============================================ */
.dropdown-item.submenu-parent {
  position: relative;
  padding-right: 30px;
}

.dropdown-item.submenu-parent::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 100%;
  width: 20px; /* Aumentado para mejor transición */
  height: calc(100% + 20px); /* Cubre más área vertical */
  z-index: 9998;
}
.submenu-arrow {
  float: right;
  margin-left: 20px;
  color: #94a3b8;
  font-weight: bold;
}

/* El submenú flotante que se abre a la izquierda */
/* El submenú flotante */
.submenu-dropdown {
  position: fixed;
  width: 260px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  padding: 6px 0;
  max-height: 400px;
  overflow-y: auto;
  z-index: 9999;
  display: none;
  pointer-events: auto;
  /* Pequeño margen para que no haya espacio muerto */
  margin-left: -2px;
}
/* Scroll para submenús */
.submenu-dropdown::-webkit-scrollbar {
  width: 7px;
}

.submenu-dropdown::-webkit-scrollbar-track {
  background: transparent;
}

.submenu-dropdown::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.submenu-dropdown::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Items dentro del submenú */
.submenu-dropdown .dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 13px;
  color: #334155;
  border-radius: 6px;
  transition: background 0.15s ease, color 0.15s ease;
}

.submenu-dropdown .dropdown-item:hover {
  background: #eef2ff;
  color: #4f46e5;
}

.submenu-dropdown .dropdown-divider {
  height: 1px;
  margin: 6px 8px;
  background: #e2e8f0;
}

/* ============================================
   ANIMACIÓN
   ============================================ */


   
@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>