<template>
  <div class="column_featured_number_blocks">
    <div class="container">
      <div class="section_title">
        {{ data.section_title }}
      </div>

      <div class="section_columns flex">
        <div
          class="section_col"
          v-for="(col, i) in data.columns"
          :key="i"
          :class="`col_${i + 1}`"
        >
          <div class="col_body">
            <div class="title" v-html="col.title"></div>
            <div class="description" v-html="col.description"></div>
            <div class="pills">
              <div
                class="pill"
                v-if="col.pills"
                v-for="pill in col.pills"
                v-html="pill.pill_title"
              ></div>
            </div>
          </div>
          <div class="image">
            <img :src="col.image" alt="" />
          </div>
        </div>
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
</script>
