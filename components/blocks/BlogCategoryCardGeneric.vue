<template>
  <div class="blog_item_card">
    <NuxtLink
      class="blog_item_image"
      :to="`/blog/${catLink(data)}/${data.slug}`"
      :style="`background-image:url(${data.acf.featured_image_desktop.url})`"
    >
      <img src="@/assets/img/shims/blog_image_shim.png" alt="" />
    </NuxtLink>
    <div class="blog_item_body">
      <div class="blog_item_meta">
        <div class="category">
          <span v-html="catTitle(data)"></span>
        </div>
        <div class="read_time">3 Min Read</div>
      </div>
      <NuxtLink :to="`/blog/${catLink(data)}/${data.slug}`">
        <h3 v-html="data.title.rendered"></h3>
      </NuxtLink>
      <div
        class="short_desc"
        v-if="data.excerpt"
        v-html="data.excerpt.rendered"
      ></div>

      <div class="blog_item_tags">
        <NuxtLink v-for="tag in tags(data)" to="">
          {{ tag.name }}
        </NuxtLink>
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

const catLink = (data) => {
  return data._embedded["wp:term"][0][0].slug;
};
const catTitle = (data) => {
  return data._embedded["wp:term"][0][0].name;
};

const tags = (data) => {
  return data._embedded["wp:term"][1];
};

const tagTitle = (data) => {
  //return data._embedded["wp:term"][0][0].name;
};
// const imagePath = (data) => {
//   if (data.shim == "rect") {
//     return data.rectangle_image;
//   }
//   return data.square_image;
// };
</script>
