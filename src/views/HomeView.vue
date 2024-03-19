<template>
  <Catalogue :title="title" :sectionTitle = "sectionTitle"></Catalogue>
</template>

<script lang="ts">
import Catalogue from '@/components/Catalogue.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components:{
    // eslint-disable-next-line vue/no-unused-components
    Catalogue
  },setup(){
      var title = "Explore Our Products"
      var sectionTitle = "Our Products"
      return {title, sectionTitle}
  }
});
</script>
