<template>
    <div class="flex mb-4 border-t-2 border-gray-500 mt-12">
        <div class="w-2/3 smallmobile:w-3/5 nice:w-1/2">
          <h2 class="mt-4 ml-2 nice:mt-4 font-bold">Navigation: </h2>
          <div class="text-f smallmobile:text-xs md:text-base flex mobile:ml-2 nice:ml-4 mobile:flex mt-4 nice:mt-8">
            <router-link class="ml-2 mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/">Home</router-link>
            <router-link class="mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/ProjectsSkills">Projects & Skills</router-link>
            <!-- <router-link class="mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/Blog">Blog</router-link> -->
            <router-link class="mr-1 smallmobile:mr-1 mobile:mr-2 md:ml-4 md:text-base" to="/Contact">Contact</router-link>
          </div>
        </div>
        <div class="w-1/3 smallmobile:w-2/5 nice:w-1/2 nice:justify-end nice:mt-4">
          <h2 class="mt-4 nice:mt-0 mr:4 font-bold">Follow me: </h2>
          <div class="flex-row mobile:flex mt-4 nice:mr-2 nice:mt-8 fa-lg">
            <i class="fab fa-facebook mobile:ml-4 nice:mr-16"></i>
            <i class="fab fa-github ml-2 mobile:ml-4 nice:mr-16"></i>
            <i class="fab fa-linkedin ml-2 mobile:ml-4 nice:mr-16"></i>
            <i class="fab fa-twitter ml-2 mobile:ml-4 nice:mr-16"></i>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-exact-active{
    @apply border-b-2;
    border-bottom: 3px solid red;
}
</style>