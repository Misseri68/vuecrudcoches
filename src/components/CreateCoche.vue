<template>
   <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 w-100" style="max-width: 500px;">
            <h1 class="text-center mb-4">Actualizar Coche</h1>
            <form v-if="coche" v-on:submit.prevent="">
                <div class="mb-3">
                    <label class="form-label">Id</label>
                    <input type="text" class="form-control" v-model="coche.idCoche" >
                </div>
                <div class="mb-3">
                    <label class="form-label">Marca</label>
                    <input type="text" class="form-control" v-model="coche.marca">
                </div>
                <div class="mb-3">
                    <label class="form-label">Modelo</label>
                    <input type="text" class="form-control" v-model="coche.modelo">
                </div>
                <div class="mb-3">
                    <label class="form-label">Conductor</label>
                    <input type="text" class="form-control" v-model="coche.conductor">
                </div>
                <div class="mb-3">
                    <label class="form-label">Imagen URL</label>
                    <input type="text" class="form-control" v-model="coche.imagen">
                </div>
                <button @click="createCoche" class="btn btn-success w-100">Crear</button>
            </form>
        </div>
    </div>
</template>

<script>
import CochesServices from '@/services/CochesServices';
const service = new CochesServices();
    export default {
        name: " CreateCoche",
        data() {
            return {
                coche: {}
            }
        },
        methods: {
            createCoche(){
                service.createCoche(this.coche).then(response => console.log(response))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>