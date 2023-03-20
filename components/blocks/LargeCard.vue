<template>
  <div class="container">
    <div class="section_title" v-if="data.section_title">
      <h2 v-html="data.section_title"></h2>
    </div>

    <div
      :class="'large_card ' + data.bottom_margin"
      v-bind:class="{ light_theme: data.light_mode }"
    >
      <div
        class="background-image"
        v-if="!$device.isMobile"
        :style="`background-image: url(${data.desktop_image.url});`"
      ></div>
      <div
        class="background-image"
        v-if="$device.isMobile"
        :style="`background-image: url(${data.mobile_image.url});`"
      ></div>
      <div class="overlay" v-if="!data.light_mode"></div>
      <div class="overlay_gradient" v-if="!data.light_mode"></div>
      <div class="large_card_content">
        <img class="icon" :src="data.icon.url" />
        <div
          class="sub_title"
          v-if="data.sub_title"
          v-html="data.sub_title"
        ></div>
        <h3 v-if="data.title" v-html="data.title"></h3>
        <div class="content" v-if="data.content" v-html="data.content"></div>
        <Button v-if="data.buttons" :data="data.buttons"></Button>
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
