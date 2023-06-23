import { defineStore } from 'pinia';
import { useStoreProducts } from './products';
/* カート機能 Store
商品一覧から商品をカートに入れる
*/
export const useStoreCart = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    /*
    total 関数では reducer 関数を利用して
    カートに保存されている商品を 1 つずつ順番に取り出して金額を足し合わせています。
    */
    getters: {
        total: (state) => {
            return state.items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        }
    },
    actions: {
        addCart(product) {
            // this.items.push(product);

            /* products StoreからdecrementInventoryメソッドをインポート */
            const { decrementInventory } = useStoreProducts();
            /* カートに入れる対象の商品を検索 this=cartオブジェクト */
            const item = this.items.find((item) => item.id === product.id);
            if (item) {
                /* 2回目のクリック以降、quantityに+1 */
                item.quantity++;
            } else {
                /* 初回クリック時にquantityを初期値1 */
                this.items.push({...product, quantity: 1});
            }
            /* 在庫を減らす処理の実行 */
            decrementInventory(product.id);
        },
        subtractCart(product) {
            const { incrementInventory } = useStoreProducts();
            const item = this.items.find((item) => item.id === product.id);

            /* カートの商品数を減らす */
            if (item.quantity > 0) {
                item.quantity--;

                if (item.quantity === 0) {
                    console.log(item);
                    console.log(this.items);
                    /*
                    itemsから削除対象の要素itemのindexを出し、
                    indexを用いてitemsから削除
                    */
                    const index = this.items.indexOf(item);
                    this.items.splice(index, 1);
                }
            }
            /* 在庫を減らす処理の実行 */
            incrementInventory(product.id);
        },
    },
});