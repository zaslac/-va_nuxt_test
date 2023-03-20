<template>

  <div class="online_membership_component">

    <div class="container">

      <OnlineMembershipComponentDesktop v-if="!$device.isMobile" :data="data.membership_cards" />

      <OnlineMembershipComponentMobile v-if="$device.isMobile" :data="data.membership_cards" />

      <div class="membership_cta" v-if="!$device.isMobile">

        <div class="content" v-if="data.cta_strip" v-html="data.cta_strip"></div>

        <div class="btn_group">
          <a class="btn btn_white_background btn_black_text" v-if="data.cta_link.title" :href="data.cta_link.url" v-html="data.cta_link.title"></a>
        </div>

      </div>

      <div class="btn_group mobile_btn" v-if="$device.isMobile">
        <a class="btn btn_red_background btn_white_text" v-if="data.cta_link.title" :href="data.cta_link.url" v-html="data.cta_link.title"></a>
      </div>

    </div>

  </div>

</template>


<script setup>
import OnlineMembershipComponentDesktop from "./OnlineMembershipComponentDesktop";
import OnlineMembershipComponentMobile from "./OnlineMembershipComponentMobile";

const { isMobile } = useDevice();



const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
