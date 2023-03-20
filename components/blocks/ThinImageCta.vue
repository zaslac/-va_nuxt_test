<template>
  <div class="club_details_classes">
    <div class="container">
      <div class="classes_banner">
        <div class="banner_image">
          <nuxt-img
            format="webp"
            :src="data.desktop_image"
            loading="lazy"
            v-if="!$device.isMobile && data.desktop_image"
          />
          <nuxt-img
            format="webp"
            :src="data.mobile_image"
            loading="lazy"
            v-if="$device.isMobile && data.mobile_image"
          />
          <div class="overlay">
            <nuxt-img
              format="webp"
              src="/img/overlays/class_cta_overlay_mobile.png"
              v-if="$device.isMobile"
            />
            <nuxt-img
              format="webp"
              src="/img/overlays/class_cta_overlay_desktop.png"
              v-if="!$device.isMobile"
            />
          </div>
        </div>
        <div class="banner_content">
          <h5 v-html="data.small_title"></h5>
          <h3 v-html="data.big_title"></h3>
          <p v-if="data.description" v-html="data.description"></p>

          <Button
            v-if="data.buttons"
            :data="data.buttons"
            :class="!data.description ? 'more_pad' : ''"
          ></Button>
          <p class="small" v-html="data.nb_text"></p>
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
</script>
