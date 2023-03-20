<template>
  <div class="section_classes_grid">
    <div
      v-for="(cg, index) in data"
      :key="cg.slug"
      class="class_category_grid_col"
      @click="updateShowGridBlock(index)"
    >
      <div class="grid_image">
        <div
          class="grid_image_shim"
          :style="`background-image: url(${cg.images.square_image});`"
        >
          <img src="@/assets/img/shims/class_landing_square_shim.png" alt="" />
        </div>
        <div
          class="image_overlay"
          :class="`grid_overlay_${cg.overlay_color}`"
        ></div>
        <div class="mobile_icon_plus"><IconPlus /></div>
      </div>
      <div class="grid_text_wrapper">
        <h4 v-html="cg.title"></h4>
        <div class="included_classes">
          <p>Classes include:</p>
          <div class="class_list">
            <div v-for="li in cg.class_list" class="list_item">
              <div class="icon"><IconCheckWhite /></div>
              <span v-html="li"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="site_mobile_modal" v-if="classGridBlockPopUpEnabled">
        <div class="modal_header">
          <button @click="closeModal()">
            <IconBurgerClose></IconBurgerClose>
          </button>
        </div>

        <div class="modal_body">
          <div class="modal_body_inner" v-for="(pop, i) in data">
            <div v-if="showGridBlock == i" class="modal_body_wrapper">
              <div class="modal_background">
                <img :src="pop.images.mobile_image" alt="" />
                <div
                  class="overlay"
                  :class="`overlay_${pop.overlay_color}`"
                ></div>
              </div>
              <div class="modal_body_copy">
                <h3 v-html="pop.title"></h3>
                <p v-html="pop.description"></p>
                <div class="included_classes">
                  <p>Classes include:</p>
                  <div class="class_list">
                    <div v-for="li in pop.class_list" class="list_item">
                      <div class="icon"><IconCheckWhite /></div>
                      <span v-html="li"></span>
                    </div>
                  </div>
                </div>
                <div class="explore_button btn_group">
                  <NuxtLink
                    :to="`/gym-classes/${pop.slug}`"
                    class="btn btn_black_text btn_white_background"
                    v-html="`Explore ${pop.title}`"
                  ></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal_footer">
          <div class="btn_arrow arrow_prev" @click="prevModal()">
            <IconSwiperPrev></IconSwiperPrev>
          </div>
          <div class="btn_arrow arrow_next" @click="nextModal()">
            <IconSwiperNext></IconSwiperNext>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const classGridBlockPopUpEnabled = ref(false);
const showGridBlock = ref(0);
const numberOfSlides = ref(5);
const updateShowGridBlock = (i) => {
  classGridBlockPopUpEnabled.value = true;
  showGridBlock.value = i;
};
const closeModal = () => {
  classGridBlockPopUpEnabled.value = false;
  showGridBlock.value = -1;
};
const nextModal = () => {
  if (numberOfSlides.value == showGridBlock.value) {
    showGridBlock.value = 0;
  }
  showGridBlock.value = showGridBlock.value + 1;
};
const prevModal = () => {
  if (showGridBlock.value == 0) {
    showGridBlock.value = numberOfSlides.value;
  }
  showGridBlock.value = showGridBlock.value - 1;
};
</script>
