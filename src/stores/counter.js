import { defineStore } from "pinia";
import { ref, computed } from 'vue';

// Store
export const useStoreCounter = defineStore('counter', {
    state: () => ({
        count: 1,
        count2: 2,
        user: {
            name: 'Hey Ho!',
        }
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        }
    }
});

/*
別記法
*/
// export const useStoreCounter = defineStore('counter', () => {
//     const count = ref(1);

//     const increment = () => {
//         count.value++;
//     };

//     const doubleCount = computed(() => count.value * 2);
//     // const doubleCount = computed(() => { count.value * 2}); // うまくいかない

//     return { count, increment, doubleCount };
// })