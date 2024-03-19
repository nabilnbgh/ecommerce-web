<template >
    <div class="grid grid-row-2 justify-start">
        <form>
            <div v-if="isLogin" class="flex items-center border-b border-gray-400 py-2">
                <input class="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name">
            </div>
            <div class="flex items-center border-b border-gray-400 py-2">
                <input class="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email or Phone Number">
            </div>
            <div class="flex items-center border-b border-gray-400 py-2">
                <input class="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password">
            </div>
        </form>
        <div class="mt-8 grid grid-cols-2">
            <RedButton  :onClickFunction= handleClick :label="label">
                
            </RedButton>
            <button class="ml-12">
                Forget Password?
            </button>
        </div>
    </div>
    
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import RedButton from "./RedButton.vue"
export default defineComponent({
    name : 'AuthForm',
    props:["isLogin"],
    components:{
        RedButton
    },setup(props){
        var label = ref("")
        if(props.isLogin){
            label.value = "Login"
        }else{
            label.value = "Register"
        }
        
        var handleClick = () =>{
            if(props.isLogin){
                console.log("login")
            }else{
                console.log("register")
            }
        }
        return {label, handleClick }
    }
})
</script>