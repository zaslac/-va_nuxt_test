<template>
  <div class="container">
    <div class="faq_section">
      <div class="section_title">
        <h5 v-html="data.sub_title"></h5>
        <h2 v-html="data.title"></h2>
      </div>
      <div class="faqs">
        <div class="faq" v-for="(faq, key) in data.faq" :id="'faq'+key" :data-key="key" :class="{ 'active': key === 0 }" v-on:click="handleFaqs($event)">
          <div class="question" >{{faq.question}}
            <div class="closed"><plus/></div>
            <div class="open"><minus/></div>
          </div>
          <div class="answer" v-html="faq.answer" ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Plus from "../icon/Plus";
import Minus from "../icon/Minus";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function handleFaqs(e) {
  var clickedFaq = e.currentTarget.id;

  var faqs = document.getElementsByClassName('faq');

  for (var i = 0; i < faqs.length; i++) {
    faqs[i].classList.remove('active');
  }

  e.currentTarget.classList.add('active');

}

</script>