<template>
    <div class="section">
  
      <div class="row">
        <label>Fecha</label>
        <input type="date" />
  
        <label>Hora</label>
        <input type="time" />
      </div>
  
      <div class="row">
        <label>Causa</label>
        <input />
  
        <label>Dirección</label>
        <input />
      </div>
  
    </div>
  </template>
  
  <script setup>
  const model = defineModel()
  </script>