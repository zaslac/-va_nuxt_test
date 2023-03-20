<template>
  <div class="notice_area" :class="data.banner_priority">
    <div class="container flex">
      <div class="notice_area_wrapper flex">
        <div class="icon"><IconInfo /></div>
        <div class="notice_area_text_wrapper">
          <div class="notice_area_text">
            <p>{{ data.banner_short_text }}</p>
          </div>
        </div>
        <div class="buttons">
          <button
            class="button_link"
            v-if="data.action_type == 'club_times'"
            @click="nact = true"
          >
            {{ data.action_title }}
          </button>

          <button
            class="button_link"
            v-if="data.action_type == 'popup'"
            @click="showNoticeModal = true"
          >
            {{ data.action_title }}
          </button>
        </div>
      </div>

      <div
        class="notice_area_modal"
        v-if="data.action_type == 'popup' && showNoticeModal"
      >
        <div class="modal_inner">
          <div
            class="modal_close"
            @click="showNoticeModal = false"
            v-if="$device.isMobile"
          >
            <div class="icon"><IconBurgerClose /></div>
          </div>

          <div class="modal_body">
            <h3>{{ data.pop_up_info.title }}</h3>
            <p>{{ data.pop_up_info.description }}</p>

            <div class="btn_group" v-if="!$device.isMobile">
              <button
                class="btn btn_red_outline btn_black_text"
                @click="showNoticeModal = false"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
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

const nact = useNoticeAreaClubTimesOpen();

const showNoticeModal = ref(false);
// setTimeout(() => {
//   document.querySelector("#page_navbar").classList.add("has_notice_area");
// }, 150);

useHead({
  bodyAttrs: {
    class: "has_notice_area",
  },
});
</script>
