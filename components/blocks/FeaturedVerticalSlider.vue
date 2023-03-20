<template>
<!--  <div class="container" v-on:mouseenter="disableScrolling"  v-on:mouseleave="enableScrolling">-->
<!--    <div class="box" id="carousel">-->
<!--      <ul id="slider-list">-->
<!--        <li v-for="(Slider,key) in data.vertical_slider" :data-key="key+1" :style="`background-image: url(${Slider.image});`" :class="{ 'active': key === 0 }">-->
<!--          <div class="content">-->
<!--            <h4 v-if="Slider.title" v-html="Slider.title" > </h4>-->
<!--            <div v-if="Slider.content" v-html="Slider.content" > </div>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->


<!--  <div class="container">-->

<!--    <div class="vertical_carousel">-->

<!--      <div class="swiper-wrapper">-->

<!--        <div class="swiper-slide" v-for="(Slider,key) in data.vertical_slider" :data-key="key+1" >-->
<!--            <div class="content" :style="`background-image: url(${Slider.image});`">-->
<!--              <h4 v-if="Slider.title" v-html="Slider.title" > </h4>-->
<!--              <div v-if="Slider.content" v-html="Slider.content" > </div>-->
<!--            </div>-->
<!--        </div>-->

<!--      </div>-->

<!--    </div>-->

<!--  </div>-->

  <div class="container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(Slider,key) in data.vertical_slider" :data-key="key+1" :style="`background-image: url(${Slider.image});`" class="swiper-slide">
          <div class="content">
            <h4 v-if="Slider.title" v-html="Slider.title" > </h4>
            <div v-if="Slider.content" v-html="Slider.content" > </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
const route = useRoute();
const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {

  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    touchReleaseOnEdges: true,
  });


});

</script>
