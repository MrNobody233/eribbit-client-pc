// 分类模块
import {topCategory} from "@/api/constants"
import {findAllCategory} from "@/api/category";

export default {
    namespaced: true,
    state() {
        return {
            //  分类信息集合，依赖topCategory重新设置，保证初始化就要数据，不至于白屏
            list: topCategory.map(item => ({name: item}))
        }
    },
//    修改分类函数
    mutations: {
        // payload 所有的分类集合
        setList(state, payload) {
            state.list = payload
        },
        //   定义show和hide函数，控制当前分类的二级分类显示和隐藏
    },
//   获取分类函数
    actions: {
        async getList(context) {
            // 获取分类数据
            const data = await findAllCategory()
            // 给每个分类加上控制二级分类显示隐藏的数据

            //    修改分类数据
            context.commit('setList', data.result)
        }
    }
}