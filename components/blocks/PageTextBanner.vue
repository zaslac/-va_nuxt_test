<template>
  <div class="page_text_banner">
    <div class="container">
      <div
        class="small_title"
        v-if="data.small_title"
        v-html="data.small_title"
      ></div>
      <h1 v-if="data.big_title" v-html="data.big_title"></h1>
      <p v-if="data.description" v-html="data.description"></p>
      <Button v-if="data.buttons" :data="data.buttons"></Button>
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
