<template>
  <div class="horizontal_promo_section">
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
      <div class="slide_title_area">
        <div class="icon">
          <nuxt-img format="webp" :src="data.logo" />
        </div>
        <div class="title" v-html="data.title"></div>
        <Button :data="data.buttons" />
      </div>
      <div class="slide_links_wrapper">
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
