<template>
    <form v-if="User">
        <div class="modal modal-xl fade" :id="'Form_'+User._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier l'utilisateur</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Nom d'utilisateur</label>
                                <input type="text" placeholder="Nom de l'article"  class="form-control " v-model="this.username">
                            </div>
                            <div class="col-lg-6">
                                <label>E-mail</label>
                                <input type="text" placeholder="Nom de l'article"  class="form-control " v-model="this.email">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Ancien mot de passe</label>
                                <input type="password" placeholder="Mot de passe"  class="form-control" v-model="this.password1">
                            </div>
                            <div class="col-lg-6">
                                <label>Nouveau mot de passe</label>
                                <input type="password" placeholder="Confirmez le mot de passe" class="form-control" v-model="this.password2">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-warning" v-on:click="UpdateUser()">Modifier changements</button>
            </div>
            </div>
        </div>
        </div>
    </form>
    <form v-else>
        <div class="modal modal-xl fade" id="Form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier l'utilisateur</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Nom d'utilisateur</label>
                                <input type="text" placeholder="Nom de l'article"  class="form-control " v-model="this.username">
                            </div>
                            <div class="col-lg-6">
                                <label>E-mail</label>
                                <input type="text" placeholder="Nom de l'article"  class="form-control " v-model="this.email">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Mot de passe</label>
                                <input type="password" placeholder="Mot de passe"  class="form-control" v-model="this.password1">
                            </div>
                            <div class="col-lg-6">
                                <label>Confirmer mot de passe</label>
                                <input type="password" placeholder="Confirmez le mot de passe"  class="form-control" v-model="this.password2">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-succes" v-on:click="AddUser()">Modifier changements</button>
            </div>
            </div>
        </div>
        </div>
    </form>
</template>
<script>
    import serverRequest from '../Controller/serverRequest'
    export default {
        props:{User:Object},
        data(){
            return {
                username:"",
                email:"",
                password1:"",
                password2:""
            }
        },
        methods:{
            SetUser(){
                var User = {...this.User}

                this.username=User.username
                this.email=User.email
            },
            UpdateUser(){
                if(this.username!=""){
                    if(this.email!=""){
                        var regex = /.*\@.*\..*/
                        if(regex.test(this.email)){
                            serverRequest.login({username:{...this.User}.username,password:this.password1}).then(res=>{
                                if(res!=false){
                                    const NewUser = {
                                        username:this.username,
                                        email:this.email,
                                        oldpwd:this.password1,
                                        newpwd:this.password2
                                    }
                                    serverRequest.ModifyUser({...this.User}._id,NewUser)
                                    alert("Vos données ont été modifié avec succès")
                                    location.reload()
                                }
                                else{
                                    alert("mot de passe incorrect")
                                }
                            })
                            
                        }
                        else{
                            alert("veuillez rentrer une adresse mail valide")
                        }
                    }
                    else{
                        alert("veuillez rentrer une adresse mail")
                    }
                }
                else{
                    alert("veuillez rentrer un nom d'utilisateur")
                }
            },
            AddUser(){
                if(this.username!=""){
                    if(this.email!=""){
                        var regex = /.*\@.*\..*/
                        if(regex.test(this.email)){
                            if(this.password1==this.password1){
                                const NewUser = {
                                    username:this.username,
                                    email:this.email,
                                    password:this.password1
                                }
                                serverRequest.RegisterNewUser(NewUser)
                                alert("L'utilisateur a été ajouter avec succès")
                                location.reload()
                            }
                            else{
                                alert("les mots de passe ne corespondent pas")
                            }
                            
                        }
                        else{
                            alert("veuillez rentrer une adresse mail valide")
                        }
                    }
                    else{
                        alert("veuillez rentrer une adresse mail")
                    }
                }
                else{
                    alert("veuillez rentrer un nom d'utilisateur")
                }
            }
        },
        mounted(){
            this.SetUser()
        }
    }
</script>