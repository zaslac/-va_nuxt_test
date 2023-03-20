<template>
  <div id="vasa_main" class="vasa_main">
    <NavBar :data="'on_dark_bg'"></NavBar>
    <slot />
    <Footer></Footer>
  </div>
</template>
<script setup></script>
