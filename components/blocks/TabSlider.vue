<template>

 <TabSliderDesktop v-if="!$device.isMobile" :data="data"/>

 <TabSliderMobile v-if="$device.isMobile" :data="data"/>

</template>

<script setup>
import TabSliderDesktop from "./TabSliderDesktop";
import TabSliderMobile from "./TabSliderMobile";

const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>
