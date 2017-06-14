import Vue from 'vue'
import Vuex from 'vuex'

import * as types from "./mutations-type";
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    loginname: sessionStorage.getItem('loginname') || '',
    userInfo:{}
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});