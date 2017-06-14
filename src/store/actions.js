import Vue from 'vue';
import axios from 'axios';
import * as types from "./mutations-type";
const url = ''
const singin = ({commit, state},accessToken) => {
    console.log(accessToken)
    axios.post(`https://cnodejs.org/api/v1/accesstoken?accesstoken=${accessToken}`)
        .then(function (response) {
            commit(types.SIGN_IN_SUCCESS, response.data);
        })
        .catch(function (error) {
            commit(types.SIGN_IN_FAIL,'');
        });
}
export default {
    singin
}
