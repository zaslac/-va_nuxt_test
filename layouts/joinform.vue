<template>
  <div id="vasa_main" class="vasa_main">
    <CondensedNavBar></CondensedNavBar>
    <slot />
    <CondensedFooter></CondensedFooter>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();

useHead({
  bodyAttrs: {
    class: "join_form",
  },
});
</script>
