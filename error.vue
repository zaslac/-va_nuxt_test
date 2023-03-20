<template>
  <NuxtLayout>
    <NavBar :data="'on_dark_bg'"></NavBar>
    <GlobalPageBlocks
      :title="errorPageData[0].title.rendered"
      :data="errorPageData[0].acf.global_page_blocks"
    ></GlobalPageBlocks>
    <Footer></Footer>
  </NuxtLayout>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const {
  data: errorPageData,
  error,
  refresh,
  pending,
} = await useAsyncData("errorPageData", () => {
  return $fetch(`${runTimeConfig.public.baseWp}/pages/?_embed&slug=not-found`);
});

useHead({
  title: errorPageData.value[0].yoast_head_json?.title,
  meta: [
    {
      name: "description",
      content: errorPageData.value[0].yoast_head_json?.description,
    },
    {
      property: "og:locale",
      content: errorPageData.value[0].yoast_head_json?.og_locale,
    },
    {
      property: "og:type",
      content: errorPageData.value[0].yoast_head_json?.og_type,
    },
    {
      property: "og:title",
      content: errorPageData.value[0].yoast_head_json?.og_title,
    },
    {
      property: "og:description",
      content: errorPageData.value[0].yoast_head_json?.og_description,
    },
    {
      property: "og:url",
      content: errorPageData.value[0].yoast_head_json?.og_url,
    },
    {
      property: "og:site_name",
      content: errorPageData.value[0].yoast_head_json?.og_site_name,
    },
    {
      property: "og:image",
      content: errorPageData.value[0].yoast_head_json?.og_image
        ? errorPageData.value[0].yoast_head_json?.og_image[0].url
        : "",
    },
    {
      property: "og:image:width",
      content: errorPageData.value[0].yoast_head_json?.og_image
        ? errorPageData.value[0].yoast_head_json?.og_image[0].width
        : "",
    },
    {
      property: "og:image:height",
      content: errorPageData.value[0].yoast_head_json?.og_image
        ? errorPageData.value[0].yoast_head_json?.og_image[0].height
        : "",
    },
    {
      property: "og:image:type",
      content: errorPageData.value[0].yoast_head_json?.og_image
        ? errorPageData.value[0].yoast_head_json?.og_image[0].type
        : "",
    },
    {
      name: "twitter:card",
      content: errorPageData.value[0].yoast_head_json?.twitter_card,
    },
    {
      name: "twitter:title",
      content: errorPageData.value[0].yoast_head_json?.twitter_title,
    },
    {
      name: "twitter:description",
      content: errorPageData.value[0].yoast_head_json?.twitter_description,
    },
    {
      name: "twitter:image",
      content: errorPageData.value[0].yoast_head_json?.twitter_image,
    },
    {
      name: "twitter:site",
      content: errorPageData.value[0].yoast_head_json?.twitter_site,
    },
  ],
});
</script>
