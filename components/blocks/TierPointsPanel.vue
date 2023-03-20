<template>
  <div class="tier_points_panel">
    <div class="container">
      <div class="title" v-if="data.title" v-html="data.title"></div>
      <div
        class="description"
        v-if="data.description"
        v-html="data.description"
      ></div>

      <div class="ways_to_earn_wrapper flex">
        <div class="way_to_earn" v-for="wte in data.ways_to_earn">
          <div class="icon"><img :src="wte.icon" alt="" /></div>
          <div class="wte_title" v-if="wte.title" v-html="wte.title"></div>
          <div class="wte_detail" v-if="wte.detail" v-html="wte.detail"></div>
        </div>
      </div>
      <div
        class="sub_title"
        v-if="data.sub_title"
        v-html="data.sub_title"
      ></div>

      <Button :data="data.buttons" />
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
