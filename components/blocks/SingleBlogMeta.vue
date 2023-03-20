<template>
  <div class="single_blog_meta">
    <div class="container blog_container">
      <div class="author">BY {{ data._embedded.author[0].name }}</div>
      <div class="published_date">
        Posted On {{ moment(data.date).format("D MMMM, YYYY") }}
      </div>
    </div>
  </div>
</template>
<script setup>
import moment from "moment";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
