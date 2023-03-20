<template>
  <div class="article_share">
    <div class="container">
      <button
        class="share_main"
        @mouseover="showShare = true"
        @mouseleave="showShare = false"
      >
        <IconArticleShareIcon />
      </button>

      <transition name="list">
        <div
          class="share_wrapper"
          v-show="showShare"
          @mouseover="showShare = true"
          @mouseleave="showShare = false"
        >
          <a
            :href="`https://www.facebook.com/share.php?u=${runTimeConfig.baseSiteUrl}/${route.path}&t=${data.title.rendered}`"
            target="_blank"
            title="Facebook"
            ><IconFacebook
          /></a>

          <a
            :href="`https://twitter.com/intent/tweet?text=${data.title.rendered}-${runTimeConfig.baseSiteUrl}/${route.path}`"
            target="_blank"
            title="Twitter"
          >
            <IconTwitter />
          </a>
          <a
            :href="`https://www.linkedin.com/shareArticle?mini=true&url=${runTimeConfig.baseSiteUrl}${route.path}&title=${data.title.rendered}&summary=`"
            target="_blank"
            title="LinkedIn"
          >
            <IconLinkedin />
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();
const route = useRoute();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const showShare = ref(false);
</script>
