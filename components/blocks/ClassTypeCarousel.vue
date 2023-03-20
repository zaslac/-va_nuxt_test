<template>
  <BlocksClassTypeCarouselClasses
    v-if="data.carousel_type == 'classes'"
    :data="data"
  />

  <BlocksClassTypeCarouselManual
    v-if="data.carousel_type == 'manual'"
    :data="data"
  />

  <BlocksClassTypeCarouselCompact
    v-if="data.carousel_type == 'compact'"
    :data="data"
  />
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
