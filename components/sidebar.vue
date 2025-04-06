<template>
    <aside class="sidebar">
        <div class="sidebar-header">
            <span>RECOMMENDED CHANNELS</span>
            <img src="../assets/icon/collapse.svg" alt="Collapse Sidebar">
        </div>

        <nav class="sidebar-content" id="sidebar">

        </nav>
    </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const listofLiveChannels = ref([]);

function fetchLiveChannels() {
  const fetchLink = 'https://api.twitch.tv/helix/streams?first=8';

  fetch(fetchLink, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Bearer ym93h5vg13z46yl90w5yrbn8m2z1r5',
      'Client-ID': '4hpjwum2a0lq6hfy050iqq857sy15h',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      listofLiveChannels.value = data.data;
      
    })
    .catch((err) => {
      console.error('Error al obtener streams:', err);
    });
}

onMounted(() => {
  fetchLiveChannels();
});
</script>