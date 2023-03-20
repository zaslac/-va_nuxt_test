<template>
  <div class="blog_landing" id="blog_landing">
    <GlobalPageBlocks
      :data="blogCats[0].acf.global_post_category_blocks"
    ></GlobalPageBlocks>
    <!-- {{ newsletter }} -->
    <!-- <BlocksNewsletterBlock :data="newsletter.blogNewsletter.value" /> -->
  </div>
</template>

<script setup>
const route = useRoute();
const rawBlogCategories = await useBlogCategories();

const newsletter = await useBlogNewsletter();

const termSlug = [route.params.category];
const blogCats = [];
termSlug.forEach(function (val, index, array) {
  const bc = rawBlogCategories.blogCategories.value.find(
    (bcatval) => bcatval.slug == route.params.category
  );
  blogCats.push(bc);
});

useHead({
  bodyAttrs: {
    class: "blurred_nav",
  },
});
</script>
