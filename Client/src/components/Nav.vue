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
          <a class="nav-link" aria-current="page" href="login">S'identifier</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="pannier">Pannier</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>