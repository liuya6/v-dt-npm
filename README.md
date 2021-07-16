# 简介
vue自定义指令实现防抖节流功能

### 使用文档
```
npm i v-dt-npm

yarn add v-dt-npm
```

```js
import vdt from 'v-dt-npm';

Vue.use(vdt,{
  delay: 200 // 不配置默认为300毫秒延迟
});
```

### 使用方法
>防抖使用v-debounce 节流使用v-throttle
```html
 <button v-debounce="test">默认</button>

 <button v-debounce.stop="test">阻止冒泡</button>

 <button v-debounce.stop="{fn:test,params:1}">添加参数，多个使用数组包裹[1,2]</button>

 <button v-debounce.stop="{fn:test,params:[1,2],use:'before'}">use设置防抖延迟前执行，默认为延迟后</button>
``` 
