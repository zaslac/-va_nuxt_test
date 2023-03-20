<template>
  <div class="class_category_sub_cats">
    <div class="container">
      <div class="section_title" v-if="data.small_title">
        <h5 v-html="data.small_title"></h5>
        <h2>
          <span v-if="classParent?.name" v-html="classParent.name"></span>
          classes
        </h2>
      </div>

      <div class="class_category_sub_cats_slider_main" v-if="!pending">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ClassSlide, index) in classTypes">
            <div
              class="main_slide main_slide1 slide_inner"
              :style="{
                backgroundImage: `url(${ClassSlide.acf.rectangle_image})`,
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
                  v-if="!$device.isMobile"
                />
              </div>
              <div class="foreground">
                <h3 v-html="ClassSlide.name"></h3>
                <div class="slide_count">
                  <span class="current" v-html="'0' + (index + 1)"></span> /
                  <span class="total" v-html="'0' + classTypes.length"></span>
                </div>
                <p v-html="ClassSlide.description"></p>
                <p class="nb">Available at selected clubs</p>
                <div class="what_to_bring_wrapper">
                  <p v-if="ClassSlide.acf.what_to_bring_to_class.length > 0">
                    What to bring to class:
                  </p>
                  <div class="items">
                    <div
                      class="item"
                      v-for="Item in ClassSlide.acf.what_to_bring_to_class"
                    >
                      <div class="icon">
                        <IconCheckWhite />
                      </div>
                      {{ Item.post_name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="class_category_sub_cats_slider_thumbs" v-if="!pending">
        <button class="thumb_slide_prev"><IconSwiperPrev /></button>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="ClassSlide in classTypes">
            <div class="thumb_slide thumb_slide1">
              <div class="background">
                <img :src="ClassSlide.acf.rectangle_image" alt="" />
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

const runTimeConfig = useRuntimeConfig();

const { data: classParent, pendingz } = await useAsyncData("classParent", () =>
  $fetch(`${runTimeConfig.public.baseWp}/class_type/` + props.data.class_parent)
);

const { data: classTypesRaw, pending } = await useAsyncData(
  "classTypesRaw",
  () => $fetch(`${runTimeConfig.public.baseWp}/class_type/?_embed&per_page=100`)
);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const classTypes = [];

// watch(classTypesRaw, (newPosts) => {
classTypesRaw.value.forEach(function (val, index, array) {
  if (val.parent === props.data.class_parent) {
    classTypes.push(val);
  }
});
// });

onMounted(() => {
  // setTimeout(() => {
  const galleryThumbs = new Swiper(".class_category_sub_cats_slider_thumbs", {
    slidesPerView: 1.8,
    allowTouchMove: false,
    spaceBetween: 24,
    watchSlidesProgress: true,
    // freeMode: true,
  });

  const galleryTop = new Swiper(".class_category_sub_cats_slider_main", {
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
  // }, 750);
});
</script>
