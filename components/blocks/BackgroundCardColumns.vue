<template>
  <div class="section_title">
    <div class="container">
      <h5 v-if="data.small_title" v-html="data.small_title"></h5>
      <h2 v-html="data.title"></h2>
      <p v-html="data.description"></p>
    </div>
  </div>
  <div :class="'background-cards-holder ' + data.bottom_margin">
    <BackgroundCardColumnsDesktop
      v-if="!$device.isMobile"
      :data="data.info_cards"
    />
    <BackgroundCardColumnsMobile
      v-if="$device.isMobile"
      :data="data.info_cards"
    />
  </div>
</template>

<script setup>
import BackgroundCardColumnsMobile from "./BackgroundCardColumnsMobile";
import BackgroundCardColumnsDesktop from "./BackgroundCardColumnsDesktop";

const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
