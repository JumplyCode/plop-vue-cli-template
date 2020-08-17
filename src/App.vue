<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="scss">

@import './assets/css/style.css';
@import "./assets/css/font/iconfont.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-box {
  min-height: 100vh;
  overflow: hidden;
}
.details-model {
  margin: .625rem 0 0;
  background: #fff;
  overflow: hidden;
  &.radius {
    border-radius: 1rem 1rem 0 0;
  }
}
</style>
