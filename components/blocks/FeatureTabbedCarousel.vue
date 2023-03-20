<template>
  <div class="feature_tabbed_carousel">
    <div class="tab_header">
      <div class="container">
        <div class="title" v-html="data.title"></div>
        <div class="description" v-html="data.description"></div>
        <div class="tabs_header flex">
          <button
            v-for="(tab_title, i) in data.tabs"
            :key="i"
            v-html="tab_title.tab_title"
            class="tab"
            @click="(activeSlides = `tab_${i}`), toggleSlides"
            :class="activeSlides == `tab_${i}` ? 'active' : ''"
          ></button>
        </div>
      </div>
    </div>
    <div class="tab_body tab_body_slider">
      <div class="swiper-wrapper">
        <TransitionGroup name="fade-slides">
          <template v-for="(tab, i) in data.tabs" :key="i">
            <div
              v-for="(t, index) in tab.tab_images"
              class="swiper-slide"
              :data-slide="`tab_${i}`"
              v-if="activeSlides === null"
            >
              <div class="slide_image">
                <img :src="t.image" alt="" />
              </div>
              <div class="slide_image_data">
                <div class="logo" v-if="t.logo">
                  <img :src="t.logo" alt="" />
                </div>
                <div class="title" v-if="t.title" v-html="t.title"></div>
              </div>
            </div>

            <div
              v-for="(t, index) in tab.tab_images"
              class="swiper-slide"
              :data-slide="`tab_${i}`"
              v-else-if="activeSlides == `tab_${i}`"
            >
              <div class="slide_image">
                <img :src="t.image" alt="" />
              </div>
              <div class="slide_image_data">
                <div class="logo" v-if="t.logo">
                  <img :src="t.logo" alt="" />
                </div>
                <div class="title" v-if="t.title" v-html="t.title"></div>
              </div>
            </div>
          </template>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import Swiper from "swiper/bundle";
import "swiper/css";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const activeSlides = ref(null);

onMounted(() => {
  const cardSwiper = new Swiper(".tab_body_slider", {
    slidesPerView: 1.8,
    spaceBetween: 16,
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
        slidesPerView: 2.4,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3.8,
        spaceBetween: 16,
      },
    },
  });
  const toggleSlides = () => {
    cardSwiper.updateSize();
    cardSwiper.updateSlides();
    cardSwiper.updateProgress();
    cardSwiper.updateSlidesClasses();
    cardSwiper.slideTo(0);
    cardSwiper.scrollbar.updateSize();
  };
});
</script>
