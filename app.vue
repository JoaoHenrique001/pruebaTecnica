<template>
  <div class="app">
    <Header />
    <main>
    <Sidebar />
    <Categories />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'; 
import Sidebar from '@/components/sidebar.vue';
import Categories from '@/components/categories.vue';
</script>

<style scoped>
</style>