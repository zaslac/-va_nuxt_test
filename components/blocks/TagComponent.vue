<template>

  <div class="tag_component">

    <div class="container">

      <div class="section_title">

        <h5 v-if="data.sub_title" v-html="data.sub_title"></h5>

        <h2 v-if="data.title" v-html="data.title"></h2>

        <div v-if="data.content" v-html="data.content" ></div>

      </div>


      <div class="tag_list">

        <NuxtLink class="tag_link" v-for="tagItem in data.tags" :to="tagItem.tag.url">{{ tagItem.tag.title }}</NuxtLink>

      </div>

      <Button v-if="data.buttons" :data="data.buttons"></Button>

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
