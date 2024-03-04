<template>
  <nav class="flex border-b px-6 pt-6 pb-3 justify-between items-center text-neutral-700 bg-white">
    <div class="">
      <a href="#">
        <p class="font-Inter font-bold text-2xl text-black">Exclusive</p>
      </a>
    </div>
    <div class="flex items-center justify-between space-x-10">
      <a class="active:border-b border-gray-700 font-Poppins text-black text-base" href="#">Home</a>
      <a class="active:border-b border-gray-700 font-Poppins text-black text-base" href="#">Contact</a>
      <a class="active:border-b border-gray-700 font-Poppins text-black text-base" href="#">About</a>
      <a class="active:border-b border-gray-700 font-Poppins text-black text-base" href="#">Login/Sign Up</a>
    </div>
    <div class="flex  items-center justify-between space-x-8">
      <div class="flex items-center space-x-3">
        <form action="">
          <input class="p-2 placeholder:font-Poppins placeholder:text-xs" placeholder="What are you looking for?">
        </form>
        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
      <a href="#"><i class="fa-regular fa-heart"></i></a>
      <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      
      
    </div>
  </nav>


</template>
<!-- 
  
    


 -->

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"NavBar",
    
})
</script>