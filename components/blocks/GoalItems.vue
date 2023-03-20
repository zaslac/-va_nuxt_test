<template>

  <div class="container">

    <div class="goal_item_container">

      <div class="counter" v-if="data.counter" v-html="data.counter"></div>

      <h2 class="title" v-if="data.title" v-html="data.title"></h2>

      <div :class="'goal_items ' + data.bottom_margin ">

        <div class="goal_item" v-for="goal in data.goal_items">

          <img class="goal_image" :src="goal.image.url"/>
          <h3 class="title" v-if="goal.title" v-html="goal.title"></h3>
          <div class="description" v-if="goal.description" v-html="goal.description"></div>

        </div>

      </div>

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