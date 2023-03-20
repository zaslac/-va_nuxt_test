<template>
  <div class="container">
    <div class="simple-image">
      <img :src="data.image.url"/>
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
