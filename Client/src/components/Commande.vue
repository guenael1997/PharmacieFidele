<template>
    <div v-if="Commande">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 my-auto">
                    <h3>Nom</h3>
                    <p>{{Commande.Name}}</p>
                </div>
                <div class="col-lg-2 my-auto">
                    <h3>Prenom</h3>
                    <p>{{Commande.FirstName}}</p>
                </div>
                <div class="col-lg-2 my-auto">
                    <h3 class="fs-4">Numéro de télephone</h3>
                    <p>{{Commande.PhoneNumber}}</p>
                </div>
                <div class="col-lg-2 my-auto">
                    <h3>Montant</h3>
                    <p>{{Total}} €</p>
                </div>
                <div class="col-lg-2 my-auto py-2">
                    <button type="button" class="btn btn-info btn-lg rounded-pill py-2 px-5" data-bs-toggle="modal" v-bind:data-bs-target="'#Form_'+Commande._id">Modifier</button>
                </div>
                <div class="col-lg-2 my-auto py-2">
                    <button type="button" class="btn btn-danger btn-lg rounded-pill py-2 px-5" v-on:click="deleteCommande()">supprimer</button>
                </div>
            </div>
        </div>
        <hr width="100%">
    </div>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    export default {
        props:{Commande:Object},
        data(){
            return {
                Total:0
            }
        },
        methods : {
            SetTotal(){
                var Total=0 ;
                this.Commande.Articles.forEach(element => {
                    let article = {...element};
                    Total+=(article.price*article.number)
                });
                this.Total=Total
            },
            deleteCommande(){
                var r = confirm("Voulez vous vraiment supprimer cette commande ?")
                if (r===true){
                    serverRequest.removeCommande({...this.Commande}._id)
                    alert(`La commande ${{...this.Commande}._id} a bien été supprimé`)
                    location.reload()
                }
            }
        },
        mounted(){
            this.SetTotal()
        }
    }
</script>