<template>
    <form class="m-4 p-5 text-start border rounded-3 border-4 border-success">
        <h2>Vos coordonnées</h2>
        <div class="p-2">
            <label class="fs-4">Nom</label><br>
            <input type="text" class="form-control" placeholder="Votre Nom" v-model="this.name">
        </div>
        <div class="p-2">
            <label class="fs-4">Prénom</label><br>
            <input type="text" class="form-control" placeholder="Votre Prenom" v-model="this.firstName">
        </div>
        <div class="p-2">
            <label class="fs-4">Numéro de téléphone</label><br>
            <input type="text" class="form-control" placeholder="Votre Numéro de téléphone" v-model="this.PhoneNumber">
        </div>
        <hr color=green width=100% size="10" class="rounded">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <button type="button" class="btn btn-success btn-lg rounded-pill p-2" v-on:click="GetCommand()">Commander</button>
                </div>
                <div class="col-xs-6 text-end">
                    <h3>Total</h3>
                    <h4>{{TotalPrice}} €</h4>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import session from '../Controller/session';
    export default {
        data(){
            return{
                TotalPrice:0,
                name:"",
                firstName:"",
                PhoneNumber:""
            }
        },
        methods:{
            SetTotalPrice(){
                this.TotalPrice=session.calculateTotalPrice();
            },
            GetCommand(){
                const name = this.name
                const Firstname = this.firstName
                const PhoneNumber = this.PhoneNumber
                const IsReady = false

                session.addCommande(name,Firstname,PhoneNumber,IsReady);
            }
        },
        mounted(){
            this.SetTotalPrice();
        },
        created(){
            this.$root.$refs = this;
        }
    }
</script>