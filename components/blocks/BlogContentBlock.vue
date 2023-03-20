<template>
  <div class="blog_content_block">
    <div class="container blog_container" v-html="data.content"></div>
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
