<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Registrar Seguimiento
        </div>
        <div class="card-body">
          <form v-on:submit="guardar">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Nombres" id="Nombres" placeholder="Ingrese nombre" requeride maxlength="50"
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Apellidos" id="Apellidos" placeholder="Ingrese apellido" requeride
                maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Asunto" id="Asunto" placeholder="Ingrese asunto" requeride maxlength="50"
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Correo" id="Correo" placeholder="Ingrese correo" requeride maxlength="50"
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Telefono" id="Telefono" placeholder="Ingrese Telefono" requeride maxlength="50"
                class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha Seguimiento</span>
              <input type="date" v-model="Fecha" id="Fecha" name="Fecha" requeride maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Dias" id="Dias" placeholder="Ingrese dias proximo seguimiento" requeride
                maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Fecha proximo seguimiento</span>
              <input type="date" v-model="fecha_proximo_seguimiento" id="fecha_proximo_seguimiento" requeride
                maxlength="50" class="form-control">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Guardar Seguimiento</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud} from '../funciones';

export default {
  data() {
    return {
      Nombres: '',
      Apellidos: '',
      Asunto: '',
      Correo: '',
      Telefono: '',
      Fecha: '',
      Dias: '',
      fecha_proximo_seguimiento: '',
      url: 'http://localhost/parte1/seguimientos_back/public/api/v1/seguimientos',
      cargando: false
    }
  },
  methods: {
    guardar() {
      event.preventDefault();
      if (this.Nombres.trim() === '') {
        mostrarAlerta('Ingrese un nombre', 'warning', 'Nombres');
      } else if (this.Apellidos.trim() === '') {
        mostrarAlerta('Ingrese un Apellido', 'warning', 'Apellidos');
      } else if (this.Asunto.trim() === '') {
        mostrarAlerta('Ingrese un asunto', 'warning', 'Asunto');
      } else if (this.Correo.trim() === '') {
        mostrarAlerta('Ingrese un correo', 'warning', 'Correo');
      } else if (this.Telefono.trim() === '') {
        mostrarAlerta('Ingrese un telefono', 'warning', 'Telefono');
      } else if (this.Fecha.trim() === '') {
        mostrarAlerta('Ingrese fecha de seguimiento', 'warning', 'Fecha');
      } else if (this.Dias.trim() === '') {
        mostrarAlerta('Ingrese cantidad de dias', 'warning', 'Dias');
      } else if (this.fecha_proximo_seguimiento.trim() === '') {
        mostrarAlerta('No se calcula proxima fecha', 'warning', 'proximo');
      } else {

        var parametros = {
          Nombres: this.Nombres.trim(),
          Apellidos: this.Apellidos.trim(),
          Asunto: this.Asunto.trim(),
          Correo: this.Correo.trim(),
          Telefono: this.Telefono.trim(),
          Fecha: this.Fecha.trim(),
          Dias: this.Dias.trim(),
          fecha_proximo_seguimiento: this.fecha_proximo_seguimiento.trim()
        }
        enviarSolicitud('POST', parametros, this.url, 'Seguimiento registrado');
      }
    }
  }
}
</script>