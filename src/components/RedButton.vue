<template >
    <button type="submit" @click="onClickFunction" class="bg-web-secondary-3  text-white font-bold py-2 px-4 rounded">
        {{label}}
    </button>
</template>


<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
    name : "RedButton",
    props: ["onClickFunction","label"],
    
})
</script>