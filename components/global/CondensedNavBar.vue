<template>
  <nav class="site_navbar navbar nav_dark_bg form_page_nav" id="page_navbar">
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
    </div>
  </nav>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

        // actionNav.reverse();
      } else if (direction === -1 && isActive === false) {
        document.querySelector("#page_navbar").classList.remove("nav-up");
        document.querySelector("#page_navbar").classList.remove("nav-down");

        // actionNav.reverse();
      } else if (direction === -1 && isActive === true) {
        document.querySelector("#page_navbar").classList.remove("nav-up");
        document.querySelector("#page_navbar").classList.add("nav-down");
      }
    },
  });
});
</script>
