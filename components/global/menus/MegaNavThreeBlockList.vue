<template>
  <div class="meganav mega_three_block_list">
    <div class="container flex">
      <div class="return_box" v-if="isMobile">
        <button @click="$emit('close-megaNav')">
          <IconBackArrow></IconBackArrow>
        </button>
        <button @click="$emit('close-megaNav')">
          <IconBurgerClose></IconBurgerClose>
        </button>
      </div>

      <div class="parent_title" v-html="parentTitle" v-if="isMobile"></div>

      <NuxtLink
        :to="menu.block_1.link.url"
        class="col col_1"
        v-on:mouseover="playVideo('vid_1')"
        v-on:mouseleave="stopVideo('vid_1')"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_1.image" alt="" />
          <video
            id="vid_1"
            width="320"
            height="240"
            muted
            loop
            v-if="menu.block_1.video_file.url"
          >
            <source :src="menu.block_1.video_file.url" type="video/mp4" />
            <source :src="menu.block_1.video_file.url" type="video/ogg" />
          </video>
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_1.small_title"></div>
            <div class="big_title" v-html="menu.block_1.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="menu.block_2.link.url"
        class="col col_2"
        v-on:mouseover="playVideo('vid_2')"
        v-on:mouseleave="stopVideo('vid_2')"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_2.image" alt="" />
          <video
            id="vid_2"
            width="320"
            height="240"
            muted
            loop
            v-if="menu.block_2.video_file.url"
          >
            <source :src="menu.block_2.video_file.url" type="video/mp4" />
            <source :src="menu.block_2.video_file.url" type="video/ogg" />
          </video>
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_2.small_title"></div>
            <div class="big_title" v-html="menu.block_2.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="menu.block_3.link.url"
        class="col col_3"
        v-on:mouseover="playVideo('vid_3')"
        v-on:mouseleave="stopVideo('vid_3')"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_3.image" alt="" />
          <video
            id="vid_3"
            width="320"
            height="240"
            muted
            loop
            v-if="menu.block_3.video_file.url"
          >
            <source :src="menu.block_3.video_file.url" type="video/mp4" />
            <source :src="menu.block_3.video_file.url" type="video/ogg" />
          </video>
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_3.small_title"></div>
            <div class="big_title" v-html="menu.block_3.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>

      <div class="col col_4 link_list">
        <ul>
          <li v-for="(link, m) in menu.list" :key="m">
            <NuxtLink
              :to="link.menu_item.url"
              @click="$emit('close-megaNav')"
              >{{ link.menu_item.title }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
  parentTitle: {
    type: String,
    required: true,
  },
});

function playVideo(vid) {
  var video = document.getElementById(vid);
  if (video) {
    video.play();
  }
}

function stopVideo(vid) {
  var video = document.getElementById(vid);
  if (video) {
    video.currentTime = 0;
    video.pause();
  }
}
</script>
