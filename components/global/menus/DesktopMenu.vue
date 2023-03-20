<template>
  <div
    class="nav_desktop_wrapper"
    id="page_navbar_wrapper"
    @mouseover="hoverOnNav"
    @mouseleave="unHoverOnNav"
  >
    <div class="top_menu_wrapper">
      <div class="container flex">
        <ul class="top_menu flex">
          <li v-for="(top_menu, index) in data.top_nav" :key="index">
            <NuxtLink
              :to="top_menu.menu_item.url"
              class="flex"
              @mouseover="megaNavToggle(top_menu, 'top_menu_mega_', index)"
            >
              <span @click="navLinkClick">{{ top_menu.menu_item.title }}</span>
              <span v-if="top_menu.sub_menu != 'none'" class="menu_icon"
                ><IconDownArrow
              /></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom_menu">
      <div class="container flex">
        <div class="site_logo">
          <NuxtLink
            to="/"
            class="light_logo"
            title="The official logo of Virgin Active South Africa, which represents 130+ world-class gyms across South Africa that offer cheap gym memberships, personal trainers, boxing, pilates, HIIT, swimming, yoga, cycling and other classes."
            ><IconWebLogo></IconWebLogo
          ></NuxtLink>
          <NuxtLink
            to="/"
            class="dark_logo"
            title="The official logo of Virgin Active South Africa, which represents 130+ world-class gyms across South Africa that offer cheap gym memberships, personal trainers, boxing, pilates, HIIT, swimming, yoga, cycling and other classes."
            ><IconWebLogoDark></IconWebLogoDark
          ></NuxtLink>
        </div>
        <div class="main_menu">
          <ul class="bottom_menu flex">
            <li v-for="(bottom_menu, index) in data.bottom_nav" :key="index">
              <NuxtLink
                :to="bottom_menu.menu_item.url"
                class="flex"
                @mouseover="
                  megaNavToggle(bottom_menu, 'bottom_menu_mega_', index)
                "
              >
                <span @click="navLinkClick">{{
                  bottom_menu.menu_item.title
                }}</span>
                <span v-if="bottom_menu.sub_menu != 'none'" class="menu_icon"
                  ><IconDownArrow
                /></span>
              </NuxtLink>
            </li>
          </ul>
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
      </div>
    </div>

    <div
      class="mega_menu_wrapper"
      :class="megaMenuToShow != '' ? 'mega-menu-open' : ''"
      v-show="megaMenuToShow != ''"
    >
      <div class="top_nav_mega_menus">
        <div v-for="(tnm, index) in data.top_nav">
          <transition name="fade-in-up">
            <MenusMegaNavThreeBlockFull
              v-if="
                tnm.sub_menu == 'three_block_full' &&
                megaMenuToShow == `top_menu_mega_${index}`
              "
              :menu="tnm.three_block_full"
              :parent-title="tnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
          <transition name="fade-in-up">
            <MenusMegaNavFourBlockFull
              v-if="
                tnm.sub_menu == 'four_block_full' &&
                megaMenuToShow == `top_menu_mega_${index}`
              "
              :menu="tnm.four_column_blocks"
              :parent-title="tnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>

          <transition name="fade-in-up">
            <MenusMegaNavThreeBlockList
              v-if="
                tnm.sub_menu == 'three_block_list' &&
                megaMenuToShow == `top_menu_mega_${index}`
              "
              :menu="tnm.three_block_list"
              :parent-title="tnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
          <transition name="fade-in-up">
            <MenusMegaNavTwoBlockList
              v-if="
                tnm.sub_menu == 'two_block_list' &&
                megaMenuToShow == `top_menu_mega_${index}`
              "
              :menu="tnm.two_block_list"
              :parent-title="tnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
        </div>
      </div>
      <div class="bottom_nav_mega_menus">
        <div v-for="(bnm, index) in data.bottom_nav">
          <transition name="fade-in-up">
            <MenusMegaNavThreeBlockFull
              v-if="
                bnm.sub_menu == 'three_block_full' &&
                megaMenuToShow == `bottom_menu_mega_${index}`
              "
              :menu="bnm.three_block_full"
              :parent-title="bnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
          <transition name="fade-in-up">
            <MenusMegaNavFourBlockFull
              v-if="
                bnm.sub_menu == 'four_block_full' &&
                megaMenuToShow == `bottom_menu_mega_${index}`
              "
              :menu="bnm.four_column_blocks"
              :parent-title="bnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
          <transition name="fade-in-up">
            <MenusMegaNavThreeBlockList
              v-if="
                bnm.sub_menu == 'three_block_list' &&
                megaMenuToShow == `bottom_menu_mega_${index}`
              "
              :menu="bnm.three_block_list"
              :parent-title="bnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
          <transition name="fade-in-up">
            <MenusMegaNavTwoBlockList
              v-if="
                bnm.sub_menu == 'two_block_list' &&
                megaMenuToShow == `bottom_menu_mega_${index}`
              "
              :menu="bnm.two_block_list"
              :parent-title="bnm.menu_item.title"
              @close-megaNav="navLinkClick"
            />
          </transition>
        </div>
      </div>
    </div>

    <MapSearchBar
      v-show="showMapSearch && megaMenuToShow === ''"
      @close-map-search="closeMapSearch()"
    />
  </div>
  <transition name="fade-in-up">
    <div class="nav_underlay" v-show="showUnderlay"></div>
  </transition>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
});

const route = useRoute();

const megaMenuToShow = ref("");
const showUnderlay = ref(false);

const megaNavToggle = (d, k, i) => {
  if (d.sub_menu == "none") {
    megaMenuToShow.value = "";
  }

  if (d.sub_menu != "none") {
    megaMenuToShow.value = k + i;
  }
};

const closeMapSearch = () => {
  showUnderlay.value = false;
  unHoverOnNav();
};

const navLinkClick = () => {
  megaMenuToShow.value = "";
  showUnderlay.value = false;
};

const hoverOnNav = () => {
  document.querySelector("#page_navbar_wrapper").classList.add("nav-hover");
  showUnderlay.value = true;
};

const unHoverOnNav = () => {
  document.querySelector("#page_navbar_wrapper").classList.remove("nav-hover");
  showUnderlay.value = false;
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
</script>
