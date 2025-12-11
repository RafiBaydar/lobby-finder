<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');

const handleReset = () => {
  if (!email.value) {
    alert("Mohon isi email anda terlebih dahulu.");
    return;
  }
  
  alert(`Link reset password telah dikirim ke ${email.value}`);
  
  router.push('/login'); 
};
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center bg-[#0F1923] px-4">
    
    <div class="w-full max-w-sm rounded-2xl bg-slate-900 p-8 shadow-2xl border border-slate-800"> 
      
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white tracking-tight">Reset Password</h1>
      </div>

      <form action="#" method="POST" @submit.prevent="handleReset">
        
        <div class="mb-8">
          <label class="block mb-2 text-sm font-bold text-slate-300" for="email">Email Address</label>
          <input 
            v-model="email"
            class="w-full rounded-lg bg-[#2C3540] p-3 text-white placeholder-slate-500 outline-none border border-transparent focus:border-[#FF4655] focus:ring-1 focus:ring-[#FF4655] transition-all" 
            type="email" 
            name="email" 
            placeholder="Enter your email"
            autocomplete="email"
          >
        </div>

        <div>          
          <button 
            class="w-full rounded-lg bg-[#FF4655] py-3 px-4 font-bold text-white shadow-lg shadow-[#FF4655]/20 transition-all hover:bg-[#E4414E] hover:shadow-[#FF4655]/40 active:scale-95" 
            type="submit"
          >
            Send Instructions
          </button>
        </div>       
      </form>  

      <footer class="mt-6 text-center text-sm">
        <router-link to="/login" class="text-slate-400 hover:text-[#FF4655] hover:underline transition-colors">
          Back to Login
        </router-link>
      </footer>   

    </div>
  </div>
</template>