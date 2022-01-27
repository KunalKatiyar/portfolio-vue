<template>
<div>
  <h1 class="ml-4 text-2xl font-bold">Projects</h1>
  <div class="m-auto mt-8 w-3/4">
    <carousel-3d :controls-visible="true" :clickable="false" :width="600" :height="350" class="carousel bg-white" @after-slide-change="onAfterSlideChange">
      <slide v-for="(slide,i) in slides" v-bind:key="slide.id" :index="i" class = "bg-white shadow-md border-solid border-gray-700">
        <a v-bind:href="slide.link">
          <div class="bg-white w-full h-full" >
            <img class="md:mt-1" v-bind:src="slide.img" alt="slide.name">
            <h1 class="text-xs md:text-xl smallmobile:mb-2 text-center font-bold mb-2 md:mt-6 md:mb-4"><span class="border-solid border-blue-500 p-1 px-3 bg-blue-300 border b shadow-md">{{ slide.name }}</span></h1>
            
            <!-- <h6 class="text-center sm:mt-4 sm:mb-2 md:mt-4 md:mb-4"><span class="text-k mobile:text-base md:rounded-lg md:border mobile:p-1 mobile:px-2 md:bg-blue-200">{{ slide.title }}</span></h6>
            <a v-bind:href="slide.link"><h2 class="text-center md:mt-1"><span class="text-k mobile:text-base md:border-l-2 md:border-r-2 md:border-blue-500 mobile:px-1">{{ slide.link }}</span></h2></a> -->
            
          </div>
        </a>
      </slide>
    </carousel-3d>
  </div>
  <div class="max-w-2xl justify-center theBox m-auto smallmobile:max-w-xs mobile:max-w-2xl rounded overflow-hidden shadow-lg hover:shadow-2xl border-gray-400 hover:border-gray-800 border-2 bg-gray-100">
    <div class="px-3 py-2 sm:px-6 sm:py-4 justify-center">
      <div class="font-bold m-auto text-xl mb-2 text-center">
        {{ slides[indexValue].name }}
      </div>
      <p class="text-gray-700 text-base text-center">
        {{ slides[indexValue].title }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      indexValue: 0,
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
  methods: {
    onAfterSlideChange(index) {
      this.indexValue = index;
    },
  }
}
</script>

<style scoped>
.carousel{
  background-color: white;
}

.theBox{
  min-width: 50%;
}
</style>