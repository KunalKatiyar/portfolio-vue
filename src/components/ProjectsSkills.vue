<template>
<div>
  <h1 class="ml-4 text-2xl font-bold">Projects</h1>
  <div class="m-auto mt-8 w-3/4">
    <carousel-3d :controls-visible="true" :clickable="false" :width="600" :height="450" class="carousel">
      <slide v-for="(slide,i) in slides" v-bind:key="slide.id" :index="i"  class=" bg-white">
        <div>
          <h1 class="text-xs md:text-xl smallmobile:mb-2 text-center font-bold mb-2 md:mt-2 md:mb-4"><span class="rounded-full border p-1 px-3 bg-blue-200">{{ slide.name }}</span></h1>
          <img class="md:mt-1" v-bind:src="slide.img" alt="slide.name">
          <h6 class="text-center md:mt-4 md:mb-4"><span class="text-k md:text-base md:rounded-lg md:border md:p-1 md:px-2 md:bg-blue-200">{{ slide.title }}</span></h6>
          <a v-bind:href="slide.link"><h2 class="text-center md:mt-1"><span class="text-k md:text-base md:border-l-2 md:border-r-2 md:border-blue-500 md:px-1">{{ slide.link }}</span></h2></a>
          <h2></h2>
        </div>
      </slide>
    </carousel-3d>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 0,
          name: 'Synix',
          title: 'Synix: A no-flag nodeJs CLI to make the use of command-line easy and uniform',
          img: './assets/img/Synix.png',
          link: 'https://github.com/synixjs/synix'
        },
        {
          id: 1,
          name: 'PPERationalizer',
          title: 'Backend and Frontend part of PPE-Rationalizer Project. Made in Django and React',
          img: './assets/img/PPERationalizer.png',
          link: 'https://github.com/combatcovid19kgp/PPE_rationalizer_backend'
        },
        {
          id: 2,
          name: 'Chat-Box App',
          title: 'A ChatBox App for Android built using Kivy',
          img: './assets/img/ChatBox.png',
          link: 'https://github.com/KunalKatiyar/ChatBox-App'
        },
        {
          id: 3,
          name: 'Polling Votes Extractor',
          title: 'Project to Extract tables from PDFs and compile into CSVs',
          img: './assets/img/Polling.png',
          link: 'https://github.com/KunalKatiyar/Polling-Votes-Extractor'
        }
      ]
    };
  },
}
</script>

<style scoped>
.carousel{
  background-color: white;
}
</style>