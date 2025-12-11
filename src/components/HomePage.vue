<script setup>

import NavBar from './NavBar.vue';
import Hero from './HeroHome.vue';
import Card from './CardHome.vue';
import Footer from './Footer.vue';
import { Search, Users, Zap } from 'lucide-vue-next';

const info = [
  {
    id: 1,
    title: 'Smart Filters',
    description: 'Filter lobbies based on your needs. Rank, Mode, and more.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Global Community',
    description: 'Connect with players from different regions.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Ready To Play',
    description: 'Instantly find an active lobby and start a game with other players.',
    icon: Zap,
  }
]

</script>

<template>
<div class="bg-[#0F1923]">
  <NavBar/>
  <Hero/>

  <section class="mb-36">
    <div class="max-w-5xl mx-auto">
      <div class="grid gap-8 md:grid-cols-3 justify-items-center">
        <Card
          v-for="item in info"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
  </section>
  <Footer/>
</div>
</template>
