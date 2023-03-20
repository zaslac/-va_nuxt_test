<template>

  <div class="container">

    <div class="mobile_app_component">

      <div class="two_column">
        <div class="column">
          <div class="inner first_block">
            <div class="content" v-if="data.blocks[0].content" v-html="data.blocks[0].content"></div>
            <img v-if="data.blocks[0].image.url" :src="data.blocks[0].image.url"/>
            <div class="tiny-content" v-if="data.blocks[0].tiny_content" v-html="data.blocks[0].tiny_content" ></div>
          </div>
        </div>
        <div class="column">
          <div class="inner second_block">
            <div class="content" v-if="data.blocks[1].content" v-html="data.blocks[1].content"></div>
            <img v-if="data.blocks[1].image.url" :src="data.blocks[1].image.url"/>
            <div class="tiny-content" v-if="data.blocks[1].tiny_content" v-html="data.blocks[1].tiny_content" ></div>
          </div>
        </div>
      </div>

      <div class="one_column">
        <div class="column">
          <div class="inner third_block">
            <div class="content" v-if="data.blocks[2].content" v-html="data.blocks[2].content"></div>
            <div class="image_col">
              <img v-if="data.blocks[2].image.url" :src="data.blocks[2].image.url"/>
            </div>
            <div class="tiny-content" v-if="data.blocks[2].tiny_content" v-html="data.blocks[2].tiny_content" ></div>
          </div>
        </div>
      </div>

      <div class="two_column">
        <div class="column">
          <div class="inner fourth_block">
            <div class="content" v-if="data.blocks[3].content" v-html="data.blocks[3].content"></div>
            <img v-if="data.blocks[3].image.url" :src="data.blocks[3].image.url"/>
            <div class="tiny-content" v-if="data.blocks[3].tiny_content" v-html="data.blocks[3].tiny_content" ></div>
          </div>
        </div>
        <div class="column">
          <div class="inner fifth_block">
            <div class="content" v-if="data.blocks[4].content" v-html="data.blocks[4].content"></div>
            <img v-if="data.blocks[4].image.url" :src="data.blocks[4].image.url"/>
            <div class="tiny-content" v-if="data.blocks[4].tiny_content" v-html="data.blocks[4].tiny_content" ></div>
          </div>
        </div>
      </div>

      <div class="one_column">
        <div class="column">
          <div class="inner sixth_block">
            <div class="content" v-if="data.blocks[5].content" v-html="data.blocks[5].content"></div>
            <div class="image_col">
              <img v-if="data.blocks[5].image.url" :src="data.blocks[5].image.url"/>
            </div>
            <div class="tiny-content" v-if="data.blocks[5].tiny_content" v-html="data.blocks[5].tiny_content" ></div>
          </div>
        </div>
      </div>

      <div class="cta_block">
        <div class="content_side">
          <h2 v-if="data.cta_title" v-html="data.cta_title"></h2>
          <div class="description" v-if="data.cta_content" v-html="data.cta_content"></div>
          <Button v-if="data.buttons" :data="data.buttons"></Button>
        </div>
        <div class="image_side">
        <img :src="data.cta_image.url"/>
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