<template>

  <div class="container">

    <div :class="'medical_aid_partners ' + data.bottom_margin ">

      <div class="medical_partner" v-for="member in data.partners">

        <img class="logo" :src="member.logo.url" />
        <h2 class="title" v-if="member.title" v-html="member.title"></h2>
        <div class="content" v-if="member.description" v-html="member.description"></div>
        <Button v-if="member.buttons" :data="member.buttons"></Button>

      </div>

    </div>

  </div>

</template>

<script setup>

const { isMobile } = useDevice();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>

