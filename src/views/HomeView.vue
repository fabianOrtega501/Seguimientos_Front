<template>
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Asunto</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Fecha Actual</th>
              <th>Dias</th>
              <th>Proximo</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="8">Cargando</td>
            </tr>
            <tr v-else v-for="seg, i in seguimientos" :key="seg.id">
              <td v-text="(i+1)"></td>
              <td v-text="seg.id"></td>
              <td v-text="seg.Nombres"></td>
              <td v-text="seg.Apellidos"></td>
              <td v-text="seg.Asunto"></td>
              <td v-text="seg.Correo"></td>
              <td v-text="seg.Telefono"></td>
              <td v-text="seg.Fecha"></td>
              <td v-text="seg.Dias"></td>
              <td v-text="seg.fecha_proximo_seguimiento"></td>
              <td>
                <router-link :to="{path:'viewS/'+seg.id}" class="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link :to="{path:'editS/'+seg.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" v-on:click="$event => eliminar(seg.id)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {confirmar} from '../funciones';

  export default{
    data(){
      return{
        seguimientos:null,
        cargando: false
      }
    },
    mounted(){
      this.getSeguimientos();
    },
    methods:{
      getSeguimientos(){
        this.cargando = true;
        axios.get('http://localhost/parte1/seguimientos_back/public/api/v1/seguimientos').then(
          res => {
            this.seguimientos = res.data;
            this.cargando = false;
          }
        );
      },
      eliminar(id){
      confirmar('http://localhost/parte1/seguimientos_back/public/api/v1/seguimientos/',id,'Eliminar registro', 'Confirmacion de eliminacion');
      this.cargando = false;
      }
    }    
  }
</script>
