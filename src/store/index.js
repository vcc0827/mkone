import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 存储需要共享的状态
        ArrayA: [{
            name: '周一',
            count: '1'
        }, {
            name: '周二',
            count: '2'
        }, {
            name: '周三',
            count: '3'
        }]
    },
    mutations: {
        // 改变state中状态的方法
     
    },
    getters: {},
    actions: {},
    modules: {}
})