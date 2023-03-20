<template>
  <div class="container">
    <div class="ad_block_one">
      <div class="column content-column">
        <div class="intro">
          <div class="icon" v-if="data.icon"><img :src="data.icon.url" /></div>
          <div class="title" v-if="data.title" v-html="data.title"></div>
        </div>

        <div
          class="top_content"
          v-if="data.top_content"
          v-html="data.top_content"
        ></div>

        <div class="list">
          <ul>
            <li v-for="list_item in data.list">
              <div class="icon"><IconCheckRed /></div>
              {{ list_item.list_item }}
            </li>
          </ul>
        </div>

        <div
          class="bottom_content"
          v-if="data.bottom_content"
          v-html="data.bottom_content"
        ></div>
      </div>

      <div class="column image-column">
        <img
          class="desktop-image"
          v-if="!$device.isMobile"
          :src="data.desktop_image.url"
        />
        <img
          class="mobile-image"
          v-if="$device.isMobile"
          :src="data.mobile_image.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
