<template>

 <div class="customer_support">

   <div class="container">

      <div class="section_title">
        <h2 v-html="data.title"></h2>
      </div>

     <div class="locations">
       <div class="location" v-for="location in data.locations">
         <img class="icon" :src="location.icon.url"/>
         <div class="title" v-html="location.title"></div>
         <a class="number link_hover" :href="'mailto:'+location.number" v-html="location.number"></a>
       </div>
     </div>

     <div class="call_centre_hours_holder">
       <h4>Call centre hours</h4>

       <div class="call_centre_hours">

         <div class="call_centre_data" v-for="call_centre in data.call_centre_hours">
           <div class="day" v-html="call_centre.day+': '+' '"></div> <div class="time" v-html="call_centre.time"></div>
         </div>

       </div>

       <div class="support_text" v-if="data.support_text" v-html="data.support_text">

       </div>

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
