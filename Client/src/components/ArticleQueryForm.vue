<template>
    <form>
        <div class="modal modal-xl fade" id="Form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier l'article</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Nom</label>
                                <input type="text" placeholder="Nom de l'article" id="Name" name="Name" class="form-control ">
                            </div>
                            <div class="col-lg-6">
                                <label>Image</label>
                                <div class="input-group">
                                    <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                    <input type="file" class="form-control" id="inputGroupFile01">
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-4">
                                <label>Stock</label>
                                <input type="text" placeholder="Article en reserve" id="Stock" name="Stock" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>Prix HTVA</label>
                                <input type="text" placeholder="Prix de l'article HTVA" id="PHTVA" name="PHTVA" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>Prix TVAC</label>
                                <input type="text" placeholder="Prix de l'article TVAC" id="PTVAC" name="PTVAC" class="form-control">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Description</label>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div class="col-lg-6">
                                <label>Utilisation</label>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
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