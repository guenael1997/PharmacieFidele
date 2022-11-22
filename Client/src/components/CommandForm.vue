<template>
    <form class="m-4 p-5 text-start border rounded-3 border-4 border-success">
        <h2>Vos coordonnées</h2>
        <div class="p-2">
            <label class="fs-4">Nom</label><br>
            <input type="text" class="form-control" placeholder="Votre Nom">
        </div>
        <div class="p-2">
            <label class="fs-4">Prénom</label><br>
            <input type="text" class="form-control" placeholder="Votre Prenom">
        </div>
        <div class="p-2">
            <label class="fs-4">Numéro de téléphone</label><br>
            <input type="text" class="form-control" placeholder="Votre Numéro de téléphone">
        </div>
        <hr color=green width=100% size="10" class="rounded">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <button type="button" class="btn btn-success btn-lg rounded-pill p-2" data-bs-toggle="modal" data-bs-target="#Message">Commander</button>
                </div>
                <div class="col-sm-6 text-end">
                    <h3>Total</h3>
                    <h4>{{TotalPrice}} €</h4>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        props:{TotalPrice:Number}
    }
</script>