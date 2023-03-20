<template>

 <div class="container">

   <div class="section_title">
     <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
     <h2 v-if="data.title" v-html="data.title"></h2>
     <div class="content" v-if="data.content" v-html="data.content"></div>
   </div>

   <div class="join_form_holder form_styling">

    <div id="hubspot-custom-form" ></div>

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


onMounted(() => {
  window.hbspt.forms.create({
    region: "na1",
    portalId: "6347152",
    formId: props.data.hubspot_form_id,
    target: "#hubspot-custom-form", // notice we target the div id
  });


  setTimeout(function(){

    const inputs = document.querySelectorAll('.input');

    inputs.forEach(el => el.addEventListener('click', event => {
      var ref_ID = event.target.getAttribute("id");
      document.getElementById('label-'+ref_ID).style.display = 'none';
    }));

    document.getElementsByClassName("hs-button").value = 'Submit';

  }, 1000)

  // setTimeout(function(){
  //
  // },1000)


});
</script>