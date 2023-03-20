<template>

  <div class="container">

    <div class="grid_blocks">

      <div v-for="(block,key) in data.grid_blocks" :class="'grid_block ' + block.bottom_margin ">

        <div class="block_image" :style="`background-image: url(${block.image.url});`"></div>

        <div class="block_content">

          <div class="counter">0{{key+1}}</div>

          <h2 v-html="block.title"></h2>

          <div v-html="block.content"></div>

          <h3 v-if="block.list_title" v-html="block.list_title"></h3>

          <ul v-if="block.list">
            <li v-for="item in block.list">
              <div class="icon"><IconCheckWhite /></div>
              {{ item.list_item }}
            </li>
          </ul>

          <Button v-if="block.buttons" :data="block.buttons"></Button>

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
