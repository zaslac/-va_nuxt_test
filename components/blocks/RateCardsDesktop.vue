<template>
    <div class="rate_cards_list">
      <div class="rate_card" v-for="Cards in data" :style="`background:linear-gradient(180deg, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 1) 0%, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 1) 50%, rgba(${Cards.card_colour.red}, ${Cards.card_colour.green}, ${Cards.card_colour.blue}, 0.15) 100%);`">
        <div class="fade_overlay"></div>
        <div class="card_content">
          <img :src="Cards.icon.url"/>
          <h6 class="title" v-html="Cards.title"></h6>
          <div class="description" v-html="Cards.description"></div>
          <div class="rate">
            Max rate:<br/>
            <span>R{{Cards.rate}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

  const { isMobile } = useDevice();

  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  });

</script>
