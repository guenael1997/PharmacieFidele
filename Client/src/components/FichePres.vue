<template>
    <div>
        <img :src=imgSrc style="width:20%">
        <h2>{{Name}}</h2>
        <h3>{{Function}}</h3>
        <p>{{Summary}}</p>
    </div>
</template>

<script>
    export default {
        props:{ 
                imgSrc:String,
                Name:String,
                Function:String,
                Summary:String
            }
    }
</script>