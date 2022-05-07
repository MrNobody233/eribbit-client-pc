<template>
  <div class="appContainer">
    <!--1.1 使用A模块的state数据-->
    <p>{{ $store.state.moduleA.username }}</p>

    <!--1.2 使用A模块的getters数据-->
    <p>{{ $store.getters.newName }}</p>

    <!--2.1使用B模块的state数据-->
    <p>{{ $store.state.moduleB.username }}</p>

    <!--2.2 使用B模块的getters数据-->
    <p>{{ $store.getters['moduleB/newName'] }}</p>

    <!--2.3 使用B模块的mutation数据-->
    <p>{{ $store.state.moduleB.username }}</p>
    <button @click="updateName">更改姓名</button>
    <button @click="asyncUpdateName">更改姓名</button>
  </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: 'App ',

  setup() {
    const store = useStore()

    const updateName = () => {
      // 2.3提交B模块的修改
      store.commit('moduleB/updateName')

    }

    const asyncUpdateName = () => {
      store.dispatch('moduleB/updateName')
    }

    return {updateName, asyncUpdateName }
  }
}
</script>

<style lang="less">

</style>