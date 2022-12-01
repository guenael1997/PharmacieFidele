<script setup>
    import Btn from '../components/Button.vue'
</script>

<template>
    <div>
        <img src="../assets/Photo1.png" class="img-fluid" style="width:100%;">
    </div>
    <div class="container-fluid">
        <div class="row p-5">
            <div class="col my-auto">
                <img src="../assets/Logo Pharmacie Fidèle.png" class="img-fluid text-center align-middle">
            </div>
            <div class=" col my-auto">
                <h2>Qui somme-nous ?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh nulla, accumsan at justo sit amet, dignissim dictum eros. Curabitur ac ligula vitae ligula tempus dictum ac sed nisi. Donec luctus eros dapibus malesuada congue. Etiam ultrices turpis a rutrum imperdiet. Mauris mi ex, commodo nec rutrum iaculis, dignissim tristique turpis. Phasellus tellus diam, varius pharetra odio ut, pulvinar dapibus nibh. Curabitur vitae risus a eros pharetra tincidunt sit amet et leo.</p>
                
            </div>
        </div>
    </div>

    <div class="container-fluid bg-success" style="color:white" v-if="settings">
        <div class="row p-5">
            <div class="col my-auto">
                <h2>Toujours à votre disposition !</h2>
                <div>
                    <h3>Adresse</h3>
                    <p>{{settings.Adresse}}</p>
                </div>
                <div>
                    <h3>Téléphone</h3>
                    <p>{{settings.PhoneNumber}}</p>
                </div>
                <div>
                    <h3>Heure d'ouverture</h3>
                    <ul>
                        <li v-if="settings.Horaire"><strong>Lundi :</strong> {{settings.Horaire[0].start}}h - {{settings.Horaire[0].end}}h</li>
                        <li v-if="settings.Horaire"><strong>Mardi :</strong> {{settings.Horaire[1].start}}h - {{settings.Horaire[1].end}}h</li>
                        <li v-if="settings.Horaire"><strong>Mercredi :</strong> {{settings.Horaire[2].start}}h - {{settings.Horaire[2].end}}h</li>
                        <li v-if="settings.Horaire"><strong>Jeudi :</strong> {{settings.Horaire[3].start}}h - {{settings.Horaire[3].end}}h</li>
                        <li v-if="settings.Horaire"><strong>Vendredi :</strong> {{settings.Horaire[4].start}}h - {{settings.Horaire[4].end}}h</li>
                        <li v-if="settings.Horaire"><strong>Samedi :</strong> {{settings.Horaire[5].start}}h - {{settings.Horaire[5].end}}h</li>
                        <li v-if="settings.Horaire"><strong>Dimanche :</strong> {{settings.Horaire[6].start}}h - {{settings.Horaire[6].end}}h</li>
                    </ul>
                </div>
            </div>
            <div class=" col fs-4 my-auto">
                <p>Image de la carte</p>
            </div>
        </div>
    </div>

    <div class="text-start container p-5">
        <div class="row">
            <div class="col-8">
                <h2> Découvrez notre gamme de produits</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh nulla, accumsan at justo sit amet, dignissim dictum eros. Curabitur ac ligula vitae ligula tempus dictum ac sed nisi. Donec luctus eros dapibus malesuada congue. Etiam ultrices turpis a rutrum imperdiet. Mauris mi ex, commodo nec rutrum iaculis, dignissim tristique turpis. Phasellus tellus diam, varius pharetra odio ut, pulvinar dapibus nibh. Curabitur vitae risus a eros pharetra tincidunt sit amet et leo.</p>
                
            </div>
        </div>
    </div>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';

    export default {
        data(){
            return {
                settings:{}
            }
        },
        methods : {
            test(){
                serverRequest.GetSettings().then((res)=>{
                    console.log(res);
                    this.settings = res ;
                })
            }
        },
        mounted (){
            this.test();
        }
    }
</script>