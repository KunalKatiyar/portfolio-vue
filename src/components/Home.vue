<template>
<div>
  <div class="">
    <img class="w-64 h-64 m-auto mt-16 border-4 border-gray-300 shadow-md hover:shadow-xl" src="../assets/Kunal.jpg" alt="Kunal">
  </div>
  <div class="flex-row lg:flex">
    <div class="max-w-supersm smallmobile:max-w-xs mobile:max-w-sm rounded overflow-hidden shadow-lg m-auto hover:shadow-2xl mt-16 border-gray-400 hover:border-gray-800 border-2 bg-gray-100">
      <div class="px-3 py-2 sm:px-6 sm:py-4">
        <div class="font-bold m-auto text-xl mb-2">
          About Me
        </div>
        <p class="text-gray-700 text-base">
          Hello, my name is Kunal Katiyar, a third year undergraduate student of IIT Kharagpur, enrolled in its course of Chemical Enginnering. 
        </p>
      </div>
    </div>
    <div class="max-w-supersm smallmobile:max-w-xs mobile:max-w-sm rounded overflow-hidden shadow-lg m-auto hover:shadow-2xl mt-16 border-gray-400 hover:border-gray-800 border-2 bg-gray-100">
      <div class="px-3 py-2 sm:px-6 sm:py-4">
        <div class="font-bold m-auto text-xl mb-2">
          Interests
        </div>
        <p class="text-gray-700 text-base">
          My interests include Programming, both Open-Source as well as Competitive, Gaming and Reading Books on Philosophy and Psychology.
        </p>
      </div>
    </div>
    <div class="max-w-supersm smallmobile:max-w-xs mobile:max-w-sm rounded overflow-hidden shadow-lg m-auto hover:shadow-2xl mt-16 border-gray-400 hover:border-gray-800 border-2 bg-gray-100">
      <div class="px-3 py-2 sm:px-6 sm:py-4">
        <div class="font-bold m-auto text-xl mb-2">
          About this Website
        </div>
        <p class="text-gray-700 text-base">
          This Website is created using Vue 3 as the frontend, hosted on Firebase and uses TailwindCSS as the Responsive and CSS Framework.
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
  border-radius: 50%;
}
</style>