<script setup>
  import FichePres from '../components/FichePres.vue'
</script>

<template>
  <div class="p-5">
      <h1> A propos de nous</h1>
      <img src="../assets/Photo2.png" class="imgBg img-fluid">
      <div class="container">
        <div class="row p-5">
            <div class="col">
              <FichePres :imgSrc="'../src/assets/pngegg.png'" :Name="'John Doe'" :Function="'Fonction dans la pharmacie'" :Summary="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet laoreet nulla. Sed in sem a mauris luctus imperdiet sed sit amet erat. Aenean justo erat, rutrum at nisl non, lacinia pharetra enim. Mauris non enim a nisi eleifend fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut bibendum lacus et erat ultricies dignissim. Vestibulum ullamcorper orci vitae ante maximus, non ultrices massa vulputate. Vestibulum tincidunt tincidunt imperdiet. Donec eget lectus in ante porta placerat vitae at nisi. Curabitur quis blandit nisi. Vestibulum nulla ante, condimentum et fringilla a, fringilla sed ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean id urna eu est interdum finibus. Fusce ultricies sodales metus, ut mollis tortor consequat et.'" />
            </div>
        </div>
        <div class="row p-5">
            <div class="col-sm-6">
              <FichePres :imgSrc="'../src/assets/pngegg.png'" :Name="'John Doe'" :Function="'Fonction dans la pharmacie'" :Summary="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet laoreet nulla. Sed in sem a mauris luctus imperdiet sed sit amet erat. Aenean justo erat, rutrum at nisl non, lacinia pharetra enim. Mauris non enim a nisi eleifend fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut bibendum lacus et erat ultricies dignissim. Vestibulum ullamcorper orci vitae ante maximus, non ultrices massa vulputate. Vestibulum tincidunt tincidunt imperdiet. Donec eget lectus in ante porta placerat vitae at nisi. Curabitur quis blandit nisi. Vestibulum nulla ante, condimentum et fringilla a, fringilla sed ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean id urna eu est interdum finibus. Fusce ultricies sodales metus, ut mollis tortor consequat et.'" />
            </div>
            <div class="col-sm-6">
              <FichePres :imgSrc="'../src/assets/pngegg.png'" :Name="'John Doe'" :Function="'Fonction dans la pharmacie'" :Summary="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet laoreet nulla. Sed in sem a mauris luctus imperdiet sed sit amet erat. Aenean justo erat, rutrum at nisl non, lacinia pharetra enim. Mauris non enim a nisi eleifend fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut bibendum lacus et erat ultricies dignissim. Vestibulum ullamcorper orci vitae ante maximus, non ultrices massa vulputate. Vestibulum tincidunt tincidunt imperdiet. Donec eget lectus in ante porta placerat vitae at nisi. Curabitur quis blandit nisi. Vestibulum nulla ante, condimentum et fringilla a, fringilla sed ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean id urna eu est interdum finibus. Fusce ultricies sodales metus, ut mollis tortor consequat et.'" />
            </div>
        </div>
      </div>
  </div>
</template>