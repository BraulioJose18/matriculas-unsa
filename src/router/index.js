import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/alumnos/:id'
  },
  {
    path: '/alumnos/:id',
    name: 'listado_alumnos',
    component: () => import ('../views/AlumnosListado.vue')
  },
  {
    path: '/alumnos/:id/detalle',
    name: 'detalle_alumno',
    component: () => import('../views/AlumnoDetalle.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
