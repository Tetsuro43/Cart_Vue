<script setup>
// import { storeToRefs } from 'pinia';
// import HelloPinia from './components/HelloPinia.vue';
// import { useStoreCounter } from './stores/counter';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

// const counter = useStoreCounter();
// const { count, doubleCount } = storeToRefs(counter);
// const { increment } = counter; //  = counter.incrementではダメ
/*
分割代入だと、countの値が更新されないのは、reactiveな性質が失われたから
reactiveな性質を維持するには、storeToRefs()を利用する
*/
// const { count, increment } = useStoreCounter();
</script>

<template>
  <!-- <h1>Pinia入門</h1>
  <p>Count: {{ count }}</p>
  <p>DoubleCount: {{ doubleCount }}</p>
  <div>
    <button @click="increment">Up</button>
  </div>
  <HelloPinia /> -->

  <div id="app">
    <h1>Pinia入門（カート）</h1>
    <hr />
    <h2>商品一覧</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>
