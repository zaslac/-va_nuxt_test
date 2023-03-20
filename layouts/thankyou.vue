<template>
  <div id="vasa_main" class="thank_you">
    <slot />
    <CondensedFooter></CondensedFooter>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();

useHead({
  bodyAttrs: {
    class: "thank_you_page",
  },
});
</script>
