<template>
  <div class="classes_category_landing">
    <GlobalPageBlocks
      :data="classType[0].acf.global_page_blocks"
    ></GlobalPageBlocks>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const {
  data: classType,
  error,
  refresh,
  pending,
} = await useAsyncData("classType", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/class_type/?_embed&slug=${route.params.slug}`
  );
});

useHead({
  bodyAttrs: {
    class: "blurred_nav",
  },
});
</script>
