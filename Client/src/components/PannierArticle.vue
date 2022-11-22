<template>
    <div>
        <h2 class="fs-4 text-end text-decoration-underline">{{Name}}</h2>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="../assets/Sample.jpg" class="card-img-top p-4" alt="...">
                </div>
                <div class="col">
                    <h3 class="fs-4">Prix Unitaire</h3>
                    <h4>{{Price}} €</h4>
                </div>
                <div class="col">
                    <h3 class="fs-4">Quantité</h3>
                    <div class="container rounded-pill border border-3 border-dark p-2">
                        <div class="row">
                            <div class="col" v-on:click="QuantDec">-</div>
                            <div class="col">{{Quantité}}</div>
                            <div class="col" v-on:click="QuantInc">+</div>
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
    export default {
        props:{Name:String,Price:Number},
        data(){
            return {
                Quantité:1,
                TotalPrice:0
            }
        },
        methods:{
            QuantInc(){
                this.Quantité++
                this.SetTotalPrice()
            },
            QuantDec(){
                this.Quantité--
                if(this.Quantité<0){
                    this.Quantité=0
                }
                this.SetTotalPrice()
            },
            SetTotalPrice(){
                this.TotalPrice = this.Quantité*this.Price
            }
        },
        mounted(){
            this.SetTotalPrice()
        }
    }
</script>