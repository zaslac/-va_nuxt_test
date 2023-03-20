<template>

  <div :class="'center_content_cta ' + data.bottom_margin " v-bind:class="{darker_content : data.darker_content}">

    <div class="container">
      <div class="center-content">
        <img v-if="data.icon.url" class="icon" :src="data.icon.url"/>
        <div class="section_title">
          <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
          <h2 v-html="data.title"></h2>
        </div>
        <div v-html="data.content"></div>
        <Button v-if="data.buttons" :data="data.buttons"></Button>
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
