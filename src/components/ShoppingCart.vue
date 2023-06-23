<script setup>
import { storeToRefs } from 'pinia';
import { useStoreCart } from '../stores/cart';

const { items, total } = storeToRefs(useStoreCart());
</script>

<template>
    <h2>カートの中身</h2>
    <p v-if="items.length <= 0"><i>カートに商品が入っていません。</i></p>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.title }} - {{ item.price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }) }} x {{ item.quantity }}
        </li>
    </ul>
    <h3>合計金額：{{ total.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }) }}</h3>
</template>