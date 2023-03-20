<template>

  <div class="form_component">

    <div class="background-image" v-if="!$device.isMobile" :style="`background-image: url(${data.desktop_image.url});`"></div>
    <div class="background-image" v-if="$device.isMobile" :style="`background-image: url(${data.mobile_image.url});`"></div>

    <div class="hubspot_form_container">



        <div class="overlay"></div>

        <div class="join_form_holder form_styling">

          <div class="container">

            <div class="section_title">
              <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>
              <h2 v-if="data.title" v-html="data.title"></h2>
              <div v-if="data.content" v-html="data.content"></div>
              <Button v-if="data.buttons" :data="data.buttons"></Button>
              <NuxtLink class="link" v-if="data.link" :to="data.link.url" v-html="data.link.title"></NuxtLink>
            </div>

            <div id="hubspot-custom-form"></div>

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

});
</script>
