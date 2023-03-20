<template>

  <div class="info_card_holder">

    <div class="section_title" v-if="data.title">
      <h2 v-html="data.title"></h2>
    </div>

    <div class="container">

      <div class="slider_container">

        <div class="swiper info_card_slider">

          <div class="swiper-wrapper">

            <div class="swiper-slide" v-for="card in data.cards">

              <div class="info_card">

                <div class="title" v-if="card.card_title" v-html="card.card_title"></div>
                <div class="content" v-if="card.card_content" v-html="card.card_content"></div>

              </div>

            </div>

          </div>

        </div>

        <div class="slide_pagination" >

          <div class="scrollbar" v-if="data.cards.length >= 2 && $device.isMobile">
            <div class="facilities_caro_progress"></div>
          </div>

          <div class="arrows">
            <div class="background_caro_button info_card_caro_prev">
              <IconSwiperPrev></IconSwiperPrev>
            </div>
            <div class="background_caro_button info_card_caro_next">
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
const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const swiper = new Swiper(".info_card_slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".facilities_caro_progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".info_card_caro_next",
      prevEl: ".info_card_caro_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });
});
</script>

