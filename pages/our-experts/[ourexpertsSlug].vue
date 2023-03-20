<template>
  <div class="">
    <GlobalPageBlocks
      :data="singleExpert[0].acf.global_page_blocks"
    ></GlobalPageBlocks>
  </div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();
const { isMobile } = useDevice();

const {
  data: singleExpert,
  error,
  refresh,
  pending,
} = await useAsyncData("singleExpert", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/our_experts/?_embed&slug=${route.params.ourexpertsSlug}`
  );
});
</script>
