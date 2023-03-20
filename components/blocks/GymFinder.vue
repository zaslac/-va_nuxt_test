<template>
    <div class="container">
      <div class="gym_finder">
      <div class="title">Find a club with kids facilities</div>
      <div class="mobile_toggle" @click="toggleSearch = true">
        <div class="icon"><IconMag /></div>
        <div v-if="!selectClub?.id">Find a Virgin Active gym</div>
        <div v-else>{{ searchTerm }}</div>
        <transition name="fade">
          <div
            class="cancel_search"
            @click="clearSearch"
            v-show="selectClub?.id"
          >
            <div class="icon">
              <IconBurgerClose />
            </div>
          </div>
        </transition>
      </div>

      <transition name="fade">
        <div class="search_panel_wrapper" v-show="toggleSearch" v-bind:class="{'desktop_search_header' : !$device.isMobile}">
          <div class="search_header flex">
            <div class="search_panel flex">
              <div class="icon_wrap mag">
                <IconMag />
              </div>
              <div class="search_area">
                <form action="GET" @submit.prevent="gymSearchCriteria">
                  <input
                    v-model="searchTerm"
                    type="text"
                    placeholder="Search by area or club"
                    name="gym_search"
                    autocomplete="off"
                    @focus="focus"
                    @blur="blur"
                    autofocus
                  />
                </form>
              </div>

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
              @click="toggleSearch = false"
              v-if="$device.isMobile"
            >
              Cancel
            </div>
          </div>

          <div
            class="search_panel_body"
            :class="locationSearch ? 'location_search' : ''"
          >
            <div class="body_empty" v-if="!searchTerm.length > 0">
              <div class="locations">
                <h4>Locations</h4>
                <div class="location_list">
                  <NuxtLink
                    v-for="b_emp in mapClubListRaw.mapDataList.value
                      ?.club_region"
                    class="citem"
                    @click="provinceFilter(b_emp)"
                  >
                    <div class="icon">
                      <IconLocationIcon />
                    </div>
                    {{ b_emp.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="body_results" v-if="!locationSearch">
              <div class="clubs" v-if="filterClubList?.length > 0">
                <h4>Clubs</h4>
                <div class="club_list">
                  <NuxtLink
                    v-for="club in filterClubList"
                    class="citem"
                    @click="clubSelected(club)"
                  >
                    <div class="icon">
                      <IconClubIcon />
                    </div>
                    {{ club.title }}
                    <span
                        v-if="club?.collection_club"
                        class="club_facility collection_facility"
                    >Collection</span
                    >
                    <span
                      v-if="!club?.kids_facilities"
                      class="club_facility no-facility"
                      >No kids facilities</span
                    >
                    <span
                      v-else
                      v-html="club.kids_facilities_type.label"
                      :class="club.kids_facilities_type.val"
                      class="club_facility"
                    ></span>
                  </NuxtLink>
                </div>
              </div>
              <div class="locations" v-if="filterClubLocation?.length > 0">
                <h4>Locations</h4>
                <div class="location_list">
                  <NuxtLink
                    v-for="ml in filterClubLocation"
                    class="citem"
                    @click="provinceFilter(ml)"
                  >
                    <div class="icon">
                      <IconLocationIcon />
                    </div>
                    {{ ml.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="body_results location_search" v-if="locationSearch">
              <div class="panel_header">
                {{ filteredClubs.length }} results for
                <span>“{{ searchTerm }}”</span>
              </div>
              <div class="panel_results">
                <div
                  class="result_card"
                  v-for="club in filteredClubs"
                  @click="clubSelected(club)"
                >
                  <div class="map_club_card">
                    <div class="club_card_inner">
                      <div class="card_title">
                        <div class="title">{{ club.title }}</div>
                        <div class="tag" v-if="club.collection_club">
                          Collection
                        </div>
                        <span
                          v-if="!club?.kids_facilities"
                          class="club_facility no-facility"
                          >No kids facilities</span
                        >
                        <span
                          v-else
                          v-html="club.kids_facilities_type.label"
                          :class="club.kids_facilities_type.val"
                          class="club_facility"
                        ></span>
                      </div>
                      <div class="card_address">
                        {{ club.address }}
                      </div>
                      <div class="card_tel">
                        <div class="icon"><IconPhone /></div>
                        {{ club.phone }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div
        class="single_club_detail"
        v-if="selectClub?.id && selectClub.kids_facilities"
        :class="selectClub.kids_facilities_type.val"
      >
        <div class="single_club_card">
          <div class="card_image">
            <div
              class="image_shim"
              :style="`background-image:url(${selectClub.kids_gym_image})`"
            >
              <nuxt-img format="webp" src="/img/shims/club_finder_shim.png" />

              <div class="image_overlay"></div>
            </div>
            <div class="card_age">6 weeks - 13 years old</div>
          </div>
          <div class="card_body">
            <div class="title">{{ selectClub.kids_facilities_type.label }}</div>
            <div class="price">
              R 189
              <div class="small">/ mo</div>
            </div>
            <ul class="highlights">
              <li>
                <div class="icon"><IconCheckWhite /></div>
                Secure, safe environment with access control
              </li>
              <li>
                <div class="icon"><IconCheckWhite /></div>
                Scientifically developed gym programmes for younger kids
              </li>
              <li>
                <div class="icon"><IconCheckWhite /></div>
                Nursery & care facilities for littles
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div v-if="selectClub?.id && !selectClub.kids_facilities">

          <div class="no_kid_facilities">
            <div class="content">
              <div class="title">No Kids Facilities at <br/> {{selectClub.title}}</div>
              <div class="description">Unfortunately there are no kids facilities available at this club. Try searching for another club in your area.</div>
              <div class="tag">Look out for the <span class="clubv">Club-v</span> and <span class="clubvmax">Club-V Max</span> tags when searching.</div>
            </div>
            <div class="image">
              <div class="overlay"></div>
              <img src="https://vasa.ninjastagebox.com/wp-content/uploads/2023/02/Image-Kids-Club-V-Max-1.jpg"/>
            </div>
          </div>

        </div>

    </div>
  </div>
</template>

<script setup>
const toggleSearch = ref(false);
const mapClubListRaw = await useMapSearchData();
const route = useRoute();
const router = useRouter();
const runTimeConfig = useRuntimeConfig();

const searchTerm = ref("");

const filterClubList = computed((e) => {
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

const filterClubLocation = computed((e) => {
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
  locationSearch.value = false;
  lat.value = "";
  lng.value = "";
};

const lat = ref("");

const lng = ref("");

const radius = ref(50);

const locationSearch = ref(false);

const {
  data: filteredClubs,
  error,
  refresh,
  pending,
} = await useAsyncData("filteredClubs", () => {
  return $fetch(
    `${runTimeConfig.public.cusWp}/get_filtered_map?search_term=${searchTerm.value}&lat=${lat.value}&lng=${lng.value}&radius=${radius.value}`
  );
});

const gymSearchCriteria = () => {
  lat.value = "";
  lng.value = "";
  refresh();
  locationSearch.value = true;
};

const provinceFilter = (data) => {
  lat.value = data.lat;
  lng.value = data.lng;
  radius.value = 250;
  refresh();
  locationSearch.value = true;
  searchTerm.value = data.title;
};

const selectClub = ref([]);

const clubSelected = (data) => {
  searchTerm.value = data.title;
  selectClub.value = data;
  toggleSearch.value = false;
};
</script>
