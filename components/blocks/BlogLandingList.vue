<template>
  <div class="blog_landing_list">
    <div class="container">
      <div class="blog_article_main">
        <div
          v-for="(bitem, bindex) in blogList"
          :class="`article artilce-${bitem.id}`"
        >
          <BlocksBlogCardFeaturedFirst :data="bitem" v-if="bindex == 0" />
          <BlocksBlogCardGeneric :data="bitem" v-else />
        </div>
      </div>
      <div class="btn_group">
        <button @click="nextPage()" class="btn btn_white_text btn_grey_outline">
          View more
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const page = ref(1);

const nextPage = () => {
  page.value = page.value + 1;
  getNextPage();
};

const {
  data: blogList,
  error,
  refresh,
  pending,
} = await useAsyncData("blogList", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/posts/?_embed&per_page=${page.value * 6}`
  );
});

const getNextPage = async () => {
  refresh();
};
</script>
