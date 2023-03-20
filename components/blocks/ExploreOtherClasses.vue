<template>
  <div class="explore_other_class_cats classes_grid">
    <div class="container">
      <div class="section_title">
        <h5>${Sectionoverview}</h5>
        <h2>Explore our other <br />gym classes</h2>
        <div class="btn_group">
          <NuxtLink to="#!" class="btn btn_red_outline btn_white_text"
            >View all categories</NuxtLink
          >
        </div>
      </div>
      <BlocksExploreOtherClassesMobile :data="cats" v-if="$device.isMobile" />
      <BlocksExploreOtherClassesDesktop :data="cats" v-if="!$device.isMobile" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { isMobile } = useDevice();

const runTimeConfig = useRuntimeConfig();

const data = ref({
  slug: route.params.slug,
});

const {
  data: cats,
  error,
  refresh,
  pending,
} = await useAsyncData("cats", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/get_two_classes_types/`, {
    method: "POST",
    body: JSON.stringify(data.value),
  });
});
</script>
