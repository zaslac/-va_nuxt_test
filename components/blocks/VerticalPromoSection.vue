<template>
  <div class="vertical_promo_section_wrapper">
    <div class="section_title">
      <div class="container">
        <h5 v-if="data.small_title" v-html="data.small_title"></h5>
        <h2 v-html="data.title"></h2>
        <p v-html="data.description"></p>
      </div>
    </div>

    <div class="vertical_promo_section">
      <div class="slide_image_wrapper">
        <div class="slide_image_shim">
          <nuxt-img
            format="webp"
            src="/img/shims/promo-v-slider-mobile-shim.png"
            v-if="$device.isMobile"
          />
          <nuxt-img
            format="webp"
            src="/img/shims/promo-v-slider-desktop-shim.png"
            v-if="!$device.isMobile"
          />
        </div>
        <TransitionGroup name="fade">
          <div
            class="slide_image_container"
            v-for="(p, index) in data.promo"
            :key="index"
            :class="`slide_image_${index}`"
            v-show="activeSlide == `slide_image_${index}`"
          >
            <div
              class="slide_image mobile"
              v-if="$device.isMobile"
              :style="`background-image:url(${p.mobile_image})`"
            ></div>
            <div
              class="slide_image mobile"
              v-if="!$device.isMobile"
              :style="`background-image:url(${p.desktop_image})`"
            ></div>
          </div>
        </TransitionGroup>
      </div>

      <div class="slide_text_wrapper">
        <NuxtLink
          v-for="(p, index) in data.promo"
          :key="index"
          class="slide_text"
          :class="activeSlide == 'slide_image_' + index ? 'active' : ''"
          :to="`${p.link.url}`"
          @mouseenter="activeSlide = `slide_image_${index}`"
        >
          {{ p.link.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const activeSlide = ref("slide_image_0");
</script>
