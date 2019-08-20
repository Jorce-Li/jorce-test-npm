import test from './components/test.vue'

test.install = Vue => Vue.component(test.name, test) // 给组件配置install方法 

export default test;