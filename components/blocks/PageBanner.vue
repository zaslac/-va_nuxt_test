<template>
  <div class="page_banner" v-bind:class="{ compact_mode: data.compact_mode }">
    <div class="page_banner_text">
      <div class="container">
        <div class="icon" v-if="data.icon">
          <img :src="`${data.icon}`" alt="" />
        </div>

        <div
          class="small_title"
          v-if="data.small_title"
          v-html="data.small_title"
        ></div>
        <h1 v-if="data.big_title" v-html="data.big_title"></h1>
        <p v-if="data.description" v-html="data.description"></p>
        <p
          class="button_title"
          v-if="data.button_title"
          v-html="data.button_title"
        ></p>
        <Button v-if="data.buttons" :data="data.buttons"></Button>

        <div v-if="data.show_down_arrow" class="btn_group group_pager_down">
          <a
            v-if="data.show_down_arrow == true"
            href="#!"
            class="pager_down"
            id="pager_down"
            ><IconDownArrow></IconDownArrow
          ></a>
        </div>
      </div>
    </div>
    <div
      class="page_banner_video"
      v-if="data.desktop_video.url && !$device.isMobile"
    >
      <video width="320" height="240" autoplay muted loop playsinline>
        <source :src="data.desktop_video.url" type="video/mp4" />
        <source :src="data.desktop_video.url" type="video/ogg" />
      </video>
      <img
        src="@/assets/img/club_header_mobile_fade.png"
        alt=""
        v-if="$device.isMobile"
      />
      <img
        src="@/assets/img/club_header_desk_fade.png"
        alt=""
        v-if="!$device.isMobile"
      />
    </div>
    <div
      class="page_banner_video"
      v-if="data.mobile_video.url && $device.isMobile"
    >
      <video width="320" height="240" autoplay muted loop playsinline>
        <source :src="data.mobile_video.url" type="video/mp4" />
        <source :src="data.mobile_video.url" type="video/ogg" />
      </video>
      <img
        src="@/assets/img/club_header_mobile_fade.png"
        alt=""
        v-if="$device.isMobile"
      />
      <img
        src="@/assets/img/club_header_desk_fade.png"
        alt=""
        v-if="!$device.isMobile"
      />
    </div>
    <div
      class="page_banner_image"
      :style="`background-image: url(${background});`"
    >
      <img
        src="@/assets/img/club_header_mobile_fade.png"
        alt=""
        v-if="$device.isMobile"
      />
      <img
        src="@/assets/img/club_header_desk_fade.png"
        alt=""
        v-if="!$device.isMobile"
      />
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
const { isMobile } = useDevice();

const background = computed(() => {
  if (isMobile) {
    return props.data.background_image_mobile;
  } else {
    return props.data.background_image_desktop;
  }
});

// onMounted(() => {
//   // var arrowTarget = document.getElementsByClassName("page_components")[1].id;
//   // if (document.getElementById("pager_down")) {
//   //   document.getElementById("pager_down").href = "#" + arrowTarget;
//   // }
// });
</script>
