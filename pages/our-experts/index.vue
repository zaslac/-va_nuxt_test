<template>
  <div class="blog_landing">
    <GlobalPageBlocks
        :title="blog[0].title.rendered"
        :data="blog[0].acf.global_page_blocks"
    ></GlobalPageBlocks>
  </div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
// const route = useRoute();

const {
  data: blog,
  error,
  refresh,
  pending,
} = await useAsyncData("blog", () => {
  return $fetch(`${runTimeConfig.public.baseWp}/pages/?_embed&slug=our-experts`);
});
</script>
