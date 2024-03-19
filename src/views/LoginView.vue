<template>
  <div class="grid grid-cols-2 h-dvh">
    <div class="h-dvh">
      <img src="../assets/login-img.png" class="h-full" />
    </div>
    <div class="flex justify-center items-center flex-col h-dvh">
      <div class="m-6">
        <div class="grid grid-row-2 justify-start">
          <p class="font-semibold font-Inter text-3xl">Log in to Exclusive</p>
          <p class="font- oppins text-base">Enter your details below</p>
        </div>
        <AuthForm class="mt-6" :isLogin="isLogin"></AuthForm>
        <div class="grid grid-row-2 justify-start mt-6">
          <p class="font-Poppins text-black text-sm">
            Don't have account?
            <router-link :to="{ name: 'register' }">
              <a
                class="font-Poppins text-black text-sm hover:border-b border-gray-700"
                >Register here!</a
              >
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
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
    var isLogin = true;
    return { isLogin };
  },
});
</script>
