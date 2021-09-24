<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Listado de Alumnos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-list-header>
          Alumnos 5to Año
        </ion-list-header>
        <ion-item v-for="alumno in listAlumnos" :key="alumno.id">
          <ion-avatar slot="start">
            <img src="../../resources/avatar.png">
          </ion-avatar>
          <ion-label>
            <h2><b>Nombres: </b>{{alumno.name}}</h2>
            <h2><b>Apellidos: </b> {{alumno.last_name}}</h2>
            <h2><b>CUI: </b> {{alumno.cui}}</h2>
            <h2><b>DNI: </b> {{alumno.dni}}</h2>
            <ion-button color="tertiary" expand="full" @click="viewDetail(alumno)">
            </ion-button>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonAvatar,
  IonLabel,
  IonItem,
  IonList,
} from '@ionic/vue';
import AlumnosService from "../servicios/Alumnos/alumnos.service"


export default {
  name: 'Folder',
  data: () => ({
    listAlumnos: [],
  }),
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonListHeader,
    IonAvatar,
    IonLabel,
    IonItem,
    IonList,
  },
  beforeMount() {
    this.getAllAlumnos()
  },
  methods: {
    getAllAlumnos() {
      AlumnosService.getAll().then(
          (response) => {
            this.listAlumnos = response
          },
          (error) =>{
            console.log(error)
          }
      )
    },
    viewDetail(alumno) {
      this.$router.push({name: 'detail', params: {alumno}})
    },
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>