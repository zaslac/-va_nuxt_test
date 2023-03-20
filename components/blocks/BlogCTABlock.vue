<template>
  <div class="blog_cta_block">
    <div class="container blog_container">
      <div class="small_desc" v-html="data.small_description"></div>
      <div class="btn_group">
        <NuxtLink
          :to="data.button.url"
          class="btn btn_white_text btn_red_outline"
          >{{ data.button.title }}</NuxtLink
        >
      </div>
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
