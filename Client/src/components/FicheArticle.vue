<template>
    <div class="modal modal-xl fade" v-bind:id="'modal_'+Article._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container" v-if="Article">
                        <div class="row">
                            <div class="col-sm-6">
                                <img :src="Article.Image" class="card-img-top p-4" alt="...">
                            </div>
                            <div class="col-sm-6">
                                <h2 v-on:click="selectArticle()">{{Article.Name}}</h2>
                                <h3>{{Article.PTVAC}} €</h3>
                                <div class="m-5 p-2 rounded-pill bg-success" style="color:white ;"> En stock</div>
                                <div class="container rounded-pill border border-3 border-dark p-2">
                                    <div class="row">
                                        <div class="col" v-on:click="ArticleDec()">-</div>
                                        <div class="col">{{NumberArticle}}</div>
                                        <div class="col" v-on:click="ArticleInc()" >+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="Article">
                        <div>
                            <h3>Description</h3>
                            <p>{{Article.Description}}</p>
                        </div>
                        <div>
                            <h3>Utilisation</h3>
                            <p>{{Article.Use}}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" v-on:click="AddToCarret()">Ajouter au pannier</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import serverRequest from '../Controller/serverRequest';
    import session from '../Controller/session';
    export default {
        props:{Article:Object},
        data(){
            return{
                NumberArticle:0,
            }
        },
        methods:{
            ArticleInc(){
                this.NumberArticle++;
            },
            ArticleDec(){
                this.NumberArticle--;
                if(this.NumberArticle<0){
                    this.NumberArticle=0;
                }
            },
            AddToCarret(){
                if(this.NumberArticle>0)
                {
                    var Article = {
                        ArticleID:this.Article._id,
                        number:this.NumberArticle,
                        price:this.Article.PTVAC
                    }
                    session.AddCarret(Article);
                }
            },
            GetSelectedArticle(){
                var id = session.getSelectedArticle();
                serverRequest.GetArticle(id).then((res)=>{
                    this.Article=res;
                })
                console.log("updated")
                
            }
        },
        mounted(){
            console.log(this.Article)
        },
    
    }
</script>