<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Detalle Seguimiento
        </div>
        <div class="card-body">
          <div class="d-grid col-6 mx-auto mb-3">
            <router-link :to="{path:'/'}" class="btn btn-info">
                  <i class="fa-solid fa-arrow-left"></i> Regresar
            </router-link>        
          </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="Nombres" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="Apellidos" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="Asunto" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="Correo" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="Telefono" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="Fecha" class="form-control"></label>            
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                <label v-text="Dias" class="form-control"></label>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <label v-text="fecha_proximo_seguimiento" class="form-control"></label>
            </div>            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mostrarAlerta, enviarSolicitud} from '../funciones';
  import { useRoute } from 'vue-router';
  import axios from 'axios';

  export default{
    data(){
      return{
        id:0,
        Nombres:'',
        Apellidos:'',
        Asunto:'',
        Correo:'',
        Telefono:'',
        Fecha:'',
        Dias:'',
        Proximo:'',
        url:'http://localhost/parte1/seguimientos_back/public/api/v1/seguimientos',
        cargando:false
      }
    },
    mounted(){
      const route = useRoute();
      this.id = route.params.id;
      this.url += '/'+this.id;
      this.getSeguimiento();
    },
    methods:{
      getSeguimiento(){
        axios.get(this.url).then(
          res =>{
            this.Nombres = res.data.data.Nombres;
            this.Apellidos = res.data.data.Apellidos;
            this.Asunto = res.data.data.Asunto;
            this.Correo = res.data.data.Correo;
            this.Telefono = res.data.data.Telefono;
            this.Fecha =res.data.data.Fecha;
            this.Dias = res.data.data.Dias;
            this.fecha_proximo_seguimiento = res.data.data.fecha_proximo_seguimiento;
          }
        );
      },
      editar(){
        event.preventDefault();        
        this.cargando = true;
        if(this.Nombres.trim()===''){
          mostrarAlerta('Ingrese un nombre','warning','Nombres');
        }else if(this.Apellidos.trim()===''){
          mostrarAlerta('Ingrese un Apellido','warning','Apellidos');
        }else if(this.Asunto.trim()===''){
          mostrarAlerta('Ingrese un asunto','warning','Asunto');
        }else if(this.Correo.trim()===''){
          mostrarAlerta('Ingrese un correo','warning','Correo');
        }else if(this.Telefono.trim()===''){
          mostrarAlerta('Ingrese un telefono','warning','Telefono');
        }else if(this.Fecha.trim()===''){
          mostrarAlerta('Ingrese fecha de seguimiento','warning','Fecha');
        }else if(this.Dias.trim()===''){
          mostrarAlerta('Ingrese cantidad de dias','warning','Dias');
        }else if(this.fecha_proximo_seguimiento.trim()===''){
          mostrarAlerta('No se calcula proxima fecha','warning','proximo');
        }else{
          var parametros = {
            Nombres:this.Nombres.trim(),
            Apellidos:this.Apellidos.trim(),
            Asunto:this.Asunto.trim(),
            Correo:this.Correo.trim(),
            Telefono:this.Telefono.trim(),
            Fecha:this.Fecha.trim(),
            Dias:this.Dias.trim(),
            fecha_proximo_seguimiento:this.fecha_proximo_seguimiento.trim()
          }
          enviarSolicitud('GET',parametros,this.url,'Seguimiento actualizado');
        }
      },
    }
  }
</script>