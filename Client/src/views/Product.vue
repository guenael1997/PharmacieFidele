<script setup>
    import ProductSingle from '../components/ProductFiche.vue'
    import FicheModal from '../components/FicheArticle.vue'
</script>

<template>
    <h1 class="py-4">Produits</h1>
    <div class="p-5">
        <div class="container text-center">
            <div class="row row-cols-1">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-3 mt-3" v-for="Article in Articles">
                            <ProductSingle :Article="Article" />
                            <FicheModal :Article="Article"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    export default {
        data(){
            return {
                Articles:{},
                selectedArticle:{}
            }
        },
        methods:{
            SetArticles(){
                serverRequest.GetAllArticle().then((res)=>{
                    console.log(res) ;
                    this.Articles = res
                })
            },
        },
        mounted(){
            this.SetArticles();
        },
    }
</script>

