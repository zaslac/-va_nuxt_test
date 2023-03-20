<template>

 <div :class="'club_slider_holder ' + data.bottom_margin ">

  <div class="container">

     <div class="club_card_slider">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(club_card_slide, fd) in data.club_card_slider" :key="fd">
           <div class="slide_inner">
             <div class="slide_image">
               <div class="tag" :style="`background-color:rgb(${club_card_slide.card_colour.red},${club_card_slide.card_colour.green},${club_card_slide.card_colour.blue})`" v-if="club_card_slide.club_card_tag" v-html="club_card_slide.club_card_tag"></div>
               <nuxt-img
                   format="webp"
                   :src="club_card_slide.image.url"
                   loading="lazy"
                   v-if="club_card_slide?.image.url"
               />
               <div class="overlay"></div>
             </div>
           </div>
         </div>
       </div>


       <div class="slide_pagination">
         <div class="scrollbar">
           <div class="facilities_caro_progress"></div>
         </div>

         <div class="arrows">
           <div class="facilities_caro_button facilities_caro_prev">
             <IconSwiperPrev></IconSwiperPrev>
           </div>
           <div class="facilities_caro_button facilities_caro_next">
             <IconSwiperNext></IconSwiperNext>
           </div>
         </div>
       </div>

     </div>

  </div>

 </div>

</template>


<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const ClubSlider = new Swiper(".club_card_slider", {
    slidesPerView: 1,
    spaceBetween: 18,
    pagination: {
      el: ".facilities_caro_progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".facilities_caro_next",
      prevEl: ".facilities_caro_prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
});

</script>
