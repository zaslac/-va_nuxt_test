<template>
  <div class="club_details_timetable">
    <div class="container">
      <h5>timetable</h5>
      <h2 v-html="`What’s on at <br> ${title}`"></h2>
      <p>Already a member?</p>
      <div class="btn_group">
        <NuxtLink to="#!" class="btn btn_red_outline btn_white_text"
          >Log in to book a class</NuxtLink
        >
      </div>
    </div>

    <div class="timetable_tab_group">
      <ul class="timetable_tab_header">
        <li
          v-for="(t, index) in timeTable"
          :key="index"
          :class="index == openTable ? 'active' : ''"
          @click="openTable = index"
        >
          <div class="day">{{ moment(t.date, "YYYY-MM-DD").format("DD") }}</div>

          <div class="month_day">
            {{ moment(t.date, "YYYY-MM-DD").format("MMM") }}
            &bull; {{ moment(t.date, "YYYY-MM-DD").format("ddd") }}
          </div>
        </li>
      </ul>
    </div>

    <div class="timetable_tab_body">
      <ul class="timetable_table">
        <li class="table_header">
          <span>Time</span>
          <span>Class</span>
          <span>Instructor</span>
          <span>Details</span>
        </li>
      </ul>

      <div
        v-for="(t, tindex) in timeTable"
        :key="tindex"
        class="timetable_tab"
        v-show="tindex == openTable"
      >
        <div
          class="classes"
          v-for="c in t.classes"
          :class="openClass == c.cla_id ? 'active' : ''"
        >
          <div class="class_overview">
            <span class="time_col">
              <span class="time" data-val="">
                {{ moment(c.ses_time, "HH:mm:ss").format("hh:mma") }}
              </span>
              <span class="duration" data-val="">{{ c.ses_duration }}mins</span>
            </span>
            <span class="class_col">
              <div
                class="circle"
                :style="`background: ${c.backgroundcolor}`"
              ></div>
              {{ c.cla_name }}
            </span>
            <span class="inst_col">
              {{ c.instructors[0]?.use_name }}
              {{ c.instructors[0]?.use_surname }}
            </span>
            <span class="buttons_col" v-if="c?.cla_detail">
              <button
                @click="toggleClass(c.cla_id)"
                v-show="openClass != c.cla_id"
              >
                <IconPlus></IconPlus>
              </button>
              <button @click="toggleClass(0)" v-show="openClass == c.cla_id">
                <IconMinus></IconMinus>
              </button>
            </span>
          </div>
          <div
            class="class_description"
            v-show="openClass == c.cla_id"
            v-html="c?.cla_detail"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import moment from "moment";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const runTimeConfig = useRuntimeConfig();
const { isMobile } = useDevice();

const openTable = ref(0);

const {
  data: timeTable,
  error,
  refresh,
  pending,
} = await useAsyncData("timeTable", () => {
  return $fetch(
    `${runTimeConfig.public.cusWp}/club-timetable/?start_date=2023-01-30&end_date=2023-02-06&gym_id=53`
  );
});

const openClass = ref(0);

const toggleClass = (id) => {
  openClass.value = id;
};
</script>
