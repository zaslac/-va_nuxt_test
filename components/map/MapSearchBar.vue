<template>
  <transition name="fade-in-down">
    <div class="map_search_bar">
      <div class="container">
        <div class="search_header flex">
          <div class="search_panel flex" :class="searchFocused">
            <div class="icon_wrap mag" v-if="!searching">
              <div class="icon"><IconMag /></div>
            </div>
            <div class="icon searching" v-if="searching">
              <span class="loader"></span>
            </div>
            <div class="search_area">
              <form action="GET" @submit.prevent="mapSearchCriteria">
                <input
                  v-model="searchTerm"
                  type="text"
                  :placeholder="searchPlaceholder"
                  name="map_search"
                  autocomplete="off"
                  @focus="focus"
                  @blur="blur"
                  autofocus
                />
              </form>
            </div>

            <form
              action="GET"
              @submit.prevent="mapGeoFence"
              v-if="!$device.isMobile"
            >
              <input type="hidden" name="use_current_location" value="true" />

              <button class="use_location_button" v-if="!$device.isMobile">
                <div class="icon"><IconMapLocation /></div>

                Use current location
              </button>
            </form>

            <transition name="fade">
              <div
                class="cancel_search"
                @click="clearSearch"
                v-show="searchTerm != ''"
              >
                <div class="icon">
                  <IconBurgerClose />
                </div>
              </div>
            </transition>
          </div>
          <div
            class="button_panel"
            @click="$emit('close-map-search')"
            v-if="$device.isMobile"
          >
            Cancel
          </div>
        </div>

        <div id="map_search_body" class="search_body" v-if="searchTerm != ''">
          <div
            class="search_result_table club_results"
            v-if="
              filteredMapList?.length > 0 || filteredMapLocation?.length > 0
            "
          >
            <div class="clubs" v-if="filteredMapList?.length > 0">
              <h4>Clubs</h4>
              <div class="club_list">
                <NuxtLink
                  v-for="club in filteredMapList"
                  class="citem"
                  :to="`/gyms/${club.slug}`"
                >
                  <div class="icon">
                    <IconClubIcon />
                  </div>
                  <div v-html="highlightText(club.title)"></div>
                </NuxtLink>
              </div>
            </div>
            <div class="locations" v-if="filteredMapLocation?.length > 0">
              <h4>Locations</h4>
              <div class="location_list">
                <NuxtLink
                  v-for="ml in filteredMapLocation"
                  class="citem"
                  :to="`/find-gym/search/?lat=${ml.lat}&lng=${ml.lng}&search_title=${ml.title}`"
                  @click="clearSearchAndUpdatePlaceholder(ml.title)"
                >
                  <div class="icon">
                    <IconLocationIcon />
                  </div>
                  <div v-html="highlightText(ml.title)"></div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="search_result_table club_results no_results" v-else>
            <div class="no_result_text">
              No results for <span>“{{ searchTerm }}”</span>
            </div>
            <div class="try_again">
              Please double check your spelling or try searching a wider area.
            </div>
            <div class="locations">
              <h4>Locations</h4>
              <div class="location_list">
                <NuxtLink
                  v-for="emp_loc in mapClubListRaw.mapDataList.value
                    .club_region"
                  class="citem"
                  @click="clearSearchAndUpdatePlaceholder(emp_loc.title)"
                  :to="`/find-gym/search/?lat=${emp_loc.lat}&lng=${emp_loc.lng}&map_search_term=${emp_loc.title}&radius=200`"
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
      </div>
    </div>
  </transition>
</template>

<script setup>
const emit = defineEmits(["close-map-search"]);
const route = useRoute();
const router = useRouter();
const toggleSearch = ref(false);
const mapClubListRaw = await useMapSearchData();
const searchTerm = ref("");
const searchPlaceholder = ref("Search by area or club");
const searchFocused = ref("");

const searching = ref(false);

const filteredMapList = computed((e) => {
  if (
    searchTerm.value != "" &&
    searchTerm.value &&
    searchTerm.value.length > 2
  ) {
    let mapClubListFormatted = mapClubListRaw.mapDataList.value.club_list;
    mapClubListFormatted = mapClubListFormatted.filter((item) => {
      return item.title.toUpperCase().includes(searchTerm.value.toUpperCase());
    });

    return mapClubListFormatted;
  }
});

const filteredMapLocation = computed((e) => {
  if (
    searchTerm.value != "" &&
    searchTerm.value &&
    searchTerm.value.length > 2
  ) {
    let mapGymListFormatted = mapClubListRaw.mapDataList.value.club_region;
    mapGymListFormatted = mapGymListFormatted.filter((item) => {
      return item.title.toUpperCase().includes(searchTerm.value.toUpperCase());
    });

    return mapGymListFormatted;
  }
});

const clearSearch = () => {
  searchTerm.value = "";
};
const clearSearchAndUpdatePlaceholder = (data) => {
  searchTerm.value = "";
  searchPlaceholder.value = data;
};

const focus = () => {
  searchFocused.value = "focused";
};
const blur = () => {
  searchFocused.value = "";
};
const mapSearchCriteria = () => {
  searching.value = true;
  searchPlaceholder.value = searchTerm.value;

  if (route.name === "find-gym-list" || route.name === "find-gym-list-search") {
    router.push({
      path: "/find-gym/list-search",
      query: { map_search_term: searchTerm.value },
    });
  } else {
    router.push({
      path: "/find-gym/search",
      query: { map_search_term: searchTerm.value },
    });
  }
  emit("close-map-search", "");
  clearSearch();
  toggleSearch.value = false;
  searching.value = false;
};

const success = (position) => {
  searching.value = false;
  router.push({
    path: "/find-gym/search",
    query: {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      use_location: true,
    },
  });
};

const error = (err) => {
  console.log(error);
};
const mapGeoFence = () => {
  searching.value = true;
  navigator.geolocation.getCurrentPosition(success, error);
  clearSearch();
};

const highlightText = (words) => {
  let reg = new RegExp(searchTerm.value, "gi");
  return words.replace(reg, function (str) {
    return "<strong >" + str + "</strong>";
  });
};
</script>
