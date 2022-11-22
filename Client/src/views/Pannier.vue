<script setup>
    import ArticlePanier from '../components/PannierArticle.vue'
    import FormPanier from '../components/CommandForm.vue'
    import Message from '../components/Message.vue'
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <ArticlePanier :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" />
                    <ArticlePanier :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" />
                    <ArticlePanier :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" />
                    <ArticlePanier :Name="'Nurofen Flash 400 mg Ibuprofène 12 comprimés Pelliculés'" :Price="13" />
                </div>
                <div class="col-sm-4">
                    <FormPanier/>
                </div>
            </div>
        </div>
        <Message/>
    </div>
</template>