<template>
    <div v-if="User">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 my-auto">
                    <h3>Nom d'utilisateur</h3>
                    <p>{{User.username}}</p>
                </div>
                <div class="col-lg-3 my-auto">
                    <h3>E-mail</h3>
                    <p>{{User.email}}</p>
                </div>
                <div class="col-lg-3 my-auto py-2">
                    <button type="button" class="btn btn-info btn-lg rounded-pill py-2 px-5" data-bs-toggle="modal" v-bind:data-bs-target="'#Form_'+User._id">Modifier</button>
                </div>
                <div class="col-lg-3 my-auto py-2">
                    <button type="button" class="btn btn-danger btn-lg rounded-pill py-2 px-5" v-on:click="deleteUser()">supprimer</button>
                </div>
            </div>
        </div>
        <hr width="100%">
    </div>
</template>
<script>
    import serverRequest from '../Controller/serverRequest';
    export default{
        props:{User:Object},
        methods:{
            async deleteUser(){
                const isLastUser = new Promise ((resolve,reject)=>{
                    serverRequest.GetAllUsers().then(res=>{
                        if(res.length==1){
                            reject("Il faut au moins un utilisateur actif")
                        }
                        else{
                            resolve()
                        }
                    })
                })

                try {
                    await isLastUser
                    const user = {...this.User}
                    serverRequest.RemoveUser(user._id)
                    alert(`l'utilisateur ${user._id} a bien été supprimé`)
                    location.reload() 
                }
                catch(err) {
                    alert(err)
                }
            }

            
        }
    }
</script>