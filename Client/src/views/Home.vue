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

    <div class="container-fluid bg-success" style="color:white">
        <div class="row p-5">
            <div class="col my-auto">
                <h2>Toujours à votre disposition !</h2>
                <div>
                    <h3>Adresse</h3>
                    <p>Sint-Elisabethstraat,54 9120 Else</p>
                </div>
                <div>
                    <h3>Téléphone</h3>
                    <p>03 296 82 43</p>
                </div>
                <div>
                    <h3>Heure d'ouverture</h3>
                    <ul>
                        <li><strong>Lundi :</strong> 8h-19h30</li>
                        <li><strong>Mardi :</strong> 8h-19h30</li>
                        <li><strong>Mercredi :</strong> 8h-19h30</li>
                        <li><strong>Jeudi :</strong> 8h-19h30</li>
                        <li><strong>Vendredi :</strong> 8h-19h30</li>
                        <li><strong>Samedi :</strong> 8h-19h30</li>
                        <li><strong>Dimanche :</strong> 8h-19h30</li>
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
        methods : {
            test(){
                serverRequest.GetAllArticle().then(res => {
                    console.log(res);
                })
            }
        },
        mounted (){
            this.test();
        }
    }
</script>