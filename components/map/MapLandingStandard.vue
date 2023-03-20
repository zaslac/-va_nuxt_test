<template>
  <div class="vasa_map_main">
    <GMapMap
      ref="myMapRef"
      :zoom="6"
      :center="MapCenter"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
      }"
      ,
    >
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in clubs.club_list"
          :position="latlng(m)"
          :clickable="true"
          :draggable="false"
          :icon="{
            url: mapMarker(m),
            scaledSize: { width: 72, height: 72 },
            labelOrigin: { x: 0, y: 0 },
          }"
          @click="goToClub(m.slug)"
          @mouseover="openMarker(m.id)"
        >
          <!-- @click="openMarker(m.id, latlng(m))" -->
          <GMapInfoWindow :opened="openedMarkerID === m.id">
            <div class="map_marker_title" v-if="showMarkers">
              <NuxtLink :to="`/gyms/${m.slug}`">{{ m.title }}</NuxtLink>
            </div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const showMarkers = ref(false);

const router = useRouter();

const myMapRef = ref();
const MapCenter = ref({ lat: -30.551406, lng: 23.914602 });

const {
  data: clubs,
  error,
  refresh,
  pending,
} = await useAsyncData("clubs", () => {
  return $fetch(`${runTimeConfig.public.cusWp}/map_club_list`);
});

const markers = ref({});
watch(myMapRef, (googleMap) => {
  if (googleMap) {
    googleMap.$mapPromise.then((map) => {
      let mapsApi = window.google.maps;
      let bounds = new mapsApi.LatLngBounds();
      clubs.value.club_list.forEach((location) => {
        let aLatLng = new mapsApi.LatLng(location.lat, location.lng);
        bounds.extend(aLatLng);
      });

      map.fitBounds(bounds);
      showMarkers.value = true;
    });
  }
});

const openedMarkerID = ref();
const openMarker = (id, c) => {
  openedMarkerID.value = id;
};

const goToClub = (url) => {
  router.push({
    path: `/gyms/${url}`,
  });
};

const latlng = (data) => {
  const position = {
    lat: parseFloat(data.lat),
    lng: parseFloat(data.lng),
  };
  return position;
};
const mapMarker = (data) => {
  if (data.collection_club) {
    return "https://vasa.ninjastagebox.com/wp-content/uploads/2023/02/Map-Markers.png";
  }
  return "https://vasa.ninjastagebox.com/wp-content/uploads/2023/01/Map-Markers.png";
};
</script>
