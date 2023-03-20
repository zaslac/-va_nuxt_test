<template>

 <div class="container">

   <div :class="'club_card_list ' + data.bottom_margin">

     <div class="club_card" v-for="Cards in data.club_cards" :style="`background:linear-gradient(180deg, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 1) 0%, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 1) 50%, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 0.15) 100%);`">

       <div class="fade_overlay"></div>

       <div class="card_content">

         <div class="age_group" :style="`background-color:rgb(${Cards.card_colour.red},${Cards.card_colour.green},${Cards.card_colour.blue})`" v-if="Cards.age_group" v-html="Cards.age_group"></div>

         <div class="title" :style="`color:rgb(${Cards.card_colour.red},${Cards.card_colour.green},${Cards.card_colour.blue})`" v-if="Cards.title" v-html="Cards.title"></div>

         <div class="description" v-if="Cards.description" v-html="Cards.description"></div>

         <div class="list">
           <ul>
             <li v-for="list_item in Cards.list">
               <div class="icon"><IconCheckWhite /></div>
               {{ list_item.list_item }}
             </li>
           </ul>
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
</script>