<script setup>
    import ArticlePanier from '../components/PannierArticle.vue'
</script>

<template>
    <form>
        <div class="modal modal-xl fade" id="Form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier la commande</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-4">
                                <label>Nom</label>
                                <input type="text" placeholder="Nom de la personne" id="Name" name="Name" class="form-control ">
                            </div>
                            <div class="col-lg-4">
                                <label>Prenom</label>
                                <input type="text" placeholder="Nom de la personne" id="FirstName" name="FirstName" class="form-control ">
                            </div>
                            <div class="col-lg-4">
                                <label>Numéro de téléphone</label>
                                <input type="text" placeholder="Article en reserve" id="Tel" name="Tel" class="form-control">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-12">
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#AchatList" aria-expanded="false" aria-controls="collapseExample">
                                    Voir la liste d'achats
                                </button>
                                <div class="collapse py-2" id="AchatList">
                                    <div class="card card-body">
                                        <ArticlePanier/>
                                        <ArticlePanier/>
                                        <ArticlePanier/>
                                        <ArticlePanier/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Montant</label>
                                <input type="text" placeholder="Prix de l'article HTVA" id="PHTVA" name="PHTVA" class="form-control">
                            </div>
                            <div class="col-lg-6">
                                <label>Etat de la commande</label>
                                <select class="form-select" id="Etat" name="Etat">
                                    <option value="1">En cours</option>
                                    <option value="2">Prête</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-warning">Modifier changements</button>
            </div>
            </div>
        </div>
        </div>
    </form>
</template>