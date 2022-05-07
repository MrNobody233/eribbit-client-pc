<template>
  <div class="appContainer">
    <!--修改数据，测试持久化-->
    App {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser',{account: 'zhousg'})">设置用户信息</button>
  </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: 'App ',

  setup() {
    const store = useStore()


  }
}
</script>

<style lang="less">

</style>