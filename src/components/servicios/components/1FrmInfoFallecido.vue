<template>
    <div class="section">
  
      <div class="row">
        <label>Nombres</label>
        <input/>
  
        <label>Apellidos</label>
        <input  />
      </div>
  
      <div class="row">
        <label>Edad</label>
        <input type="number"  />
  
        <label>Sexo</label>
        <select >
          <option>M</option>
          <option>F</option>
        </select>
      </div>
  
    </div>
  </template>
  
  <script setup>
  const model = defineModel()
  </script>