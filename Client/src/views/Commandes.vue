<script setup>
    import CommandeVue from '../components/Commande.vue';
    import CommandeQueryFormVue from '../components/CommandeQueryForm.vue'
</script>

<template>
    <div class="text-start m-5">
        <button type="button" class="btn btn-success btn-lg rounded-pill py-2 px-5" data-bs-toggle="modal" data-bs-target="#Form">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
            Ajouter une commande
        </button>
    </div>
    <div class="m-4 p-4 border border-4 rounded">
        <CommandeVue v-for="Commande in Commandes" :Commande="Commande" />
        <CommandeQueryFormVue v-for="Commande in Commandes" :Commande="Commande"/>
    </div>
    <div class="text-start m-5">
        <button type="button" class="btn btn-success btn-lg rounded-pill py-2 px-5" data-bs-toggle="modal" data-bs-target="#Form">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
            Ajouter une commande
        </button>
    </div>
    <CommandeQueryFormVue/>
    <a type="button" class="btn btn-success text-end p-2 m-3" href="/dashboard">Retour au dashboard</a>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    export default {
        data(){
            return {
                Commandes:{}
            }
        },
        methods:{
            SetCommandes(){
                serverRequest.GetAllCommandes().then(res=>{
                    this.Commandes = res
                })
            }
        },
        mounted(){
            this.SetCommandes()
        }
    }
</script>