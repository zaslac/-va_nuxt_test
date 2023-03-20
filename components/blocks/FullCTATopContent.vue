<template>

  <div :class="'full_cta_top_content ' + data.bottom_margin ">

    <div class="container">

      <div :class="'full_cta_top_content_container ' + data.content_alignment ">

        <div class="content">
          <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
          <h4 v-if="data.title" v-html="data.title"></h4>
          <div class="inner-content" v-if="data.content" v-html="data.content"></div>
          <Button v-if="data.buttons" :data="data.buttons"></Button>
        </div>

        <div class="image">

          <div class="overlay">

          </div>

          <img v-if="!$device.isMobile" :src="data.desktop_image.url"/>
          <img v-if="$device.isMobile" :src="data.mobile_image.url"/>

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