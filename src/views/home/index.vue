<template>
  <div class="page-home">
    <!--首页入口-->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory/>
        <!-- 轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
  <!--新鲜好物-->

  <HomeNew></HomeNew>
  <!--人气推荐-->
  <HomeHot></HomeHot>
  <!--使用transition组件-->
  <button @click="show=true">显示|创建</button>
  <button @click="show=false">隐藏|移除</button>
  <Transition>
    <div v-show="show" style="width: 100px;height: 100px;background-color:red;"></div>
  </Transition>

  <Transition name="h">
    <div v-show="show" style="background-color:red;"></div>
  </Transition>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from "@/views/home/components/home-banner";
import HomeNew from "@/views/home/components/home-new";
import HomeHot from "@/views/home/components/home-hot";
import {ref} from "vue";

export default {
  name: 'PageHome',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  },
  setup() {
    const show = ref(true)
    return {show}
  }
}
</script>

<style scoped lang="less">
// 如果需要多个组动画 transition加上name属性 name="xxx"
// 其他的6个类型写法变为: xxx-enter-from xxx-enter-active xxx-enter-to
// 进入 v-enter-from v-enter-active v-enter-to
.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all 1s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 1s;
}

.v-leave-to {
  opacity: 0;
}


.h-enter-from {
  height: 0;
}

.h-enter-active {
  transition: all 1s;
}

.h-enter-to {
  height: 100px;
}

.h-leave-from {
  height: 100px;
}

.h-leave-active {
  transition: all 1s;
}

.h-leave-to {
  height: 0;
}

// 离开 v-leave-from v-leave-active v-leave-to
</style>