<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

const isAgreed = ref(false);

const sendMessage = () => {
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
    alert("Tolong isi semua data sebelum dikirim.");
    return;
  }

  alert("Form berhasil dikirim!");
  
  Object.keys(formData).forEach(key => formData[key] = '');
  isAgreed.value = false;
};
</script>

<template>
  <div class="isolate px-6 py-24 sm:py-16 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact Us!</h2>
      <p class="mt-2 text-lg/8 text-[#F1F1F1] opacity-50">Have questions or suggestions? We'd love to hear them!</p>
    </div>
    
    <form @submit.prevent="sendMessage" class="bg-[#151F28] border border[#202A32] p-6 mx-auto rounded-md mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-white">First name</label>
          <div class="mt-2.5">
            <input v-model="formData.firstName" id="first-name" type="text" autocomplete="given-name" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
          </div>
        </div>

        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-white">Last name</label>
          <div class="mt-2.5">
            <input v-model="formData.lastName" id="last-name" type="text" autocomplete="family-name" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-white">Email</label>
          <div class="mt-2.5">
            <input v-model="formData.email" id="email" type="email" autocomplete="email" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm/6 font-semibold text-white">Phone Number</label>
          <div class="mt-2.5">
            <input v-model="formData.phone" id="phone-number" type="text" placeholder="123-456-7890" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold text-white">Message</label>
          <div class="mt-2.5">
            <textarea v-model="formData.message" id="message" rows="4" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]"></textarea>
          </div>
        </div>

        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <div 
              @click="isAgreed = !isAgreed"
              :class="isAgreed ? 'bg-[#FF4655]' : 'bg-gray-200'"
              class="group relative inline-flex w-8 shrink-0 rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out cursor-pointer"
            >
              <span 
                aria-hidden="true" 
                :class="isAgreed ? 'translate-x-3.5' : 'translate-x-0'"
                class="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out"
              ></span>
              
              <input type="checkbox" v-model="isAgreed" class="hidden" />
            </div>
          </div>
          <label class="text-sm/6 text-white">
            By selecting this, you agree to our privacy policy.
          </label>
        </div>
      </div>

      <div class="mt-10">
        <button 
          type="submit" 
          :disabled="!isAgreed"
          :class="!isAgreed ? 'opacity-50 cursor-not-allowed bg-gray-500' : 'bg-[#FF4655] hover:bg-[#E4414E]'"
          class="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4655] transition-all"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
</template>