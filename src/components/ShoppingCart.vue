<script setup>
import { storeToRefs } from 'pinia';
import { useStoreCart } from '../stores/cart';

const { items } = storeToRefs(useStoreCart());
</script>

<template>
    <h2>カートの中身</h2>
    <p v-if="items.length <= 0"><i>カートに商品が入っていません。</i></p>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.title }} - {{ item.price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }) }}
        </li>
    </ul>
</template>