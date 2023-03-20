<template>
  <div class="page_anchor_bar" id="page_anchor_bar">
    <div class="container">
      <div class="pab_nav_slider">
        <div class="swiper-wrapper">
          <div v-for="post in data" class="swiper-slide">
            <a
              :href="`#section_${post.acf_fc_layout}`"
              :data-scrollId="`#section_${post.acf_fc_layout}`"
              v-if="post?.visible_in_anchor_bar"
            >
              {{ post.small_title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
onMounted(() => {
  const swiper = new Swiper(".pab_nav_slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });
  let links = gsap.utils.toArray(".pab_nav_slider a");

  setTimeout(() => {
    links.forEach((a) => {
      const sId = a.dataset.scrollid;

      let element = document.querySelector(sId),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive(a),
      });
      // a.addEventListener("click", (e) => {
      //   e.preventDefault();
      //   gsap.to(window, {
      //     duration: 1,
      //     scrollTo: linkST.start,
      //     overwrite: "auto",
      //   });
      // });
    }, 750);
  });

  function setActive(link) {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  }
});

useHead({
  bodyAttrs: {
    class: "has_anchor_bar",
  },
});
</script>
