<template>

  <div class="get_started_component">

    <div class="section_title">
      <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
      <h2 v-if="data.title" v-html="data.title"></h2>
    </div>

    <div class="container">

      <div class="get_started_blocks">

        <div class="get_started_block" v-for="(block, index) in data.content_blocks">

          <div class="image">
            <div class="overlay"></div>
            <img alt="" :src="block.image"/>
          </div>

          <div class="inner-content">
            <div class="title" v-if="block.title" v-html="block.title"></div>
            <div class="content" v-if="block.content" v-html="block.content"></div>

            <div class="btn_group" v-if="!block.has_popup">
              <a class="btn btn_white_background btn_black_text" :href="block.link.url" v-html="block.link.title"></a>
            </div>

            <div class="btn_group" v-if="block.has_popup">
              <a class="btn btn_white_background btn_black_text" v-on:click="openPop(index)" v-html="block.link.title"></a>
            </div>

          </div>

          <div class="get_started_desktop_modal" v-if="block.has_popup" :data-popup="'popup'+index">

            <div class="get_started_desktop_modal_inner">

              <h2 v-if="block.popup_title" v-html="block.popup_title"></h2>

              <div class="content" v-if="block.popup_content" v-html="block.popup_content"></div>

              <Button v-if="block.buttons" :data="block.buttons"></Button>
            </div>

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

function openPop(e){

  var pop = document.querySelectorAll('[data-popup="popup'+e+'"]')[0];

  pop.classList.add('show_pop');

}

const { isMobile } = useDevice();
</script>
