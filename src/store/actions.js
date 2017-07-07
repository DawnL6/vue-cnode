import * as types from "./mutations-type";
export default {
    loginInfo({ commit }, obj) {
        commit(types.LOGIN_INFO, obj);
    },
    loginStatus({ commit }, obj) {
        commit(types.LOGIN_STATUS, obj);
    },
    loadPage({ commit }, num) {
        commit(types.LOAD_PAGE, num);
    },
    changeTab({ commit }, tab) {
        commit(types.CHANGE_TAB, tab)
    },
    showTop({ commit }, bool) {
        commit(types.SHOW_TOP, bool)
    },
}
