<template>
  <nav
    class="site_navbar navbar"
    :class="(data, navClass)"
    id="page_navbar"
    v-if="!pending"
  >
    <div id="notice_area_placeholder" class="notice_area_placeholder"></div>
    <MenusMobileMenu v-if="$device.isMobile" :data="nav" />
    <MenusDesktopMenu v-if="!$device.isMobile" :data="nav" />
  </nav>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  data: {
    type: String,
  },
});
const route = useRoute();
const runTimeConfig = useRuntimeConfig();
const { data: nav, pending } = await useAsyncData("nav", () =>
  $fetch(`${runTimeConfig.public.cusWp}/navbar/`)
);

const navClass = computed(() => {
  let classString = "";

  if (
    route.name === "find-gym" ||
    route.name === "find-gym-search" ||
    route.name === "find-gym-list" ||
    route.name === "find-gym-list-search"
  ) {
    classString += " nav_dark_bg";
  }

  return classString;
});

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.create({
      trigger: ".site_navbar",
      start: "top top",
      endTrigger: ".site_footer",
      end: "top bottom",
      onUpdate: ({ progress, direction, isActive }) => {
        if (direction === 1 && isActive === true) {
          document.querySelector("#page_navbar").classList.add("nav-up");
          document.querySelector("#page_navbar").classList.remove("nav-down");

          if (document.querySelector("#page_anchor_bar")) {
            document.querySelector("#page_anchor_bar").classList.add("show");
          }

          // actionNav.reverse();
        } else if (direction === -1 && isActive === false) {
          document.querySelector("#page_navbar").classList.remove("nav-up");
          document.querySelector("#page_navbar").classList.remove("nav-down");
          if (document.querySelector("#page_anchor_bar")) {
            document.querySelector("#page_anchor_bar").classList.remove("show");
          }

          // actionNav.reverse();
        } else if (direction === -1 && isActive === true) {
          document.querySelector("#page_navbar").classList.remove("nav-up");
          document.querySelector("#page_navbar").classList.add("nav-down");
          // actionNav.play();
          if (document.querySelector("#page_anchor_bar")) {
            document.querySelector("#page_anchor_bar").classList.remove("show");
          }
        }
      },
    });
  }, 450);
});
</script>
