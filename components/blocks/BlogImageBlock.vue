<template>
  <div class="blog_image_block">
    <div class="container">
      <img :src="data.image.url" :alt="data.image.alt" />
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
</script>
