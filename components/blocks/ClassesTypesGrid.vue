<template>
  <div :class="'classes_grid ' + data.bottom_margin ">
    <div class="container">
      <div class="section_title">
        <h5>Classes</h5>
        <h2>
          Come and try <br />
          something new
        </h2>
        <p>
          Our expert instructors will guide you through routines designed to get
          you moving in new and exciting ways.
        </p>
        <p class="nb_text">Class offerings vary across clubs.</p>
      </div>

      <BlocksClassesGridBlockMobile :data="classCats" v-if="$device.isMobile" />
      <BlocksClassesGridBlockDesktop
        :data="classCats"
        v-if="!$device.isMobile"
      />
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
const runTimeConfig = useRuntimeConfig();
const { isMobile } = useDevice();
const {
  data: classCats,
  error,
  refresh,
  pending,
} = await useAsyncData("classCats", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/classes_types/`);
});
</script>
