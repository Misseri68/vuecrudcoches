import { createRouter, createWebHistory } from "vue-router";
import HomeCoches from "./components/HomeCoches.vue";
import CreateCoche from "./components/CreateCoche.vue";
import UpdateCoche from "./components/UpdateCoche.vue";
import DetallesCoche from "./components/DetallesCoche.vue";

const myRoutes =  [
    {
        path: "/", component: HomeCoches
    },
    {
        path: "/create", component: CreateCoche
    },
    {
        path: "/update/:id", component: UpdateCoche
    },
    {
        path: "/detalles/:id/:marca/:modelo/:conductor", component: DetallesCoche
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;