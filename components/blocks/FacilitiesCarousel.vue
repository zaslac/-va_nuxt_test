<template>
  <div class="club_details_facilities" v-if="!pending">
    <div class="container">
      <h5 v-html="data.small_title"></h5>
      <h2 v-html="data.big_title"></h2>

      <div class="btn_group" v-if="data?.virtual_tour_link">
        <NuxtLink
          :to="`${data?.virtual_tour_link}`"
          class="btn btn_white_text btn_red_outline"
          >Take a virtual tour of the club</NuxtLink
        >
      </div>

      <div class="facilities_slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(fac, fd) in facilities" :key="fd">
            <div class="slide_inner">
              <div class="slide_image">
                <nuxt-img
                  format="webp"
                  :src="fac._embedded['wp:featuredmedia']['0'].source_url"
                  loading="lazy"
                  v-if="fac?._embedded"
                />
                <div class="overlay"></div>
              </div>
              <div class="slide_body">
                <div class="icon">
                  <nuxt-img
                    format="webp"
                    :src="fac.acf.icon"
                    loading="lazy"
                    v-if="fac.acf.icon"
                  />
                </div>
                <div class="slide_card_content">
                  <div class="title" v-html="fac.title.rendered"></div>
                  <div v-html="fac.content.rendered"></div>
                </div>
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

const runTimeConfig = useRuntimeConfig();

const { data: rawFacilities, pending } = await useAsyncData(
  "rawFacilities",
  () => $fetch(`${runTimeConfig.public.baseWp}/facility/?_embed&per_page=100`)
);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const facilities = [];
// watch(rawFacilities, (newPosts) => {
props.data.facilities.forEach(function (val, index, array) {
  const f = rawFacilities.value.find((fac) => fac.id == val);
  facilities.push(f);
});
// });

onMounted(() => {
  // setTimeout(() => {
  const swiper = new Swiper(".facilities_slider", {
    slidesPerView: 1.07,
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
        slidesPerView: 3.4,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3.4,
        spaceBetween: 16,
      },
    },
  });
  // }, 750);
});
</script>
