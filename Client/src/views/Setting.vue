<template>
    <div class="p-5 text-start">
        <div class="border border-5 border-success rounded rounded-5 my-2">
            <form class="p-3">
                <h2> Informations relatives au magasin </h2>
                <div>
                    <div class="p-2 col-lg-6">
                        <label>Adresse</label>
                        <input type="text" class="form-control" v-model="this.Adresse">
                    </div>
                    <div class="p-2 col-lg-6">
                        <label>Numéro de téléphone</label>
                        <input type="text" class="form-control" v-model="this.PhoneNumber">
                    </div>
                </div>
                <div class="p-2 col-lg-8">
                    <h3> Heures d'ouverture du magasin</h3>
                    <ul>
                        <li class="p-2" v-if="this.Horaire[0]">
                            <h4>Lundi</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[0].start"> à <input type="time" class="form-control" v-model="this.Horaire[0].end" >
                        </li>
                        <li class="p-2" v-if="this.Horaire[1]">
                            <h4>Mardi</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[1].start"> à <input type="time" class="form-control" v-model="this.Horaire[1].end" >
                        </li>
                        <li class="p-2" v-if="this.Horaire[2]">
                            <h4>Mercredi</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[2].start"> à <input type="time" class="form-control" v-model="this.Horaire[2].end" >
                        </li>
                        <li class="p-2" v-if="this.Horaire[3]">
                            <h4>Jeudi</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[3].start"> à <input type="time" class="form-control" v-model="this.Horaire[3].end" >
                        </li>
                        <li class="p-2" v-if="this.Horaire[4]">
                            <h4>Vendredi</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[4].start"> à <input type="time" class="form-control" v-model="this.Horaire[4].end" >
                        </li>
                        <li class="p-2" v-if="this.Horaire[5]">
                            <h4>Samedi</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[5].start"> à <input type="time" class="form-control" v-model="this.Horaire[5].end" >
                        </li>
                        <li class="p-2" v-if="this.Horaire[6]">
                            <h4>Dimanche</h4>
                            De <input type="time" class="form-control inline" v-model="this.Horaire[6].start"> à <input type="time" class="form-control" v-model="this.Horaire[6].end" >
                        </li>
                    </ul>
                </div>
                <button type="submit" class="btn btn-success text-end p-2 m-3">Modifier changements</button>
            </form>
        </div>
        <div class="border border-5 border-success rounded rounded-5 my-3" v-if="this.Contact[0]">
            <form class="p-3">
                <h2>Personnes de contact</h2>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <label>Nom</label>
                            <input type="text" placeholder="Nom de la personne de contact" id="Name" class="form-control form-control-lg" name="Name" v-model="this.Contact[0].Name">
                        </div>
                        <div class="col-lg-6">
                            <label>Prenom</label>
                            <input type="text" placeholder="Prenom de la personne de contact" id="Firstame" class="form-control form-control-lg" name="Firstname" v-model="this.Contact[0].FirstName">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <label>Adress E-mail</label>
                            <input type="text" placeholder="Nom de la personne de contact" id="Name" class="form-control form-control-lg" name="Name" v-model="this.Contact[0].Mail">
                        </div>
                        <div class="col-lg-6">
                            <label>Numéro de téléphone</label>
                            <input type="text" placeholder="Prenom de la personne de contact" id="Firstame" class="form-control form-control-lg" name="Firstname" v-model="this.Contact[0].PhoneNumber">
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-success text-end p-2 m-3" v-on:click="ChangeSettings()">Modifier changements</button>
            </form>
        </div>

        <a type="button" class="btn btn-success text-end p-2 m-3" href="/dashboard">Retour au dashboard</a>
    </div>
</template>

<script>
import serverRequest from '../Controller/serverRequest';
    export default {
        data(){
            return {
                Adresse:"",
                PhoneNumber:"",
                Horaire:[],
                Contact:[]
            }

        },
        methods:{
            SetSettings(){
                serverRequest.GetSettings().then(res=>{
                    this.Adresse=res.Adresse
                    this.PhoneNumber=res.PhoneNumber
                    this.Horaire=res.Horaire,
                    this.Contact=res.Contact
                })
            },
            async ChangeSettings(){
                const isEmpty = (Entry,Value)=>{
                    return new Promise((resolve,reject)=>{
                        if(Value==null|Value==""){
                            alert("Veuillez remplir le champs suivant : " + Entry)
                            reject()
                        }
                        else{
                            resolve()
                        }
                    })
                }
                
                const IsCorrectMail = (Value)=>{
                    return new Promise((resolve,reject)=>{
                        const regex = /.*@.*\..*/
                        if(regex.test(Value)){
                            resolve()
                        }
                        else{
                            alert("Veuillez rentrer une Adresse mail Valide")
                            reject()
                        }
                    })
                }

                const IsCorrectPhoneNumber = (Value)=>{
                    return new Promise((resolve,reject)=>{
                        const regex = /\+\d{2,}\d{9,}/
                        if(regex.test(Value)){
                            resolve()
                        }
                        else{
                            alert("Veuillez rentrer un numéro de téléphone valide")
                            reject()
                        }
                    })
                }

                const IsCorrectAdresse = (Value)=>{
                    return new Promise((resolve,reject)=>{
                        const regex = /.*,\d*,.*/
                        if(regex.test(Value)){
                            resolve()
                        }
                        else{
                            alert("Veuillez rentrer une adresse valide")
                            reject()
                        }
                    })
                }

                const VerifySchedule = (Schedule)=>{
                    return new Promise((resolve,reject)=>{
                        var isEmpty = false
                        Schedule.forEach(e=>{
                            if(e.start==null|e.start==""|e.end==null|e.end==""){
                                console.log(e)
                                isEmpty = true
                            }
                        })
                        if(isEmpty){
                            alert("les horaire de un ou plusieurs jours ne sont pas défini")
                            reject()
                        }
                        else{
                            resolve()
                        }
                    })
                }

                
                try {
                        await isEmpty("Adresse",this.Adresse)
                        await isEmpty("Numéro de téléphone",this.PhoneNumber)
                        await VerifySchedule(this.Horaire)
                        await isEmpty("Nom de la personne de contact",this.Contact[0].Name)
                        await isEmpty("Prénom de la personne de contact",this.Contact[0].FirstName)
                        await isEmpty("Adresse mail de la personne de contact",this.Contact[0].Mail)
                        await isEmpty("Numéro de téléphone de la personne de contact",this.Contact[0].PhoneNumber)

                        await IsCorrectPhoneNumber(this.PhoneNumber)
                        await IsCorrectPhoneNumber(this.Contact[0].PhoneNumber)

                        await IsCorrectAdresse(this.Adresse)

                        await IsCorrectMail(this.Contact[0].Mail)

                        var RawHoraire = new Array()

                        var Horaire = [...this.Horaire]

                        Horaire.forEach(e=>{
                            RawHoraire.push({...e})
                        })

                        

                        const NewSettings = {
                            Adresse:this.Adresse,
                            PhoneNumber:this.PhoneNumber,
                            Horaire:RawHoraire,
                            Contact:[{...this.Contact[0]}]
                        }

                        serverRequest.SetSettings(NewSettings).then(()=>{
                            alert("Les changements ont été enregistré avec succès")
                            location.reload()
                        })
                        
                    }
                    catch {
                        alert("erreur lors de l'enregistrement")
                    }
                
            },
        },
        mounted(){
            this.SetSettings()
        }
    }
</script>