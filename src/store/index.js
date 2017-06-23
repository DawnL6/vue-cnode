import Vue from 'vue'
import Vuex from 'vuex'

import * as types from "./mutations-type";
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    tab: 'all',
    page: 1,
    loginStatus: false,//登陆状态
    loginInfo: {},//登陆用户信息
    topicList: []
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});