<template>
        <TheHeader tittle="Remember Me"></TheHeader>
        <TheResource></TheResource>
</template>b
<script>
     import TheHeader from './components/layouts/TheHeader.vue'
     import TheResource from './components/learning-resources/TheResource.vue'

    export default {
        name:"App",
        //register the components
        components:{
            TheHeader,
            TheResource

        },
       
    }
</script>