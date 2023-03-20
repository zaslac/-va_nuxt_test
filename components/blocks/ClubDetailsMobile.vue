<template>
  <div class="club_details_mobile">
    <div class="overlay_header">
      <button class="close" @click="$emit('close-modal'), (nact = false)">
        <IconBurgerClose></IconBurgerClose>
      </button>
    </div>
    <div class="overlay_title">
      <h2>
        Club details for <br />
        {{ data.title.rendered }}
      </h2>
    </div>
    <div class="overlay_body">
      <div class="club_gm">
        <h5>Club general manager</h5>
        <div class="gm_body">
          <div class="avatar" v-if="data.gym_manager_profile">
            <img :src="`${gym_manager_profile}`" alt="" />
          </div>
          <div class="title">{{ data.acf.gym_manage_name }}</div>
        </div>
      </div>
      <div class="club_location">
        <h5>Location</h5>
        <NuxtLink
          :to="`https://maps.google.com/?q=${data.acf.gym_lat},${data.acf.gym_long}`"
          target="_blank"
          class="link_hover"
          >View on Map</NuxtLink
        >
      </div>
      <div class="club_chat">
        <h5>Let’s chat</h5>
        <NuxtLink :to="`tel:${data.acf.gym_telephone}`" class="link_hover">{{
          data.acf.gym_telephone
        }}</NuxtLink>
      </div>
      <div class="club_opening_times">
        <h5>When we’re open</h5>
        <div class="opening_times">
          <div
            v-for="(time, t) in data.acf.operating_hours"
            class="time_wrap"
            :class="activeDayClass(time)"
          >
            <div class="day">{{ dayFun(time.goh_day) }}</div>
            <div class="time">
              {{ moment(time.goh_start, "HH:mm:ss").format("ha") }} —
              {{ moment(time.goh_end, "HH:mm:ss").format("ha") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import moment from "moment";
const nact = useNoticeAreaClubTimesOpen();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function dayFun(day) {
  if (day === "0") {
    return "Public Holidays";
  }
  if (day === "1") {
    return "Monday";
  }
  if (day === "2") {
    return "Tuesday";
  }
  if (day === "3") {
    return "Wednesday";
  }
  if (day === "4") {
    return "Thursday";
  }
  if (day === "5") {
    return "Friday";
  }
  if (day === "6") {
    return "Saturday";
  }
  if (day === "7") {
    return "Sunday";
  }
}

function getToday() {
  const todays_day = moment().format("dddd");

  if (todays_day === "Monday") {
    return 1;
  }
  if (todays_day === "Tuesday") {
    return 2;
  }
  if (todays_day === "Wednesday") {
    return 3;
  }
  if (todays_day === "Thursday") {
    return 4;
  }
  if (todays_day === "Friday") {
    return 5;
  }
  if (todays_day === "Saturday") {
    return 6;
  }
  if (todays_day === "Sunday") {
    return 7;
  }
  return todays_day;
}

const today = computed(() => {
  return props.data.acf.operating_hours.find((t) => t.goh_day == getToday());
});

function activeDayClass(data) {
  if (data.goh_day == getToday()) {
    return "active " + "time_" + data.goh_day;
  }
  return "time_" + data.goh_day;
}
</script>
