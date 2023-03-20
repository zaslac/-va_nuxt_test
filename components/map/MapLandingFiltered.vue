<template>
  <client-only>
    <div class="vasa_map_main">
      <GMapMap
        ref="myMapRef"
        :center="MapCenter"
        :zoom="MapZoom"
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
            v-for="(m, index) in filteredClubs"
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
            <GMapInfoWindow :opened="openedMarkerID === m.id">
              <div class="map_marker_title">
                <NuxtLink :to="`/gyms/${m.slug}`">{{ m.title }}</NuxtLink>
              </div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapCluster>
      </GMapMap>
    </div>
    <MapMapsActions />
    <MapClubRailMobile
      :data="filteredClubs"
      v-if="$device.isMobile"
      @set-google-marker="slideToMarker($event)"
    />
    <MapSidePanelDesktop
      :data="filteredClubs"
      v-if="!$device.isMobile"
      @set-google-marker="slideToMarker($event)"
    />
  </client-only>
</template>
<script setup>
const myMapRef = ref();

const runTimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const searchTerm = computed(() => {
  return route.query.map_search_term;
});

const lat = computed(() => {
  if (route.query.lat) {
    return route.query.lat;
  }
  return "";
});

const lng = computed(() => {
  if (route.query.lng) {
    return route.query.lng;
  }
  return "";
});

const radius = computed(() => {
  if (route.query.radius) {
    return route.query.radius;
  }
  return 10;
});

const MapCenter = ref({ lat: -30.551406, lng: 23.914602 });
const MapZoom = ref(6);
const {
  data: filteredClubs,
  error,
  refresh,
  pending,
} = await useAsyncData("filteredClubs", () => {
  return $fetch(
    `${runTimeConfig.public.cusWp}/get_filtered_map?search_term=${searchTerm.value}&lat=${lat.value}&lng=${lng.value}&radius=${radius.value}`
  );
});

function getNewClubs() {
  refresh();
}
function googleLayout(googleMap) {
  googleMap.$mapPromise.then((map) => {
    let mapsApi = window.google.maps;
    let bounds = new mapsApi.LatLngBounds();

    if (filteredClubs.value.length <= 0) {
      return;
    }
    filteredClubs.value.forEach((location) => {
      let aLatLng = new mapsApi.LatLng(
        parseFloat(location.lat),
        parseFloat(location.lng)
      );
      bounds.extend(aLatLng);
    });

    map.fitBounds(bounds);
  });
}

const markers = ref({});

watch(
  [searchTerm, myMapRef, lat, lng],
  ([sterm, googleMap, latVal, lngVal], [nv1, nv2]) => {
    if (sterm || latVal || lngVal) {
      getNewClubs();
      setTimeout(() => {
        googleLayout(googleMap);
      }, 2500);
    }
  }
);

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

function slideToMarker(id) {
  openedMarkerID.value = id;

  const club = filteredClubs.value.find((fac) => fac.id == id);
  const position = {
    lat: parseFloat(club.lat),
    lng: parseFloat(club.lng),
  };

  MapCenter.value = position;
  MapZoom.value = 18;
}
</script>
