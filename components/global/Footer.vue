<template>
  <footer class="site_footer">
    <div class="container">
      <div class="footer_top">
        <div class="site_footer_logo">
          <NuxtLink
            to="/"
            title="The official logo of Virgin Active South Africa, which represents 130+ world-class gyms across South Africa that offer cheap gym memberships, personal trainers, boxing, pilates, HIIT, swimming, yoga, cycling and other classes."
            ><IconWebLogo></IconWebLogo
          ></NuxtLink>
        </div>
      </div>
      <div class="footer_middle">
        <div class="menu_col">
          <div class="menu_outer" v-for="(pmi, m) in footer?.footer_menu_items">
            <h5 @click="showFooterMenu = `footer_menu_${m}`">
              {{ pmi.menu_title }}
              <div class="icon" v-if="$device.isMobile">
                <IconDownArrow></IconDownArrow>
              </div>
            </h5>
            <transition name="fade">
              <ul
                class="menu"
                :id="`footer_menu_${m}`"
                v-if="showFooterMenu == `footer_menu_${m}` || !$device.isMobile"
              >
                <li v-for="(mi, i) in pmi.menu_items">
                  <NuxtLink :to="`${mi.menu_item.url}`">{{
                    mi.menu_item.title
                  }}</NuxtLink>
                </li>
              </ul>
            </transition>
          </div>
        </div>
        <div class="cta_col">
          <div class="btn_group">
            <NuxtLink
              :to="`${footer?.footer_android_button.link}`"
              target="_blank"
              class="btn btn_android btn btn_transparent_white_outline btn_white_text"
              v-if="!$device.isMobile"
            >
              <div class="icon">
                <img :src="`${footer?.footer_android_button.icon}`" alt="" />
              </div>
              {{ footer?.footer_android_button.title }}
            </NuxtLink>
            <NuxtLink
              :to="`${footer?.footer_ios_button.link}`"
              target="_blank"
              class="btn btn_ios btn btn_transparent_white_outline btn_white_text"
            >
              <div class="icon">
                <img :src="`${footer?.footer_ios_button.icon}`" alt="" />
              </div>
              {{ footer?.footer_ios_button.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="social_main_wrapper">
          <h5>Follow Virgin Active</h5>
          <div class="social_main">
            <div class="social" v-for="(fs, so) in footer?.footer_social">
              <NuxtLink :to="`${fs.social_url}`" target="_blank">
                <div class="icon">
                  <img :src="`${fs.social_icon}`" alt="" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="countries_main_wrapper">
          <h5>OTHER TERRITORIES</h5>
          <div class="countries_main">
            <div class="country" v-for="(fc, ot) in footer?.other_territories">
              <NuxtLink :to="`${fc.terrirories_link}`" target="_blank">
                <div class="icon">
                  <img :src="`${fc.terrirories_icon}`" alt="" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <FooterNewsletter />
    </div>
    <div class="copyright">
      <div class="container">
        <div class="copy_left">
          © Copyright 2022 Virgin Active. All rights reserved.
        </div>
        <div class="copy_right">
          <div class="legal" v-for="(llink, l) in footer?.legal_links">
            <NuxtLink :to="`${llink.link.url}`">{{
              llink.link.title
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <CookieBanner></CookieBanner>
  </footer>
</template>

<script setup>
import CookieBanner from "./CookieBanner";
import FooterNewsletter from "../blocks/FooterNewsletter";
const { isMobile } = useDevice();
const runTimeConfig = useRuntimeConfig();
// const footer = useFooter();
const showFooterMenu = ref();
const {
  data: footer,
  error,
  refresh,
  pending,
} = await useAsyncData("footer", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/footer/`);
});
</script>
