<template>
  <div class="app">
    <Header />
    <Sidebar />
    <router-view /> 
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import Sidebar from '@/components/sidebar.vue';
</script>