<script setup>
import { useStoreCounter } from '../stores/counter';

const counter = useStoreCounter();

// Storeを上書き Patch
// const patch = () => {
//     counter.$patch((state) => {
//         // 引数にオブジェクトとして渡したら以下も使える
//         // count: 100,
//         // user: {
//         //     name: 'Hey Ho!',
//         // },
//         state.count = 10;
//         state.user.name = 'Hey Woo!';
//     });
// };

// StateのReplace
const replace = () => {
    counter.$state = {
        count: 100,
        count2: 200,
        user: {
            name: 'Hey Woo!',
        },
    };
};
</script>

<template>
    <h2>Hello Pinia</h2>
    <p>カウント：{{ counter.count2 }}</p>
    <p>Pinia name：{{ counter.user.name }}</p>
    <button @click="patch">Patch</button><br>
    <button @click="counter.$reset">Reset</button><br>
    <button @click="replace">Replace</button>
</template>