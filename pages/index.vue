<template>
  <GlobalPageBlocks
    :title="homePageData[0].title.rendered"
    :data="homePageData[0].acf.global_page_blocks"
  ></GlobalPageBlocks>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();
definePageMeta({ layout: "default" });
const {
  data: homePageData,
  error,
  refresh,
  pending,
} = await useAsyncData("homePageData", () => {
  return $fetch(`${runTimeConfig.public.baseWp}/pages/?_embed&slug=home`);
});

useHead({
  bodyAttrs: {
    class: homePageData.value[0].acf?.page_nav_settings,
  },
  title: homePageData.value[0].yoast_head_json.title,
  meta: [
    {
      name: "description",
      content: homePageData.value[0].yoast_head_json?.description,
    },
    {
      property: "og:locale",
      content: homePageData.value[0].yoast_head_json?.og_locale,
    },
    {
      property: "og:type",
      content: homePageData.value[0].yoast_head_json?.og_type,
    },
    {
      property: "og:title",
      content: homePageData.value[0].yoast_head_json?.og_title,
    },
    {
      property: "og:description",
      content: homePageData.value[0].yoast_head_json?.og_description,
    },
    {
      property: "og:url",
      content: homePageData.value[0].yoast_head_json?.og_url,
    },
    {
      property: "og:site_name",
      content: homePageData.value[0].yoast_head_json?.og_site_name,
    },
    {
      property: "og:image",
      content: homePageData.value[0].yoast_head_json?.og_image
        ? homePageData.value[0].yoast_head_json?.og_image[0].url
        : "",
    },
    {
      property: "og:image:width",
      content: homePageData.value[0].yoast_head_json?.og_image
        ? homePageData.value[0].yoast_head_json?.og_image[0].width
        : "",
    },
    {
      property: "og:image:height",
      content: homePageData.value[0].yoast_head_json?.og_image
        ? homePageData.value[0].yoast_head_json?.og_image[0].height
        : "",
    },
    {
      property: "og:image:type",
      content: homePageData.value[0].yoast_head_json?.og_image
        ? homePageData.value[0].yoast_head_json?.og_image[0].type
        : "",
    },
    {
      name: "twitter:card",
      content: homePageData.value[0].yoast_head_json?.twitter_card,
    },
    {
      name: "twitter:title",
      content: homePageData.value[0].yoast_head_json?.twitter_title,
    },
    {
      name: "twitter:description",
      content: homePageData.value[0].yoast_head_json?.twitter_description,
    },
    {
      name: "twitter:image",
      content: homePageData.value[0].yoast_head_json?.twitter_image,
    },
    {
      name: "twitter:site",
      content: homePageData.value[0].yoast_head_json?.twitter_site,
    },
  ],
});
</script>
