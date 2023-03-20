<template>
  <div class="map_club_rail">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="club in data">
        <MapClubCard
          :data="club"
          @show-marker="$emit('set-google-marker', $event.cardId)"
        />
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
  const swiper = new Swiper(".map_club_rail", {
    slidesPerView: 1.07,
    spaceBetween: 8,
    freeMode: true,
  });
});
</script>
