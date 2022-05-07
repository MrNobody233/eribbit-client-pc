import {createStore} from 'vuex'

// A模块
const moduleA = {
    state: {
        username: 'moduleA'
    },
    getters: {
        newName(state) {
            return state.username + '!!! '
        }
    },
    mutations: {
        updateName(state) {
            state.username = 'ls'
        }
    }
}

// B模块
const moduleB = {
    namespaced: true,
    state: {
        username: 'moduleB'
    },
    getters: {
        newName(state) {
            return state.username + '!!! '
        }
    },
    mutations: {
        updateName(state) {
            state.username = 'moduleBBBBBBBBBBBBBBBB'
        }
    },
    actions: {
        updateName(context) {
            setTimeout(() => {
                context.commit('updateName')
            }, 5000)
        }
    },
}

export default createStore({
    modules: {
        moduleA,
        moduleB
    }
})

/*
export default createStore({
    state: {
        username: 'zs'
    },
    getters: {
        newName(state) {
            return state.username + '!!!'
        }
    },
    mutations: {
        updateName(state) {
            state.username = 'ls'
        }
    },
    actions: {
        updateName(context) {
            setTimeout(() => {
                context.commit('updateName')
            }, 5000)
        }
    },
    modules: {}
})
*/
