<template>
    <div>
        <h2 class="fs-4  text-decoration-underline">{{Article.Name}}</h2>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img :src="Article.Image" class="card-img-top p-4" alt="...">
                </div>
                <div class="col">
                    <h3 class="fs-4">Prix Unitaire</h3>
                    <h4>{{Article.PTVAC}} €</h4>
                </div>
                <div class="col">
                    <h3 class="fs-4">Quantité</h3>
                    <div class="container rounded-pill border border-3 border-dark p-2">
                        <div class="row">
                            <div class="col" v-on:click="QuantDec()">-</div>
                            <div class="col">{{Quantité}}</div>
                            <div class="col" v-on:click="QuantInc()">+</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h3 class="fs-4">Prix Total</h3>
                    <h4>{{TotalPrice}} €</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import session from '../Controller/session'
    import serverRequest from '../Controller/serverRequest'
    import PannierVue from '../views/Pannier.vue'
    export default {
        props:{Carret:Object,IsCarret:Boolean,CommandeID:String,IsNewForm:false},
        data(){
            return {
                Article:{},
                Quantité:1,
                TotalPrice:0
            }
        },
        methods:{
            QuantInc(){
                console.log("ok")
                this.Quantité++
                this.SetTotalPrice()
                this.ModifyNumber()
            },
            QuantDec(){
                this.Quantité--
                if(this.Quantité<0){
                    this.Quantité=0
                }
                this.SetTotalPrice()
                this.ModifyNumber
            },
            SetTotalPrice(){
                this.TotalPrice = this.Quantité*this.Article.PTVAC;
                var NewCarret={
                    ArticleID:this.Article._id,
                    number:this.Quantité,
                    price:this.Article.PTVAC
                }
                if(this.IsCarret){
                    session.SetArticleInCarret(NewCarret);
                    this.$root.$refs.SetTotalPrice();
                }
            },
            SetArticle(){
                if(!this.IsCarret)
                {
                    if(!this.IsNewForm)
                    {
                        var carret = {...this.Carret[1]}
                    this.Quantité=carret.number
                    serverRequest.GetArticle(carret.ArticleID).then((res)=>{
                        this.Article=res
                        this.SetTotalPrice()
                    })
                    }
                    else{
                        console.log("execute")
                        var Carret ={...this.Carret}
                        this.Quantité=Carret.number
                        console.log(Carret)
                        serverRequest.GetArticle(Carret.ArticleID).then((res)=>{
                            this.Article=res
                            this.SetTotalPrice()
                        })
                    }
                }
                else{
                    this.Quantité=this.Carret.number
                    console.log(this.Carret)
                    serverRequest.GetArticle(this.Carret.ArticleID).then((res)=>{
                        this.Article=res
                        this.SetTotalPrice()
                    })
                }
            },
            ModifyNumber(){
                console.log(this.$props.CommandeID)
                console.log(this.Carret)
                if(!this.IsNewForm){
                    session.ModifyNumber(this.Quantité,this.Article._id,this.CommandeID)
                }
                else{
                    session.ModifyNumber(this.Quantité,this.Article._id,"NewCommande")
                }
                
            }
        },
        mounted(){
            this.SetArticle()
            console.log(this.IsCarret)
        }
    }
</script>