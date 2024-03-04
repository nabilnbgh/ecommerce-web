<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/Navbar.vue';

export default defineComponent({
  components:{
    NavBar
  } 
})
</script>
