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
            // cbを渡す this=productsオブジェクト
            shop.getProducts((products) => (this.products = products));
        },
        /*
        引数から商品の id を受け取り
        商品一覧からその id を持つ商品を見つけ在庫数を 1 減らす
        */
        decrementInventory(productId) {
            /* productIdから、対象のproductを検索 */
            const product = this.products.find((product) => product.id === productId);
            /* 在庫を一つずつ減らす */
            product.inventory--;
        }
    },
})