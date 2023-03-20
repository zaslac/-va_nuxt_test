<template>
  <div class="blog_related_posts">
    <div class="container">
      <div class="section_title">
        <h5>explore</h5>
        <h2>Related content</h2>
      </div>
      <div class="blog_article_main">
        <div
          v-for="(bitem, bindex) in blogTermPosts"
          :class="`article artilce-${bitem.id}`"
        >
          <BlocksBlogCardGeneric :data="bitem" />
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
const runTimeConfig = useRuntimeConfig();

const termSlug = props.data["wp:term"][0][0].id;

const {
  data: blogTermPosts,
  error,
  refresh,
  pending,
} = await useAsyncData("blogTermPosts", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/posts/?_embed&categories=${termSlug}&per_page=3`
  );
});
</script>
