<template>
    <footer class="bg-secondary p-4">
        <div>
            <h2>Pharmacie FIDELE</h2>
            <ul>
                <li>{{settings.Adresse}}</li>
                <li v-if="settings.Contact">{{settings.Contact[0].Name}}  {{settings.Contact[0].FirstName}}</li>
                <li v-if="settings.Contact"><strong>Télephone : </strong> {{settings.Contact[0].PhoneNumber}}| <strong>Mail :</strong> {{settings.Contact[0].Mail}}</li>
            </ul>
        </div>

       <div>
            <h2>Autre information</h2>
            <ul>
                <li><strong>Politique de confidentialité</strong></li>
                <li><strong>Politique relative aux cookie</strong></li>
                <li><strong>Condition Générales de Ventes en ligne</strong></li>
                <li><strong>Condition Générales de Vente en officine</strong></li>
            </ul>
       </div>
    </footer>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    export default {
        data(){
            return {
                settings:{}
            }
        },
        methods:{
            SetSettings(){
                serverRequest.GetSettings().then((res)=>{
                    console.log(res);
                    this.settings=res
                })
            }
        },
        mounted(){
            this.SetSettings();
        }
    }
</script>