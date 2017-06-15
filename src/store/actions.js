import * as types from "./mutations-type";

export default {
    loginInfo({ commit }, obj) {
        commit(types.LOGIN_INFO, obj)
    },
    loginStatus({ commit }, obj) {
        commit(types.LOGIN_STATUS, obj)
    }
}
