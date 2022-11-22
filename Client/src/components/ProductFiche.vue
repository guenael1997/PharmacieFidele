<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/Sample.jpg" class="card-img-top p-4" alt="...">
        <div v-if="IsInStock" class="bg-success m-4 p-2 rounded-pill" style="color:white">En stock</div>
        <div v-else class="bg-danger m-4 p-2 rounded-pill" style="color:white">En rupture</div>
        <div class="card-body">
            <h5 class="card-title" data-bs-toggle="modal" data-bs-target="#FicheProduct">{{Name}}</h5>
            <p class="card-text text-start fs-3">{{Price}} €</p>
            <button type="button" class="btn btn-success btn-lg rounded-pill">Ajouter au panier</button>
        </div>
    </div>
</template>

<script>
    export default {
        props : {Name:String,IsInStock:Boolean,Price:Number}
    }
</script>