<script setup>
    import ArticlePanier from '../components/PannierArticle.vue'
    import FormPanier from '../components/CommandForm.vue'
    import Message from '../components/Message.vue'
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <ArticlePanier :Carret="Article" v-for="Article in Articles" :IsCarret="true"/>
                </div>
                <div class="col-sm-4">
                    <FormPanier/>
                </div>
            </div>
        </div>
        <Message/>
    </div>
</template>

<script>
    import session from '../Controller/session';
    export default {
        data(){
            return {
                Articles:{}
            }
        },
        methods:{
            SetArticles(){
                this.Articles=session.GetArticleFromCarret();
                console.log("totalPrice")
            },
            setTotaPrice(){
                FormPanier.methods.SetTotalPrice()
            }
        },
        mounted(){
            this.SetArticles();
        }
    }
</script>