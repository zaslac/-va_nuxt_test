<template>
  <div class="featured_membership_cta">
    <div class="section_title">
      <div class="container">
        <h5 v-if="data.small_title" v-html="data.small_title"></h5>
        <h2 v-html="data.title"></h2>
        <p v-html="data.description"></p>
      </div>
    </div>
    <div class="container flex">
      <div class="cards">
        <div
          class="card"
          v-for="(c, k) in data.card"
          :class="c.most_popular ? 'most_pop' : ''"
        >
          <div class="most_popular_tag" v-if="c.most_popular">
            <div class="icon icon_left"><IconElipseLeft /></div>
            Most Popular
            <div class="icon icon_right"><IconElipseRight /></div>
          </div>
          <div class="title">{{ c.title }}</div>
          <div class="description">{{ c.description }}</div>
        </div>
      </div>
      <Button :data="data.buttons"></Button>
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
