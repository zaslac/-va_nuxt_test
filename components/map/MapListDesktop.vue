<template>
  <div class="map_list_desktop">
    <div class="container">
      <div class="map_list_desktop_item_wrapper">
        <div v-for="(item, index) in data" class="map_list_desktop_item">
          <div class="mlai_title">
            {{ item.region }}
            <div class="span">{{ item.club_count }}</div>
          </div>
          <div class="mlai_body">
            <NuxtLink
              v-for="c in item.clubs"
              class="mlai_item"
              :to="`/gyms/${c.slug}`"
            >
              <div class="icon"><IconClubIcon /></div>
              {{ c.title }}
            </NuxtLink>
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
