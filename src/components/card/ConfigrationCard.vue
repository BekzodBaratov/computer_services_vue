<template>
    <div class="flex flex-col ">
        <div v-for="item in data" :key="item" class="flex items-center gap-4 mt-2">
            <input type="radio" :name="inputName" @change="chooseProduct(item)">
            <div class="flex flex-col">
                <p class="text-[#002E69] text-[18px] font-medium leading-[35px]">{{ item?.name }}</p>
                <p class="text-[#D52C55] text-base font-normal leading-[23px]">{{FormatNumber(item?.product_detail?.price) }} UZS</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormatNumber from "../../helpers/numberFormat.js"
import {useConfigBasketStore} from "../../store/configBasket.js"
const store = useConfigBasketStore()
interface Props{
        inputName:string
    data?:{
        name:string
        product_detail:{
            price:number
        }
    }[]
}
const props = defineProps<Props>()

function chooseProduct(product){
    const newProduct = {
        ...product,
        type:props.inputName,
        count: 1,
    };
    store.products = store.products.filter((el)=> el.type !== props.inputName)
    store.products.push(newProduct);
}



</script>

<style scoped>
input[type="radio"] {
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
}
</style>