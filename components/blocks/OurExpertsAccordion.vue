<template>
  <div class="club_details_experts">
    <div class="container">
      <h5 v-html="data.small_title"></h5>
      <h2 v-html="data.big_title"></h2>
      <p>{{ data.description }}</p>

      <div class="experts_list_mobile" v-if="$device.isMobile">
        <div
          class="expert"
          v-for="exp in experts"
          @click="showMobileExpertSlider = !showMobileExpertSlider"
        >
          {{ exp.title.rendered }}
          <div class="icon"><IconPlus></IconPlus></div>
        </div>
      </div>

      <BlocksOurExpertsAccordionDesktop
        :data="experts"
        v-if="!$device.isMobile && !pending"
      ></BlocksOurExpertsAccordionDesktop>

      <p class="small" v-html="data.nb_text"></p>
    </div>
    <transition name="fade">
      <div
        class="experts_list_mobile_modal"
        v-show="showMobileExpertSlider && $device.isMobile && !pending"
      >
        <div class="modal_header">
          <button @click="showMobileExpertSlider = !showMobileExpertSlider">
            <IconBurgerClose></IconBurgerClose>
          </button>
        </div>

        <div class="modal_body">
          <div class="mobile_experts_slider">
            <div class="swiper-wrapper">
              <div v-for="exp in experts" class="swiper-slide">
                <div class="slide_inner">
                  <div class="background">
                    <div class="overlay">
                      <img :src="exp.acf.mobile_image" alt="" />
                    </div>
                  </div>

                  <div class="content">
                    <h3 v-html="exp.title.rendered"></h3>
                    <div v-html="exp.content.rendered"></div>
                    <p
                      class="small"
                      v-if="exp.acf.club_availability.length > 0"
                    >
                      You can find these Health Professionals at the following
                      gyms:
                    </p>
                    <div class="list_group">
                      <div
                        class="item"
                        v-for="club in exp.acf.club_availability"
                      >
                        {{ club.post_title }}
                      </div>
                    </div>
                    <div class="btn_group">
                      <NuxtLink
                        :to="exp.link"
                        class="btn btn_white_background btn_black_text"
                        >Learn more</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="arrows">
              <div class="experts_caro_button experts_caro_prev">
                <IconSwiperPrev></IconSwiperPrev>
              </div>
              <div class="experts_caro_button experts_caro_next">
                <IconSwiperNext></IconSwiperNext>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
const { isMobile } = useDevice();
const showMobileExpertSlider = ref(false);
const runTimeConfig = useRuntimeConfig();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data: rawExperts, pending } = await useAsyncData("rawExperts", () =>
  $fetch(`${runTimeConfig.public.baseWp}/our_experts/?_embed&per_page=100`)
);

const experts = [];

// watch(rawExperts, (newPosts) => {
props.data.experts.forEach(function (val, index, array) {
  const f = rawExperts.value.find((exp) => exp.id == val);
  experts.push(f);
});
// });

onMounted(() => {
  // setTimeout(() => {
  const swiper = new Swiper(".mobile_experts_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".experts_caro_next",
      prevEl: ".experts_caro_prev",
    },
  });
  // }, 750);
});
</script>
