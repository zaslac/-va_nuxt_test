<template>
  <div class="background_card_columns_mobile">
    <div class="background_cards_slider">
      <div class="swiper-wrapper">
        <div v-for="(cards, key) in data" class="swiper-slide">
          <div class="card_image">
            <nuxt-img
              format="webp"
              src="/img/shims/background_card_column_mobile_shim.png"
            />

            <div
              class="slide_image mobile"
              :style="`background-image:url(${cards.image_copy.url})`"
            ></div>
          </div>
          <div class="slide_text_wrapper">
            <div class="title" v-html="cards.title"></div>
            <div class="content" v-html="cards.content"></div>
            <Button :data="cards.buttons" />
          </div>
        </div>
      </div>

      <div class="slide_pagination">
        <div class="scrollbar">
          <div class="caro_progress"></div>
        </div>

        <div class="arrows">
          <div class="caro_button caro_prev">
            <IconSwiperPrev></IconSwiperPrev>
          </div>
          <div class="caro_button caro_next">
            <IconSwiperNext></IconSwiperNext>
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
  const swiper = new Swiper(".background_cards_slider", {
    slidesPerView: 1.05,
    spaceBetween: 16,
    pagination: {
      el: ".caro_progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".caro_next",
      prevEl: ".caro_prev",
    },
  });
});
</script>
