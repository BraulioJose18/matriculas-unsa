<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Detalle Alumno</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-card>
        <img src="../../resources/epis.png" alt="imagen stock alumno">
        <ion-card-header>
          <ion-card-subtitle>{{ alumno.last_name }}</ion-card-subtitle>
          <ion-card-title>{{ alumno.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <h2><b>CUI: </b>{{ alumno.cui }}</h2>
          <h2><b>DNI: </b> {{ alumno.dni }}</h2>
        </ion-card-content>
      </ion-card>
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
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
} from '@ionic/vue';
import EnrollmentService from "../servicios/enrollment/enrollment.service";

export default {
  name: "AlumnoDetalle",
  data() {
    return {}
  },
  methods: {
    getStudentDetailById(id) {
      EnrollmentService.getStudentDetailById(id).then(
          (response) => {
            console.log(response.data.student)
            this.alumno = response.data.student
          },
          (error) => {
            console.log(error)
          }
      )
    }
  },
  beforeMount() {
    console.log(this.$route.params.id)
    this.getStudentDetailById(this.$route.params.id)
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
  },
}
</script>

<style scoped>

</style>
