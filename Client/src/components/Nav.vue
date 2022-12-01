<template>
<nav class="navbar navbar-expand-lg bg-light fs-4">
  <div class="container-fluid">
    <img class="navbar-brand img-fluid" src="../assets/Logo Pharmacie Fidèle 2.png" style="height:100px">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Acceuil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Produits</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">A propos de nous</a>
        </li>
        <li class="nav-item" v-if="IsLogged">
          <a class="nav-link" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item" v-if="IsLogged">
          <div class="nav-link" aria-current="page" v-on:click="logOut()" style="cursor:pointer">Se déconnecter</div>
        </li>
        <li class="nav-item" v-else>
          <a class="nav-link" aria-current="page" href="login">S'identifier</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="pannier">Pannier</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  import session from '../Controller/session';
  export default{
    data(){
      return{
        IsLogged:false
      }
    },
    methods:{
      isLogged(){
        session.IsAlreadyConnected().then(res=>{
          console.log(res)
          this.IsLogged=res
        })
      },
      logOut(){
        console.log("click")
        session.logOut()
      }
    },
    mounted(){
      this.isLogged()
    }
  }
</script>