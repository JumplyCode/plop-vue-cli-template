
/**
 * 基本路由
 */

export default [{
  path: "/Failed",
  name: "Failed",
  meta: {
    requireAuth: false,
    title: "出错了",
  },
  component: () => import("./../views/basic/Failed.vue"),
  props: true
}];
