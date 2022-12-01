<template>
    <form class="m-5 p-5 border rounded-3 border-4 border-success col-sm-4 mx-auto">
        <h2>Se connecter</h2>
        <div class="p-4">
            <label class="fs-4">Nom d'utilisateur/Email</label><br>
            <input type="text" class="form-control" placeholder="Votre Email/Nom d'utilisateur" v-model="this.username">
        </div>
        <div class="p-4">
            <label class="fs-4">Mot de passe</label><br>
            <input type="password" class="form-control" placeholder="Mot de passe" v-model="this.password">
        </div>
        <div class="p-3">
            <button type="button" class="btn btn-success btn-lg rounded-pill p-2" v-on:click="login()">Se connecter</button>
        </div>
    </form>
</template>

<script>
    import session from '../Controller/session';
    export default {
        data(){
            return {
                username:"",
                password:""
            }
        },
        methods : {
            login(){
                console.log("execute")
                session.login(this.username,this.password).then(res=>{
                    if(res){
                        location.reload()
                    }
                });
            },

            loginCheck(){
                session.IsAlreadyConnected().then(res=>{
                    if(res==true){
                        this.$router.push("dashboard")
                    }
                })
            }
        },
        mounted(){
            this.loginCheck()
        }
    }
</script>