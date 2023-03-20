<template>
  <div class="class_type_carousel_manual">
    <div class="container">
      <!--      <div class="section_title" v-if="data.small_title">-->
      <!--        <h5 v-html="data.small_title"></h5>-->
      <!--        <h2>GRID classes</h2>-->
      <!--      </div>-->

      <div class="class_type_carousel_manual_slider_main">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(ClassSlide, key) in data.manual_carousel"
          >
            <div
              v-if="$device.isMobile"
              class="main_slide main_slide1 slide_inner"
              :style="{
                backgroundImage: `url(${ClassSlide.mobile_image.url})`,
              }"
            >
              <div class="background">
                <img
                  src="@/assets/img/overlays/sub_category_slider_mobile_overlay.png"
                  alt=""
                  v-if="$device.isMobile"
                />
                <img
                  src="@/assets/img/overlays/sub_category_slider_desktop_overlay.png"
                  alt=""
                  v-if="
                    !$device.isMobile && ClassSlide.disable_overlay !== true
                  "
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
                <h3 v-html="ClassSlide.name"></h3>
                <div
                  class="slide_content"
                  v-html="ClassSlide.description"
                ></div>
                <Button
                  v-if="ClassSlide.buttons"
                  :data="ClassSlide.buttons"
                ></Button>
              </div>
            </div>
            <div
              v-if="!$device.isMobile"
              class="main_slide main_slide1 slide_inner"
              :style="{
                backgroundImage: `url(${ClassSlide.image.url})`,
              }"
            >
              <div class="background">
                <img
                  src="@/assets/img/overlays/sub_category_slider_mobile_overlay.png"
                  alt=""
                  v-if="$device.isMobile && ClassSlide.disable_overlay !== true"
                />
                <img
                  src="@/assets/img/overlays/sub_category_slider_desktop_overlay.png"
                  alt=""
                  v-if="
                    !$device.isMobile && ClassSlide.disable_overlay !== true
                  "
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
                <h3 v-html="ClassSlide.name"></h3>
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

      <div class="class_type_carousel_manual_thumbs">
        <button class="thumb_slide_prev"><IconSwiperPrev /></button>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="ClassSlide in data.manual_carousel">
            <div class="thumb_slide thumb_slide1">
              <div class="background">
                <img
                  v-if="ClassSlide.thumb_image.url"
                  :src="ClassSlide.thumb_image.url"
                  alt=""
                />
                <img
                  v-if="!ClassSlide.thumb_image.url"
                  :src="ClassSlide.image.url"
                  alt=""
                />
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

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const galleryThumbs = new Swiper(".class_type_carousel_manual_thumbs", {
    slidesPerView: 1.8,
    spaceBetween: 24,
    allowTouchMove: false,
    watchSlidesProgress: true,
    // freeMode: true,
  });

  const galleryTop = new Swiper(".class_type_carousel_manual_slider_main", {
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
