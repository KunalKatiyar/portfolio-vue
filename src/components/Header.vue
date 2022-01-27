<template>
<div>
    <nav class="flex mb-4 pb-3 border-b-2 border-gray-500">
        <div class="w-1/6 nice:w-1/2 ml-3 mt-3 md:ml-2 md:mt-2">
            <img class="w-12 h-12" src="../assets/KK.jpeg" alt="KK-Logo">
        </div>
        <div class="flex justify-end w-5/6 nice:w-1/2 mt-4 text-sm md:text-xl font-bold text-gray-700">
            <router-link class="px-2 sm:px-4" to="/">Home</router-link>
            <router-link class="px-2 sm:px-4" to="/ProjectsSkills">Projects</router-link>
            <!-- <router-link class="px-2 sm:px-4" to="/Blog">Blog</router-link> -->
            <router-link class="px-2 sm:px-4" to="/Contact">Contact</router-link>
        </div>
    </nav> 
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-exact-active{
    @apply border-b-2;
    border-bottom: 3px solid red;
}
</style>