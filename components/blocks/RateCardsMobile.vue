<template>
  <div class="rate_cards_list rate_cards_slider">
    <div class="swiper-wrapper">
      <div
        class="rate_card h-100 swiper-slide"
        v-for="Cards in data"
        :style="`background:linear-gradient(180deg, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 1) 0%, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 1) 50%, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 0.15) 100%);`"
      >
        <div class="fade_overlay"></div>
        <div class="card_content">
          <img :src="Cards.icon.url" />
          <h6 class="title" v-html="Cards.title"></h6>
          <div class="description" v-html="Cards.description"></div>
          <div class="rate">
            Max rate:<br />
            <span>R{{ Cards.rate }}</span>
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
  const swiper = new Swiper(".rate_cards_slider", {
    slidesPerView: 1.3,
    spaceBetween: 18,
    breakpoints: {
      640: {
        slidesPerView: 3.4,
        spaceBetween: 16,
      },
    },
  });
});
</script>
