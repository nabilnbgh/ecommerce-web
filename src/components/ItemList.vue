<template>
  <div class="w-56 max-h-128 rounded-lg border-2 m-1">
    <img class="w-full h-32 object-cover" :src="imgSrc" />
    <div class="w-full px-6 py-4">
      <div class="font-bold mb-2">{{ trimString(item.title, 30) }}</div>
      <p class="text-web-sec text-web-secondary-3 text-base font-semibold">
        ${{ item.price }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: ["product"],
  setup(props) {
    var item = ref(props.product);
    var imgSrc = ref(props.product.image);

    function trimString(inputString: string, maxLength: number) {
      if (inputString.length <= maxLength) {
        return inputString;
      } else {
        return inputString.substring(0, maxLength) + "...";
      }
    }

    return { item, imgSrc, trimString };
  },
});
</script>
