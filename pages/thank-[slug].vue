<template>
  <GlobalPageBlocks
      :title="pageData[0].title.rendered"
      :data="pageData[0].acf.global_page_blocks"
  ></GlobalPageBlocks>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const {
  data: pageData,
  error,
  refresh,
  pending,
} = await useAsyncData("pageData", () => {
  return $fetch(
      `${runTimeConfig.public.baseWp}/pages/?_embed&slug=thank-${route.params.slug}`
  );
});

definePageMeta({ layout: "thankyou" });

useHead({
  title: pageData.value[0].yoast_head_json.title,
  meta: [
    {
      name: "description",
      content: pageData.value[0].yoast_head_json?.description,
    },
    {
      property: "og:locale",
      content: pageData.value[0].yoast_head_json?.og_locale,
    },
    {
      property: "og:type",
      content: pageData.value[0].yoast_head_json?.og_type,
    },
    {
      property: "og:title",
      content: pageData.value[0].yoast_head_json?.og_title,
    },
    {
      property: "og:description",
      content: pageData.value[0].yoast_head_json?.og_description,
    },
    {
      property: "og:url",
      content: pageData.value[0].yoast_head_json?.og_url,
    },
    {
      property: "og:site_name",
      content: pageData.value[0].yoast_head_json?.og_site_name,
    },
    {
      property: "og:image",
      content: pageData.value[0].yoast_head_json?.og_image
          ? pageData.value[0].yoast_head_json?.og_image[0].url
          : "",
    },
    {
      property: "og:image:width",
      content: pageData.value[0].yoast_head_json?.og_image
          ? pageData.value[0].yoast_head_json?.og_image[0].width
          : "",
    },
    {
      property: "og:image:height",
      content: pageData.value[0].yoast_head_json?.og_image
          ? pageData.value[0].yoast_head_json?.og_image[0].height
          : "",
    },
    {
      property: "og:image:type",
      content: pageData.value[0].yoast_head_json?.og_image
          ? pageData.value[0].yoast_head_json?.og_image[0].type
          : "",
    },
    {
      name: "twitter:card",
      content: pageData.value[0].yoast_head_json?.twitter_card,
    },
    {
      name: "twitter:title",
      content: pageData.value[0].yoast_head_json?.twitter_title,
    },
    {
      name: "twitter:description",
      content: pageData.value[0].yoast_head_json?.twitter_description,
    },
    {
      name: "twitter:image",
      content: pageData.value[0].yoast_head_json?.twitter_image,
    },
    {
      name: "twitter:site",
      content: pageData.value[0].yoast_head_json?.twitter_site,
    },
  ],
});
</script>
