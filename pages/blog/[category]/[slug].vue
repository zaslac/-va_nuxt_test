<template>
  <div class="single_blog">
    <BlocksBlogPageBanner :data="singleBlog[0]" />
    <BlocksSingleBlogMeta :data="singleBlog[0]" id="single_blog_meta" />
    <GlobalPageBlocks :data="singleBlog[0].acf.blog_blocks"></GlobalPageBlocks>
    <BlocksBlogRelatedPosts :data="singleBlog[0]._embedded" />
    <BlocksBlogPopularTopics />
    <BlocksArticleShare :data="singleBlog[0]" />
    <BlocksNewsletterBlock :data="newsletter.blogNewsletter.value" />
  </div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();
const newsletter = await useBlogNewsletter();

console.log(route.params);
const {
  data: singleBlog,
  error,
  refresh,
  pending,
} = await useAsyncData("singleBlog", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/posts/?_embed&slug=${route.params.slug}`
  );
});

// useHead({
//   bodyAttrs: {
//     class: singleBlog.value[0].acf?.page_nav_settings,
//   },
// });
useHead({
  bodyAttrs: {
    class: "blurred_nav",
  },
});
</script>
