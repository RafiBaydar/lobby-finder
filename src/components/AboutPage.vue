<script setup>
import NavBar from './NavBar.vue';
import Hero from './HeroAbout.vue';
import Footer from './Footer.vue';

import CardAbout from './CardAbout.vue';

const about = [
  {
    id : 1,
    title: 'What is LobbyFinder?',
    description: 'LobbyFinder is a platform that makes it easy for gamers to share and find game lobby codes.'
  },
  {
    id : 2,
    title: 'Why LobbyFinder?',
    description: 'Finding friends to play with that match your rank and role can be difficult. LobbyFinder makes this process easier with its advanced filtering system and easy-to-use interface.'
  },
  {
    id : 3,
    title: 'How to use LobbyFinder?',
    description: '1. Browse the available lobbies and filter them according to your needs.\n2. Copy the lobby code you like.\n3. Paste it into the game and start playing!\nOr, submit your own lobby code and wait for other players to join!'
  },
  {
    id : 4,
    title: 'Code Submit Rules',
    description: '• Only post valid lobby codes\n• Do not spam or post codes repeatedly\n• Be polite in lobby notes\n• Lobbies will automatically expire at the specified time'
  },
];

</script>

<template>
<div class="bg-[#0F1923]">
  <NavBar/>
  <Hero/>
  <section class="mb-36">
    <div class="flex items-center justify-center mx-auto max-w-5xl">
      <div class="grid gap-8">
        <CardAbout
          v-for="item in about"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
  <Footer/>
</div>
</template>
