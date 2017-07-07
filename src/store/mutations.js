import Vue from "vue";
import * as types from "./mutations-type";
export default {
    [types.LOGIN_INFO](state, loginInfo) {
        state.loginInfo = loginInfo;
    },
    [types.LOGIN_STATUS](state, loginStatus) {
        state.loginStatus = loginStatus;
    },
    [types.LOAD_PAGE](state, num) {
        if (num) {
            state.page = num;
        } else {
            state.page++
        }
    },
    [types.CHANGE_TAB](state, tab) {
        state.tab = tab;
    },
    [types.SHOW_TOP](state, bool) {
        state.showTop = bool;
    },
}