<template>
  <footer class="site_footer condensed_site_footer">
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

      <div class="footer_bottom">
        <div class="condensed_footer_info">
          <h5>Customer support</h5>
          <div class="contact_info">
            <ul>
              <li>
                <span class="country">South Africa</span><br />
                <a href="tel:0860200911">0860 200 911</a>
              </li>
              <li>
                <span class="country">Outside South Africa</span><br />
                <a href="tel:0027211803566">00 27 21 180 3566</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="social_main_wrapper condensed_social">
          <h5>Follow Virgin Active</h5>
          <div class="social_main">
            <div class="social" v-for="(fs, so) in footerCon?.footer_social">
              <NuxtLink :to="`${fs.social_url}`" target="_blank">
                <div class="icon">
                  <img :src="`${fs.social_icon}`" alt="" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="copy_left">
          © Copyright 2022 Virgin Active. All rights reserved.
        </div>
        <div class="copy_right">
          <div class="legal" v-for="(llink, l) in footerCon?.legal_links">
            <NuxtLink :to="`${llink.link.url}`">{{
              llink.link.title
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const showFooterMenu = ref();
const {
  data: footerCon,
  error,
  refresh,
  pending,
} = await useAsyncData("footerCon", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/footer/`);
});
</script>
