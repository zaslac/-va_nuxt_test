<template>
  <div :class="'class_cat_intro ' + data.bottom_margin ">
    <div class="container">
      <div class="col col_top">
        <div class="col_top_left">
          <h3 v-html="data.title"></h3>
          <h6 v-html="data.large_intro"></h6>
          <div
            class="show_more_text"
            v-if="$device.isMobile && !showMoretext"
            @click="toggleMoreText"
          >
            Continue reading
            <div class="icon"><IconDownArrow /></div>
          </div>
          <!-- <transition name="fade"> -->
          <p class="more" v-show="showMoretext" v-html="data.small_intro"></p>
          <!-- </transition> -->
          <div
            class="hide_more_text"
            v-if="$device.isMobile && showMoretext"
            @click="toggleMoreText"
          >
            Hide
            <div class="icon"><IconDownArrow /></div>
          </div>
        </div>
        <div class="col_top_right">
          <img :src="data.big_image.url" alt="" />
          <img class="bottom_image" :src="data.small_image.url" alt="" />
        </div>
      </div>
      <div class="col col_bot">
        <div class="col_bot_left">
          <h5 v-html="data.list_heading"></h5>
          <ul :style="'column-count:'+data.list_number_of_columns">
            <li v-for="item in data.list_items">
              <div class="icon"><IconCheckWhite /></div>
              {{ item.list }}
            </li>
          </ul>
        </div>
        <div class="col_bot_right">

        </div>
      </div>
      <Button v-if="data.buttons" :data="data.buttons"></Button>
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
// const showMoretext = computed(() => {
//   if (!isMobile) {
//     return true;
//   }
//   return false;
// });
const showMoretext = ref(false);
if (!isMobile) {
  showMoretext.value = true;
}

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const toggleMoreText = () => {
  showMoretext.value = !showMoretext.value;
};
</script>
