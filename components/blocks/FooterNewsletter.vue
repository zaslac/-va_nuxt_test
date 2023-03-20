<template>
  <div class="footer_newsletter_form">
    <div class="content">
      <div
        class="title"
        v-if="FooterNewsletter?.newsletter_title"
        v-html="FooterNewsletter.newsletter_title"
      ></div>
      <div
        class="description"
        v-if="FooterNewsletter?.newsletter_description"
        v-html="FooterNewsletter.newsletter_description"
      ></div>
    </div>
    <div class="form">
      <div id="footer_newsletter_form"></div>
    </div>
  </div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();

const {
  data: FooterNewsletter,
  error,
  refresh,
  pending,
} = await useAsyncData("FooterNewsletter", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/footer-newsletter-data/`);
});

onMounted(() => {
  setTimeout(function () {
    window.hbspt.forms.create({
      region: "na1",
      portalId: "6347152",
      formId: "1e1a8f36-293a-4da6-8e75-a08285e00fad",
      target: "#footer_newsletter_form", // notice we target the div id
    });

    if (document.getElementById("newsletter_form")) {
      document.querySelector(".footer_newsletter_form").style.display = "none";
    }
  }, 100);

  setTimeout(() => {
    const myEmail = document.querySelectorAll(".hs_email input");

    myEmail[0].addEventListener("focus", () => {
      document.querySelector(".hs_email").classList.add("focused");
      document.querySelector(".hs-form").classList.add("focused_form");
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
</script>
