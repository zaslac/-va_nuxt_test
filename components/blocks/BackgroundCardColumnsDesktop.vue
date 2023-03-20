<template>
  <div class="background_card_columns_desktop">
    <div class="slide_image_wrapper">
      <div class="slide_image_shim">
        <nuxt-img
          format="webp"
          src="/img/shims/promo-v-slider-desktop-shim.png"
        />
      </div>
      <TransitionGroup name="fade">
        <div
          class="slide_image_container"
          v-for="(p, index) in data"
          :key="index"
          :class="`slide_image_${index}`"
          v-show="activeSlide == `slide_image_${index}`"
        >
          <div
            class="slide_image desktop"
            :style="`background-image:url(${p.image.url})`"
          ></div>
        </div>
      </TransitionGroup>
    </div>
    <div class="slide_text_wrapper">
      <div class="container flex">
        <div
          class="card"
          v-for="(card, key) in data"
          :class="activeSlide == `slide_image_${key}` ? 'active' : ''"
          @mouseover="activeSlide = `slide_image_${key}`"
        >
          <!--  -->
          <div class="inner-content">
            <div class="title" v-html="card.title"></div>
            <div class="content" v-html="card.content"></div>
            <Button :data="card.buttons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const activeSlide = ref("slide_image_0");
</script>
