<template>
  <div class="newsletter_block">
    <div class="block_image" :style="`background-image:url(${background});`">
      <img
        src="@/assets/img/shims/newsletter_block_shim_mobile.png"
        alt=""
        v-if="$device.isMobile"
      />
    </div>
    <div class="container">
      <div class="block_body section_title">
        <div class="small_title" v-html="data?.small_title"></div>
        <h3 v-html="data?.big_title"></h3>
        <p class="desccription" v-html="data?.description"></p>

        <div id="newsletter_form"></div>
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
    formId: props.data.form_id,
    target: "#newsletter_form", // notice we target the div id
  });

  setTimeout(() => {
    const myEmail = document.querySelectorAll(".hs_email input");

    myEmail[0].addEventListener("focus", () => {
      document.querySelector(".hs_email").classList.add("focused");
    });

    if (!myEmail[0].value) {
      myEmail[0].addEventListener("blur", () => {
        document.querySelector(".hs_email").classList.remove("focused");
      });
    }

    if (myEmail[0].value) {
      myEmail[0].addEventListener("blur", () => {
        document.querySelector(".hs_email").classList.remove("focused");
      });
    }

    myEmail[0].addEventListener("change", () => {
      if (myEmail[0].value) {
        myEmail[0].addEventListener("blur", () => {
          document.querySelector(".hs_email").classList.add("focused_value");
        });
      }
    });
  }, 2000);
});

const background = computed(() => {
  if (isMobile) {
    return props.data?.mobile_image;
  }
  return props.data?.desktop_image;
});
</script>
