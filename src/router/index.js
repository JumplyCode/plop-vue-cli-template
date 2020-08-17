
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routes = []; // 路由数组 - 存放所有路由

function importAll(routerArr) {
  // 该函数用于将所有分区路由中的路由添加到路由数组
  routerArr.keys().forEach(key => {
    routes = routes.concat(routerArr(key).default)
  });
}

importAll(require.context(".", true, /\.routes\.js/));

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  srcollBehavior(to,from,savedPosition){
    if(to.hash){
      return {
        selector:to.hash
      }
    }
  },
  routes
});

router.beforeEach((to, form, next) => {

  next();

});

export default router;