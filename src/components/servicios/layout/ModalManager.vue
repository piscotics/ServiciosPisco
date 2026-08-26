<template>
    <div v-if="visible" class="modal-overlay" @click.self="cerrar">
  
      <div class="modal">
  
        <button class="cerrar" @click="cerrar">
          ✕
        </button>
  
        <component
          :is="componenteActual"
        />
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    visible: {
      type: Boolean,
      default: false
    },
  
    componente: {
      type: [Object, String],
      default: null
    }
  });
  
  const emit = defineEmits(["cerrar"]);
  
  const componenteActual = computed(() => {
    return props.componente;
  });
  
  const cerrar = () => {
    emit("cerrar");
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .modal {
    position: relative;
    width: 800px;
    max-width: 90%;
    max-height: 90vh;
    overflow: auto;
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  }
  
  .cerrar {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
  }
  </style>