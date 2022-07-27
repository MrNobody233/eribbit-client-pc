<template>
  <ul className="app-header-nav">
    <!--    {{ $store.state.category.list }}-->
    <li className="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li v-for="item in list" :key="item.id">
      <router-link :to="`/category/${item.id}`" @click="hide">{{ item.name }}</router-link>
      <div class="layer" v-if="open">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <router-link :to="`/category/sub/${sub.id}`" @click="hide">
              <img :src="sub.picture" alt="">
              <p>{{ sub.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>

  </ul>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {ref} from "vue";

export default {
  name: 'AppHeaderNav',
  setup() {
    const store = useStore()
    // 到vuex中的分类列表
    const list = computed(() => {
      return store.state.category.list
    })

    const open = ref(true)
    const show = () => {
      open.value = true
    }
    const hide = () => {
      open.value = false
      setTimeout(() => {
        open.value = true
      }, 1000)
    }
    return {list, open, show, hide}
  }
}
</script>

<style scoped lang='less'>
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }

    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }

      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}

// 二级类名弹窗
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;

    li {
      width: 110px;
      text-align: center;

      img {
        width: 60px;
        height: 60px;
      }

      p {
        padding-top: 10px;
      }

      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}

.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }

    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }

      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}

.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;

    li {
      width: 110px;
      text-align: center;

      img {
        width: 60px;
        height: 60px;
      }

      p {
        padding-top: 10px;
      }

      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
