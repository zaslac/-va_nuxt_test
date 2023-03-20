<template>
  <div class="site_navbar on_dark_bg no_nav_bar" id="page_navbar">
    <div class="top_menu">
      <div class="container">
        <ul class="site_top_nav"></ul>
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
        </div>
      </div>
    </div>
  </div>
  <div class="nav_underlay"></div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const runTimeConfig = useRuntimeConfig();
const { isMobile } = useDevice();
const showNavMobile = ref(isMobile ? false : true);
const showMegaMenu = ref(null);
// const showMegaMenu = ref('mega_nav_top_2');

const {
  data: navbar,
  error,
  refresh,
  pending,
} = await useAsyncData("navbar", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/navbar/`);
});

onMounted(() => {
  ScrollTrigger.create({
    trigger: ".site_navbar",
    start: "top top",
    endTrigger: ".site_footer",
    end: "top bottom",
    onUpdate: ({ progress, direction, isActive }) => {
      if (direction === 1 && isActive === true) {
        document.querySelector("#page_navbar").classList.add("nav-up");
        document.querySelector("#page_navbar").classList.remove("nav-down");
        // document.querySelector('#page_navbar').classList.remove('nav-down');

        // actionNav.reverse();
      } else if (direction === -1 && isActive === false) {
        document.querySelector("#page_navbar").classList.remove("nav-up");
        document.querySelector("#page_navbar").classList.remove("nav-down");

        // actionNav.reverse();
      } else if (direction === -1 && isActive === true) {
        document.querySelector("#page_navbar").classList.remove("nav-up");
        document.querySelector("#page_navbar").classList.add("nav-down");
        // actionNav.play();
      }
    },
  });
});

function hoverOnNav() {
  if (!isMobile) {
    document.querySelector("#page_navbar").classList.add("nav-hover");
  }
}
function unHoverOnNav() {
  if (!isMobile) {
    document.querySelector("#page_navbar").classList.remove("nav-hover");
  }
}
</script>
