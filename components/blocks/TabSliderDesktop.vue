<template>

  <div class="container">

    <div :class="'tab_slider ' + data.bottom_margin ">

      <div class="content">

        <div class="sub_title" v-if="data.sub_title" v-html="data.sub_title"></div>

        <h2 class="title" v-if="data.main_title" v-html="data.main_title"></h2>

        <div class="slide_tab_titles">

          <div class="slide_tab_title" v-for="(tab,index) in data.tab_slider" :key="index" :data-index="index" :id="'slide_tab_'+index" :class="index == openTable ? 'active' : ''" @click="openTable = index">
            <div class="icon">
              <span class="slider_tab_spinner swiper-pagination-bullet--svg-animation" :class="index == openTable ? 'swiper-pagination-bullet-active swiper-pagination-bullet-active-main' : ''" @click="openTable = index"><svg width="32" height="32" viewBox="-8 0 45 45"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="3"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="8" stroke-width="3"></circle></svg></span>
            </div>
            <div class="tab_title" v-if="tab.tab_title" v-html="tab.tab_title"></div>
          </div>

        </div>

      </div>

      <div class="slider">

        <div class="slide_tab" v-for="(slide_tab,tindex) in data.tab_slider" :key="tindex" v-show="tindex == openTable">

          <img class="image" :src="slide_tab.image.url" alt="">

          <div class="overlay"></div>

          <div class="content_tab_content">

            <div class="title" v-if="slide_tab.title" v-html="slide_tab.title"></div>
            <div class="description" v-if="slide_tab.content" v-html="slide_tab.content"></div>

            <Button v-if="slide_tab.buttons" :data="slide_tab.buttons"></Button>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

//swiper-pagination-bullet-active swiper-pagination-bullet-active-main

const openTable = ref(0);

const openClass = ref(0);



var i = 1;

function myLoop() {
  setTimeout(function() {
    var target = document.querySelector('.slide_tab_titles .active').getAttribute('data-index');
    var nextSlide = parseInt(target)+1;

    if(nextSlide === props.data.tab_slider.length){
      document.getElementById('slide_tab_0').click();
    } else {
      document.getElementById('slide_tab_'+nextSlide).click();
    }

    myLoop();
  }, 7000)
}

myLoop();


const toggleClass = (id) => {
  openClass.value = id;
};
</script>
