<template>

  <div class="instructor_carousel_holder">

    <div class="container">

      <div class="instructor_carousel">

        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="slide in Instructors">

            <div class="instructor_slide" :style="`background-image:url(${slide.acf.image})`">

              <div class="instructor_info">

                <div class="overlay"></div>

                <div class="content">
                  <div class="name" v-if="slide.title.rendered" v-html="slide.title.rendered"></div>
                  <div class="type" v-if="slide.acf.type" v-html="slide.acf.type"></div>
                </div>

              </div>

            </div>

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
const { isMobile } = useDevice();
const runTimeConfig = useRuntimeConfig();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const {
  data: Instructors,
  error,
  refresh,
  pending,
} = await useAsyncData("Instructors", () => {
  return $fetch(`${runTimeConfig.public.baseWp}/instructors/`);
});

onMounted(() => {
  const InstructorSwiper = new Swiper(".instructor_carousel", {
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    spaceBetween: 60,
    loop:true,
    loopAdditionalSlides: 30,
    speed: 750,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="26" height="26" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="3"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="8" stroke-width="3"></circle></svg></span>';
      },
    },
  });
});

</script>