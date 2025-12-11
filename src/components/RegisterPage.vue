<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const username = ref('');
const password = ref('');

const handleRegister = () => {
  if (!email.value || !username.value || !password.value) {
    alert("Mohon lengkapi semua data pendaftaran.");
    return;
  }
  
  alert(`Akun berhasil dibuat! Silakan login, Agent ${username.value}.`);
  
  router.push('/login'); 
};
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center bg-[#0F1923] px-4">
    
    <div class="w-full max-w-sm rounded-2xl bg-slate-900 p-8 shadow-2xl border border-slate-800"> 
      
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white tracking-tight">Create Account</h1>
      </div>

      <form @submit.prevent="handleRegister">
        
        <div class="mb-5">
          <label class="block mb-2 text-sm font-bold text-slate-300" for="email">Email</label>
          <input 
            v-model="email"
            class="w-full rounded-lg bg-[#2C3540] p-3 text-white placeholder-slate-500 outline-none border border-transparent focus:border-[#FF4655] focus:ring-1 focus:ring-[#FF4655] transition-all" 
            type="email" 
            name="email" 
            placeholder="name@example.com"
            autocomplete="email"
          >
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-sm font-bold text-slate-300" for="username">Username</label>
          <input 
            v-model="username"
            class="w-full rounded-lg bg-[#2C3540] p-3 text-white placeholder-slate-500 outline-none border border-transparent focus:border-[#FF4655] focus:ring-1 focus:ring-[#FF4655] transition-all" 
            type="text" 
            name="username" 
            placeholder="Choose a username"
            autocomplete="username"
          >
        </div>

        <div class="mb-8">
          <label class="block mb-2 text-sm font-bold text-slate-300" for="password">Password</label>
          <input 
            v-model="password"
            class="w-full rounded-lg bg-[#2C3540] p-3 text-white placeholder-slate-500 outline-none border border-transparent focus:border-[#FF4655] focus:ring-1 focus:ring-[#FF4655] transition-all" 
            type="password" 
            name="password"
            placeholder="Create a strong password"
            autocomplete="new-password"
          >
        </div>

        <div>          
          <button 
            class="w-full rounded-lg bg-[#FF4655] py-3 px-4 font-bold text-white shadow-lg shadow-[#FF4655]/20 transition-all hover:bg-[#E4414E] hover:shadow-[#FF4655]/40 active:scale-95" 
            type="submit"
          >
            Register
          </button>
        </div>       
      </form>  

      <footer class="mt-6 text-center text-sm text-slate-400">
        Already have an account? 
        <router-link to="/login" class="text-[#FF4655] font-bold hover:underline transition-colors">
          Sign In
        </router-link>
      </footer>   

    </div>
  </div>
</template>