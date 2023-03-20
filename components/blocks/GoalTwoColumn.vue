<template>

  <div class="container">

    <div :class="'goal_two_column_container ' + data.bottom_margin ">

      <div v-for="col in data.columns" :class="'goal_column ' + col.content_alignment">

        <div class="image">
          <img v-if="!$device.isMobile" :src="col.image.url" alt="" />
          <img v-if="$device.isMobile" :src="col.mobile_image.url" alt="" />
        </div>

        <div class="content">
          <div class="counter" v-if="col.counter" v-html="col.counter"></div>
          <h3 class="title" v-if="col.title" v-html="col.title"></h3>
          <div class="description" v-if="col.description" v-html="col.description"></div>
          <div class="small_description" v-if="col.small_description" v-html="col.small_description"></div>
          <Button v-if="col.buttons" :data="col.buttons"></Button>
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

