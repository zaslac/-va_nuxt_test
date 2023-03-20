<template>
  <div id="CookieConsent" class="cookie_popup">
    <div class="cookie_title">
      <Cookie></Cookie>{{ CookieData?.cookie_title }}
    </div>
    <div
      class="cookie_content"
      v-if="CookieData?.cookie_content"
      v-html="CookieData?.cookie_content"
    ></div>
    <div class="btn_group">
      <a
        class="btn btn_red_background btn_white_text"
        v-on:click="AcceptCookie()"
        >Accept</a
      >
      <NuxtLink
        class="btn btn_red_outline btn_black_text"
        :to="CookieData?.cookie_button.url"
        >{{ CookieData?.cookie_button.title }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import Cookie from "../icon/Cookie";
const runTimeConfig = useRuntimeConfig();

if (process.client) {
  const CookiePolicy = localStorage.getItem("Cookie");
  if (CookiePolicy !== "yes") {
    var Cookieel = document.getElementById("CookieConsent");
    Cookieel.style.display = "block";
  }
}

function AcceptCookie() {
  localStorage.setItem("Cookie", "yes");
  var Cookieel = document.getElementById("CookieConsent");
  Cookieel.style.display = "none";
}

const {
  data: CookieData,
  error,
  refresh,
  pending,
} = await useAsyncData("CookieData", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/cookie-data/`);
});
</script>
