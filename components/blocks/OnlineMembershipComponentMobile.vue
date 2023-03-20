<template>
  <div class="rate_toggle">
    <div class="monthly active">Monthly</div>
    <form>
      <label class="switch" >
        <input type="checkbox" v-on:click="toggleRate">
        <span class="slider round"></span>
      </label>
    </form>
    <div class="anually">Anually</div>
  </div>

  <div class="online_membership_slider membership_cards">

    <div class="swiper-wrapper">

        <div class="swiper-slide membership_card" v-for="membership_card in data">

          <div class="fade_overlay"></div>

          <div class="inner_content">

            <div class="title" v-if="membership_card.title" v-html="membership_card.title"></div>
            <div class="rate rate_one_year active" v-if="membership_card.one_year_rate" >R{{membership_card.one_year_rate}} <span>/ MO </span></div>
            <div class="rate rate_two_year" v-if="membership_card.two_year_rate" >R{{membership_card.two_year_rate}} <span>/ MO </span></div>
            <div class="frequency">Billed monthly</div>

            <ul>
              <li v-for="item in membership_card.list">
                <div class="icon"><IconCheckWhite /></div>
                {{ item.list_item }}
              </li>
            </ul>

            <div class="btn_group">
              <a class="btn btn_grey_outline btn_white_text" href="#">Sign up</a>
            </div>

          </div>

        </div>

    </div>

    <div class="slide_pagination">
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
</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const OnlineMembership = new Swiper(".online_membership_slider", {
    slidesPerView: 1.14,
    spaceBetween: 24,
    navigation: {
      nextEl: ".caro_next",
      prevEl: ".caro_prev",
    },
  });
});

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

</script>