<template>
  <div class="gym_finder">
    <div class="container">
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
          <div class="search_header flex" >
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


      <div class="rate_toggle" v-if="selectClub?.id" v-show="1 == openTable || 2 == openTable">
        <div class="monthly active">12 MONTH <span v-if="!$device.isMobile">PLAN</span></div>
        <form>
          <label class="switch" >
            <input type="checkbox" v-on:click="toggleRate">
            <span class="slider round"></span>
          </label>
        </form>
        <div class="anually">24 MONTH <span v-if="!$device.isMobile">PLAN</span></div>
      </div>

      <div class="tab_list_content">

        <div class="">

          <div class="tab_content adult_tab" style="display: block">

            <div v-if="selectClub?.id" class="adult_membership_slider">

              <div class="swiper-wrapper">

<!--                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_premier">-->

<!--                  <div class="membership_card">-->


<!--                    <div class="inner_content">-->

<!--                      <div class="title">Premier</div>-->

<!--                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_premier" >R {{selectClub.membership_details.adult_12_month_premier}} <span>/ MO </span></div>-->
<!--                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_premier" >R {{selectClub.membership_details.adult_24_month_premier}} <span>/ MO </span></div>-->

<!--                      <div class="content">-->
<!--                        Unrestricted access to all clubs (excl. Collection Clubs).-->
<!--                      </div>-->

<!--                      <ul>-->
<!--                        <li>-->
<!--                          <div class="icon"><IconCheckWhite /></div>-->
<!--                          Includes Premier membership benefits-->
<!--                        </li>-->
<!--                      </ul>-->

<!--                    </div>-->

<!--                  </div>-->

<!--                </div>-->

<!--                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_premier_select">-->

<!--                  <div class="membership_card">-->

<!--                    <div class="inner_content">-->

<!--                      <div class="title">Premier Select</div>-->

<!--                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_premier_select" >R {{selectClub.membership_details.adult_12_month_premier_select}} <span>/ MO </span></div>-->
<!--                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_premier_select" >R {{selectClub.membership_details.adult_24_month_premier_select}} <span>/ MO </span></div>-->

<!--                      <div class="content">-->
<!--                        Unrestricted access to a pre-defined group of clubs.-->
<!--                      </div>-->

<!--                    </div>-->

<!--                  </div>-->

<!--                </div>-->

                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_full_access">

                  <div class="membership_card">



                    <div class="inner_content">

                      <div class="title">Club: Full Access</div>

                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_full_access" >R {{selectClub.membership_details.adult_12_month_full_access}} <span>/ MO </span></div>
                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_full_access" >R {{selectClub.membership_details.adult_24_month_full_access}} <span>/ MO </span></div>

                      <div class="content">
                        Unrestricted access to <span v-html="selectClub.title"></span>.
                      </div>

                    </div>

                  </div>

                </div>

                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_off_peak">

                  <div class="membership_card">



                    <div class="no_rates">

                      <div class="no_rate rate_two_year" v-if="!selectClub.membership_details.adult_24_month_off_peak">
                        Club: Off-peak not available on a
                        24 month commitment
                      </div>

                    </div>

                    <div class="inner_content">

                      <div class="title">Club: Off-Peak</div>

                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_off_peak" >R {{selectClub.membership_details.adult_12_month_off_peak}} <span>/ MO </span></div>
                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_off_peak" >R {{selectClub.membership_details.adult_24_month_off_peak}} <span>/ MO </span></div>

<!--                        Access to <span v-html="data.title.rendered"></span> between 8am and 4pm.-->

                    </div>

                  </div>

                </div>

              </div>

              <div class="slide_pagination adult_membership_slider_nav">
                <div class="arrows">
                  <div class="caro_button caro_prev">
                    <IconSwiperPrev></IconSwiperPrev>
                  </div>
                  <div class="caro_button caro_next">
                    <IconSwiperNext></IconSwiperNext>
                  </div>
                </div>
              </div>

            </div>

            <div class="btn_group" v-if="selectClub?.id">
              <a class="btn btn_white_text btn_transparent_white_outline" @click="showAdultPlans = !showAdultPlans">Compare all adult plans</a>
              <a class="btn btn_white_text btn_transparent_white_outline" :href="'/gyms/'+selectClub.slug">View Club</a>
            </div>

          </div>

          <div class="tab_content youth_tab"  style="display: none">

            <div v-if="selectClub?.id" class="youth_membership_slider">

              <div class="swiper-wrapper">

<!--                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_premier">-->

<!--                  <div class="membership_card">-->



<!--                    <div class="inner_content">-->

<!--                      <div class="title">Premier</div>-->

<!--                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_premier" >R {{selectClub.membership_details.adult_12_month_premier}} <span>/ MO </span></div>-->
<!--                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_premier" >R {{selectClub.membership_details.adult_24_month_premier}} <span>/ MO </span></div>-->

<!--                      <div class="content">-->
<!--                        Unrestricted access to all clubs (excl. Collection Clubs).-->
<!--                      </div>-->

<!--                      <ul>-->
<!--                        <li>-->
<!--                          <div class="icon"><IconCheckWhite /></div>-->
<!--                          Includes Premier membership benefits-->
<!--                        </li>-->
<!--                      </ul>-->

<!--                    </div>-->

<!--                  </div>-->

<!--                </div>-->

                <div class="swiper-slide" v-if="selectClub.membership_details['youth_12_month_club_age_8-13']">

                  <div class="membership_card">



                    <div class="inner_content">

                      <div class="title">Club: Youth</div>

                      <div class="rate_list">

                        <div class="rate_item" v-if="selectClub.membership_details['youth_12_month_club_age_14-17'] || selectClub.membership_details['youth_24_month_club_age_14-17']">
                          <div class="left">
                            Age 14 - 17
                          </div>
                          <div class="right">
                            <div class="rate rate_one_year active" v-if="selectClub.membership_details['youth_12_month_club_age_14-17']" >R {{selectClub.membership_details['youth_12_month_club_age_14-17']}} <span>/ MO </span></div>
                            <div class="rate rate_two_year" v-if="selectClub.membership_details['youth_24_month_club_age_14-17']" >R {{selectClub.membership_details['youth_24_month_club_age_14-17']}} <span>/ MO </span></div>
                          </div>
                        </div>

                        <div class="rate_item" v-if="selectClub.membership_details['youth_12_month_club_age_18-21'] || selectClub.membership_details['youth_24_month_club_age_18-21']">
                          <div class="left">
                            Ages 18 - 21
                          </div>
                          <div class="right">
                            <div class="rate rate_one_year active" v-if="selectClub.membership_details['youth_12_month_club_age_18-21']" >R {{selectClub.membership_details['youth_12_month_club_age_18-21']}} <span>/ MO </span></div>
                            <div class="rate rate_two_year" v-if="selectClub.membership_details['youth_24_month_club_age_18-21']" >R {{selectClub.membership_details['youth_24_month_club_age_18-21']}} <span>/ MO </span></div>
                          </div>
                        </div>

                        <div class="rate_item" v-if="selectClub.membership_details['youth_12_month_club_age_22-25'] || selectClub.membership_details['youth_24_month_club_age_22-25']">
                          <div class="left">
                            Age 22 - 25
                          </div>
                          <div class="right">
                            <div class="rate rate_one_year active" v-if="selectClub.membership_details['youth_12_month_club_age_22-25']" >R {{selectClub.membership_details['youth_12_month_club_age_22-25']}} <span>/ MO </span></div>
                            <div class="rate rate_two_year" v-if="selectClub.membership_details['youth_24_month_club_age_22-25']" >R {{selectClub.membership_details['youth_24_month_club_age_22-25']}} <span>/ MO </span></div>
                          </div>
                        </div>

                      </div>

                        <div class="content">
                          Full access to <span v-html="selectClub.title"></span>.
                        </div>

                    </div>

                  </div>

                </div>

                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_full_access && !selectClub.membership_details['youth_12_month_club_age_8-13']">

                  <div class="membership_card">



                    <div class="inner_content">

                      <div class="title">Club: Full Access</div>

                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_full_access" >R {{selectClub.membership_details.adult_12_month_full_access}} <span>/ MO </span></div>
                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_full_access" >R {{selectClub.membership_details.adult_24_month_full_access}} <span>/ MO </span></div>

                      <div class="content">
                        Full access to <span v-html="selectClub.title"></span>.
                      </div>

                    </div>

                  </div>

                </div>

                <div class="swiper-slide" v-if="selectClub.membership_details['youth_12_month_off_peak_age_8-13']">

                  <div class="membership_card">



                    <div class="no_rates">

                      <div class="no_rate rate_two_year" v-if="!selectClub.membership_details['youth_24_month_off_peak_age_8-13']">
                        Club: Off-peak not available on a
                        24 month commitment
                      </div>

                    </div>

                    <div class="inner_content">

                      <div class="title">Club: Off-Peak</div>

                      <div class="rate_list">

                        <div class="rate_item" v-if="selectClub.membership_details['youth_12_month_off_peak_age_14-17'] || selectClub.membership_details['youth_24_month_off_peak_age_14-17']">
                          <div class="left">
                            Age 14 - 17
                          </div>
                          <div class="right">
                            <div class="rate rate_one_year active" v-if="selectClub.membership_details['youth_12_month_off_peak_age_14-17']" >R {{selectClub.membership_details['youth_12_month_off_peak_age_14-17']}} <span>/ MO </span></div>
                            <div class="rate rate_two_year" v-if="selectClub.membership_details['youth_24_month_off_peak_age_14-17']" >R {{selectClub.membership_details['youth_24_month_off_peak_age_14-17']}} <span>/ MO </span></div>
                          </div>
                        </div>

                        <div class="rate_item" v-if="selectClub.membership_details['youth:_12_month_off_peak_age_18-21'] || selectClub.membership_details['youth_24_month_club_age_18-21']">
                          <div class="left">
                            Ages 18 - 21
                          </div>
                          <div class="right">
                            <div class="rate rate_one_year active" v-if="selectClub.membership_details['youth:_12_month_off_peak_age_18-21']" >R {{selectClub.membership_details['youth:_12_month_off_peak_age_18-21']}} <span>/ MO </span></div>
                            <div class="rate rate_two_year" v-if="selectClub.membership_details['youth_24_month_club_age_18-21']" >R {{selectClub.membership_details['youth_24_month_club_age_18-21']}} <span>/ MO </span></div>
                          </div>
                        </div>

                        <div class="rate_item" v-if="selectClub.membership_details['youth:_12_month_off_peak_age_22-25'] || selectClub.membership_details['youth_24_month_off_peak_age_22-25']">
                          <div class="left">
                            Age 22 - 25
                          </div>
                          <div class="right">
                            <div class="rate rate_one_year active" v-if="selectClub.membership_details['youth:_12_month_off_peak_age_22-25']" >R {{selectClub.membership_details['youth:_12_month_off_peak_age_22-25']}} <span>/ MO </span></div>
                            <div class="rate rate_two_year" v-if="selectClub.membership_details['youth_24_month_off_peak_age_22-25']" >R {{selectClub.membership_details['youth_24_month_off_peak_age_22-25']}} <span>/ MO </span></div>
                          </div>
                        </div>

                      </div>

                      <div class="content">
                        Access to <span v-html="selectClub.title"></span> between 8am and 4pm.
                      </div>

                    </div>

                  </div>

                </div>

                <div class="swiper-slide" v-if="selectClub.membership_details.adult_12_month_off_peak && !selectClub.membership_details['youth_12_month_off_peak_age_8-13']">

                  <div class="membership_card">



                    <div class="no_rates">

                      <div class="no_rate rate_one_year active" v-if="!selectClub.membership_details.adult_12_month_off_peak">
                        Club: Off-peak not available on a
                        12 month commitment
                      </div>

                      <div class="no_rate rate_two_year" v-if="!selectClub.membership_details.adult_24_month_off_peak">
                        Club: Off-peak not available on a
                        24 month commitment
                      </div>

                    </div>

                    <div class="inner_content">

                      <div class="title">Club: Off-peak</div>

                      <div class="rate rate_one_year active" v-if="selectClub.membership_details.adult_12_month_off_peak" >R {{selectClub.membership_details.adult_12_month_off_peak}} <span>/ MO </span></div>
                      <div class="rate rate_two_year" v-if="selectClub.membership_details.adult_24_month_off_peak" >R {{selectClub.membership_details.adult_24_month_off_peak}} <span>/ MO </span></div>


                      <div class="content">
                        Access to <span v-html="selectClub.title"></span> between 8am and 4pm.
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="slide_pagination youth_membership_slider_nav">
                <div class="arrows">
                  <div class="caro_button caro_prev">
                    <IconSwiperPrev></IconSwiperPrev>
                  </div>
                  <div class="caro_button caro_next">
                    <IconSwiperNext></IconSwiperNext>
                  </div>
                </div>
              </div>

            </div>

            <div class="btn_group" v-if="selectClub?.id">
              <a class="btn btn_white_text btn_transparent_white_outline" href="">Compare all youth plans</a>
              <a class="btn btn_white_text btn_transparent_white_outline" :href="'/gyms/'+selectClub.slug">View Club</a>
            </div>

          </div>

          <div class="tab_content kids_tab" style="display: none">

            <div class="single_club_detail" v-if="selectClub?.id && selectClub.kids_facilities" v-bind:class="{'club-v-max' : selectClub.kids_facilities_type.label == 'Club-V Max','club-v' : selectClub.kids_facilities_type.label == 'Club-V'}">
              <div class="single_club_card">
                <div class="card_image">
                  <div class="image_shim" v-if="selectClub.gym_image" :style="`background-image:url(${selectClub.gym_image})`">
                    <nuxt-img format="webp" src="/img/shims/club_finder_shim.png" />
                    <div class="image_overlay"></div>
                  </div>
                  <div class="image_shim" v-if="!selectClub.gym_image && selectClub.kids_gym_image" :style="`background-image:url(${selectClub.kids_gym_image})`">
                    <nuxt-img format="webp" src="/img/shims/club_finder_shim.png" />
                    <div class="image_overlay"></div>
                  </div>
                  <div class="card_age">6 weeks - 13 years old</div>
                </div>
                <div class="card_body">
                  <div class="title">{{ selectClub.kids_facilities_type.label }}</div>
                  <div class="price" v-if="selectClub.membership_details['kids:_12_month_club_v_premier']">
                    R {{ selectClub.membership_details['kids:_12_month_club_v_premier'] }}
                    <div class="small">/ mo</div>
                  </div>

                  <div class="price" v-if="!selectClub.membership_details['kids:_12_month_club_v_premier'] && selectClub.membership_details['kids_12_month_club_v']">
                    R {{ selectClub.membership_details['kids_12_month_club_v'] }}
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

            <div class="btn_group" v-if="selectClub?.id">
              <a class="btn btn_white_text btn_transparent_white_outline" href="/childrens-gym">More about our kids offering</a>
              <a class="btn btn_white_text btn_transparent_white_outline" :href="'/gyms/'+selectClub.slug" v-if="selectClub.kids_facilities">View Club</a>
            </div>

          </div>

        </div>

      </div>


    </div>

  </div>

</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
const { isMobile } = useDevice();
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


  if(data.collection_club == true) {
    document.getElementById("collection_club_target").click();
  }

  setTimeout(function() {
    const AdultMembershipFinder = new Swiper(".adult_membership_slider", {
      slidesPerView: 1.14,
      spaceBetween: 24,
      navigation: {
        nextEl: ".adult_membership_slider_nav .caro_next",
        prevEl: ".adult_membership_slider_nav .caro_prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    setTimeout(function() {

      

      if(AdultMembershipFinder.slides.length <= 3 && !isMobile){
        document.querySelector('.adult_membership_slider .slide_pagination').style.display = 'none';
        document.querySelector('.adult_membership_slider .swiper-wrapper').style.justifyContent = 'center';
      }else {
        document.querySelector('.adult_membership_slider .slide_pagination').style.display = 'block';
        document.querySelector('.adult_membership_slider .swiper-wrapper').style.justifyContent = 'unset';
      }
    },400);

    const YouthMembership = new Swiper(".youth_membership_slider", {
      slidesPerView: 1.14,
      spaceBetween: 24,
      navigation: {
        nextEl: ".youth_membership_slider_nav .caro_next",
        prevEl: ".youth_membership_slider_nav .caro_prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    if(YouthMembership.slides.length <= 3 && !isMobile){
      document.querySelector('.youth_membership_slider .slide_pagination').style.display = 'none';
      document.querySelector('.youth_membership_slider .swiper-wrapper').style.justifyContent = 'center';
    }else {
      document.querySelector('.youth_membership_slider .slide_pagination').style.display = 'block';
      document.querySelector('.youth_membership_slider .swiper-wrapper').style.justifyContent = 'unset';
    }

  },200);




};


const openTable = ref(1);

const openClass = ref(1);

const toggleClass = (id) => {
  openClass.value = id;
};

function toggleRate() {

  document.querySelectorAll('.rate_one_year').forEach(function(e){
    e.classList.toggle('active');
  });

  document.querySelectorAll('.rate_two_year').forEach(function(e){
    e.classList.toggle('active');
  });

  document.querySelector('.monthly').classList.toggle('active');

  document.querySelector('.anually').classList.toggle('active');

}

onMounted(() => {



});

</script>
