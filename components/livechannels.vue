<template>
    <div class="live-list">
      <div v-for="stream in liveStreams" :key="stream.user_id" class="live-box">
        <img :src="stream.thumbnail" alt="Live thumbnail" class="live-thumbnail" />
        <div class="live-info">
          <img :src="stream.profileImage" alt="Profile image" class="profile-image" />
          <div class="texts">
            <h3>{{ stream.streamerName }}</h3>
            <p class="live-title">{{ stream.title }}</p>
            <span class="category">{{ stream.category }}</span>
            <div class="tags">
              <span v-for="tag in stream.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const liveStreams = ref<any[]>([]);
  
  const headers = {
    'Authorization': '6ry2587nh0etrg4wjaktpi6nsmuk0t',
    'Client-ID': '23qb7idhia0oe5fdiinx7oopwszvoi'
  };
  
  async function fetchLiveStreams() {
    const res = await fetch('https://api.twitch.tv/helix/streams?first=3', { headers });
    const data = await res.json();
  
    const enriched = await Promise.all(data.data.map(async (stream: any) => {
      const userRes = await fetch(`https://api.twitch.tv/helix/users?id=${stream.user_id}`, { headers });
      const userData = await userRes.json();
  
      const tagsRes = await fetch(`https://api.twitch.tv/helix/tags/streams?broadcaster_id=${stream.user_id}`, { headers });
      const tagsData = await tagsRes.json();
  
      return {
        title: stream.title,
        thumbnail: stream.thumbnail_url.replace('{width}', '300').replace('{height}', '200'),
        category: stream.game_name,
        streamerName: userData.data[0].display_name,
        profileImage: userData.data[0].profile_image_url,
        user_id: stream.user_id,
        tags: tagsData.data.map((tag: any) => tag.localization_names['en-us'])
      };
    }));
  
    liveStreams.value = enriched;
  }
  
  onMounted(() => {
    fetchLiveStreams();
  });
  </script>
  
  <style scoped>
  .live-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }
  
  .live-box {
    width: 320px;
    border: 1px solid #ccc;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: white;
  }
  
  .live-thumbnail {
    width: 100%;
    height: auto;
  }
  
  .live-info {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 12px;
  }
  
  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .texts h3 {
    margin: 0;
    font-size: 18px;
  }
  
  .live-title {
    margin: 5px 0;
    font-weight: 600;
  }
  
  .category {
    font-size: 14px;
    color: #666;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 5px;
  }
  
  .tag {
    background-color: #53535F61;
    color: #ADADB8;
    padding: 4px 10px;
    border-radius: 9000px;
    font-size: 12px;
    white-space: nowrap;
  }
  </style>
  