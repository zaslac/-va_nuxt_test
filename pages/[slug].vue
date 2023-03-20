<template>
  <GlobalPageBlocks
    :title="singlePageData[0].title.rendered"
    :data="singlePageData[0].acf.global_page_blocks"
  ></GlobalPageBlocks>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

// const {
//   data: singlePageData,
//   error,
//   refresh,
//   pending,
// } = await useAsyncData("singlePageData", () => {
//   return $fetch(
//     `${runTimeConfig.public.baseWp}/pages/?_embed&slug=${route.params.slug}`
//   );
// });
const { data: singlePageData, pending } = await useAsyncData(
  "singlePageData",
  () =>
    $fetch(
      `${runTimeConfig.public.baseWp}/pages/?_embed&slug=${route.params.slug}`
    )
);

// definePageMeta({ layout: "joinform" });
definePageMeta({
  layout: false,
});

// definePageMeta({ layout: "default" });
if (singlePageData.value[0]?.template === "global_form_page.php") {
  setPageLayout("joinform");
  // definePageMeta({ layout: "joinform" });
} else if (singlePageData.value[0]?.template === "no_nav_page.php") {
  setPageLayout("nonav");
  // definePageMeta({ layout: "nonav" });
} else {
  setPageLayout("default");
  // definePageMeta({ layout: "default" });
}

useHead({
  bodyAttrs: {
    class: singlePageData.value[0].acf?.page_nav_settings,
  },
  title: singlePageData.value[0].yoast_head_json.title,
  meta: [
    {
      name: "description",
      content: singlePageData.value[0].yoast_head_json?.description,
    },
    {
      property: "og:locale",
      content: singlePageData.value[0].yoast_head_json?.og_locale,
    },
    {
      property: "og:type",
      content: singlePageData.value[0].yoast_head_json?.og_type,
    },
    {
      property: "og:title",
      content: singlePageData.value[0].yoast_head_json?.og_title,
    },
    {
      property: "og:description",
      content: singlePageData.value[0].yoast_head_json?.og_description,
    },
    {
      property: "og:url",
      content: singlePageData.value[0].yoast_head_json?.og_url,
    },
    {
      property: "og:site_name",
      content: singlePageData.value[0].yoast_head_json?.og_site_name,
    },
    {
      property: "og:image",
      content: singlePageData.value[0].yoast_head_json?.og_image
        ? singlePageData.value[0].yoast_head_json?.og_image[0].url
        : "",
    },
    {
      property: "og:image:width",
      content: singlePageData.value[0].yoast_head_json?.og_image
        ? singlePageData.value[0].yoast_head_json?.og_image[0].width
        : "",
    },
    {
      property: "og:image:height",
      content: singlePageData.value[0].yoast_head_json?.og_image
        ? singlePageData.value[0].yoast_head_json?.og_image[0].height
        : "",
    },
    {
      property: "og:image:type",
      content: singlePageData.value[0].yoast_head_json?.og_image
        ? singlePageData.value[0].yoast_head_json?.og_image[0].type
        : "",
    },
    {
      name: "twitter:card",
      content: singlePageData.value[0].yoast_head_json?.twitter_card,
    },
    {
      name: "twitter:title",
      content: singlePageData.value[0].yoast_head_json?.twitter_title,
    },
    {
      name: "twitter:description",
      content: singlePageData.value[0].yoast_head_json?.twitter_description,
    },
    {
      name: "twitter:image",
      content: singlePageData.value[0].yoast_head_json?.twitter_image,
    },
    {
      name: "twitter:site",
      content: singlePageData.value[0].yoast_head_json?.twitter_site,
    },
  ],
});
</script>
