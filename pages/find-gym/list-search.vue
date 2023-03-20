<template>
  <div class="page_map_list map_list_search">
    <div class="search_header">
      <div class="container">
        <div class="search_param">
          {{ fcl.length }} results for <span>“{{ searchTerm }}”</span>
        </div>
      </div>
    </div>

    <div class="search_body">
      <div class="map_club_card" v-for="data in fcl">
        <div class="club_card_inner">
          <div class="card_left">
            <div class="card_title">
              <div class="title">{{ data.title }}</div>
              <div class="tag" v-if="data.collection_club">Collection</div>
            </div>
            <div class="card_address">
              {{ data.address }}
            </div>
            <div class="card_tel">
              <div class="icon"><IconPhone /></div>
              {{ data.phone }}
            </div>
            <div class="card_opening_times">
              <div
                class="status"
                :class="data.club_times.status_color"
                v-html="data.club_times.status_type"
              ></div>
              &#8226;
              <div class="time" v-html="data.club_times.status_text"></div>
            </div>
          </div>
          <div class="card_right">
            <div class="card_footer btn_group">
              <NuxtLink
                :to="`/gyms/${data.slug}`"
                class="btn btn_grey_outline btn_white_text"
                >View club details
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MapListCta />
</template>
<script setup>
const myMapRef = ref();

const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const searchTerm = computed(() => {
  return route.query.map_search_term;
});

const lat = computed(() => {
  if (route.query.lat) {
    return route.query.lat;
  }
  return "";
});

const lng = computed(() => {
  if (route.query.lng) {
    return route.query.lng;
  }
  return "";
});

const {
  data: fcl,
  error,
  refresh,
  pending,
} = await useAsyncData("fcl", () => {
  return $fetch(
    `${runTimeConfig.public.cusWp}/get_filtered_map?search_term=${searchTerm.value}&lat=${lat.value}&lng=${lng.value}`
  );
});

function getNewClubs() {
  refresh();
}

watch(
  [searchTerm, myMapRef, lat, lng],
  ([sterm, googleMap, latVal, lngVal], [nv1, nv2]) => {
    if (sterm || latVal || lngVal) {
      getNewClubs();
    }
  }
);

const latlng = (data) => {
  const position = {
    lat: parseFloat(data.lat),
    lng: parseFloat(data.lng),
  };
  return position;
};

useHead({
  bodyAttrs: {
    class: "map_page_list",
  },
  title: "Find a Gym - Virgin Active South Africa",
});
</script>
