<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import shop from '../api/shop';
import { useStoreProducts } from '../stores/products';
import { useStoreCart } from '../stores/cart';

// const products = ref([]);
// onMounted(() => {
//     shop.getProducts((data) => (products.value = data));
// });

/* 商品一覧を取得 */
const { products } = storeToRefs(useStoreProducts());
const { getProducts } = useStoreProducts();
/* カートへ追加する機能 */
const { addCart } = useStoreCart();

onMounted(() => {
    getProducts();
})
</script>

<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }) }}
            <button @click="addCart(product)">カートへ</button>
        </li>
    </ul>

</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
