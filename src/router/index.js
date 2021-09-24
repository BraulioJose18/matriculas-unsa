import {createRouter, createWebHistory} from '@ionic/vue-router';

const routes = [
    {
        path: '',
        redirect: '/alumnos/Listado'
    },
    {
        path: '/alumnos/:id',
        name: 'listado_alumnos',
        component: () => import ('../views/AlumnosListado.vue')
    },
    {
        path: '/alumnos/detalle/:id',
        name: 'detalle',
        component: () => import('../views/AlumnoDetalle.vue'),
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
