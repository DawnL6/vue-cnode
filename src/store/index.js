import Vue from 'vue'
import Vuex from 'vuex'

import * as types from "./mutations-type";
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    loginStatus:false,//登陆状态
    loginInfo:{}//登陆用户信息
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});