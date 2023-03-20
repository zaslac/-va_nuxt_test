<template>
  <div class="blog_popular_topics">
    <div class="container">
      <h3>Popular topics</h3>
      <div class="popuar_topics">
        <NuxtLink v-for="tag in tags" :to="`/blog/?tag_filter=${tag.name}`">{{
          tag.name
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const {
  data: tags,
  error,
  refresh,
  pending,
} = await useAsyncData("tags", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/tags/?orderby=count&order=desc&per_page=12`
  );
});
</script>
