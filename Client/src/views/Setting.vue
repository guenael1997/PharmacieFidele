<template>
    <div class="p-5 text-start">
        <div class="border border-5 border-success rounded rounded-5 my-2">
            <form class="p-3">
                <h2> Informations relatives au magasin </h2>
                <div>
                    <div class="p-2 col-lg-6">
                        <label>Adresse</label>
                        <input type="text" class="form-control" name="Adresse" id="Adresse">
                    </div>
                    <div class="p-2 col-lg-6">
                        <label>Numéro de téléphone</label>
                        <input type="text" class="form-control" name="Adresse" id="Adresse">
                    </div>
                </div>
                <div class="p-2 col-lg-8">
                    <h3> Heures d'ouverture du magasin</h3>
                    <ul>
                        <li class="p-2">
                            <h4>Lundi</h4>
                            De <input type="time" class="form-control inline" name="LundiOuverture" id="LundiOuverture"> à <input type="time" class="form-control" name="LundiFermeture" id="LundiFermeture">
                        </li>
                        <li class="p-2">
                            <h4>Mardi</h4>
                            De <input type="time" class="form-control inline" name="MardiOuverture" id="LundiOuverture"> à <input type="time" class="form-control" name="MardiFermeture" id="MardiFermeture">
                        </li>
                        <li class="p-2">
                            <h4>Mercredi</h4>
                            De <input type="time" class="form-control inline" name="MercediOuverture" id="LundiOuverture"> à <input type="time" class="form-control" name="MercediFermeture" id="MercediFermeture">
                        </li>
                        <li class="p-2">
                            <h4>Jeudi</h4>
                            De <input type="time" class="form-control inline" name="JeudiOuverture" id="JeudiOuverture"> à <input type="time" class="form-control" name="JeudiFermeture" id="JeudiFermeture">
                        </li>
                        <li class="p-2">
                            <h4>Vendredi</h4>
                            De <input type="time" class="form-control inline" name="VendrediOuverture" id="VendrediOuverture"> à <input type="time" class="form-control" name="VendrediFermeture" id="VendrediFermeture">
                        </li>
                        <li class="p-2">
                            <h4>Samedi</h4>
                            De <input type="time" class="form-control inline" name="SamediOuverture" id="SamediOuverture"> à <input type="time" class="form-control" name="SamediFermeture" id="SamediFermeture">
                        </li>
                        <li class="p-2">
                            <h4>Dimanche</h4>
                            De <input type="time" class="form-control inline" name="DimancheOuverture" id="DimancheOuverture"> à <input type="time" class="form-control" name="DimancheFermeture" id="DimancheFermeture">
                        </li>
                    </ul>
                </div>
                <button type="submit" class="btn btn-success text-end p-2 m-3">Modifier changements</button>
            </form>
        </div>
        <div class="border border-5 border-success rounded rounded-5 my-3">
            <form class="p-3">
                <h2>Personnes de contact</h2>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <label>Nom</label>
                            <input type="text" placeholder="Nom de la personne de contact" id="Name" class="form-control form-control-lg" name="Name">
                        </div>
                        <div class="col-lg-6">
                            <label>Prenom</label>
                            <input type="text" placeholder="Prenom de la personne de contact" id="Firstame" class="form-control form-control-lg" name="Firstname">
                        </div>
                        <div class="row">
                        <div class="col-lg-6">
                            <label>Adress E-mail</label>
                            <input type="text" placeholder="Nom de la personne de contact" id="Name" class="form-control form-control-lg" name="Name">
                        </div>
                        <div class="col-lg-6">
                            <label>Numéro de téléphone</label>
                            <input type="text" placeholder="Prenom de la personne de contact" id="Firstame" class="form-control form-control-lg" name="Firstname">
                        </div>
                    </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-success text-end p-2 m-3">Modifier changements</button>
            </form>
        </div>

        <a type="button" class="btn btn-success text-end p-2 m-3" href="/dashboard">Retour au dashboard</a>
    </div>
</template>