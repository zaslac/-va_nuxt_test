<template>
  <div class="tier_benefits">
    <div class="container">
      <div class="title_area">
        <div class="title" v-html="data.title"></div>
        <div class="description" v-html="data.description"></div>
      </div>

      <div class="tier_table">
        <div class="tier_level_wrapper">
          <div class="tier_level_header flex">
            <div class="tier_col_title header_title">Tier</div>
            <div class="tier_col_tier bronze">
              <img src="@/assets/img/bronze_star.png" alt="" />
            </div>
            <div class="tier_col_tier silver">
              <img src="@/assets/img/silver_star.png" alt="" />
            </div>
            <div class="tier_col_tier gold">
              <img src="@/assets/img/gold_star.png" alt="" />
            </div>
          </div>
          <div class="tier_level_body">
            <div
              class="tier_level_body_row flex"
              v-for="tlb in data.tier_levels"
            >
              <div
                class="tier_col_title row_title"
                v-html="tlb.tier_item_description"
              ></div>
              <div class="tier_col_tier bronze">
                <span v-if="$device.isMobile">
                  <img
                    v-if="tlb.bronze"
                    src="@/assets/img/benefit_available.png"
                    alt=""
                  />
                  <img
                    v-if="!tlb.bronze"
                    src="@/assets/img/benefit_not_available.png"
                    alt=""
                  />
                </span>
                <span
                  v-else-if="tlb.bronze_short_description"
                  class="benefit_text"
                  v-html="tlb.bronze_short_description"
                ></span>
                <span v-else
                  ><img
                    v-if="tlb.bronze"
                    src="@/assets/img/benefit_available.png"
                    alt="" />
                  <img
                    v-if="!tlb.bronze"
                    src="@/assets/img/benefit_not_available.png"
                    alt=""
                /></span>
              </div>
              <div class="tier_col_tier silver">
                <span v-if="$device.isMobile">
                  <img
                    v-if="tlb.silver"
                    src="@/assets/img/benefit_available.png"
                    alt="" />
                  <img
                    v-if="!tlb.silver"
                    src="@/assets/img/benefit_not_available.png"
                    alt=""
                /></span>
                <span
                  v-else-if="tlb.silver_short_description"
                  class="benefit_text"
                  v-html="tlb.silver_short_description"
                ></span>
                <span v-else
                  ><img
                    v-if="tlb.silver"
                    src="@/assets/img/benefit_available.png"
                    alt="" />
                  <img
                    v-if="!tlb.silver"
                    src="@/assets/img/benefit_not_available.png"
                    alt=""
                /></span>
              </div>
              <div class="tier_col_tier gold">
                <span v-if="$device.isMobile">
                  <img
                    v-if="tlb.gold"
                    src="@/assets/img/benefit_available.png"
                    alt="" />
                  <img
                    v-if="!tlb.gold"
                    src="@/assets/img/benefit_not_available.png"
                    alt=""
                /></span>
                <span
                  v-else-if="tlb.gold_short_description"
                  class="benefit_text"
                  v-html="tlb.gold_short_description"
                ></span>
                <span v-else
                  ><img
                    v-if="tlb.gold"
                    src="@/assets/img/benefit_available.png"
                    alt="" />
                  <img
                    v-if="!tlb.gold"
                    src="@/assets/img/benefit_not_available.png"
                    alt=""
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="partner_discounts_table">
        <div class="title">Partner Discounts</div>
        <div class="partner_discount_body">
          <div
            class="partner_discount_row flex"
            v-for="pd in data.partner_discounts"
          >
            <div
              class="tier_col_title row_title"
              v-html="pd.partner_name"
            ></div>
            <div class="tier_col_tier bronze" v-html="pd.bronze_discount"></div>
            <div class="tier_col_tier silver" v-html="pd.silver_discount"></div>
            <div class="tier_col_tier gold" v-html="pd.gold_discount"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
