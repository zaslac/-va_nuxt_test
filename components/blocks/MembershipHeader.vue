<template>

  <div class="container">

    <div class="membership_header">

      <div class="sub_title" v-if="data.sub_title" v-html="data.sub_title"></div>

      <h1 v-if="data.title" v-html="data.title"></h1>

      <div class="content" v-if="data.content" v-html="data.content"></div>

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
