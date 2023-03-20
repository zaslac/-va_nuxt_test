<template>
  <div class="section_classes_grid">
    <NuxtLink
      v-for="cg in data"
      :key="cg.slug"
      :to="`/gym-classes/${cg.slug}`"
      class="class_category_grid_col"
      :class="`block_${cg.images.shim}`"
    >
      <div class="grid_image">
        <div
          class="grid_image_shim"
          :style="`background-image: url(${imagePath(cg.images)});`"
        >
          <img
            src="@/assets/img/shims/class_landing_square_shim.png"
            alt=""
            v-if="cg.images.shim == 'square' || $device.isMobile"
          />
          <img
            src="@/assets/img/shims/class_landing_rect_shim.png"
            alt=""
            v-if="cg.images.shim == 'rect' && !$device.isMobile"
          />
        </div>
        <div
          class="image_overlay"
          :class="`grid_overlay_${cg.overlay_color}`"
        ></div>
      </div>
      <div class="grid_text_wrapper">
        <h4 v-html="cg.title"></h4>
        <div class="class_desc">
          <p v-html="cg.description"></p>
        </div>

        <div class="included_classes">
          <p>Classes include:</p>
          <div class="class_list">
            <div v-for="li in cg.class_list" class="list_item">
              <div class="icon"><IconCheckWhite /></div>
              <span v-html="li"></span>
            </div>
          </div>
        </div>

        <div class="explore_button btn_group">
          <div
            class="btn btn_white_text btn_transparent_white_outline"
            v-html="`Explore ${cg.title}`"
          ></div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const imagePath = (data) => {
  if (data.shim == "rect") {
    return data.rectangle_image;
  }
  return data.square_image;
};
</script>
