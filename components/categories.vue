 <template>

  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  const listofLiveChannels = ref([]);
  
  function fetchCategories() {
    const fetchLink = 'https://api.twitch.tv/helix/games?first=6';
  
    fetch(fetchLink, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer cfabdegwdoklmawdzdo98xt2fo512y',
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
    fetchCategories();
  });
  </script>
  
  <style scoped>
  
  </style>
  