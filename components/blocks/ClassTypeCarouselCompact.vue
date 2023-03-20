<template>
  <div class="class_type_carousel_compact">
    <div class="container">
      <!--      <div class="section_title" v-if="data.small_title">-->
      <!--        <h5 v-html="data.small_title"></h5>-->
      <!--        <h2>GRID classes</h2>-->
      <!--      </div>-->

      <div class="class_type_carousel_compact_slider_main">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(ClassSlide, key) in data.manual_carousel"
          >
            <div
              class="main_slide main_slide1 slide_inner"
              :style="{
                backgroundImage: `url(${ClassSlide.image.url})`,
              }"
            >
              <div class="background">
                <img
                  src="@/assets/img/overlays/class_cta_compact_overlay_mobile.png"
                  alt=""
                  v-if="$device.isMobile"
                />
                <img
                  src="@/assets/img/overlays/class_cta_compact_overlay.png"
                  alt=""
                  v-if="!$device.isMobile"
                />
              </div>
              <div class="foreground">
                <div class="slide_count">
                  <span class="current" v-html="'0' + (key + 1)"></span> /
                  <span
                    class="total"
                    v-html="'0' + data.manual_carousel.length"
                  ></span>
                </div>

                <div class="upper_content">
                  <h5
                    v-if="ClassSlide.sub_title"
                    v-html="ClassSlide.sub_title"
                  ></h5>
                  <h3 v-if="ClassSlide.name" v-html="ClassSlide.name"></h3>
                </div>

                <div class="lower_content">
                  <div v-html="ClassSlide.description"></div>
                  <Button
                    v-if="ClassSlide.buttons"
                    :data="ClassSlide.buttons"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="'class_type_carousel_compact_thumbs ' + thumb">
        <button class="thumb_slide_prev"><IconSwiperPrev /></button>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="ClassSlide in data.manual_carousel">
            <div class="thumb_slide thumb_slide1">
              <div class="background">
                <img :src="ClassSlide.image.url" alt="" />
              </div>
              <div class="foreground" v-html="ClassSlide.name"></div>
            </div>
          </div>
        </div>
        <button class="thumb_slide_next"><IconSwiperNext /></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";

function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

var thumb = makeid(5);
var Carousel = makeid(7);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const galleryThumbs = new Swiper("." + thumb, {
    slidesPerView: 1.8,
    spaceBetween: 24,
    watchSlidesProgress: true,
    // freeMode: true,
  });

  const galleryTop = new Swiper(".class_type_carousel_compact_slider_main", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: ".thumb_slide_next",
      prevEl: ".thumb_slide_prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
});
</script>
