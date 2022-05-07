<template>
  <div>
    App
    <!--1.使用根模块state的数据-->
    <p>{{ this.$store.state.username }}</p>
    <p>{{ this.$store.getters.newName }}</p>
    <button @click="mutationsFn">mutation</button>
  </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: 'app',
  setup() {


    // 使用vuex仓库
    const store = useStore()
    // 1.使用根模块state的数据
    console.log(store.state.username)

    // 2.使用根模块getters的数据
    console.log(store.getters.newName)

    
    //  3.提交根模块mutations函数
    const mutationsFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }


    return {mutationsFn}
  }
}
</script>

<style lang="less">

</style>
