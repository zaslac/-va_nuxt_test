<template>
  <div class="experts_list_desktop">
    <div class="expert" v-for="(exp, index) in data">
      <div class="expert_wrap_inner">
        <div
          class="image"
          :style="{ backgroundImage: `url(${exp.acf.desktop_image})` }"
        ></div>
        <div class="expert_wrapper_body">
          <div class="expert_title" v-html="exp.title.rendered"></div>
          <div class="icon_wrap">
            <div
              class="icon"
              @click="openExpert = index"
              v-if="openExpert != index"
            >
              <IconPlus></IconPlus>
            </div>
            <div
              class="icon open"
              @click="openExpert = -1"
              v-if="openExpert == index"
            >
              <IconMinus></IconMinus>
            </div>
          </div>

          <transition name="fade" mode="out-in">
            <div class="expert_body" v-show="openExpert == index">
              <div v-html="exp.content.rendered"></div>
              <p class="small" v-if="exp.acf.club_availability.length > 0">
                You can find these Health Professionals at the following gyms:
              </p>
              <div class="list_group">
                <div class="item" v-for="club in exp.acf.club_availability">
                  {{ club.post_title }}
                </div>
              </div>
              <div class="btn_group">
                <NuxtLink
                  :to="exp.link"
                  class="btn btn_white_background btn_black_text"
                  >Learn more</NuxtLink
                >
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openExpert = ref(0);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const toggleExpert = (id) => {};
</script>
