<template>

  <div class="container">

      <div class="tow_col_video_component" >

      <div class="content_holder">

        <h2 v-if="data.title" v-html="data.title"></h2>
        <div class="intro" v-if="data.intro" v-html="data.intro"></div>
        <div class="content" v-if="data.content" v-html="data.content"></div>

      </div>

      <div class="video">

        <div class="video-thumbnail" id="vid-thumbail" v-on:click="removeThumbnail">
          <img :src="data.video_thumbnail.url"/>
        </div>

        <video v-if="data.video.url && !data.vimeo_video_id" width="320" height="240" controls>
          <source :src="data.video.url" type="video/mp4" />
          <source :src="data.video.url" type="video/ogg" />
        </video>

        <iframe v-if="data.vimeo_video_id" class="iframe" :src="'//player.vimeo.com/video/'+data.vimeo_video_id" width="100%" height="100%" frameborder="0" webkitallowfullscreen    mozallowfullscreen allowfullscreen></iframe>

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

function removeThumbnail() {
  document.getElementById('vid-thumbail').remove();
}
</script>