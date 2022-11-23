<template>
    <form>
        <div class="modal modal-xl fade" id="Form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier l'utilisateur</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Nom d'utilisateur</label>
                                <input type="text" placeholder="Nom de l'article" id="Name" name="Name" class="form-control ">
                            </div>
                            <div class="col-lg-6">
                                <label>E-mail</label>
                                <input type="text" placeholder="Nom de l'article" id="Name" name="Name" class="form-control ">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Mot de passe</label>
                                <input type="password" placeholder="Mot de passe" id="Password1" name="Password1" class="form-control">
                            </div>
                            <div class="col-lg-6">
                                <label>Confirmer mot de passe</label>
                                <input type="password" placeholder="Confirmez le mot de passe" id="Password1" name="Password1" class="form-control">
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