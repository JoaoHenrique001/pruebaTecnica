<template>
  <div class="app">
    <Header />
    <Sidebar />
    <Categories /> 
    <router-view /> 
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import Sidebar from '@/components/sidebar.vue';
import Categories from '@/components/categories.vue';
</script>