 <template>
  <div class="categories">
  <div class="categories__words">
    <p><span>Categories</span> we think you'll like</p>
  </div>
  <div class="categories__boxes">
    <div class="box">
      <img src="" alt="">
      <span class="box__titleOne">Just Chatting</span>
      <span class="box__titleTwo">25K viewers</span>
      <div class="box__buttons">
        <button>IRL</button>
      </div>
    </div>
  </div>
  <div class="categories__buttons">
    <button>Games<img src="../assets/images/gaming-e9019587744b56b11b43 1.svg" alt=""></button>
    <button>IRL <img src="../assets/images/irl-baa32e8e64a6974282c0.svg" alt=""></button>
    <button>Music & DJs <img src="../assets/images/music-5fb4595a30d04d991e24.svg" alt=""></button>
    <button>Creative <img src="../assets/images/creative-6423fb5fbcf31fadee38.svg" alt=""></button>
    <button>Esports <img src="../assets/images/esports-7a078acca57531d11e29.svg" alt=""></button>
  </div>
</div>

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
  *{
    background-color: rgb(255, 255, 255);
    width: 100%;
  }
  </style>