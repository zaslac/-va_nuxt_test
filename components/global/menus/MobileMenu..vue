<template>
  <div class="map_page_mobile_nav" v-if="showMapSearch">
    <div class="container flex">
      <div class="search_button" @click="toggleMapSearchModal = true">
        <div class="icon"><IconMag /></div>
        Find a Virgin Active gym
      </div>
      <div class="nav_toggle_open" @click="toggleMobileMenu = true">
        <div class="icon">
          <IconBurgerOpen></IconBurgerOpen>
        </div>
      </div>
    </div>
  </div>

  <div class="nav_mobile_wrapper" v-else>
    <div class="container flex">
      <div class="site_logo">
        <NuxtLink
          to="/"
          title="The official logo of Virgin Active South Africa, which represents 130+ world-class gyms across South Africa that offer cheap gym memberships, personal trainers, boxing, pilates, HIIT, swimming, yoga, cycling and other classes."
          ><IconWebLogo></IconWebLogo
        ></NuxtLink>
      </div>
      <div class="get_started_cta">
        <div class="btn_group">
          <NuxtLink
            :to="data.nav_cta.get_started_cta.url"
            class="btn btn_red_outline btn_white_text"
            >{{ data.nav_cta.get_started_cta.title }}</NuxtLink
          >
        </div>
      </div>
      <button class="burger" @click="toggleMobileMenu = true">
        <IconBurgerOpen></IconBurgerOpen>
      </button>
    </div>
  </div>
  <transition name="fade">
    <div class="nav_mobile_menu" v-show="toggleMobileMenu">
      <div class="container">
        <div class="mobile_nav_menu_header flex">
          <div class="site_logo">
            <NuxtLink
              to="/"
              title="The official logo of Virgin Active South Africa, which represents 130+ world-class gyms across South Africa that offer cheap gym memberships, personal trainers, boxing, pilates, HIIT, swimming, yoga, cycling and other classes."
              ><IconWebLogoDark></IconWebLogoDark
            ></NuxtLink>
          </div>

          <button class="burger" @click="toggleMobileMenu = false">
            <IconBurgerClose></IconBurgerClose>
          </button>
        </div>

        <div class="mobile_menu_wrapper">
          <ul class="main_menu">
            <li v-for="(main_menu, index) in data.bottom_nav" :key="index">
              <NuxtLink :to="main_menu.menu_item.url" class="flex">
                <span
                  @click="navLinkClick(main_menu, index, 'bottom_menu_mega_')"
                  >{{ main_menu.menu_item.title }}</span
                >
                <span v-if="main_menu.sub_menu != 'none'" class="menu_icon"
                  ><IconMobileNavIcon
                /></span>
              </NuxtLink>
              <transition name="fade">
                <MenusMegaNavThreeBlockFull
                  v-if="
                    main_menu.sub_menu == 'three_block_full' &&
                    megaMenuToShow == `bottom_menu_mega_${index}`
                  "
                  :menu="main_menu.three_block_full"
                  :parent-title="main_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
              <transition name="fade-in-up">
                <MenusMegaNavFourBlockFull
                  v-if="
                    main_menu.sub_menu == 'four_block_full' &&
                    megaMenuToShow == `bottom_menu_mega_${index}`
                  "
                  :menu="main_menu.four_column_blocks"
                  :parent-title="main_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
              <transition name="fade">
                <MenusMegaNavThreeBlockList
                  v-if="
                    main_menu.sub_menu == 'three_block_list' &&
                    megaMenuToShow == `bottom_menu_mega_${index}`
                  "
                  :menu="main_menu.three_block_list"
                  :parent-title="main_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
              <transition name="fade">
                <MenusMegaNavTwoBlockList
                  v-if="
                    main_menu.sub_menu == 'two_block_list' &&
                    megaMenuToShow == `bottom_menu_mega_${index}`
                  "
                  :menu="main_menu.two_block_list"
                  :parent-title="main_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
            </li>
          </ul>

          <ul class="bottom_menu">
            <li v-for="(bottom_menu, index) in data.top_nav">
              <NuxtLink :to="bottom_menu.menu_item.url">
                <span
                  @click="navLinkClick(bottom_menu, index, 'top_menu_mega_')"
                  >{{ bottom_menu.menu_item.title }}</span
                >
              </NuxtLink>
              <transition name="fade">
                <MenusMegaNavThreeBlockFull
                  v-if="
                    bottom_menu.sub_menu == 'three_block_full' &&
                    megaMenuToShow == `top_menu_mega_${index}`
                  "
                  :menu="bottom_menu.three_block_full"
                  :parent-title="bottom_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
              <transition name="fade-in-up">
                <MenusMegaNavFourBlockFull
                  v-if="
                    bottom_menu.sub_menu == 'four_block_full' &&
                    megaMenuToShow == `top_menu_mega_${index}`
                  "
                  :menu="bottom_menu.four_column_blocks"
                  :parent-title="bottom_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
              <transition name="fade">
                <MenusMegaNavThreeBlockList
                  v-if="
                    bottom_menu.sub_menu == 'three_block_list' &&
                    megaMenuToShow == `top_menu_mega_${index}`
                  "
                  :menu="bottom_menu.three_block_list"
                  :parent-title="bottom_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
              <transition name="fade">
                <MenusMegaNavTwoBlockList
                  v-if="
                    bottom_menu.sub_menu == 'two_block_list' &&
                    megaMenuToShow == `top_menu_mega_${index}`
                  "
                  :menu="bottom_menu.two_block_list"
                  :parent-title="bottom_menu.menu_item.title"
                  @close-megaNav="closeMegaNav"
                />
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <MapSearchBar
      v-if="$device.isMobile && toggleMapSearchModal"
      @close-map-search="toggleMapSearchModal = false"
    />
  </transition>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const toggleMobileMenu = ref(false);

// top_menu_mega_0
// bottom_menu_mega_0
const megaMenuToShow = ref("");

const navLinkClick = (d, i, k) => {
  if (d.sub_menu == "none") {
    toggleMobileMenu.value = false;
  }

  if (d.sub_menu != "none") {
    megaMenuToShow.value = k + i;
  }
};

const closeMegaNav = () => {
  megaMenuToShow.value = "";
};

const showMapSearch = computed(() => {
  if (
    route.name === "find-gym" ||
    route.name === "find-gym-search" ||
    route.name === "find-gym-list" ||
    route.name === "find-gym-list-search"
  ) {
    return true;
  }
  return false;
});

const toggleMapSearchModal = ref(false);
</script>
