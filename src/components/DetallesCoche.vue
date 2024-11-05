<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow">
                    <img src="./../assets/pacman-loading.gif" class="card-img-top img-fluid" alt="Imagen del coche"
                        style="max-height: 300px; object-fit: cover;">
                    <div class="card-body">
                        <h4 class="card-title text-center">{{ this.$route.params.marca }} - {{ this.$route.params.modelo
                            }}</h4>
                        <p class="card-text text-center text-muted">Conductor: <strong>{{ this.$route.params.conductor }}</strong>
                        </p>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>ID del Coche:</strong> {{ this.$route.params.id }}
                            </li>
                            <li class="list-group-item">
                                <strong>Marca:</strong> {{ this.$route.params.marca }}
                            </li>
                            <li class="list-group-item">
                                <strong>Modelo:</strong> {{ this.$route.params.modelo }}
                            </li>
                            <li class="list-group-item">
                                <strong>Conductor:</strong> {{ this.$route.params.conductor }}
                            </li>
                        </ul>

                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "DetallesCoche",
}
</script>

<style lang="scss" scoped></style>