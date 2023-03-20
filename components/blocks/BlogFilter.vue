<template>
  <div class="blog_filter">
    <div class="container">
      <div class="filter_bar_wrapper">
        <div class="category_pills">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <NuxtLink to="/blog">Latest</NuxtLink>
            </div>
            <div class="swiper-slide">
              <NuxtLink to="/blog/exercise">Exercise</NuxtLink>
            </div>
            <div class="swiper-slide">
              <NuxtLink to="/blog/nutrition">Nutrition</NuxtLink>
            </div>
            <div class="swiper-slide">
              <NuxtLink to="/blog/wellness">Wellness</NuxtLink>
            </div>
            <div class="swiper-slide">
              <NuxtLink to="/blog/kids">Kids</NuxtLink>
            </div>
            <div class="swiper-slide">
              <NuxtLink to="/blog/news">News</NuxtLink>
            </div>
          </div>
        </div>

        <div class="search_form_wrapper">
          <div
            class="search_button"
            @click="searchActive = true"
            v-on:click="focusSearch"
          >
            <div class="icon"><IconMag /></div>
            Search blog
          </div>
        </div>
        <transition name="fade">
          <div class="search_wrapper" v-if="searchActive">
            <div class="search_input_wrapper">
              <div class="search_icon">
                <IconMag />
              </div>
              <form action="" @submit.prevent>
                <div class="form_wrap">
                  <input
                    id="search_blog_field"
                    type="text"
                    placeholder="Search blog"
                    v-model="searchTerm"
                  />
                </div>
              </form>
              <div
                v-if="$device.isMobile"
                class="search_clear"
                @click="clearSearch"
              >
                <IconBurgerClose />
              </div>
              <div
                v-if="!$device.isMobile"
                class="search_clear"
                @click="clearSearch"
              >
                <IconBurgerClose />
              </div>
            </div>
            <div
              v-if="$device.isMobile"
              class="search_cancel"
              @click="clearSearch"
            >
              Cancel
            </div>
          </div>
        </transition>
      </div>
      <transition name="fade">
        <div class="blog_filter_results" v-if="searchActive">
          <div class="container">
            <div class="blog_results_count" v-if="searchTerm.length >= 3">
              <div class="results" v-if="filteredBlogList.length">
                {{ filteredBlogList.length }} results for
                <strong> “{{ searchTerm }}”</strong>
              </div>
              <div
                v-else-if="
                  searchTerm.length >= 3 && filteredBlogList?.length == 0
                "
              >
                <p>
                  No results for <strong> “{{ searchTerm }}”</strong>
                </p>
                <p class="no_result_text">
                  Please double check your spelling or please try another
                  search.
                </p>
              </div>
            </div>

            <div class="blog_ressult_wrapper" v-if="!pending">
              <NuxtLink
                v-for="blog in filteredBlogList"
                class="blog_search_item"
                :to="`/blog/${blog.category_slug}/${blog.slug}`"
              >
                <div class="bitem_image">
                  <img :src="blog.image" alt="" />
                </div>
                <div class="bitem_body">
                  <div class="category">{{ blog.category }}</div>
                  <div class="title" v-html="blog.title"></div>
                  <div class="date">{{ blog.date }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <client-only>
      <Teleport to="#blog_landing">
        <div
          class="blog_search_underly"
          :class="filterClass"
          v-if="searchActive"
        ></div>
      </Teleport>
    </client-only>
  </div>
</template>
<script setup>
import Swiper from "swiper/bundle";
import "swiper/css";
const searchActive = ref(false);
const searchTerm = ref("");

const route = useRoute();

const runTimeConfig = useRuntimeConfig();

const { pending, data: blogListRaw } = useLazyFetch(
  `${runTimeConfig.public.cusWp}/blog_list`
);
const filteredBlogList = computed((e) => {
  if (
    searchTerm.value != "" &&
    searchTerm.value &&
    searchTerm.value.length >= 3
  ) {
    let blogListFormatted = blogListRaw.value;
    blogListFormatted = blogListFormatted.filter((item) => {
      return (
        item.title.toUpperCase().includes(searchTerm.value.toUpperCase()) ||
        item.tags.toUpperCase().includes(searchTerm.value.toUpperCase())
      );
    });
    return blogListFormatted;
  }
});

if (route.query.tag_filter) {
  searchActive.value = true;
  searchTerm.value = route.query.tag_filter;
}

const filterClass = computed(() => {
  if (searchActive && searchTerm.value.length >= 1) {
    return " dark";
  }
});

const clearSearch = () => {
  searchActive.value = false;
  searchTerm.value = "";
};

onMounted(() => {
  const categoryPills = new Swiper(".category_pills", {
    slidesPerView: "auto",
    freeMode: {
      enabled: true,
    },
  });
});

function focusSearch() {
  setTimeout(function () {
    var textbox = document.getElementById("search_blog_field");
    textbox.focus();
  }, 200);
}

watch(
  () => route.query.tag_filter,
  () => {
    searchActive.value = true;
    searchTerm.value = route.query.tag_filter;
    window.scrollTo(0, 0);
  }
);
</script>
