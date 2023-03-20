<template>

  <div class="testimonials_holder">

    <div class="container">

        <div class="section_title">
          <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
          <h2 v-if="data.title" v-html="data.title"></h2>
        </div>

      <div class="swiper testimonials_carousel">

        <div class="swiper-wrapper">
          <div class="swiper-slide testimonial" v-for="testimonial in rawTestimonials.testimonials.value">

            <div class="testimonial" :style="`background-image:url(${testimonial.acf.testimonial_image.url});`">
              <div class="overlay">
                <div class="play_button" id="play_button"  v-if="testimonial.acf.vimeo_video_id" v-on:click="removeThumbnail"></div>
              </div>
              <div class="title" v-html="testimonial.title.rendered"></div>
              <iframe v-if="testimonial.acf.vimeo_video_id" class="iframe" :src="'//player.vimeo.com/video/'+testimonial.acf.vimeo_video_id" width="100%" height="100%" frameborder="0" webkitallowfullscreen    mozallowfullscreen allowfullscreen></iframe>
            </div>

          </div>
        </div>

        <div class="slide_pagination">

          <div class="scrollbar">
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
const rawTestimonials = await useTestimonials();

const full_testimonials_list = [];
const f = rawTestimonials.testimonials.value;
full_testimonials_list.push(f);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { isMobile } = useDevice();


function removeThumbnail() {
  document.getElementById('play_button').remove();
  document.querySelector('.iframe').style.display = 'block';
}

onMounted(() => {
  const swiper = new Swiper(".testimonials_carousel", {
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
        slidesPerView: 3,
      },
    },
  });
});

</script>