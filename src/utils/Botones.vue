<script setup>
const emit = defineEmits([
  'nuevo',
  'editar',
  'guardar',
  'imprimir'
])
</script>

<template>
  <div class="botonera">
    <button @click="emit('nuevo')">
      <i class="fa-solid fa-plus"></i>
    </button>

    <button @click="emit('editar')">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>

    <button @click="emit('guardar')">
      <i class="fa-solid fa-floppy-disk"></i>
    </button>

    <button @click="emit('imprimir')">
      <i class="fa-solid fa-print"></i>
    </button>
  </div>
</template>