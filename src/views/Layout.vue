<template>
  <!--顶部通栏-->
  <AppNavbar></AppNavbar>

  <!--头部组组件-->
  <AppHeader></AppHeader>
  <!-- 2.2 固定头部布局-->
  <AppHeaderSticky/>
    <AppBody></AppBody>
  <!--内容容器-->
  <div class="main">
    <!--二级路由-->
    <RouterView></RouterView>
  </div>

  <!--底部组件-->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from "@/components/app-navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import AppBody from "@/components/app-body";
import AppHeaderSticky from "@/components/app-header-sticky";
import {useStore} from "vuex";

export default {
  name: "Layout",
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppBody,
    AppHeaderSticky
  },
//  获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')

    return {store}
  }
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>