<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Nav.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="text-center" style="color:green">
    <NavBar/>
    <RouterView />
    <footer>
      <Footer />
    </footer>
  </div>
</template>
