<script setup>
import NavBar from './NavBar.vue';
import Hero from './games/HeroGames.vue';
import Footer from './Footer.vue';

import Card from './games/CardGames.vue';

import valorant from '../assets/valorant.jpg';
import cs2 from '../assets/cs2.jpg';
import lol from '../assets/league_of_legends.jpg';

const info = [
  {
    id : 1,
    title : "Valorant",
    image : valorant,
    to : "/games/valorant",
    disabled: false
  },
  {
    id : 2,
    title : "Counter Strike 2",
    image : cs2,
    disabled : true,
    to: '#'
  },
  {
    id : 3,
    title : "League of Legends",
    image : lol,
    disabled : true,
    to: '#'
  },
]
</script>

<template>
  <div class="bg-[#0F1923] min-h-screen flex flex-col">
    <NavBar/>
    
    <Hero/>
    
    <section class="mb-24 mx-6 md:mx-24 flex-grow">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        
        <Card
          v-for="item in info"
          :key="item.id"
          :title="item.title"
          :image="item.image"
          :to="item.to"
          :disabled="item.disabled" 
        />

      </div>
    </section>

    <Footer/>
  </div>
</template>