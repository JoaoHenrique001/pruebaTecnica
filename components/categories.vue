 <template>

  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  const listofLiveChannels = ref([]);
  
  function fetchCategories() {
    const fetchLink = 'https://api.twitch.tv/helix/games/top?first=6';
  
    fetch(fetchLink, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer 6ry2587nh0etrg4wjaktpi6nsmuk0t',
        'Client-ID': '23qb7idhia0oe5fdiinx7oopwszvoi',
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
  