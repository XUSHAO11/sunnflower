<template>
  <Header />
  <div class="content">
    <router-view v-slot="{ Component }">
      <!-- <transition mode="out-in" name="fade-transform"> -->
        <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </div>
<div class="ScrollTop">
  <ScrollTop/>
</div>
<Footer/>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue'
import ScrollTop from '../components/ScrollTop.vue';
import Footer from '../views/Footer.vue';
</script>

<style scoped>
.ScrollTop{
  position: fixed;
  right: 20px;
}
</style>
