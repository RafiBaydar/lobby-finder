<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const handleLogin = () => {
  if (!email.value || !password.value) {
    alert("Mohon isi email dan password anda.");
    return;
  }
  
  alert(`Login Berhasil!`);
  
  router.push('/'); 
};
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center bg-[#0F1923] px-4">
    
    <div class="w-full max-w-sm rounded-2xl bg-slate-900 p-8 shadow-2xl border border-slate-800"> 
      
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white tracking-tight">Login</h1>
      </div>

      <form action="#" method="POST" @submit.prevent="handleLogin">
        
        <div class="mb-5">
          <label class="block mb-2 text-sm font-bold text-slate-300" for="email">Email</label>
          <input 
            v-model="email"
            class="w-full rounded-lg bg-[#2C3540] p-3 text-white placeholder-slate-500 outline-none border border-transparent focus:border-[#FF4655] focus:ring-1 focus:ring-[#FF4655] transition-all" 
            type="email" 
            name="email" 
            placeholder="Enter your email"
          >
        </div>

        <div class="mb-8">
          <label class="block mb-2 text-sm font-bold text-slate-300" for="password">Password</label>
          <input 
            v-model="password"
            class="w-full rounded-lg bg-[#2C3540] p-3 text-white placeholder-slate-500 outline-none border border-transparent focus:border-[#FF4655] focus:ring-1 focus:ring-[#FF4655] transition-all" 
            type="password" 
            name="password"
            placeholder="••••••••"
          >
        </div>

        <div>          
          <button 
            class="w-full rounded-lg bg-[#FF4655] py-3 px-4 font-bold text-white shadow-lg shadow-[#FF4655]/20 transition-all hover:bg-[#E4414E] hover:shadow-[#FF4655]/40 active:scale-95" 
            type="submit"
          >
            Sign In
          </button>
        </div>       
      </form>  

      <footer class="mt-6 flex items-center justify-between text-sm">
      <router-link to="/forgot" class="text-slate-400 hover:text-[#FF4655] hover:underline transition-colors">
          Forgot Password?
      </router-link>
      <router-link to="/register" class="text-slate-400 hover:text-[#FF4655] hover:underline transition-colors">
          Create Account
      </router-link>
      </footer>

    </div>
  </div>
</template>