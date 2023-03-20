<template>
  <div class="main_membership_component">
    <div class="container">
      <div class="age_tabbed_component">
        <div class="tabbed_content">
          <div class="tab_title_holder">
            <div class="tab_list_title">
              <div class="tab_list_title">
                <div
                  class="tab_title_content"
                  :key="1"
                  :class="1 == openTable ? 'active' : ''"
                  @click="openTable = 1"
                  v-on:click="openAdult"
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
                  v-on:click="openYouth"
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
                  @click="(openTable = 3), (openMemTable = 6)"
                  v-on:click="openChild"
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
        </div>
      </div>

      <div class="membership_tab_titles">
        <div class="tabbed_content">
          <div class="tab_title_holder">
            <div class="tab_list_title">
              <div class="tab_list_title">
                <div
                  class="tab_title_content"
                  :key="4"
                  :class="4 == openMemTable ? 'active' : ''"
                  @click="openMemTable = 4" id="collection_club_target"
                >
                  <div class="inner">
                    <div class="title">Collection</div>
                    <div
                      class="description"
                      v-if="!$device.isMobile"
                      v-html="data.collection_title_description"
                    ></div>
                  </div>
                </div>

                <div
                  class="tab_title_content"
                  :key="5"
                  :class="5 == openMemTable ? 'active' : ''"
                  @click="openMemTable = 5"
                >
                  <div class="inner">
                    <div class="title">Premier</div>
                    <div
                      class="description"
                      v-if="!$device.isMobile"
                      v-html="data.premier_title_description"
                    ></div>
                  </div>
                </div>

                <div
                  class="tab_title_content"
                  :key="6"
                  :class="6 == openMemTable ? 'active' : ''"
                  @click="openMemTable = 6"
                >
                  <div class="inner">
                    <div class="title">Club</div>
                    <div
                      class="description"
                      v-if="!$device.isMobile"
                      v-html="data.club_title_description"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container membership-container">
      <div class="membership_content_tabs">
        <div class="tab_list_content">
          <div class="">
            <div class="tab_content" :key="4" v-show="4 == openMemTable">
              <div class="membership_tab_content">
                <div class="title">Collection</div>
                <div
                  class="description"
                  v-html="data.collection_full_description"
                ></div>
              </div>

              <div
                class="rate_toggle"
                v-show="1 == openTable || 2 == openTable"
              >
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
                <div class="tab_content" :key="1" v-show="1 == openTable">
                  <div class="collection_slider">
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide"
                        v-if="collections.length > 0"
                        v-for="collection in collections"
                      >
                        <div class="collection_card membership_card">
                          <div class="inner_content">
                            <div class="club_image">
                              <img :src="collection.acf.gym_image" alt="" />
                              <div
                                class="location"
                                v-html="collection.title.rendered"
                              ></div>
                            </div>

                            <div class="collection_content">
                              <div
                                class="title"
                                v-html="collection.title.rendered"
                              ></div>

                              <div
                                class="rate rate_one_year active"
                                v-if="collection.acf.collection_rate_12_month"
                              >
                                R {{ collection.acf.collection_rate_12_month }}
                                <span>/ MO </span>
                              </div>
                              <div
                                class="rate rate_two_year"
                                v-if="collection.acf.collection_rate_24_month"
                              >
                                R {{ collection.acf.collection_rate_24_month }}
                                <span>/ MO </span>
                              </div>

                              <a class="class_list_link" :href="collection.link"
                                >View club details</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="slide_pagination collection_slider_nav">
                      <div class="arrows">
                        <div class="caro_button caro_prev">
                          <IconSwiperPrev></IconSwiperPrev>
                        </div>
                        <div class="caro_button caro_next">
                          <IconSwiperNext></IconSwiperNext>
                        </div>
                      </div>
                    </div>
                    <div class="medical_aid_info">
                      <div class="logos">
                        <img v-for="logo in data.medical_aid_logos" :src="logo.logo.url" />
                      </div>
                      <div class="content rate_one_year active"> <span v-html="data.medical_aid_content"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                      <div class="content rate_two_year"> <span v-html="data.medical_aid_content_24_month"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                    </div>
                    <div class="collection_disclaimer" v-if="data.collection_disclaimer" v-html="data.collection_disclaimer"></div>
                  </div>
                </div>

                <div class="tab_content" :key="2" v-show="2 == openTable">
                  <div class="collection_slider_youth">
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide"
                        v-if="collections.length > 0"
                        v-for="collection in collections"
                      >
                        <div class="collection_card membership_card">
                          <div class="inner_content">
                            <div class="club_image">
                              <img :src="collection.acf.gym_image" alt="" />
                              <div
                                class="location"
                                v-html="collection.title.rendered"
                              ></div>
                            </div>

                            <div class="collection_content">
                              <div
                                class="title"
                                v-html="collection.title.rendered"
                              ></div>

                              <div
                                class="rate rate_one_year active"
                                v-if="collection.acf.collection_rate_12_month"
                              >
                                R {{ collection.acf.collection_rate_12_month }}
                                <span>/ MO </span>
                              </div>
                              <div
                                class="rate rate_two_year"
                                v-if="collection.acf.collection_rate_24_month"
                              >
                                R {{ collection.acf.collection_rate_24_month }}
                                <span>/ MO </span>
                              </div>

                              <a class="class_list_link" :href="collection.link"
                                >View club details</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="slide_pagination collection_slider_youth_nav">
                      <div class="arrows">
                        <div class="caro_button caro_prev">
                          <IconSwiperPrev></IconSwiperPrev>
                        </div>
                        <div class="caro_button caro_next">
                          <IconSwiperNext></IconSwiperNext>
                        </div>
                      </div>
                    </div>

                    <div class="medical_aid_info">
                      <div class="logos">
                        <img v-for="logo in data.medical_aid_logos" :src="logo.logo.url" />
                      </div>
                      <div class="content rate_one_year active"> <span v-html="data.medical_aid_content"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                      <div class="content rate_two_year"> <span v-html="data.medical_aid_content_24_month"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                    </div>

                    <div class="collection_disclaimer" v-if="data.collection_disclaimer" v-html="data.collection_disclaimer"></div>

                  </div>
                </div>

                <div class="tab_content" :key="3" v-show="3 == openTable">
                  Kids Collect
                </div>
              </div>
            </div>

            <div class="tab_content" :key="4" v-show="5 == openMemTable">
              <div class="membership_tab_content">
                <div class="title">Premier</div>
                <div
                  class="description"
                  v-html="data.premier_full_description"
                ></div>
              </div>

              <div
                class="rate_toggle"
                v-show="1 == openTable || 2 == openTable"
              >
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
                <div class="tab_content" :key="1" v-show="1 == openTable">
                  <div class="adult_premier_slider">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="membership_card popular">
                          <div class="inner_content">
                            <div class="title">Premier</div>

                            <div
                              class="rate rate_one_year active"
                              v-if="data.premier_12_month_rate"
                            >
                              R {{ data.premier_12_month_rate }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.premier_24_month_rate"
                            >
                              R {{ data.premier_24_month_rate }}
                              <span>/ MO </span>
                            </div>

                            <div class="content">
                              Unrestricted access to all clubs (excl. Collection
                              Clubs).
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide">
                        <div class="membership_card">
                          <div class="inner_content">
                            <div class="title">Premier Select</div>

                            <div
                              class="rate rate_one_year active"
                              v-if="data.premier_select_12_month_rate"
                            >
                              R {{ data.premier_select_12_month_rate }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.premier_select_24_month_rate"
                            >
                              R {{ data.premier_select_24_month_rate }}
                              <span>/ MO </span>
                            </div>

                            <div class="content">
                              Unrestricted access to a pre-defined group of
                              clubs.
                            </div>

                            <a class="class_list_link" href="#"
                              >See full club list</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="$device.isMobile"
                      class="slide_pagination adult_premier_slider_nav"
                    >
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

                  <div class="btn_group">
                    <a
                      class="btn btn_white_text btn_transparent_white_outline"
                      @click="showAdultPlans = !showAdultPlans"
                      >Compare all adult plans</a
                    >
                  </div>

                  <div class="medical_aid_info">
                    <div class="logos">
                      <img v-for="logo in data.medical_aid_logos" :src="logo.logo.url" />
                    </div>
                    <div class="content rate_one_year active"> <span v-html="data.medical_aid_content"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                    <div class="content rate_two_year"> <span v-html="data.medical_aid_content_24_month"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                  </div>

                </div>

                <div class="tab_content" :key="2" v-show="2 == openTable">
                  <div class="youth_premier_slider">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="membership_card">
                          <div class="inner_content">
                            <div class="title">Premier</div>

                            <div
                              class="rate rate_one_year active"
                              v-if="data.premier_12_month_rate"
                            >
                              R {{ data.premier_12_month_rate }}
                              <span>/ MO </span>
                            </div>
                            <div
                              class="rate rate_two_year"
                              v-if="data.premier_24_month_rate"
                            >
                              R {{ data.premier_24_month_rate }}
                              <span>/ MO </span>
                            </div>

                            <div class="content">
                              Unrestricted access to all clubs (excl. Collection
                              Clubs).
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--                        <div class="swiper-slide">-->

                      <!--                          <div class="membership_card">-->

                      <!--                            <div class="inner_content">-->

                      <!--                              <div class="title">Premier Select</div>-->

                      <!--                              <div class="rate rate_one_year active" v-if="data.premier_select_12_month_rate" >R {{data.premier_select_12_month_rate}} <span>/ MO </span></div>-->
                      <!--                              <div class="rate rate_two_year" v-if="data.premier_select_24_month_rate" >R {{data.premier_select_24_month_rate}} <span>/ MO </span></div>-->

                      <!--                             <div class="content">-->
                      <!--                               Unrestricted access to a pre-defined group of clubs.-->
                      <!--                             </div>-->

                      <!--                              <a href="" class="class_list_link">See full club list</a>-->

                      <!--                            </div>-->

                      <!--                          </div>-->

                      <!--                        </div>-->

                      <div class="swiper-slide">
                        <div class="membership_card popular">
                          <div class="inner_content">
                            <div class="title">Youth Premier</div>

                            <div class="rate_list">
                              <div
                                class="rate_item"
                                v-for="rate in data.youth_premier_rates"
                              >
                                <div class="left" v-html="rate.age"></div>

                                <div class="right">
                                  <div class="rate rate_one_year active">
                                    R {{ rate.rate_12_month }}
                                    <span>/ MO </span>
                                  </div>
                                  <div class="rate rate_two_year">
                                    R {{ rate.rate_24_month }}
                                    <span>/ MO </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="content">
                              Workout wherever you are with full access to all
                              SA clubs (excl. Collection Clubs)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="$device.isMobile"
                      class="slide_pagination youth_premier_slider_nav"
                    >
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

                  <div class="btn_group">
                    <a
                      class="btn btn_white_text btn_transparent_white_outline"
                      @click="showYouthPlans = !showYouthPlans"
                      >Compare all youth plans</a
                    >
                  </div>

                  <div class="medical_aid_info">
                    <div class="logos">
                      <img v-for="logo in data.medical_aid_logos" :src="logo.logo.url" />
                    </div>
                    <div class="content rate_one_year active"> <span v-html="data.medical_aid_content"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                    <div class="content rate_two_year"> <span v-html="data.medical_aid_content_24_month"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                  </div>

                </div>

                <div class="tab_content" :key="3" v-show="3 == openTable">
                  Kids Premier
                </div>
              </div>
            </div>

            <div class="tab_content" :key="4" v-show="6 == openMemTable">
              <div class="membership_tab_content">
                <div class="title">Club</div>
                <div
                  class="description"
                  v-html="data.club_full_description"
                ></div>
              </div>

              <GymFinderMembership />

              <div class="medical_aid_info">
                <div class="logos">
                  <img v-for="logo in data.medical_aid_logos" :src="logo.logo.url" />
                </div>
                <div class="content rate_one_year active"> <span v-html="data.medical_aid_content"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
                <div class="content rate_two_year"> <span v-html="data.medical_aid_content_24_month"></span> &nbsp;<a href="#section_medical_aid_partners">Learn more</a></div>
              </div>

            </div>
          </div>
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

  <transition name="fade">
    <div class="adult_membership_plans" v-if="showAdultPlans">
      <div class="close_pop" @click="showAdultPlans = !showAdultPlans"></div>
      <div class="container">
        <AdultCompareDesktop v-if="showAdultPlans" />
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div class="adult_membership_plans" v-if="showYouthPlans">
      <div class="close_pop" @click="showYouthPlans = !showYouthPlans"></div>
      <div class="container">
        <YouthCompareDesktop v-if="showYouthPlans" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
import GymFinderMembership from "./GymFinderMembership";
import AdultCompareDesktop from "./AdultCompareDesktop";
import YouthCompareDesktop from "./YouthCompareDesktop";
const runTimeConfig = useRuntimeConfig();

const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data: rawClubs, pending } = await useAsyncData("rawClubs", () =>
  $fetch(`${runTimeConfig.public.baseWp}/clubs/?_embed&per_page=100`)
);

const collections = [];

// watch(rawClubs, (newPosts) => {
props.data.collection_clubs.forEach(function (val, index, array) {
  const f = rawClubs.value.find((exp) => exp.id == val);
  collections.push(f);
});
// });

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

const openMemTable = ref(5);

const openMemClass = ref(5);

const toggleMemClass = (id) => {
  openMemClass.value = id;
};

const showAdultPlans = ref(false);
const showYouthPlans = ref(false);

//NEED TO BE REDONE VERY BADD
function openAdult() {
  document.querySelector(".adult_tab").style.display = "block";
  document.querySelector(".youth_tab").style.display = "none";
  document.querySelector(".kids_tab").style.display = "none";
  document.querySelector(".membership_tab_titles").style.display = "block";
}

function openYouth() {
  document.querySelector(".adult_tab").style.display = "none";
  document.querySelector(".youth_tab").style.display = "block";
  document.querySelector(".kids_tab").style.display = "none";
  document.querySelector(".membership_tab_titles").style.display = "block";
}

function openChild() {
  document.querySelector(".adult_tab").style.display = "none";
  document.querySelector(".youth_tab").style.display = "none";
  document.querySelector(".kids_tab").style.display = "block";
  document.querySelector(".membership_tab_titles").style.display = "none";
}

onMounted(() => {
  const AdultPremier = new Swiper(".adult_premier_slider", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".adult_premier_slider_nav .caro_next",
      prevEl: ".adult_premier_slider_nav .caro_prev",
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

  setTimeout(function () {
    if (AdultPremier.slides.length <= 3 && !isMobile) {
      // document.querySelector('.adult_premier_slider .slide_pagination').style.display = 'none';
      document.querySelector(
        ".adult_premier_slider .swiper-wrapper"
      ).style.justifyContent = "center";
    }
  }, 400);

  const YouthPremier = new Swiper(".youth_premier_slider", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".youth_premier_slider_nav .caro_next",
      prevEl: ".youth_premier_slider_nav .caro_prev",
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

  setTimeout(function () {
    if (!isMobile) {
      document.querySelector(
        ".youth_premier_slider .swiper-wrapper"
      ).style.justifyContent = "center";
      // document.querySelector(".youth_premier_slider .slide_pagination").style.display = "none";
    }
  }, 200);

  const CollectionSlider = new Swiper(".collection_slider", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".collection_slider_nav .caro_next",
      prevEl: ".collection_slider_nav .caro_prev",
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

  const CollectionSliderYouth = new Swiper(".collection_slider_youth", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".collection_slider_youth_nav .caro_next",
      prevEl: ".collection_slider_youth_nav .caro_prev",
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

  if (CollectionSlider.length <= 3 && !isMobile) {
    document.querySelector(
      ".collection_slider .slide_pagination"
    ).style.display = "none";
    document.querySelector(
      ".collection_slider .swiper-wrapper"
    ).style.justifyContent = "center";
  }

  //create a console log function for me

  setTimeout(function () {
    var popular = document.querySelectorAll(".popular");

    popular.forEach(function (e) {
      e.parentNode.parentNode.parentNode.classList.add("has-popular");
    });
  }, 200);
});
</script>
