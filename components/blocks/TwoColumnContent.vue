<template>

  <div class="container">
    <div :class="'two-column-content ' + data.bottom_margin" v-bind:class="{ mobile_invert: data.reverse_mobile_layout && $device.isMobile, middle_align_content: data.middle_align_content && $device.isMobile }">

      <div :class="'column image-column ' + data.content_alignment" >
        <img :alt="data.image.alt" :src="data.image.url"/>
      </div>

      <div class="column content-column" v-bind:class="{ middle_align: data.middle_align_content }">
        <h5 v-if="data.sub_title" v-html="data.sub_title" ></h5>
        <h2 v-if="data.title && data.large_title" v-html="data.title"></h2>
        <h3 v-if="data.title && !data.large_title" v-html="data.title"></h3>
        <div v-html="data.intro_content"></div>

        <div
            class="show_more_text"
            v-if="$device.isMobile && !showMoretext && data.content"
            @click="toggleMoreText"
        >
          Continue reading
          <div class="icon"><IconDownArrow /></div>
        </div>
        <!-- <transition name="fade"> -->
        <div class="more" v-show="showMoretext" v-html="data.content"></div>
        <!-- </transition> -->
        <div
            class="hide_more_text"
            v-if="$device.isMobile && showMoretext && data.content"
            @click="toggleMoreText"
        >
          Hide
          <div class="icon"><IconDownArrow /></div>
        </div>
        <ul>
          <li v-for="item in data.list">
            <div class="icon"><IconCheckWhite /></div>
            {{ item.list_item }}
          </li>
        </ul>

        <Button v-if="data.buttons" :data="data.buttons"></Button>

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

const showMoretext = ref(false);
if (!isMobile) {
  showMoretext.value = true;
}

const toggleMoreText = () => {
  showMoretext.value = !showMoretext.value;
};

</script>
