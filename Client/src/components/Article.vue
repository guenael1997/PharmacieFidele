<template>
    <div>
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-lg-2 my-auto">
                    <img :src="Article.Image" class="img-fluid p-5">
                </div>
                <div class="col-lg-2 my-auto">
                    <h3 class="fs-4">{{Article.Name}}</h3>
                </div>
                <div class="col-lg-2 my-auto">
                    <h3>prix HTVA</h3>
                    <h4>{{Article.PHTVA}} €</h4>
                </div>
                <div class="col-lg-2 my-auto">
                    <h3>prix TVAC</h3>
                    <h4>{{Article.PTVAC}} €</h4>
                </div>
                <div class="col-lg-2 my-auto">
                    <button type="button" class="btn btn-info btn-lg rounded-pill py-2 px-5" data-bs-toggle="modal" :data-bs-target="'#modal_'+Article._id">Modifier</button>
                </div>
                <div class="col-lg-2 my-auto">
                    <button type="button" class="btn btn-danger btn-lg rounded-pill py-2 px-5" v-on:click="Delete()">supprimer</button>
                </div>
            </div>
        </div>
        <hr width="100%">
    </div>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    export default {
        props:{Article:Object},
        data(){
            return {
                ThisArticle:{}
            }
        },
        methods : {
            Delete(){
                console.log("executed")
                var r = confirm("Etes-vous sur de vouloir supprimer cette article ?");
                if(r===true){
                    serverRequest.RemoveArticle(this.Article._id);
                    location.reload()
                }
            },
            SetArticle(){
                this.ThisArticle=this.Article
            }
        },
        mounted(){
            this.SetArticle()
        }
    }
</script>