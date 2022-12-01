<script setup>
    import ArticlePanier from '../components/PannierArticle.vue'
</script>

<template>
    <form v-if="Commande">
        <div class="modal modal-xl fade" :id="'Form_'+Commande._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier la commande</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-4">
                                <label>Nom</label>
                                <input type="text" placeholder="Nom de la personne" id="Name" name="Name" class="form-control " v-model="this.Name">
                            </div>
                            <div class="col-lg-4">
                                <label>Prenom</label>
                                <input type="text" placeholder="Nom de la personne" id="FirstName" name="FirstName" class="form-control " v-model="this.FirstName">
                            </div>
                            <div class="col-lg-4">
                                <label>Numéro de téléphone</label>
                                <input type="text" placeholder="Article en reserve" id="Tel" name="Tel" class="form-control" v-model="this.PhoneNumber">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-12">
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#AchatList" aria-expanded="false" aria-controls="collapseExample">
                                    Voir la liste d'achats
                                </button>
                                <div class="collapse py-2" id="AchatList">
                                    <div class="card card-body">
                                        <ArticlePanier v-for="Article in Articles" :Carret="Article" :CommandeID="this.Commande._id" />
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-lg-6 my-auto">
                                                    <label>Article</label>
                                                    <div>{{this.SelectedArticle}}</div>
                                                    <select class="form-select" id="Etat" name="Etat" v-model="this.SelectedArticle">
                                                        <option v-for="Article in ListArticle">
                                                            <div>{{Article._id}}</div>|{{Article.Name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 my-auto">
                                                    <button type="button" class="btn btn-success btn-lg rounded-pill py-2 px-5 my-auto" v-on:click="addArticleInCommande()">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-plus-circle-fill my-auto" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                                        </svg>
                                                        Ajouter l'article
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Montant</label>
                                <div class="input-group">
                                    <input type="text" placeholder="Prix de l'article HTVA" id="PHTVA" name="PHTVA" class="form-control" readonly v-model="this.Total">
                                    <div class="input-group-append">
                                        <span class="input-group-text">€</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label>Etat de la commande</label>
                                <select v-if="IsReady" class="form-select" id="Etat" name="Etat" v-model="this.ReadySelector">
                                    <option value="1">Prête</option>
                                    <option value="2">En cours</option>
                                </select>
                                <select v-else class="form-select" id="Etat" name="Etat" v-model="this.ReadySelector">
                                    <option value="1">En cours</option>
                                    <option value="2">Prête</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-warning" v-on:click="ModifyCommande()">Modifier changements</button>
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
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier la commande</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="container-fluid">
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-4">
                                <label>Nom</label>
                                <input type="text" placeholder="Nom de la personne" id="Name" name="Name" class="form-control " v-model="this.Name">
                            </div>
                            <div class="col-lg-4">
                                <label>Prenom</label>
                                <input type="text" placeholder="Prénom de la personne" id="FirstName" name="FirstName" class="form-control " v-model="this.FirstName">
                            </div>
                            <div class="col-lg-4">
                                <label>Numéro de téléphone</label>
                                <input type="text" placeholder="Article en reserve" id="Tel" name="Tel" class="form-control" v-model="this.PhoneNumber">
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-12">
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#AchatList" aria-expanded="false" aria-controls="collapseExample">
                                    Voir la liste d'achats
                                </button>
                                <div class="collapse py-2" id="AchatList">
                                    <div class="card card-body">
                                        <ArticlePanier v-for="Article in Articles" :Carret="Article" :CommandeID="'NewCommande'" :IsNewForm="true" />
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-lg-6 my-auto">
                                                    <label>Article</label>
                                                    <div>{{this.SelectedArticle}}</div>
                                                    <select class="form-select" id="Etat" name="Etat" v-model="this.SelectedArticle">
                                                        <option v-for="Article in ListArticle">
                                                            <div>{{Article._id}}</div>|{{Article.Name}}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 my-auto">
                                                    <button type="button" class="btn btn-success btn-lg rounded-pill py-2 px-5 my-auto" v-on:click="addArticleInCommande()">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-plus-circle-fill my-auto" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                                        </svg>
                                                        Ajouter l'article
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-md-center py-4">
                            <div class="col-lg-6">
                                <label>Montant</label>
                                <input type="text" placeholder="Prix de l'article HTVA" id="PHTVA" name="PHTVA" class="form-control" readonly v-model="this.Total">
                            </div>
                            <div class="col-lg-6">
                                <label>Etat de la commande</label>
                                <select v-if="IsReady" class="form-select" id="Etat" name="Etat" v-model="this.ReadySelector">
                                    <option value="1">Prête</option>
                                    <option value="2">En cours</option>
                                </select>
                                <select v-else class="form-select" id="Etat" name="Etat" v-model="this.ReadySelector">
                                    <option value="1">En cours</option>
                                    <option value="2">Prête</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" v-on:click="addCommande()">Ajouter la commande</button>
            </div>
            </div>
        </div>
        </div>
    </form>
</template>

<script>
    import serverRequest from '../Controller/serverRequest';
    import session from '../Controller/session';
    export default {
        props:{Commande:Object},
        data(){
            return {
                Articles:[],
                Name:"",
                FirstName:"",
                PhoneNumber:"",
                IsReady:false,
                ListArticle:{},
                SelectedArticle:"",
                ReadySelector:"",
                Total:0

            }
        },
        methods:{
            SetCommande(){
                var commande = {...this.$props.Commande}
                var articles = {...commande.Articles}
                
                session.SetSession(Object.values(articles),commande._id)
                Object.entries(articles).forEach(e=>{
                    this.Articles.push({...e});
                })

                this.Name = commande.Name
                this.FirstName = commande.FirstName
                this.PhoneNumber = commande.PhoneNumber
                if(commande.IsReady!=null){
                    this.IsReady=commande.IsReady
                }

                serverRequest.GetAllArticle().then(res=>{
                    this.ListArticle=res
                })

                if(this.IsReady){
                    this.ReadySelector="Prête"
                }
                else{
                    this.ReadySelector="En cours"
                }

                var total = 0

                session.GetSession(commande._id).forEach(e=>{
                    total+=(e.number*e.price)
                })

                this.Total=total
            },
            addArticleInCommande(){
                if(this.SelectedArticle!=null)
                {
                    if(this.Commande)
                    {
                        serverRequest.GetArticle(this.SelectedArticle.split("|")[0]).then(res=>{
                            const NewArticle = {
                                ArticleID:res._id,
                                number:1,
                                price:res.PTVAC
                            }
                            var NewCommande= {...this.Commande}
                            
                            var isAlreadyThere = false
                            NewCommande.Articles.forEach(e=>{
                                e={...e}
                                if(e.ArticleID==NewArticle.ArticleID){
                                    e.number++
                                    isAlreadyThere=true
                                }
                            })

                            if(!isAlreadyThere){
                                NewCommande.Articles.push(NewArticle)
                                serverRequest.ModifyCommande(NewCommande._id,NewCommande)
                                this.Articles=new Array()
                                this.SetCommande()
                            }
                            else{
                                alert("L'article se trouve déjà dans la liste d'achats")
                            }
                        })
                    }
                    else
                    {
                        serverRequest.GetArticle(this.SelectedArticle.split("|")[0]).then(res=>{
                            const NewArticle = {
                                ArticleID:res._id,
                                number:1,
                                price:res.PTVAC
                            }

                            var Articles = session.GetNewCommande()
                            var isAlreadyThere = false

                            Articles.forEach(e=>{
                                if(e.ArticleID==NewArticle.ArticleID){
                                    isAlreadyThere=true
                                }
                            })

                            if(!isAlreadyThere){
                                session.NewCommandeAdd(NewArticle)
                                this.setNewForm()
                            }
                            else{
                                alert("L'article se trouve déjà dans la liste d'achats")
                            }
                        })
                    }
                        
                    
                }
                else{
                    alert("veuillez choisir un article")
                }
            },
            ModifyCommande(){
                var commande ={...this.Commande}
                if(this.ReadySelector=="Prête"){
                    this.IsReady=true
                }
                else if(this.ReadySelector=="En cours"){
                    this.IsReady=false
                }
                else{
                    this.IsReady=false
                }
                const NewCommande = {
                    Name:this.Name,
                    FirstName:this.FirstName,
                    PhoneNumber:this.PhoneNumber,
                    Articles:session.GetCommandeSession(commande._id),
                    IsReady:this.IsReady
                }
                
                session.ModifyCommande(NewCommande,commande._id)
            },
            setNewForm(){
                session.SetSession()
                serverRequest.GetAllArticle().then(res=>{
                    this.ListArticle=res
                })

                this.Articles = session.GetNewCommande()

                var total = 0
                session.GetNewCommande().forEach(e=>{
                        total+=(e.number*e.price)
                })

                this.Total = total

        


            },
            addCommande(){
                if(this.ReadySelector=="Prête"){
                    this.IsReady=true
                }
                else if(this.ReadySelector=="En cours"){
                    this.IsReady=false
                }
                else{
                    this.IsReady=false
                }
                const NewCommande = {
                    Name:this.Name,
                    FirstName:this.FirstName,
                    PhoneNumber:this.PhoneNumber,
                    Articles:session.GetNewCommande(),
                    IsReady:this.IsReady
                }
                serverRequest.AddNewCommande(NewCommande);
                alert("La commande a été ajouté avec succès")
                location.reload()
            }
        },
        mounted(){
            if(this.Commande){
                this.SetCommande()
            }
            else{
                this.setNewForm()
            }
            
        }
    }
</script>