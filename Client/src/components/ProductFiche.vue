<template>
    <div class="card" style="width: 18rem;">
        <img :src="Article.Image" class="card-img-top p-4" alt="...">
        <div v-if="Article.Quantité>0" class="bg-success m-4 p-2 rounded-pill" style="color:white">En stock</div>
        <div v-else class="bg-danger m-4 p-2 rounded-pill" style="color:white">En rupture</div>
        <div class="card-body">
            <h5 class="card-title" data-bs-toggle="modal" v-bind:data-bs-target="'#modal_'+Article._id" style="cursor:pointer">{{Article.Name}}</h5>
            <p class="card-text text-start fs-3">{{Article.PTVAC}} €</p>
            <button type="button" class="btn btn-success btn-lg rounded-pill" v-on:click="addArticle()">Ajouter au panier</button>
        </div>
    </div>
</template>

<script>
    import session from '../Controller/session'
    export default {
        props : {Article:Object},
        data() {
            return {
                thisArticle:{},
                NumberArticle:0
            }
        },
        methods:{
            addArticle(){
                const article = {...this.Article}
                const NewArticle = {
                    ArticleID:article._id,
                    number:1,
                    price:article.PTVAC
                }
                session.AddCarret(NewArticle)
            }
        }
    }
</script>