<template>
  <div class="blog_category_landing_list">
    <div class="container">
      <div class="blog_category_main">
        <div v-for="btpost in blogTermPosts">
          <BlocksBlogCategoryCardGeneric :data="btpost" />
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
const route = useRoute();
const runTimeConfig = useRuntimeConfig();
const rawBlogCategories = await useBlogCategories();

const page = ref(1);

const nextPage = () => {
  page.value = page.value + 1;
  getNextPage();
};

const termSlug = [route.params.category];
const blogCat = ref();
termSlug.forEach(function (val, index, array) {
  const bc = rawBlogCategories.blogCategories.value.find(
    (bcatval) => bcatval.slug == route.params.category
  );
  blogCat.value = bc.id;
});

const {
  data: blogTermPosts,
  error,
  refresh,
  pending,
} = await useAsyncData("blogTermPosts", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/posts/?_embed&categories=${
      blogCat.value
    }&per_page=${page.value * 6}`
  );
});

const getNextPage = async () => {
  refresh();
};
</script>
