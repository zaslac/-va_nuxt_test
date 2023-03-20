<template>
  <div class="club_membership_block">
    <div class="tabbed_content">
      <div class="container">
        <div class="tab_title_holder">
          <div class="tab_list_title">
            <div
              class="tab_title_content"
              :key="1"
              :class="1 == openTable ? 'active' : ''"
              @click="openTable = 1"
            >
              <div class="inner" v-if="!$device.isMobile">
                <div class="title">Adult</div>
                <div class="description">Over 25 years</div>
              </div>
              <div class="inner" v-if="$device.isMobile">
                <div class="title">Adult +25</div>
              </div>
            </div>

            <div
              class="tab_title_content"
              :key="2"
              :class="2 == openTable ? 'active' : ''"
              @click="openTable = 2"
            >
              <div class="inner" v-if="!$device.isMobile">
                <div class="title">Youth</div>
                <div class="description">14 - 25 years</div>
              </div>
              <div class="inner" v-if="$device.isMobile">
                <div class="title">Youth 14-25</div>
              </div>
            </div>

            <div
              class="tab_title_content"
              :key="3"
              :class="3 == openTable ? 'active' : ''"
              @click="openTable = 3"
            >
              <div class="inner" v-if="!$device.isMobile">
                <div class="title">Kids</div>
                <div class="description">Under 14 years</div>
              </div>
              <div class="inner" v-if="$device.isMobile">
                <div class="title">Kids -14</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rate_toggle" v-show="1 == openTable || 2 == openTable">
        <div class="monthly active">
          12 MONTH <span v-if="!$device.isMobile">PLAN</span>
        </div>
        <form>
          <label class="switch">
            <input type="checkbox" v-on:click="toggleRate" />
            <span class="slider round"></span>
          </label>
        </form>
        <div class="anually">
          24 MONTH <span v-if="!$device.isMobile">PLAN</span>
        </div>
      </div>

      <div class="tab_list_content">
        <div class="container">
          <div class="tab_content" :key="1" v-show="1 == openTable">
            <div class="adult_membership_slider">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-if="data.acf.adult_12_month_premier"
                >
                  <div
                    class="membership_card"
                    v-bind:class="{
                      popular: data.acf.adult_popular == 'premier',
                    }"
                  >
                    <div class="inner_content">
                      <div class="title">Premier</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_premier"
                      >
                        R{{ data.acf.adult_12_month_premier }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_premier"
                      >
                        R{{ data.acf.adult_24_month_premier }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Unrestricted access to all clubs (excl. Collection
                        Clubs).
                      </div>

                      <ul>
                        <li>
                          <div class="icon"><IconCheckWhite /></div>
                          Includes Premier membership benefits
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="data.acf.adult_12_month_premier_select"
                >
                  <div
                    class="membership_card"
                    v-bind:class="{
                      popular: data.acf.adult_popular == 'premier_select',
                    }"
                  >
                    <div class="inner_content">
                      <div class="title">Premier Select</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_premier_select"
                      >
                        R{{ data.acf.adult_12_month_premier_select }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_premier_select"
                      >
                        R{{ data.acf.adult_24_month_premier_select }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Unrestricted access to a pre-defined group of clubs.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="data.acf.adult_12_month_full_access"
                >
                  <div
                    class="membership_card"
                    v-bind:class="{
                      popular: data.acf.adult_popular == 'full_access',
                    }"
                  >
                    <div class="inner_content">
                      <div class="title">Club: Full Access</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_full_access"
                      >
                        R{{ data.acf.adult_12_month_full_access }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_full_access"
                      >
                        R{{ data.acf.adult_24_month_full_access }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Unrestricted access to
                        <span v-html="data.title.rendered"></span>.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="data.acf.adult_12_month_off_peak"
                >
                  <div
                    class="membership_card"
                    v-bind:class="{
                      popular: data.acf.adult_popular == 'off_season',
                    }"
                  >
                    <div class="no_rates">
                      <div
                        class="no_rate rate_two_year"
                        v-if="!data.acf.adult_24_month_off_peak"
                      >
                        Club: Off-peak not available on a 24 month commitment
                      </div>
                    </div>

                    <div class="inner_content">
                      <div class="title">Club: Off-Peak</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_off_peak"
                      >
                        R{{ data.acf.adult_12_month_off_peak }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_off_peak"
                      >
                        R{{ data.acf.adult_24_month_off_peak }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Access to
                        <span v-html="data.title.rendered"></span> between 8am
                        and 4pm.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide_pagination adult_membership_slider">
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
          </div>

          <div class="tab_content" :key="3" v-show="2 == openTable">
            <div class="youth_membership_slider">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-if="data.acf.adult_12_month_premier"
                >
                  <div class="membership_card">
                    <div class="inner_content">
                      <div class="title">Premier</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_premier"
                      >
                        R{{ data.acf.adult_12_month_premier }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_premier"
                      >
                        R{{ data.acf.adult_24_month_premier }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Unrestricted access to all clubs (excl. Collection
                        Clubs).
                      </div>

                      <ul>
                        <li>
                          <div class="icon"><IconCheckWhite /></div>
                          Includes Premier membership benefits
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="data.acf['youth_12_month_club_age_8-13']"
                >
                  <div
                    class="membership_card"
                    v-bind:class="{
                      popular: data.acf.youth_popular == 'full_access',
                    }"
                  >
                    <div class="inner_content">
                      <div class="title">Club: Youth</div>

                      <div class="rate_list">
                        <div
                          class="rate_item"
                          v-if="
                            data.acf['youth_12_month_club_age_14-17'] ||
                            data.acf['youth_24_month_club_age_14-17']
                          "
                        >
                          <div class="left">Age 14 - 17</div>
                          <div class="right">
                            <div
                              class="rate rate_one_year active"
                              v-if="data.acf['youth_12_month_club_age_14-17']"
                            >
                              R{{ data.acf["youth_12_month_club_age_14-17"] }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.acf['youth_24_month_club_age_14-17']"
                            >
                              R{{ data.acf["youth_24_month_club_age_14-17"] }}
                              <span>/ MO </span>
                            </div>
                          </div>
                        </div>

                        <div
                          class="rate_item"
                          v-if="
                            data.acf['youth_12_month_club_age_18-21'] ||
                            data.acf['youth_24_month_club_age_18-21']
                          "
                        >
                          <div class="left">Ages 18 - 21</div>
                          <div class="right">
                            <div
                              class="rate rate_one_year active"
                              v-if="data.acf['youth_12_month_club_age_18-21']"
                            >
                              R{{ data.acf["youth_12_month_club_age_18-21"] }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.acf['youth_24_month_club_age_18-21']"
                            >
                              R{{ data.acf["youth_24_month_club_age_18-21"] }}
                              <span>/ MO </span>
                            </div>
                          </div>
                        </div>

                        <div
                          class="rate_item"
                          v-if="
                            data.acf['youth_12_month_club_age_22-25'] ||
                            data.acf['youth_24_month_club_age_22-25']
                          "
                        >
                          <div class="left">Age 22 - 25</div>
                          <div class="right">
                            <div
                              class="rate rate_one_year active"
                              v-if="data.acf['youth_12_month_club_age_22-25']"
                            >
                              R{{ data.acf["youth_12_month_club_age_22-25"] }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.acf['youth_24_month_club_age_22-25']"
                            >
                              R{{ data.acf["youth_24_month_club_age_22-25"] }}
                              <span>/ MO </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="content">
                        Full access to
                        <span v-html="data.title.rendered"></span>.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="
                    data.acf.adult_12_month_full_access &&
                    !data.acf['youth_12_month_club_age_8-13']
                  "
                >
                  <div class="membership_card">
                    <div class="inner_content">
                      <div class="title">Club: Full Access</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_full_access"
                      >
                        R{{ data.acf.adult_12_month_full_access }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_full_access"
                      >
                        R{{ data.acf.adult_24_month_full_access }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Unrestricted access to
                        <span v-html="data.title.rendered"></span>.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="data.acf['youth_12_month_off_peak_age_8-13']"
                >
                  <div
                    class="membership_card"
                    v-bind:class="{
                      popular: data.acf.youth_popular == 'off_season',
                    }"
                  >
                    <div class="no_rates">
                      <div
                        class="no_rate rate_two_year"
                        v-if="!data.acf['youth_24_month_off_peak_age_8-13']"
                      >
                        Club: Off-peak not available on a 24 month commitment
                      </div>
                    </div>

                    <div class="inner_content">
                      <div class="title">Club: Youth Off Peak</div>

                      <div class="rate_list">
                        <div
                          class="rate_item"
                          v-if="
                            data.acf['youth_12_month_off_peak_age_14-17'] ||
                            data.acf['youth_24_month_off_peak_age_14-17']
                          "
                        >
                          <div class="left">Age 14 - 17</div>
                          <div class="right">
                            <div
                              class="rate rate_one_year active"
                              v-if="
                                data.acf['youth_12_month_off_peak_age_14-17']
                              "
                            >
                              R{{
                                data.acf["youth_12_month_off_peak_age_14-17"]
                              }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="
                                data.acf['youth_24_month_off_peak_age_14-17']
                              "
                            >
                              R{{
                                data.acf["youth_24_month_off_peak_age_14-17"]
                              }}
                              <span>/ MO </span>
                            </div>
                          </div>
                        </div>

                        <div
                          class="rate_item"
                          v-if="
                            data.acf['youth:_12_month_off_peak_age_18-21'] ||
                            data.acf['youth_24_month_club_age_18-21']
                          "
                        >
                          <div class="left">Ages 18 - 21</div>
                          <div class="right">
                            <div
                              class="rate rate_one_year active"
                              v-if="
                                data.acf['youth:_12_month_off_peak_age_18-21']
                              "
                            >
                              R{{
                                data.acf["youth:_12_month_off_peak_age_18-21"]
                              }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.acf['youth_24_month_club_age_18-21']"
                            >
                              R{{ data.acf["youth_24_month_club_age_18-21"] }}
                              <span>/ MO </span>
                            </div>
                          </div>
                        </div>

                        <div
                          class="rate_item"
                          v-if="
                            data.acf['youth:_12_month_off_peak_age_22-25'] ||
                            data.acf['youth_24_month_off_peak_age_22-25']
                          "
                        >
                          <div class="left">Age 22 - 25</div>
                          <div class="right">
                            <div
                              class="rate rate_one_year active"
                              v-if="
                                data.acf['youth:_12_month_off_peak_age_22-25']
                              "
                            >
                              R{{
                                data.acf["youth:_12_month_off_peak_age_22-25"]
                              }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="
                                data.acf['youth_24_month_off_peak_age_22-25']
                              "
                            >
                              R{{
                                data.acf["youth_24_month_off_peak_age_22-25"]
                              }}
                              <span>/ MO </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="content">
                        Access to
                        <span v-html="data.title.rendered"></span> between 8am
                        and 4pm.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="swiper-slide"
                  v-if="
                    data.acf.adult_12_month_off_peak &&
                    !data.acf['youth_12_month_off_peak_age_8-13']
                  "
                >
                  <div class="membership_card">
                    <div class="no_rates">
                      <div
                        class="no_rate rate_one_year active"
                        v-if="!data.acf.adult_12_month_off_peak"
                      >
                        Club: Off-peak not available on a 12 month commitment
                      </div>

                      <div
                        class="no_rate rate_two_year"
                        v-if="!data.acf.adult_24_month_off_peak"
                      >
                        Club: Off-peak not available on a 24 month commitment
                      </div>
                    </div>

                    <div class="inner_content">
                      <div class="title">Club: Off-Peak</div>

                      <div
                        class="rate rate_one_year active"
                        v-if="data.acf.adult_12_month_off_peak"
                      >
                        R{{ data.acf.adult_12_month_off_peak }}
                        <span>/ MO </span>
                      </div>
                      <div
                        class="rate rate_two_year"
                        v-if="data.acf.adult_24_month_off_peak"
                      >
                        R{{ data.acf.adult_24_month_off_peak }}
                        <span>/ MO </span>
                      </div>

                      <div class="content">
                        Access to
                        <span v-html="data.title.rendered"></span> between 8am
                        and 4pm.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide_pagination youth_membership_slider">
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
          </div>

          <div class="tab_content" :key="2" v-show="3 == openTable">
            <div
              class="single_club_detail"
              v-if="data.acf.kids_facilities_type.label == 'Club-V Max'"
              v-bind:class="{
                'club-v-max':
                  data.acf.kids_facilities_type.label == 'Club-V Max',
                'club-v': !data.acf.kids_facilities_type.label == 'Club-V Max',
              }"
            >
              <div class="single_club_card">
                <div class="card_image">
                  <div
                    class="image_shim"
                    v-if="data.acf.gym_image"
                    :style="`background-image:url(${data.acf.gym_image})`"
                  >
                    <nuxt-img
                      format="webp"
                      src="/img/shims/club_finder_shim.png"
                    />
                    <div class="image_overlay"></div>
                  </div>
                  <div
                    class="image_shim"
                    v-if="!data.acf.gym_image && data.acf.gym_kids_image"
                    :style="`background-image:url(${data.acf.gym_kids_image})`"
                  >
                    <nuxt-img
                      format="webp"
                      src="/img/shims/club_finder_shim.png"
                    />
                    <div class="image_overlay"></div>
                  </div>
                  <div class="card_age">6 weeks - 13 years old</div>
                </div>
                <div class="card_body">
                  <div class="title">
                    {{ data.acf.kids_facilities_type.label }}
                  </div>
                  <div
                    class="price"
                    v-if="data.acf['kids:_12_month_club_v_premier']"
                  >
                    R {{ data.acf["kids:_12_month_club_v_premier"] }}
                    <div class="small">/ mo</div>
                  </div>

                  <div
                    class="price"
                    v-if="
                      !data.acf['kids:_12_month_club_v_premier'] &&
                      data.acf['kids_12_month_club_v']
                    "
                  >
                    R {{ data.acf["kids_12_month_club_v"] }}
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

            <div
              class="no_kid_facilities"
              v-if="
                !data.acf['kids:_12_month_club_v_premier'] &&
                !data.acf['kids_12_month_club_v']
              "
            >
              <div class="content">
                <div class="title">
                  No Kids Facilities at <br />
                  {{ selectClub.title }}
                </div>
                <div class="description">
                  Unfortunately there are no kids facilities available at this
                  club. Try searching for another club in your area.
                </div>
                <div class="tag">
                  Look out for the <span class="clubv">Club-v</span> and
                  <span class="clubvmax">Club-V Max</span> tags when searching.
                </div>
              </div>
              <div class="image">
                <div class="overlay"></div>
                <img
                  src="https://vasa.ninjastagebox.com/wp-content/uploads/2023/02/Image-Kids-Club-V-Max-1.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="medical_aid_info">
          <div class="logos">
            <img
              src="https://vasa.ninjastagebox.com/wp-content/uploads/2023/03/vitality-tiny.png"
            />
            <img
              src="https://vasa.ninjastagebox.com/wp-content/uploads/2023/03/momentum-tiny.png"
            />
          </div>
          <div class="content">
            Medical aid partner discounts have not yet been applied. &nbsp;<a
              href="/memberships#section_medical_aid_partners"
              >Learn more</a
            >
          </div>
        </div>
      </div>

      <div class="container">
        <div class="membership_cta" v-if="!$device.isMobile">
          <div class="content">Ready to get active?</div>

          <div class="btn_group">
            <a class="btn btn_white_background btn_black_text" href="#"
              >Join now</a
            >
          </div>
        </div>

        <div class="btn_group mobile_btn" v-if="$device.isMobile">
          <a class="btn btn_red_background btn_white_text" href="#">Join now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";

const { isMobile } = useDevice();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function toggleRate() {
  document.querySelectorAll(".rate_one_year").forEach(function (e) {
    e.classList.toggle("active");
  });

  document.querySelectorAll(".rate_two_year").forEach(function (e) {
    e.classList.toggle("active");
  });

  document.querySelector(".monthly").classList.toggle("active");

  document.querySelector(".anually").classList.toggle("active");
}

const openTable = ref(1);

const openClass = ref(1);

const toggleClass = (id) => {
  openClass.value = id;
};

onMounted(() => {
  const AdultMembership = new Swiper(".adult_membership_slider", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".adult_membership_slider .caro_next",
      prevEl: ".adult_membership_slider .caro_prev",
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

  if (AdultMembership.length <= 3 && !isMobile) {
    document.querySelector(
      ".adult_membership_slider .slide_pagination"
    ).style.display = "none";
  }

  const YouthMembership = new Swiper(".youth_membership_slider", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".youth_membership_slider .caro_next",
      prevEl: ".youth_membership_slider .caro_prev",
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

  if (YouthMembership.length <= 3 && !isMobile) {
    document.querySelector(
      ".youth_membership_slider .slide_pagination"
    ).style.display = "none";
  }

  setTimeout(function () {
    var popular = document.querySelectorAll(".popular");

    popular.forEach(function (e) {
      e.parentNode.parentNode.parentNode.classList.add("has-popular");
    });
  }, 200);
});
</script>
