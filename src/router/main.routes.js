
/**
 * 页面路由
 */

export default [{
  path: "/",
  name: "Home",
  meta: {
    requireAuth: false,
    title: "首页",
    keepAlive: true
  },
  component: () => import("./../views/Home.vue"),
  props: true,
  children: []

},{
  path: "/About",
  name: "About",
  meta: {
    requireAuth: true,
    title: "首页",
    keepAlive: true
  },
  component: () => import("./../views/About.vue"),
  children: []
}];
