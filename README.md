### 一、结构

1、**components**（**组件**）

> 组件已自动引入，不用在每个页面import再引入，按组件中的name直接使用即可。
>
> basic目录是基本组件（比如出错页面）
>
> Error.vue出错页面调用：
>
> @param {string} noData - 没有找到数据
>
> @param {string} desert - 网络开小差
>
> @param {string} fail - 操作失败了
>
> ```
> 局部调用：
> 
> <Error ref="error"></Error>
> 
> this.$refs.error.wdrError({
>    type: 'desert ',
>    text: '抱歉！网络开小差了'
> })
> 
> 
> 全局跳转：
> this.toFailed({
>    type: 'desert', // 不是必填
>    text: '抱歉！网络开小差了',  // 不是必填
>    routeType: 'push'   // 不是必填，默认是replace
> });
> 
> ```
>
> 



2、**router** （**路由**）

> 路由中的basic.routes.js是基本路由，不要随意添加改动
>
> 如果个人独立开发直接在main.routes.js添加页面路由即可，如果是多人开发可以根据自己的模块添加路由js文件，但必须是以“routes.js”后缀，因为路由文件会自动根据“routes.js”后缀匹配到总路由文件index.js中。



3、**service （接口api）**

> 接口api中的basic.service.js文件是公用接口，不要随意添加改动
>
> 如果个人独立开发直接在main.rservice.js添加接口api即可，如果是多人开发可以根据自己的模块添加接口js文件，但必须是以“service.js”后缀，因为路由文件会自动根据“service.js”后缀匹配到总接口api文件httpApi.js中。



4、**store** （**状态管理**）

> vuex集成了tgt换取用户信息的接口
>
> 首页获取用户信息接口调用方式：
>
> ```
> const params = {
>     tgt: this.$tgt
> };
> this.$store.dispatch('getUserInfo', params).then( (res) => {
>     console.log(res)
> }).catch( (error) => {
>    console.log(error)
> })
> ```
>
> 其它页面可通过状态管理获取用户信息：
>
> ```
> 获取用户全部信息:  this.$store.getters.userData;
> ```
> 
>



5、**views** （**页面**）

> basic中是基本页面（比如404出错的页面、成功页面等），不要在里面随意添加页面



6、**assets** （**静态资源**）

> css样式表中的common.scss是整个APP公用样式，包括按钮、边框等
>
> ```
> 例如：按钮引用
> 默认：
> .button {
>   @include wdr-button()
> }
> 传参：
> .button {
>   @include wdr-button($color: red)
> }
> ```