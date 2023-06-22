import { defineStore } from 'pinia';
import shop from '../api/shop';

/* 商品一覧を取得 Store
state で配列を持つ products を定義し、
actions に getProcucts 関数を追加し
getProducts 関数を実行することで商品一覧を取得できるようにします。
*/
export const useStoreProducts = defineStore('products', {
    state: () => ({
        products: [],
    }),
    actions: {
        getProducts() {
            // cbを渡す
            shop.getProducts((products) => (this.products = products));
        }
    },
})