<template>
  <div class="map_side_panel">
    <div class="map_side_panel_wrapper" v-if="data?.length">
      <div class="panel_header" v-if="!route.query.use_location">
        {{ data.length }} results for
        <span>“{{ mapSearchTerm }}”</span>
      </div>
      <div class="panel_header" v-if="route.query.use_location">
        {{ data.length }} results near you
      </div>
      <div class="panel_results">
        <div class="result_card" v-for="club in data">
          <MapClubCard
            :data="club"
            @show-marker="$emit('set-google-marker', $event.cardId)"
          />
        </div>
      </div>
    </div>
    <div class="map_side_panel_wrapper no_results" v-else>
      <div class="panel_header">
        <p class="no_result_text">
          No results for <span>“{{ mapSearchTerm }}”</span>
        </p>
        <p class="try_again">
          Please double check your spelling or try searching a wider area.
        </p>
      </div>
      <div class="panel_results">
        <h4>Locations</h4>
        <div class="location_list">
          <NuxtLink
            v-for="emp_loc in mapClubListRaw.mapDataList.value.club_region"
            class="citem"
            :to="`/find-gym/search/?lat=${emp_loc.lat}&lng=${emp_loc.lng}&search_title=${emp_loc.title}&radius=200`"
          >
            <div class="icon">
              <IconLocationIcon />
            </div>
            {{ emp_loc.title }}
          </NuxtLink>
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
const route = useRoute();
const mapClubListRaw = await useMapSearchData();

const mapSearchTerm = ref(route.query.map_search_term);

watch(
  () => route.query,
  () => {
    if (route.query.map_search) {
      mapSearchTerm.value = route.query.map_search;
    }

    if (route.query.map_search_term) {
      mapSearchTerm.value = route.query.map_search_term;
    }

    if (route.query.search_title) {
      mapSearchTerm.value = route.query.search_title;
    }
  }
);
</script>
