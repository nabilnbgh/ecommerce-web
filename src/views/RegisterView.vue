<template>
  <div class="grid grid-cols-2 h-dvh">
    <div class="h-full">
      <img src="../assets/login-img.png" class="h-full" />
    </div>
    <div class="flex justify-center items-center flex-col">
      <div>
        <div class="grid grid-row-2 justify-start">
          <p class="font-semibold font-Inter text-3xl">Create an account</p>
          <p class="font-Poppins text-base">Enter your details below</p>
        </div>
        <AuthForm class="mt-6" :isLogin="isLogin"></AuthForm>
        <div class="grid grid-row-2 justify-start mt-6">
          <p class="font-Poppins text-black text-sm">
            Already have an account?
            <router-link :to="{ name: 'login' }">
              <a
                class="font-Poppins text-black text-sm hover:border-b border-gray-700"
                >Login here!</a
              >
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 
        <div class="grid justify-center">
            <div class="grid grid-row-2 justify-start">
                <p class="font-semibold font-Inter text-3xl">Create an account</p>
                <p class="font-Poppins text-base">Enter your details below</p>
            </div>
            <AuthForm class="mt-6" :isLogin=isLogin></AuthForm>    
            <div class="grid grid-row-2 justify-start mt-6">
                <p class="font-Poppins text-black text-sm">Already have an account?
                    <router-link :to="{name :'login'}">
                        <a class=" font-Poppins text-black text-sm hover:border-b border-gray-700">Login here!</a>
                    </router-link>
                </p>
            </div>
        </div> -->
</template>

<script lang="ts">
import AuthForm from "@/components/AuthForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AuthForm,
  },
  setup() {
    var isLogin = false;
    return { isLogin };
  },
});
</script>
