
// const componentsContext = require.context('./', true, /index.(vue|js)$/)
// const install = Vue => {
//     componentsContext.keys().forEach(file_name => {
//         // 获取文件中的 default 模块
//         const componentConfig = componentsContext(file_name).default
//         if (/.vue$/.test(file_name)) {
//             Vue.component(componentConfig.name, componentConfig)
//         } else {
//             Vue.use(componentConfig)
//         }
//     })
// }
//package/index.js
import MyWavesurfer from "./MyWavesurfer/index.vue"; // 引入封装好的组件
const coms = [MyWavesurfer]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用
