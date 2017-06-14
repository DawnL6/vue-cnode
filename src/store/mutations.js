import Vue from "vue";
import * as types from "./mutations-type";
export default {
    [types.SIGN_IN_SUCCESS](state, userInfo) {
        state.userInfo = userInfo;
    },
    [types.SIGN_IN_FAIL](state, user) {
        console.log(user)
    }
}