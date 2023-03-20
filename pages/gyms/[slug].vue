<template>
  <div class="single_club" v-if="!pending">
    <BlocksSingleClubHeader :data="club[0]"></BlocksSingleClubHeader>

    <GlobalPageBlocks
      :title="club[0].title.rendered"
      :data="club[0].acf.global_page_blocks"
    ></GlobalPageBlocks>

    <client-only>
      <Teleport v-if="membership" to="#section_club_membership_block">
        <BlocksClubMembershipBlock :data="club[0]"></BlocksClubMembershipBlock>
      </Teleport>
    </client-only>
  </div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const {
  data: club,
  error,
  refresh,
  pending,
} = await useAsyncData("club", () => {
  return $fetch(
    `${runTimeConfig.public.baseWp}/clubs/?_embed&slug=${route.params.slug}`
  );
});

const membership = ref(false);

if (!pending) {
  club.value[0].acf.global_page_blocks.find((e) => {
    if (e.acf_fc_layout == "club_membership_block") {
      membership.value = true;
    }
  });
}

useHead({
  title: club.value[0].yoast_head_json.title,
  meta: [
    {
      name: "description",
      content: club.value[0].yoast_head_json?.description,
    },
    {
      property: "og:locale",
      content: club.value[0].yoast_head_json?.og_locale,
    },
    {
      property: "og:type",
      content: club.value[0].yoast_head_json?.og_type,
    },
    {
      property: "og:title",
      content: club.value[0].yoast_head_json?.og_title,
    },
    {
      property: "og:description",
      content: club.value[0].yoast_head_json?.og_description,
    },
    {
      property: "og:url",
      content: club.value[0].yoast_head_json?.og_url,
    },
    {
      property: "og:site_name",
      content: club.value[0].yoast_head_json?.og_site_name,
    },
    {
      property: "og:image",
      content: club.value[0].yoast_head_json?.og_image
        ? club.value[0].yoast_head_json?.og_image[0].url
        : "",
    },
    {
      property: "og:image:width",
      content: club.value[0].yoast_head_json?.og_image
        ? club.value[0].yoast_head_json?.og_image[0].width
        : "",
    },
    {
      property: "og:image:height",
      content: club.value[0].yoast_head_json?.og_image
        ? club.value[0].yoast_head_json?.og_image[0].height
        : "",
    },
    {
      property: "og:image:type",
      content: club.value[0].yoast_head_json?.og_image
        ? club.value[0].yoast_head_json?.og_image[0].type
        : "",
    },
    {
      name: "twitter:card",
      content: club.value[0].yoast_head_json?.twitter_card,
    },
    {
      name: "twitter:title",
      content: club.value[0].yoast_head_json?.twitter_title,
    },
    {
      name: "twitter:description",
      content: club.value[0].yoast_head_json?.twitter_description,
    },
    {
      name: "twitter:image",
      content: club.value[0].yoast_head_json?.twitter_image,
    },
    {
      name: "twitter:site",
      content: club.value[0].yoast_head_json?.twitter_site,
    },
  ],
});
</script>
