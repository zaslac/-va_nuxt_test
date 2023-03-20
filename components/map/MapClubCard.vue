<template>
  <div class="map_club_card" @click="$emit('show-marker', { cardId: data.id })">
    <div class="club_card_inner">
      <div class="card_title">
        <div class="title">{{ data.title }}</div>
        <div class="tag" v-if="data.collection_club">Collection</div>
      </div>
      <div class="card_address">
        {{ data.address }}
      </div>
      <div class="card_tel">
        <div class="icon"><IconPhone /></div>
        {{ data.phone }}
      </div>
      <div class="card_opening_times">
        <div
          class="status"
          :class="data.club_times.status_color"
          v-html="data.club_times.status_type"
        ></div>
        &#8226;
        <div class="time" v-html="data.club_times.status_text"></div>
      </div>
      <div class="card_footer btn_group">
        <NuxtLink
          :to="`/gyms/${data.slug}`"
          class="btn btn_grey_outline btn_white_text"
          >View club details
        </NuxtLink>
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
