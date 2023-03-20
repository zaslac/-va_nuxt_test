<template>
  <div class="club_page_banner">
    <div class="banner_text">
      <div class="container">
        <div class="small_title" v-html="data.acf.prv_name"></div>
        <h1 v-html="data.title.rendered"></h1>

        <div class="btn_group">
          <button
            class="mobile_view_details link_hover"
            v-if="$device.isMobile"
            @click="showClubDetails = !showClubDetails"
          >
            View club details
          </button>
        </div>

        <div class="btn_group">
          <NuxtLink
            to="/clubs"
            class="btn btn_grey_outline btn_white_text"
            v-if="$device.isMobile"
            >Free gym pass</NuxtLink
          >
          <NuxtLink
            to="/clubs"
            class="btn btn_grey_outline btn_white_text"
            v-if="!$device.isMobile"
            >Get a free gym pass</NuxtLink
          >
          <NuxtLink to="/clubs" class="btn btn_red_background btn_white_text"
            >Join now</NuxtLink
          >
        </div>

        <div class="btn_group group_mobile_pager_down" v-if="$device.isMobile">
          <NuxtLink :to="iconLink(data)" class="mobile_pager_down"
            ><IconDownArrow></IconDownArrow
          ></NuxtLink>
        </div>
      </div>
    </div>

    <BlocksClubDetailsDesktop
      :data="data"
      v-if="!$device.isMobile"
    ></BlocksClubDetailsDesktop>

    <div
      class="banner_image"
      :style="`background-image: url(${data.acf.gym_image});`"
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

    <transition name="fade">
      <BlocksClubDetailsMobile
        :data="data"
        v-if="
          ($device.isMobile && showClubDetails) || ($device.isMobile && nact)
        "
        @close-modal="showClubDetails = false"
      ></BlocksClubDetailsMobile>
    </transition>
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

const nact = useNoticeAreaClubTimesOpen();

const showClubDetails = ref(false);

function iconLink(data) {
  if (data.acf.global_page_blocks[0]) {
    return "#section_" + data.acf.global_page_blocks[0].acf_fc_layout;
  }
  return;
}
</script>
