<template>
  <div class="meganav mega_four_block_full">
    <div class="container flex">
      <div class="return_box" v-if="isMobile">
        <button @click="$emit('close-megaNav')">
          <IconBackArrow></IconBackArrow>
        </button>
        <button @click="$emit('close-megaNav')">
          <IconBurgerClose></IconBurgerClose>
        </button>
      </div>

      <div class="parent_title" v-html="parentTitle" v-if="isMobile"></div>

      <NuxtLink
        :to="menu.block_1.link"
        class="col col_1"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_1.image" alt="" />
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_1.small_title"></div>
            <div class="big_title" v-html="menu.block_1.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="menu.block_2.link"
        class="col col_2"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_2.image" alt="" />
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_2.small_title"></div>
            <div class="big_title" v-html="menu.block_2.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="menu.block_3.link"
        class="col col_3"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_3.image" alt="" />
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_3.small_title"></div>
            <div class="big_title" v-html="menu.block_3.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        :to="menu.block_4.link"
        class="col col_4"
        @click="$emit('close-megaNav')"
      >
        <div class="box_background">
          <img :src="menu.block_4.image" alt="" />
        </div>
        <div class="box_overlay">
          <div class="title">
            <div class="small_title" v-html="menu.block_4.small_title"></div>
            <div class="big_title" v-html="menu.block_4.big_title"></div>
          </div>
          <div class="link_btn_group">
            <div class="btn_arrow"><IconNavBtnArrow></IconNavBtnArrow></div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
  parentTitle: {
    type: String,
    required: true,
  },
});
</script>
