<template>
  <div
    class="btn_group"
    v-bind:class="{ single_button: props.data.length === 1 }"
    v-if="data"
  >
    <NuxtLink
      v-for="button in data"
      class="btn"
      :class="`${button.button_text_color} ${button.button_background_color}`"
      :to="button.button.url"
      v-show="showOn(button.device_visibility)"
    >
      <span v-if="$device.isMobile && button?.mobile_button_label">
        <div class="icon" v-if="button?.button_icon">
          <nuxt-img :src="button.button_icon" />
        </div>
        {{ button.mobile_button_label }}
      </span>
      <span v-if="!$device.isMobile || !button?.mobile_button_label">
        <div class="button_icon" v-if="button?.button_icon">
          <nuxt-img format="webp" :src="button.button_icon" />
        </div>
        {{ button.button.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { isApple, isAndroid, isMobileOrTablet, isDesktop } = useDevice();

function showOn(button) {
  if (button == "ios" && isApple && isMobileOrTablet) {
    return true;
  }
  if (button == "android" && isAndroid && isMobileOrTablet) {
    return true;
  }

  if (isDesktop) {
    return true;
  }

  if (button == "all") {
    return true;
  }

  return false;
}
</script>
