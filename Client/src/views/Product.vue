<script setup>
    import ProductSingle from '../components/ProductFiche.vue'
    import FicheModal from '../components/FicheArticle.vue'
</script>

<template>
    <div class="p-5">
        <div class="container text-center">
            <div class="row row-cols-1">
                <div class="col-sm-3 mt-3 bg-success text-start p-4 rounded" style="color:white ;"  >
                    <div>
                        <h2>Filter</h2>
                        <hr width="70%" size="10" color="white">
                    </div>
                    <div>
                        <h3>Marque</h3>
                        <ul>
                            <li>Nuxe</li>
                            <li>Nutrilon</li>
                            <li>Baxter</li>
                            <li>Dermalex</li>
                            <li>Tena</li>
                        </ul>
                        <hr width="70%" size="10" color="white">
                    </div>
                    <div>
                        <h3>Prix</h3>
                        <ul>
                            <li> Moins de 5€</li>
                            <li> 5-10 €</li>
                            <li> 10-20 €</li>
                            <li> 20-50 €</li>
                            <li> Plus de 50 €</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13.18" :IsInStock="false" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="false" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
                <div class="col-sm-3 mt-3">
                    <ProductSingle :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" :IsInStock="true" />
                </div>
            </div>
        </div>
        <FicheModal/>
    </div>
</template>

