<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span>RECOMMENDED CHANNELS</span>
      <img src="../assets/icon/collapse.svg" alt="Collapse Sidebar" />
    </div>

    <nav class="sidebar-content" id="sidebar">
      <div
        v-for="channel in listofLiveChannels"
        :key="channel.id"
        class="channel"
      >
        <img :src="channel.profile_image_url" alt="User Icon" class="avatar" />
        <div class="channel-info">
          <p class="username">{{ channel.user_name }}</p>
          <p class="game">{{ channel.game_name }}</p>
        </div>
        <img src="../assets/icon/redlive.svg" alt=""> <span class="viewers">{{ formatViewers(channel.viewer_count) }} </span>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const listofLiveChannels = ref([]);

async function fetchLiveChannels() {
  const fetchLink = 'https://api.twitch.tv/helix/streams?first=8';

  try {
    const response = await fetch(fetchLink, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer 6ry2587nh0etrg4wjaktpi6nsmuk0t',
        'Client-ID': '23qb7idhia0oe5fdiinx7oopwszvoi',
      }),
    });

    const data = await response.json();
    const channels = data.data;

    // Pegamos los logins de los streamers para buscar los avatares del mismo
    const logins = channels.map((c) => `login=${c.user_login}`).join('&');
    const usersResponse = await fetch(
      `https://api.twitch.tv/helix/users?${logins}`,
      {
        method: 'GET',
        headers: new Headers({
          Authorization: 'Bearer 6ry2587nh0etrg4wjaktpi6nsmuk0t',
          'Client-ID': '23qb7idhia0oe5fdiinx7oopwszvoi',
        }),
      }
    );

    const usersData = await usersResponse.json();

    // Combinamos los datos de perfil con los datos de stream
    const combined = channels.map((channel) => {
      const user = usersData.data.find(
        (u) => u.login === channel.user_login
      );
      return {
        ...channel,
        profile_image_url: user?.profile_image_url || '',
      };
    });

    listofLiveChannels.value = combined;
  } catch (err) {
    console.error('Error al buscar canales en directo:', err);
  }
}

onMounted(() => {
  fetchLiveChannels();
});

function formatViewers(count: number): string {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return count.toString();
}

</script>
