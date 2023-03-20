<template>
  <div id="vasa_main" class="vasa_main">
    <NoNavBar></NoNavBar>
    <slot />
    <CondensedFooter></CondensedFooter>
  </div>
</template>

<script setup>
import NoNavBar from "../components/global/NoNavBar";

const { isMobile } = useDevice();

useHead({
  bodyAttrs: {
    class: "no_nav",
  },
});
</script>
