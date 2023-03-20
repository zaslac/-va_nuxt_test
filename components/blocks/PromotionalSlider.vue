<template>
  <div class="promotional_slider">
    <div class="container">
      <div class="promotional_slider_wrapper_main">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in data.promotional_slider">
            <div class="slide_inner">
              <div class="slide_image_wrapper">
                <div
                  class="slide_image mobile"
                  v-if="$device.isMobile"
                  :style="`background-image:url(${slide.mobile_image})`"
                >
                  <nuxt-img
                    format="webp"
                    src="/img/shims/promo-slide-mobile-shim.png"
                  />
                </div>
                <div
                  class="slide_image mobile"
                  v-if="!$device.isMobile"
                  :style="`background-image:url(${slide.desktop_image})`"
                >
                  <nuxt-img
                    format="webp"
                    src="/img/shims/promo-slide-desktop-shim.png"
                  />
                </div>
              </div>

              <div class="slide_body_wrapper">
                <div class="slide_body_content">
                  <div class="title" v-html="slide.title"></div>
                  <div class="desc" v-html="slide.description"></div>
                  <div class="btn_group">
                    <NuxtLink
                      :to="`${slide.button.url}`"
                      class="btn btn_transparent_white_outline btn_white_text"
                      >{{ slide.button.title }}</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-progress-bar"></div>
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
  const swiper = new Swiper(".promotional_slider_wrapper_main", {
    slidesPerView: 1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 750,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",

      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '"><div class="bull_progress"></div><div class="bull_title">' +
          props.data.promotional_slider[index].title +
          "</div></div>"
        );
      },
    },
  });
});
</script>
