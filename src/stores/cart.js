import { defineStore } from 'pinia';

/* カート機能 Store
商品一覧から商品をカートに入れる
*/
export const useStoreCart = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions: {
        addCart(product) {
            this.items.push(product);
        },
    },
});