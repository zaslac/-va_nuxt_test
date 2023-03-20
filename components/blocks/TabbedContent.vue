<template>

  <div class="tabbed_content">

    <div class="container">

      <div class="tab_title_holder">

        <div class="tab_list_title">

          <div class="tab_title_content" v-for="(tab,index) in data.horizontal_list" :key="index" :class="index == openTable ? 'active' : ''" @click="openTable = index">
            <div class="inner">
              <div class="title" v-if="tab.title" v-html="tab.title"></div>
              <div class="description" v-if="tab.description" v-html="tab.description"></div>
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="tab_list_content">

      <div class="tab_content" v-for="(tab,tindex) in data.horizontal_list" :key="tindex" v-show="tindex == openTable">

        <GlobalPageBlocks
            :data="tab.global_page_blocks"
        ></GlobalPageBlocks>

      </div>

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

const openTable = ref(0);

const openClass = ref(0);

const toggleClass = (id) => {
  openClass.value = id;
};

</script>
