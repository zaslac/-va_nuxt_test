<template>
  <GlobalPageBlocks
    :title="subPageData[0].title.rendered"
    :data="subPageData[0].acf.global_page_blocks"
  ></GlobalPageBlocks>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const {
  data: subPageData,
  error,
  refresh,
  pending,
} = await useAsyncData("subPageData", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/pages/?_embed&slug=${route.params.childSlug}`
  );
});

definePageMeta({
  layout: false,
});

if (subPageData.value[0]?.template === "global_form_page.php") {
  setPageLayout("joinform");
  // definePageMeta({ layout: "joinform" });
} else if (subPageData.value[0]?.template === "no_nav_page.php") {
  setPageLayout("nonav");
  // definePageMeta({ layout: "nonav" });
} else {
  setPageLayout("default");
  // definePageMeta({ layout: "default" });
}

useHead({
  bodyAttrs: {
    class: subPageData.value[0].acf?.page_nav_settings,
  },
  title: subPageData.value[0].yoast_head_json.title,
  meta: [
    {
      name: "description",
      content: subPageData.value[0].yoast_head_json?.description,
    },
    {
      property: "og:locale",
      content: subPageData.value[0].yoast_head_json?.og_locale,
    },
    {
      property: "og:type",
      content: subPageData.value[0].yoast_head_json?.og_type,
    },
    {
      property: "og:title",
      content: subPageData.value[0].yoast_head_json?.og_title,
    },
    {
      property: "og:description",
      content: subPageData.value[0].yoast_head_json?.og_description,
    },
    {
      property: "og:url",
      content: subPageData.value[0].yoast_head_json?.og_url,
    },
    {
      property: "og:site_name",
      content: subPageData.value[0].yoast_head_json?.og_site_name,
    },
    {
      property: "og:image",
      content: subPageData.value[0].yoast_head_json?.og_image
        ? subPageData.value[0].yoast_head_json?.og_image[0].url
        : "",
    },
    {
      property: "og:image:width",
      content: subPageData.value[0].yoast_head_json?.og_image
        ? subPageData.value[0].yoast_head_json?.og_image[0].width
        : "",
    },
    {
      property: "og:image:height",
      content: subPageData.value[0].yoast_head_json?.og_image
        ? subPageData.value[0].yoast_head_json?.og_image[0].height
        : "",
    },
    {
      property: "og:image:type",
      content: subPageData.value[0].yoast_head_json?.og_image
        ? subPageData.value[0].yoast_head_json?.og_image[0].type
        : "",
    },
    {
      name: "twitter:card",
      content: subPageData.value[0].yoast_head_json?.twitter_card,
    },
    {
      name: "twitter:title",
      content: subPageData.value[0].yoast_head_json?.twitter_title,
    },
    {
      name: "twitter:description",
      content: subPageData.value[0].yoast_head_json?.twitter_description,
    },
    {
      name: "twitter:image",
      content: subPageData.value[0].yoast_head_json?.twitter_image,
    },
    {
      name: "twitter:site",
      content: subPageData.value[0].yoast_head_json?.twitter_site,
    },
  ],
});
</script>
