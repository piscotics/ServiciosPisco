<template>
    <div class="section">
  
      <div class="row">
        <label>No Orden Servicio</label>
        <input v-model="model.orden" />
  
        <label>Fecha</label>
        <input type="date" v-model="model.fecha" />
  
        <label>Hora</label>
        <input type="time" v-model="model.hora" />
      </div>
  
      <div class="row">
        <label>Tipo Servicio</label>
        <select v-model="model.tipoServicio">
          <option>Mascota</option>
          <option>Humano</option>
        </select>
  
        <label>Categoría</label>
        <select v-model="model.categoria">
          <option>Individual</option>
        </select>
      </div>
  
    </div>
  </template>
  
  <script setup>
  const model = defineModel()
  </script>
  
  <style scoped>
  .section {
    padding: 10px;
    background: white;
    border: 1px solid #cbd5e1;
  }
  
  .row {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
  }
  
  label {
    font-size: 12px;
  }
  
  input, select {
    height: 28px;
  }
  </style>