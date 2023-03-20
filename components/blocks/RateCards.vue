<template>

  <div class="container">

    <div class="rate_cards">
      <div class="section_title">
        <h5 v-if="data.small_title" v-html="data.small_title"></h5>
        <h2 v-if="data.title" v-html="data.title"></h2>
        <p v-if="data.description" v-html="data.description"></p>
      </div>

      <RateCardsDesktop v-if="!$device.isMobile" :data="data.rate_cards"/>
      <RateCardsMobile v-if="$device.isMobile" :data="data.rate_cards"/>

    </div>

  </div>

</template>

<script setup>

  import RateCardsDesktop from "./RateCardsDesktop";
  import RateCardsMobile from "./RateCardsMobile";

  const { isMobile } = useDevice();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

</script>
