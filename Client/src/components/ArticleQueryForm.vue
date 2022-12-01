<template>
    <form v-if="Article" :name="'ArticleForm_'+Article._id">
        <div class="modal modal-xl fade" :id="'modal_'+Article._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <input type="text" placeholder="Nom de l'article" id="Name" name="Name" class="form-control " v-model="this.Name">
                            </div>
                            <div class="col-lg-6">
                                <label>Image</label>
                                <div class="input-group">
                                    <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                    <input type="file" class="form-control" id="inputGroupFile01" @change="ChangeFile">
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-4">
                                <label>Stock</label>
                                <input type="text" placeholder="Article en reserve" id="Stock" name="Quantité" class="form-control"  v-model="this.Quantité">
                            </div>
                            <div class="col-lg-4">
                                <label>Prix HTVA</label>
                                <input type="text" placeholder="Prix de l'article HTVA" id="PHTVA" name="PHTVA" class="form-control" v-model="this.PHTVA">
                            </div>
                            <div class="col-lg-4">
                                <label>Prix TVAC</label>
                                <input type="text" placeholder="Prix de l'article TVAC" id="PTVAC" name="PTVAC" class="form-control"  v-model="this.PTVAC">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Description</label>
                                <textarea class="form-control" aria-label="With textarea" name="Description" v-model="this.Description" ></textarea>
                            </div>
                            <div class="col-lg-6">
                                <label>Utilisation</label>
                                <textarea class="form-control" aria-label="With textarea" name="Use" v-model="this.Use"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-warning" v-on:click="UpdateArticle()">Modifier changements</button>
            </div>
            </div>
        </div>
        </div>
    </form>
    <form v-else >
        <div class="modal modal-xl fade" id="AddArticle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <input type="text" placeholder="Nom de l'article" id="Name" name="Name" class="form-control " v-model="this.Name">
                            </div>
                            <div class="col-lg-6">
                                <label>Image</label>
                                <div class="input-group">
                                    <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                    <input type="file" class="form-control" id="inputGroupFile01" @change="ChangeFile">
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-4">
                                <label>Stock</label>
                                <input type="text" placeholder="Article en reserve" id="Stock" name="Quantité" class="form-control"  v-model="this.Quantité">
                            </div>
                            <div class="col-lg-4">
                                <label>Prix HTVA</label>
                                <input type="text" placeholder="Prix de l'article HTVA" id="PHTVA" name="PHTVA" class="form-control" v-model="this.PHTVA">
                            </div>
                            <div class="col-lg-4">
                                <label>Prix TVAC</label>
                                <input type="text" placeholder="Prix de l'article TVAC" id="PTVAC" name="PTVAC" class="form-control"  v-model="this.PTVAC">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Description</label>
                                <textarea class="form-control" aria-label="With textarea" name="Description" v-model="this.Description" ></textarea>
                            </div>
                            <div class="col-lg-6">
                                <label>Utilisation</label>
                                <textarea class="form-control" aria-label="With textarea" name="Use" v-model="this.Use"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button v-if="Article" type="button" class="btn btn-warning" v-on:click="UpdateArticle()">Modifier changements</button>
                <button v-else type="button" class="btn btn-success" v-on:click="AddArticle()">Ajouter l'article</button>
            </div>
            </div>
        </div>
        </div>
    </form>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    import { isProxy,toRaw } from 'vue';
    export default {
        props :{Article:Object},
        data(){
            return{
                ThisArticle: new Object(),
                Name:"",
                PTVAC:"",
                PHTVA:"",
                Description:"",
                Use:"",
                Image:"",
                Quantité:0,
                File:new Blob()
            }
        },
        methods:{
            UpdateArticle(){
                var data = new FormData()
                data.append("Name",this.Name)
                data.append("PTVAC",this.PTVAC)
                data.append("PHTVA",this.PHTVA)
                data.append("Description",this.Description)
                data.append("Use",this.Use)
                data.append("Image",this.Image)
                data.append("Quantité",this.Quantité)
                if(this.File!=null){
                    data.append("ImageFile",this.File,"Image.png");
                }
                console.log(data.get("Use"))
                serverRequest.ModifyArticle(this.Article._id,data);

                alert("Article modifié avec succès")
                location.reload()
            },

            AddArticle(){
                var data = new FormData()
                data.append("Name",this.Name)
                data.append("PTVAC",this.PTVAC)
                data.append("PHTVA",this.PHTVA)
                data.append("Description",this.Description)
                data.append("Use",this.Use)
                data.append("Image",this.Image)
                data.append("Quantité",this.Quantité)
                if(this.File!=null){
                    data.append("ImageFile",this.File,"Image.png");
                }
                serverRequest.AddNewArticle(data)

                alert("Article modifié avec succès")
                location.reload()
            },

            ChangeFile(e){
                this.File = e.target.files[0];
            },

            SetArticle(){

                if(this.Article){
                    let Article = {...this.$props.Article}
                    
                    this.Name=Article.Name
                    this.PTVAC=Article.PTVAC
                    this.PHTVA=Article.PHTVA
                    this.Description=Article.Description
                    this.Use=Article.Use
                    this.Image=Article.Image
                    this.Quantité=Article.Quantité
                }
                
                
            }
        },
        mounted(){
            this.SetArticle()
        }

    }
</script>