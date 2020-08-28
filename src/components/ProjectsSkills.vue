<template>
<div>
  <h1 class="ml-4 text-2xl font-bold">Projects</h1>
  <div class="m-auto mt-8 w-3/4">
    <carousel-3d :controls-visible="true" :clickable="false" :width="600" :height="450" class="carousel">
      <slide v-for="(slide,i) in slides" v-bind:key="slide.id" :index="i"  class=" bg-white">
        <div>
          <img class="mt-2" v-bind:src="slide.img" alt="Synix">
          <h1 class="text-center mt-4">{{ slide.title }}</h1>
          <h2 class="text-center mt-4">{{ slide.link }}</h2>
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
          title: 'Synix: A no-flag nodeJs CLI to make the use of command-line easy and uniform',
          img: './assets/img/Synix.png',
          link: 'https://github.com/synixjs/synix'
        },
        {
          id: 1,
          // title: ,
          // img: ,
          // link: 
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