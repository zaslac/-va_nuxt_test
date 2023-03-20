<template>

 <div class="card_list_holder">

    <div class="container">

     <div class="section_title" v-if="data.title">
       <h2 v-html="data.title"></h2>
     </div>

     <div class="card_list">
       <div class="card" v-for="card in data.info_cards">
         <div class="title" v-html="card.title"></div>
         <div class="content" v-html="card.content"></div>
       </div>
     </div>

     <div class="btn_group" v-if="data.button">
        <NuxtLink class="btn btn_red_outline btn_white_text" :to="data.button.url" >{{data.button.title}}</NuxtLink>
     </div>

   </div>

 </div>

</template>


<script setup>
const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>