<template>
  <div class="classes_landing">
    <GlobalPageBlocks
      :title="classes[0].title.rendered"
      :data="classes[0].acf.global_page_blocks"
    ></GlobalPageBlocks>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();
// const route = useRoute();

const {
  data: classes,
  error,
  refresh,
  pending,
} = await useAsyncData("classes", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/pages/?_embed&slug=gym-classes`
  );
});
useHead({
  bodyAttrs: {
    class: "blurred_nav",
  },
});
</script>
