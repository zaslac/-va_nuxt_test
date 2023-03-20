<template>
  <div class="map_list_cta btn_group">
    <NuxtLink @click="navigateTo" class="btn btn_red_background btn_white_text">
      <div class="icon"><IconMap /></div>
      Club map view
    </NuxtLink>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();

const navigateTo = () => {
  if (!route.query.map_search_term && route.name === "find-gym-list") {
    router.push({
      path: "/find-gym/",
    });
  }

  if (route.query.map_search_term && route.name === "find-gym-list-search") {
    router.push({
      path: "/find-gym/search",
      query: { map_search_term: route.query.map_search_term },
    });
  }
};
</script>
