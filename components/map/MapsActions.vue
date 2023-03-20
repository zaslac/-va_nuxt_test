<template>
  <div class="map_actions">
    <NuxtLink
      class="action_button map_use_location"
      v-if="$device.isMobile"
      @click="navigateTo"
    >
      <div class="icon"><IconMapList /></div>
    </NuxtLink>
    <button class="action_button map_view_as_list" v-if="$device.isMobile">
      <div class="icon"><IconMapLocation /></div>
    </button>

    <div class="btn_group map_list_cta" v-if="!$device.isMobile">
      <NuxtLink
        class="btn btn_black_background btn_white_text"
        @click="navigateTo"
      >
        <div class="icon"><IconMapList /></div>
        View club list
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();

const navigateTo = () => {
  if (!route.query.map_search_term && route.name === "find-gym") {
    router.push({
      path: "/find-gym/list",
    });
  }

  if (route.query.map_search_term && route.name === "find-gym-search") {
    router.push({
      path: "/find-gym/list-search",
      query: { map_search_term: route.query.map_search_term },
    });
  }
  if (route.query.lat && route.query.lng && route.name === "find-gym-search") {
    router.push({
      path: "/find-gym/list-search",
      query: { lat: route.query.lat, lng: route.query.lng },
    });
  }
};
</script>
