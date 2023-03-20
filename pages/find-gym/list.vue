<template>
  <div class="page_map_list">
    <MapListAccordion :data="regionClubs" v-if="$device.isMobile" />
    <MapListDesktop :data="regionClubs" v-if="!$device.isMobile" />

    <MapListCta />
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const {
  data: regionClubs,
  error,
  refresh,
  pending,
} = await useAsyncData("regionClubs", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/map_region_list`);
});

useHead({
  bodyAttrs: {
    class: "map_page_list",
  },
  title: "Find a Gym - Virgin Active South Africa",
});
</script>
