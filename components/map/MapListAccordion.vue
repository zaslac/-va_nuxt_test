<template>
  <div class="map_list_accordion">
    <div v-for="(item, index) in data" class="map_list_accordion_item">
      <div @click="openItem = index" class="mlai_title">
        {{ item.region }}
        <div class="span">{{ item.club_count }}</div>
        <div class="icon" v-if="openItem != index"><IconPlus /></div>
        <div class="icon" v-if="openItem == index"><IconMinus /></div>
      </div>
      <div class="mlai_body" v-show="openItem == index">
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
</template>

<script setup>
const openItem = ref(-1);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
