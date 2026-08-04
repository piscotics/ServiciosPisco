<template>
  <section class="form-card">
    <div class="card-header">
      <i class="fa-solid fa-file-invoice"></i>
      <h2>CONTRATO DE SERVICIOS</h2>
    </div>
    <h4 style="color: red">Informacion para el cartel</h4>
    <div class="contenedor">
      <!-- LADO IZQUIERDO -->
      <div class="lado-izquierdo">
        <div class="field cartel">
          <div>
            <label>Sede</label>
            <select v-model="contrato.sede" :disabled="soloLectura">
              <option value="Canino">Clinica</option>
              <option value="Felino">Calle</option>
            </select>
          </div>

          <div class="check">
            <input type="checkbox"  v-model="contrato.mostrarenpantalla" :disabled="soloLectura"/>
            <label>Mostrar en Obituario</label>
          </div>
        </div>

        <div class="field cartel">
          <div class="check">
            <input type="checkbox" v-model="contrato.optsala" :disabled="soloLectura"/>
            <label>Salas Propias</label>
          </div>

          <div class="check">
            <input type="checkbox" v-model="contrato.optsala" :disabled="soloLectura"/>
            <label>Salas Externas</label>
          </div>

          <div class="check">
            <input type="checkbox" v-model="contrato.optsala" :disabled="soloLectura"/>
            <label>Sin Sala</label>
          </div>

          <div class="check">
            <input type="checkbox" v-model="contrato.optsala" :disabled="soloLectura"/>
            <label>Pdte Sala</label>
          </div>

          <div class="check">
            <div>⛪</div>
          </div>
        </div>
        <div class="dos-columnas">
          <div>
            <label>Lugar Velación</label>
            <select v-model="contrato.sala" :disabled="soloLectura" >
              <option>Clínica</option>
              <option>Calle</option>
            </select>

            <div>
              <label>Fecha de Velacion</label>
              <input type="date" v-model="contrato.fechavelacion" :disabled="soloLectura" />
            </div>
          </div>

          <div>
            <label>Dirección Velación</label>
            <input type="text" v-model="contrato.dirrecionvelacion" :disabled="soloLectura" />

            <div>
              <label>Hora Estimada de Velacion</label>
              <input type="time" v-model="contrato.horavelacion" :disabled="soloLectura" />
            </div>
          </div>
        </div>

        <div class="dos-columnas2">
          <div>
            <label>Iglesia</label>
            <select v-model="contrato.iglesia" :disabled="soloLectura" >
              <option>Inmaculada</option>
              <option>catedral</option>
            </select>
          </div>
          <div class="check">
            <div>⛪</div>
          </div>
        </div>
        <div class="campo-horizontal">
          <label>Otra:</label>
          <input type="text" v-model="contrato.otra" :disabled="soloLectura" />
        </div>

        <!-- Continúas agregando el resto del formulario -->

        <div class="dos-columnas">
          <div class="campo-horizontal">
            <label>Ciudad</label>
            <select v-model="contrato.ciudadcementerio" :disabled="soloLectura" >
              <option>Pradera</option>
              <option>Cali</option>
            </select>
          </div>
          <div class="campo-horizontal">
            <label>Cementerio</label>
            <select v-model="contrato.cementerio" :disabled="soloLectura">
              <option>Ultimo Adios</option>
              <option>Recuerdo</option>
            </select>

            <div class="check">
              <div>⛪</div>
            </div>
          </div>
          <div class="campo-horizontal">
            <label>Hora Exeq</label>
            <input type="time" v-model="contrato.horaexequia" :disabled="soloLectura" />
          </div>
          <div class="campo-horizontal">
            <label>Dia Exq</label>
            <input type="date" v-model="contrato.diaexequia" :disabled="soloLectura"/>
          </div>
          <div class="check">
            <input type="checkbox" :disabled="soloLectura"/>
            <label>Pendiente Hora Exequias</label>
          </div>
        </div>
        <div class="campo-horizontal">
          <label>Invitan:</label>
          <input type="text" v-model="contrato.invitan" :disabled="soloLectura" />
        </div>

        <div class="recuadro">
          <h3>Datos Suministrados Por:</h3>

          <div class="dos-columnas">
            <div class="campo-horizontal">
              <label>Nombres:</label>
              <input type="text" v-model="contrato.nomsuministrado" :disabled="soloLectura"/>
            </div>

            <div class="campo-horizontal">
              <label>C.C:</label>
              <input type="text" v-model="contrato.ccsuministrado" :disabled="soloLectura"/>
            </div>

            <div class="campo-horizontal">
              <label>Dirección:</label>
              <input type="text" v-model="contrato.dirsuministrado" :disabled="soloLectura"/>
            </div>

            <div class="campo-horizontal">
              <label>Tel:</label>
              <input type="text" v-model="contrato.telsuministrado" :disabled="soloLectura"/>
            </div>

            <div class="campo-horizontal">
              <label>Empresa:</label>
              <input type="text" v-model="contrato.empsuministrado" :disabled="soloLectura"/>
            </div>

            <div class="campo-horizontal">
              <label>Tel:</label>
              <input type="text" v-model="contrato.telefonosuministrado" :disabled="soloLectura"/>
            </div>
          </div>
        </div>

        <div class="dos-columnas">
          <div class="campo-horizontal">
            <label>Reportado Por:</label>
            <input type="text" :disabled="soloLectura" />
          </div>
          <div class="campo-horizontal">
            <label>Bonif:</label>
            <select :disabled="soloLectura">
              <option>Si</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div class="campo-horizontal">
          <label>*Serv Atendido Por:</label>
          <select :disabled="soloLectura">
            <option>Seleccione</option>
            <option>Vecino Miranda Jose Fernando</option>
            <option>Vecino Miranda Jose Fernando</option>
          </select>
        </div>
        <div class="campo-horizontal">
          <label>*Asesor de Apoyo:</label>
          <select :disabled="soloLectura">
            <option>Seleccione</option>
            <option>Vecino Miranda Jose Fernando</option>
            <option>Vecino Miranda Jose Fernando</option>
          </select>
        </div>
        <div class="campo-horizontal">
          <label>*Coordinado Por:</label>
          <select :disabled="soloLectura">
            <option>Seleccione</option>
            <option>Vecino Miranda Jose Fernando</option>
            <option>Vecino Miranda Jose Fernando</option>
          </select>
        </div>
        <div class="campo-horizontal">
          <label>*Sala Atendida Por:</label>
          <select :disabled="soloLectura">
            <option>Seleccione</option>
            <option>Vecino Miranda Jose Fernando</option>
            <option>Vecino Miranda Jose Fernando</option>
          </select>
        </div>
        <div class="campo-horizontal">
          <label>Conductor Exequias:</label>
          <select :disabled="soloLectura">
            <option>Seleccione</option>
            <option>Vecino Miranda Jose Fernando</option>
            <option>Vecino Miranda Jose Fernando</option>
          </select>
        </div>
        <div class="campo-horizontal">
          <label>Carroza:</label>
          <select :disabled="soloLectura">
            <option>Seleccione</option>
            <option>Si</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <!-- LADO DERECHO -->
      <div class="lado-derecho">
        <label>Plan del Servicio</label>

        <select :disabled="soloLectura">
          <option>Cooserpark La Fe CR</option>
        </select>

        <table class="tabla-servicios" >
          <thead>
            <tr>
              <th width="40"></th>
              <th>Servicios Incluidos</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Lote Sector Integral</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Lote Sector V. Integral</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Corona</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Pedestales</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Sala de Velación</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Transporte</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Café</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Coro</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Apertura de Lote</td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>Acompañamiento</td>
            </tr>
          </tbody>
        </table>
        <div class="campo-horizontal">
          <label>Cofre:</label>
          <input type="text" :disabled="soloLectura"/>
        </div>
        <div class="campo-horizontal">
          <label>Tanatologo:</label>
          <input type="text" :disabled="soloLectura"/>
        </div>
        <div class="campo-horizontal">
          <label>*Destino Final:</label>
          <input type="text" :disabled="soloLectura" />
        </div>
        <div class="observaciones">
          <label>Observaciones:</label>
          <textarea
            rows="3"
            placeholder="Escriba aquí las observaciones..." :disabled="soloLectura"
          ></textarea>
        </div>

        <div class="observaciones">
          <label>Observaciones de Planilla:</label>
          <textarea
            rows="3"
            placeholder="Escriba aquí las observaciones..." :disabled="soloLectura"
          ></textarea>
        </div>

        <div class="grupo-checks">
          <div class="check">
            <input type="checkbox" id="fiador" :disabled="soloLectura"/>
            <label for="fiador">Incluye Fiador</label>
          </div>

          <div class="check">
            <input type="checkbox" id="ramo" :disabled="soloLectura"/>
            <label for="ramo">Ramo de Cortesía</label>
          </div>

          <div class="check">
            <input type="checkbox" id="cofre" :disabled="soloLectura" />
            <label for="cofre">Sin Cofre</label>
          </div>

          <div class="check">
            <input type="checkbox" id="conformidad" :disabled="soloLectura"/>
            <label for="conformidad">Carta de Conformidad</label>
          </div>

          <div class="check">
            <input type="checkbox" id="urna" :disabled="soloLectura"/>
            <label for="urna">Sin Urna</label>
          </div>

          <div class="check">
            <input type="checkbox" id="triangulo" :disabled="soloLectura"/>
            <label for="triangulo">Sin Triángulo</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useOrdenesStore } from "../../../../stores/OrdenServicios/ordenStore.js";
   

const ordenesStore = useOrdenesStore();

const contrato = computed(() => ordenesStore.contrato);
const soloLectura = computed(() => ordenesStore.modo === "consulta");

const model = defineModel();
   
      
      
   
      </script>

<style scoped>
/* ACA SE MODIFICO LA CARD DEL FONDO */

/* ACA MANEJA EL ESPACIO ENTRE EL TITULO Y LOS CAMPOS */

/* ACA MANEJA EL TITULO LETRA Y COLOR */
.card-header h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #334155;
  text-transform: uppercase;
}
/* ACA MANEJA EL ESTILO PARA LOS SELECT */
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
@media (max-width: 1200px) {
  .field {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .field {
    grid-template-columns: 1fr !important;
  }
}
/* ACA SE ACOMODAN LOS CAMPOS*/
.field {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 0.5fr 0.8fr 1fr 32px 0.8fr;
  gap: 10px;
  align-items: end;
  margin-bottom: 15px;
}
/* ACA SE ACOMODAN LOS CAMPOS*/

/* ACA SE ACOMODAN EL COLOR DE LAS LETRAS*/
label {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 4px;
}
/* ACA SE ACOMODA EL COLOR DEL BOTTON*/
.icon-btn {
  width: 32px;
  height: 32px;
}
.medico {
  grid-column: span 2;
}

.tabla-servicios {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.tabla-servicios th {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 8px;
  text-align: left;
}

.tabla-servicios td {
  border: 1px solid #cbd5e1;
  padding: 6px 8px;
}

.tabla-servicios tbody tr:hover {
  background: #f8fafc;
}

.tabla-servicios td:first-child {
  text-align: center;
  width: 40px;
}

.contenedor {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
  align-items: start;
}

.lado-izquierdo {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.lado-derecho {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cartel {
  display: flex;
  align-items: end;
  gap: 20px;
}

.cartel > div:first-child {
  width: 220px; /* ancho del combo */
}

.check {
  display: flex;
  flex-direction: row; /* <-- ESTA ES LA QUE FALTA */
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
.check input {
  width: auto;
  height: 16px;
  margin: 0;
  cursor: pointer;
  flex-shrink: 0;
}
.dos-columnas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

.dos-columnas2 {
  display: grid;
  grid-template-columns: 10fr 1fr;
  gap: 15px;
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

.campo-horizontal input {
  flex: 1;
}
.observaciones {
  grid-column: 1 / -1; /* Ocupa todas las columnas del grid */
}
textarea {
  width: 100%;
  min-height: 120px;
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 12px;
  font-family: inherit;
  box-sizing: border-box;
  resize: vertical; /* Permite agrandar solo hacia abajo */
}

textarea:focus {
  outline: none;
  border-color: #6366f1;
}
.grupo-checks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 20px;
}

.check {
  display: flex;
  align-items: center;
  gap: 8px;
}

.check input {
  width: 16px;
  height: 16px;
  margin: 0;
  flex-shrink: 0;
}

.check label {
  margin: 0;
  font-size: 12px;
}
.recuadro {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 18px;
  margin-top: 15px;
  background: #fafafa;
}

.recuadro h3 {
  margin: 0 0 15px 0;
  color: #dc2626; /* rojo */
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>



