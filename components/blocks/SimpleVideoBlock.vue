<template>

  <div class="container">

    <div class="simple_video_block">

      <iframe v-if="data.vimeo_video_code" class="iframe" :src="'//player.vimeo.com/video/'+data.vimeo_video_code+'?autoplay=1&loop=1&muted=1&portrait=0&pip=0&controls=0&keyboard=0&byline=0&dnt=1'" width="100%" height="430" frameborder="0" webkitallowfullscreen    mozallowfullscreen allowfullscreen></iframe>

      <div class="html_vid" v-if="data.site_video">
        <video width="320" height="240" autoplay muted loop >
          <source :src="data.site_video.url" type="video/mp4" />
          <source :src="data.site_video.url" type="video/ogg" />
        </video>
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

function onReady() {
  this.$refs.player.play()
}

onMounted(() => {

})
</script>