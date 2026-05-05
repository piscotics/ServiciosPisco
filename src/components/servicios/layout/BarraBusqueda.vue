<template>
  <section class="search-bar">
    <h3>Filtro De</h3>

    <div class="tools">
      <input
        v-model="busqueda"
        type="text"
        placeholder="Buscar..."
        class="input"
      />

      <select v-model="tipo" class="select">
        <option value="">Todos</option>
        <option value="agua">Agua</option>
        <option value="luz">Luz</option>
        <option value="internet">Internet</option>
      </select>

      <button class="btn" type="button" @click="guardar">
        Aplicar
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const busqueda = ref('')
const tipo = ref('')

const guardar = () => {
  console.log('Buscar:', busqueda.value)
  console.log('Tipo:', tipo.value)
}
</script>

<style scoped>
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
