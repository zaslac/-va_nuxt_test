<template>
  <div class="container">
    <div :class="'testimonials_block ' + data.bottom_margin ">
      <div class="section_title">
        <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
        <h2 v-if="data.title" v-html="data.title"></h2>
      </div>

      <RedQuote/>

      <div class="testimonial_slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="testimonial in rawTestimonials.testimonials.value" >
            <div class="testimonial-content" v-html="testimonial.content.rendered"></div>
            <div class="testimonial-name" v-html="testimonial.title.rendered"></div>
            <div class="testimonial-role" v-html="testimonial.acf.testimonial_role"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
import RedQuote from "../icon/RedQuote";
const rawTestimonials = await useTestimonials();

const { isMobile } = useDevice();



const f = rawTestimonials.testimonials.value;
const full_testimonials_list = ref([f]);
// full_testimonials_list.push(f);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
onMounted(() => {
  const TestimonialSlider = new Swiper(".testimonial_slider", {
    slidesPerView: 1,
    loop: true,
    speed: 750,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="16" height="16" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="3"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="8" stroke-width="3"></circle></svg></span>';
      },
    },
  });
});
</script>
