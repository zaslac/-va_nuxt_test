<template>

  <div class="multi_form_component">

    <div class="container">

      <div class="intro" v-if="data.intro_text" v-html="data.intro_text"></div>

      <div class="forms">

        <div class="form_selector">

          <div class="selector" v-for="(selector,key) in data.forms">
            <input type="radio" :id="'form1'+key" name="multi_form" :value="'hs_form1'+key" v-on:input="revealForm">
            <label :for="'form1'+key" v-html="selector.form_title"></label>
          </div>

        </div>

        <div class="form form_styling" >

          <div class="hubs-form" id="hs_form10"></div>
          <div class="hubs-form" id="hs_form11"></div>

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

function revealForm(input){
  console.log(input.target.value);

  [].forEach.call(document.querySelectorAll('.hubs-form'), function (el) {
    el.style.display = 'none';
  });

  document.getElementById(input.target.value).style.display = 'block';

}

onMounted(() => {

    var count = 10;
    props.data.forms.forEach(function(form){
      var formid = "#hs_form"+count;
      window.hbspt.forms.create({
        region: "na1",
        portalId: "6347152",
        formId: form.hubspot_id,
        target: formid,
      });
      count++;
    });

  setTimeout(function(){

    const inputs = document.querySelectorAll('.input');

    inputs.forEach(el => el.addEventListener('click', event => {
      var ref_ID = event.target.getAttribute("id");
      document.getElementById('label-'+ref_ID).style.display = 'none';
    }));

    document.getElementsByClassName("hs-button").value = 'Submit';

  }, 2000)

});
</script>