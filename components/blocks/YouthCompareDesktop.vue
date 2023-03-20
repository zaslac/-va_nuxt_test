<template>

  <div class="membership_inner_header">
    <div class="logo"><IconWebLogo></IconWebLogo></div>
    <div class="title">Compare youth <br/>membership options</div>
  </div>

  <div class="comparison_table">

    <div class="compare_select" v-if="$device.isMobile">
      <div class="plan">
        <select id="left_col" v-on:change="Compare">
          <option value="compare_1" selected>Club: Off-Peak</option>
          <option value="compare_2">Club: Youth / Full Access</option>
          <option value="compare_3">Youth Premier</option>
          <option value="compare_4">Premier</option>
          <option value="compare_5">Collection</option>
        </select>
      </div>
      <div class="plan">
        <select id="right_col" v-on:change="Compare">
          <option value="compare_1">Club: Off-Peak</option>
          <option value="compare_2" selected>Club: Youth / Full Access</option>
          <option value="compare_3">Youth Premier</option>
          <option value="compare_4">Premier</option>
          <option value="compare_5">Collection</option>
        </select>
      </div>
    </div>


    <div class="header" v-if="!$device.isMobile">
      <div class="title"></div>
      <div class="data_columns compare_1"><div class="data_col">Club: Off-Peak</div></div>
      <div class="data_columns compare_2"><div class="data_col">Club: Youth / Full Access</div></div>
      <div class="data_columns compare_3"><div class="data_col">Youth Premier</div></div>
      <div class="data_columns compare_4"><div class="data_col">Premier</div></div>
      <div class="data_columns compare_5"><div class="data_col">Collection</div></div>
    </div>
    <div class="comparison_section_title" style="z-index: 9;">
      <div>Club Access</div>
    </div>
    <div class="data_table">
      <div class="titles">
          <div class="title">Restricted hours access to one club</div>
          <div class="title">Unrestricted access to one club</div>
          <div class="title">Access to multiple clubs in SA</div>
          <div class="title">Access to international clubs</div>
          <div class="title">Access to luxury clubs</div>
      </div>
      <div class="data_columns compare_1">
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
      </div>
      <div class="data_columns compare_2">
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
      </div>
      <div class="data_columns compare_3">
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
      </div>
      <div class="data_columns compare_4">
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
      </div>
      <div class="data_columns compare_5">
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
      </div>
    </div>
    <div class="comparison_section_title" style="z-index: 20;">
      <div>Benefits</div>
    </div>
    <div class="data_table">
      <div class="titles">
        <div class="title">Access to 700+ <a href="/workout-online/">online workouts</a> on our app</div>
        <div class="title">Free swim assessment, bookable via our app</div>
        <div class="title">State of the art exercise equipment</div>
        <div class="title">Rockstar instructors and Personal Trainers</div>
        <div class="title">20% discount on Padel court access</div>
        <div class="title">Towel service
          <div class="information">
            <div class="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8.125" stroke="#7C7C7C" stroke-width="1.75"/>
              <line x1="11.9966" y1="17" x2="11.9966" y2="10.932" stroke="#7C7C7C" stroke-width="1.75"/>
              <line x1="11.9966" y1="8.80469" x2="11.9966" y2="6.99993" stroke="#7C7C7C" stroke-width="1.75"/>
            </svg></div>
            <div class="information-content">No need to bring a towel, grab one when
              you arrive and leave it with us to wash.</div>
          </div>
        </div>
        <div class="title">Complimentary fresh fruit</div>
        <div class="title">Concierge service
          <div class="information">
            <div class="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8.125" stroke="#7C7C7C" stroke-width="1.75"/>
              <line x1="11.9966" y1="17" x2="11.9966" y2="10.932" stroke="#7C7C7C" stroke-width="1.75"/>
              <line x1="11.9966" y1="8.80469" x2="11.9966" y2="6.99993" stroke="#7C7C7C" stroke-width="1.75"/>
            </svg></div>
            <div class="information-content">Our team can assist with anything from
              steaming a shirt to a loose button.</div>
          </div>
        </div>
        <div class="title">Complimentary shoeshine</div>
        <div class="title">Reformer Pilates</div>
        <div class="title">Access to Health Professionals
          <div class="information">
            <div class="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8.125" stroke="#7C7C7C" stroke-width="1.75"/>
              <line x1="11.9966" y1="17" x2="11.9966" y2="10.932" stroke="#7C7C7C" stroke-width="1.75"/>
              <line x1="11.9966" y1="8.80469" x2="11.9966" y2="6.99993" stroke="#7C7C7C" stroke-width="1.75"/>
            </svg></div>
            <div class="information-content">Biokineticists, Chiropractors, Dieticians,
              Sports Massage Therapists, Physiotherapists.</div>
          </div>
        </div>
        <div class="title">Complimentary boardroom facilities</div>
        <div class="title">Capped membership base</div>
        <div class="title">Access to <a href="/">Virgin Active Rewards</a></div>
        <div class="title">Virgin Active Rewards tier</div>
      </div>
      <div class="data_columns compare_1">
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col reward">bronze</div>
      </div>
      <div class="data_columns compare_2">
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col reward">bronze</div>
      </div>
      <div class="data_columns compare_3">
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col reward">silver</div>
      </div>
      <div class="data_columns compare_4">
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="dash"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col reward">silver</div>
      </div>
      <div class="data_columns compare_5">
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col"><div class="tick"></div></div>
        <div class="data_col reward">gold</div>
      </div>
    </div>
  </div>

</template>

<script setup>

const { isMobile } = useDevice();

function Compare(){

  var left_col_val = document.getElementById('left_col').value;
  var right_col_val = document.getElementById('right_col').value;

  var compare_cols = document.querySelectorAll('.data_columns');
  var left_cols = document.querySelectorAll('.'+left_col_val);
  var right_cols = document.querySelectorAll('.'+right_col_val);

  compare_cols.forEach(function(e){
    e.style.display = 'none';
    e.classList.remove("left-order");
    e.classList.remove("right-order");
  });

  left_cols.forEach(function(e){
    e.style.display = 'block';
    e.classList.add('left-order');
  });

  right_cols.forEach(function(e){
    e.style.display = 'block';
    e.classList.add('right-order');
  });

}

</script>