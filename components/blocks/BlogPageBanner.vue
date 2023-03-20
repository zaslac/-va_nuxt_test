<template>
  <div class="page_banner blog_page_banner">
    <div class="page_banner_text">
      <div class="container">
        <div class="back_button">
          <NuxtLink to="/blog/"><IconArrowLeft></IconArrowLeft></NuxtLink>
        </div>
        <div class="category">
          <NuxtLink :to="`/blog/category/${catLink(data)}`">
            <span v-html="catTitle(data)"></span>
          </NuxtLink>
        </div>
        <h1 v-html="data.title.rendered"></h1>
        <div class="tags">
          <NuxtLink
            v-for="tag in tags(data)"
            :to="`/blog/?tag_filter=${tag.name}`"
          >
            {{ tag.name }}
          </NuxtLink>
        </div>
        <div class="read_time" v-if="data.acf.read_time">
          {{ data.acf.read_time }} min. read
        </div>

        <div class="btn_group group_pager_down">
          <NuxtLink to="#single_blog_meta" class="pager_down"
            ><IconDownArrow></IconDownArrow
          ></NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="page_banner_image"
      :style="`background-image: url(${background});`"
    >
      <img
        src="@/assets/img/club_header_mobile_fade.png"
        alt=""
        v-if="$device.isMobile"
      />
      <img
        src="@/assets/img/club_header_desk_fade.png"
        alt=""
        v-if="!$device.isMobile"
      />
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
const { isMobile } = useDevice();

const background = computed(() => {
  if (isMobile && props.data.acf.featured_image_mobile.url) {
    return props.data.acf.featured_image_mobile.url;
  } else {
    return props.data.acf.featured_image_desktop.url;
  }
});

const catLink = (data) => {
  return data._embedded["wp:term"][0][0].slug;
};
const catTitle = (data) => {
  return data._embedded["wp:term"][0][0].name;
};

const tags = (data) => {
  return data._embedded["wp:term"][1];
};
</script>
