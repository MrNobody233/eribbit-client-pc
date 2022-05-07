import {createStore} from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
// 三个模块
import cart from "@/store/modules/cart";
import user from "@/store/modules/user";
import category from "@/store/modules/category";

export default createStore({
    modules: {
        cart,
        user,
        category,
    },

    plugins: [
        createPersistedstate({
            // 本地存储名字
            key: 'erabbit-client-pc-store',
            // 指定需要存储的模块
            paths: ['user', 'cart']

        })
    ]

})

