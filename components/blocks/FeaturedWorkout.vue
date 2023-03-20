<template>
  <div class="workout_online">
    <div class="container">
      <div class="section_title">
        <h5 v-html="data.small_title"></h5>
        <h2 v-html="data.big_title"></h2>
        <p v-html="data.description"></p>
        <div v-if="data.button" class="btn_group">
          <NuxtLink :to="data.button.url" class="btn btn_red_outline btn_white_text">{{ data.button.title }}</NuxtLink>
        </div>
      </div>

      <div class="workout_video">
        <div class="video_underlay">
          <img src="@/assets/img/shims/video_underlay_shim.png" alt="" />
        </div>
        <div class="video_overlay">
          <img v-if="rawWorkout[0]?.acf.image" :src="rawWorkout[0]?.acf.image.url" alt="" />

          <div class="video" v-if="rawWorkout[0]?.acf.video_url" v-on:click="PlayWorkoutVid">
            <iframe id="vimeo-workout-vid" class="iframe" :src="'//player.vimeo.com/video/'+rawWorkout[0]?.acf.video_url+''" width="100%" height="100%" frameborder="0" webkitallowfullscreen    mozallowfullscreen allowfullscreen></iframe>
          </div>

        </div>
        <div class="video_description">
          <div class="description_inner">
            <h6 v-if="rawWorkout[0]?.acf.feature_type" v-html="rawWorkout[0]?.acf.feature_type"></h6>
            <h3 v-if="rawWorkout[0]?.title" v-html="rawWorkout[0]?.title.rendered"></h3>
            <div class="workout_details">
              <div class="detail">
                <div class="icon"><IconWatch /></div>
                <span v-if="rawWorkout[0]?.acf.duration_of_workout" v-html="rawWorkout[0]?.acf.duration_of_workout"></span>
              </div>
              <div class="detail">
                <div class="icon"><IconUser /></div>
                <span v-if="rawWorkout[0]?.acf.trainer" v-html="rawWorkout[0]?.acf.trainer"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const runTimeConfig = useRuntimeConfig();

function PlayWorkoutVid() {

  var vid = document.getElementById('vimeo-workout-vid');
  if(vid){
    vid.style.display = 'block';
  }
}

const { data: rawWorkout, pending } = await useAsyncData(
    "rawWorkout",
    () => $fetch(`${runTimeConfig.public.baseWp}/workout/?_embed&id=`+props.data.workout)
);

</script>
