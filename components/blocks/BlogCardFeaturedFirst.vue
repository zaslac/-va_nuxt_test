<template>
  <NuxtLink
    class="blog_item_card first_feature"
    :to="`/blog/${catLink(data)}/${data.slug}`"
  >
    <div
      class="blog_item_image"
      :style="`background-image:url(${data.acf.featured_image_desktop.url})`"
      prefetch
      v-if="data.acf.featured_image_desktop"
    >
      <img src="@/assets/img/shims/blog_image_shim.png" alt="" />
    </div>
    <div
      class="blog_item_image"
      style="background-image: url(/img/placeholders/blog_placeholder.jpg)"
      v-else
      prefetch
    >
      <img src="@/assets/img/shims/blog_image_shim.png" alt="" />
    </div>
    <div class="blog_item_body">
      <div class="blog_item_meta">
        <div class="category">
          <span v-html="catTitle(data)"></span>
        </div>
        <div class="read_time" v-if="data.acf.read_time">
          {{ data.acf.read_time }} Min Read
        </div>
      </div>

      <h3 v-html="data.title.rendered"></h3>
      <div class="btn_group">
        <button
          :to="`/blog/${data.slug}`"
          class="btn btn_white_text btn_grey_outline"
        >
          Read more
        </button>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const catLink = (data) => {
  return data._embedded["wp:term"][0][0].slug;
};
const catTitle = (data) => {
  return data._embedded["wp:term"][0][0].name;
};
// const imagePath = (data) => {
//   if (data.shim == "rect") {
//     return data.rectangle_image;
//   }
//   return data.square_image;
// };
</script>
