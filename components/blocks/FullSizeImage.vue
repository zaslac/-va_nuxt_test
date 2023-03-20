<template>

  <div class="container">

    <div class="full_size_image">

      <img v-if="!$device.isMobile" :src="data.full_size_image_desktop.url"/>

      <img v-if="$device.isMobile" :src="data.full_size_image_mobile.url"/>

      <div class="title" v-if="data.title" v-html="data.title"></div>

      <div class="overlay"></div>

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