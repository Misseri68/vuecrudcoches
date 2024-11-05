<template>
    <div>
        <table className="table table-hover table-bordered text-center">
            <thead className="table-dark">
                <tr>
                    <th>ID Coche</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coche in coches" :key="coche">
                    <td>{{ coche.idCoche }}</td>
                    <td>{{ coche.marca }}</td>
                    <td>{{ coche.modelo }}</td>
                    <td>{{ coche.conductor }}</td>
                    <td>
                        <img :src="coche.imagen" className="img-thumbnail" width="150" height="100" />
                    </td>
                    <td class="d-flex">
                        <button v-on:click="detalleCoche(coche)" class="btn btn-warning">Detalles</button>
                        <button v-on:click="() => { $router.push('/update/' + coche.idCoche) }"
                            class="btn btn-info">Update</button>
                        <button v-on:click="deleteCoche(coche.idCoche)" class="btn btn-danger">Delete</button>
                    </td>

                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
import CochesServices from '@/services/CochesServices';
import Swal from 'sweetalert2';
const service = new CochesServices();
export default {
    name: "HomeComponent",
    data() {
        return {
            coches: []
        }
    },
    methods: {
        getCoches() {
            console.log("llamando al servicio...")
            service.getCoches.then(response => {
                console.log(response)
                this.coches = response;
            })
        },

        detalleCoche(coche){
            this.$router.push("/detalles/" + coche.idCoche + "/" + coche.marca + "/" 
            + coche.modelo + "/" + coche.conductor )
         },

        deleteCoche(idCoche) {
            Swal.fire({
                title: "Seguro?",
                text: "Como lo borres lo pierdes!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Borra, borra!",
                cancelButtonText: "NOOOO!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Ale,",
                        text: "Muy bonito eh.",
                        icon: "success"
                    });
                    service.deleteCoche(idCoche).then(response=> console.log(response));
                }
            });
        }
    },
    mounted() {
        this.getCoches();
    }
}
</script>

<style scoped></style>