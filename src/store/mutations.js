import Vue from "vue";
import * as types from "./mutations-type";
export default {
    [types.LOGIN_INFO](state, loginInfo) {
        state.loginInfo = loginInfo;
    },
    [types.LOGIN_STATUS](state, loginStatus) {
        state.loginStatus = loginStatus;
    },
    [types.TOPIC_LIST](state, topicList) {
        state.topicList = topicList;
    }
}