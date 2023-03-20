<template >
  <div :class="data.theme">
    <div
      class="thin_full_width_image_cta"
      :style="`background-color: ${data.overlay_colour};`"
    >
      <div class="image">
        <img :src="data.mobile_image" alt="" v-if="$device.isMobile" />
        <img :src="data.desktop_image" alt="" v-if="!$device.isMobile" />
        <div
          class="overlay"
          v-if="!$device.isMobile"
          :style="`background:linear-gradient(90deg,  ${data.overlay_colour} 0%, rgba(151, 0, 65, 0) 100%);`"
        ></div>
        <div
          class="overlay"
          v-if="$device.isMobile"
          :style="`background:linear-gradient(0deg,  ${data.overlay_colour} 0%, rgba(151, 0, 65, 0) 100%);`"
        ></div>
      </div>
      <div class="container">
        <h2 v-html="data.title"></h2>
        <div v-html="data.description" v-if="data?.description"></div>
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
