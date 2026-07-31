<template>
  <div class="recuadro">
    <h5>Abonos:</h5>
    <div class="tres-columnas">
      <div class="campo-horizontal" style="width: 180px">
        <label>*Recibo:</label>
        <input type="text" />
      </div>
      <div class="campo-horizontal" style="width: 180px">
        <label>*Fecha:</label>
        <input type="date" />
      </div>
      <div class="campo-horizontal" style="width: 180px">
        <label>*Tipo Pago:</label>
        <select>
          <option value="Canino">Clinica</option>
          <option value="Felino">Calle</option>
        </select>
      </div>
    </div>
    <div class="cuatro-columnas">
      <div class="campo-horizontal" style="width: 180px">
        <label>*Abono:</label>
        <input type="text" />
      </div>
      <div class="campo-horizontal" style="width: 280px">
        <label>*Pago:</label>
        <select>
          <option value="Canino">Clinica</option>
          <option value="Felino">Calle</option>
        </select>
      </div>
      <div class="campo-horizontal" style="width: 120px">
        <label>No:</label>
        <input type="text" />
      </div>
      <div class="campo-horizontal" style="width: 180px">
        <label>Saldo Caja:</label>
        <input type="text" />
      </div>
    </div>
    <div class="cuatro-columnas">
      <div class="campo-horizontal" style="width: 180px">
        <label>Banco:</label>
        <select>
          <option value="Canino">Seleccione</option>
          <option value="Canino">Clinica</option>
          <option value="Felino">Calle</option>
        </select>
      </div>
      <div class="campo-horizontal" style="width: 180px">
        <label>*F Cheque:</label>
        <input type="date" />
      </div>
      <div class="check1">
        <input type="checkbox" />
        <label for="cofre">PosFechado</label>
        
      </div>
  
    </div>

    <div class="cuatro-columnas">
      <div style="width: 180px">
        <label>*Sede Recaudor:</label>
        <select>
          <option>Seleccione</option>
          <option>Clínica</option>
          <option>Calle</option>
        </select>
      </div>
      <div style="width: 180px">
        <label>No Factura:</label>
        <select>
          <option>Seleccione</option>
          <option>Clínica</option>
          <option>Calle</option>
        </select>
      </div>
      <div style="width: 180px">
        <label>*Cobrador:</label>
        <select>
          <option value="Canino">Seleccione</option>
          <option value="Felino">Calle</option>
        </select>
      </div>
      <div class="tabla-info">
        <table>
          <thead>
            <tr>
              <th>Excedente</th>
              <th>Asesor</th>
              <th>Solicitud Por</th>
              <th>Valor Venta</th>
              <th>Valor Venta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>Juliana reyes</td>
              <td>Carlos</td>
              <td>$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    
        <div class="check2">
        <input type="checkbox" id="cofre" />
        <label for="cofre">Quitar Facturas</label>
      </div>

    
    </div>
    <div class="Referencia_Unicoa">
      <div class="campo-h">
        <label>R.Unica Banco:</label>
        <input type="text" />
      </div>
    </div>
   <br>
    <div class="contenedor-pago">
      <div class="recuadro1">
        <h5>Pago Realizado Por:</h5>
        <div class="tres-columnas">
          <div style="width: 180px">
            <label>*Tipo Id:</label>
            <select>
              <option>Seleccione</option>
              <option>Clínica</option>
              <option>Calle</option>
            </select>
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*N*:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Nombre:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Nombre 2:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Apellido:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Apellido 2:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Dirección:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Tel:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>Ciudad:</label>
            <input type="text" />
          </div>
          <div class="campo-horizontal" style="width: 180px">
            <label>*Mail:</label>
            <input type="text" />
          </div>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <div class="tabla-info">
        <table>
          <thead>
            <tr>
              <th>No Interno</th>
              <th>Cedula Res</th>
              <th>Nombres</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$0</td>
              <td>15254542</td>
              <td>Carlos marin fretel</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>15254542</td>
              <td>Carlos marin fretel</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>15254542</td>
              <td>Carlos marin fretel</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>15254542</td>
              <td>Carlos marin fretel</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>15254542</td>
              <td>Carlos marin fretel</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>15254542</td>
              <td>Carlos marin fretel</td>
              <td>$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <div class="campo-horizontal" >
      <label>Detalle:</label>
      <input type="text" />
    </div>
    <br />
    <div class="cuatro-columnas">
      <div class="tabla-info">
        <table>
          <thead>
            <tr>
              <th>NoRecibo</th>
              <th>Fecha</th>
              <th>Abono</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$0</td>
              <td>2026-01-01</td>
              <td>50000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-01-01</td>
              <td>50000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-01-01</td>
              <td>50000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-01-01</td>
              <td>50000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-01-01</td>
              <td>50000</td>
              <td>$0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="info-datos">
        <div class="check">
          <input type="checkbox" id="cofre" />
          <label for="cofre">Anulado</label>
        </div>
        <div class="info-item">
          <label>Usuario:</label>
          <input type="text" readonly />
        </div>

        <div class="info-item">
          <label>Saldo:</label>
          <input type="text" readonly />
        </div>

        <Botonera />
      </div>

      <div class="tabla-info">
        <table>
          <thead>
            <tr>
              <th>NoRecibo</th>
              <th>Fecha</th>
              <th>Abono</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$0</td>
              <td>2026-07-02</td>
              <td>200000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-07-02</td>
              <td>200000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-07-02</td>
              <td>200000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-07-02</td>
              <td>200000</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>$0</td>
              <td>2026-07-02</td>
              <td>200000</td>
              <td>$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="cuatro-columnas">
      <div class="info-item">
        <label>Total Abonos:</label>
        <input type="text" readonly />
      </div>
      <div class="info-item">
        <label>Saldo:</label>
        <input type="text" readonly />
      </div>
      <div class="info-item">
        <label>Ret / Facturación:</label>
        <input type="text" readonly />
      </div>
    </div>
  </div>
</template>
<script setup>
import Botonera from "../../../../utils/Botones.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { computed } from "vue";
import { useOrdenesStore } from "../../../../stores/OrdenServicios/ordenStore.js";

const model = defineModel();
  
const ordenesStore = useOrdenesStore();
    
const contrato = computed(() => ordenesStore.contrato);
    





</script>

<style scoped>
input,
select {
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 12px;
  box-sizing: border-box;
}
/* ACA MANEJA EL COLOR CUANDO SE SELECCIONE EL IMPUT TEXT */
input:focus,
select:focus {
  outline: none;
  border-color: #6366f1;
}
/* ACA MANEJA EL RESPONSIVE*/
label {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 4px;
}
/* ACA SE ACOMODA EL COLOR DEL BOTTON*/
.check1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-bottom: 6px;
  position: relative;
  left: 30px;
}
.check2 input {
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
}
.check2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  position: relative;
  top: -55px;
}

.check {
  display: flex;
  flex-direction: row;
  /* <-- ESTA ES LA QUE FALTA */
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}
.check input {
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
}
.check label {
  margin: 0;
  white-space: nowrap;
  cursor: pointer;
}
.dos-columnas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}
.tres-columnas {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1px; /* antes 3px */
  row-gap: 4px; /* antes 8px */
  justify-content: start;
  margin-bottom: 8px; /* antes 15px */
}
.cuatro-columnas {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 8px 10px;
  justify-content: start;
  margin-bottom: 15px;
}

.campo-horizontal {
  display: flex;
  align-items: center;
  gap: 10px;
}
.campo-horizontal label {
  margin: 0;
  white-space: nowrap;
}
.recuadro1 {
  position: relative;
  width: 580px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 20px 18px 18px;
  margin-top: 20px;
  background: #fafafa;
  margin-left: -10px;
}
.recuadro h5 {
  position: absolute;
  top: -1px;
  left: -1px;
  margin: 0;
  padding: 0 6px;

  color: #dc2626;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
.contenedor-pago {
  display: grid;
  grid-template-columns: 580px 1fr;
  gap: 10px;
  align-items: start;
  margin-top: -89px; /* Súbelo */
}
.tabla-info {
  width: 100%; /* Cambia el porcentaje a tu gusto */
  max-height: 110px;
  overflow-y: auto;
  overflow-x: auto;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #fff;
  margin: 0 auto; /* La centra horizontalmente */
   margin-left: -10px;
}

.tabla-info table {
  width: 100%;
  border-collapse: collapse;
}

.tabla-info thead th {
  position: sticky;
  top: 0;
  background: #545968;
  color: white;
  z-index: 2;
  padding: 5px 8px;
  font-size: 12px;
}

.tabla-info th,
.tabla-info td {
  padding: 4px 8px; /* Filas más bajitas */
  font-size: 12px; /* Texto un poco más pequeño */
  line-height: 1.2;
  border: 1px solid #464646;
}

.tabla-info tbody tr:nth-child(even) {
  background: #f8fafc;
}

/* Scroll bonito */
.tabla-info::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tabla-info::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 10px;
}

.Referencia_Unicoa {
  position: relative;
  top: -70px;
  width: 60%;
}
/* Bastante */

.info-datos {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-item label {
  width: 70px;
  font-weight: 600;
  color: #64748b;
}

.info-item input {
  width: 180px;
  height: 28px;
}
</style>
