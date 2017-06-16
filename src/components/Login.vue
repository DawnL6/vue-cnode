<template>
  <div class="login">
    <div class="head">
      <span class="iconfontyyy" @click='back'>&#xe600;</span>
      <h2>登陆</h2>
    </div>
    <div class="content">
      <input v-model="accessToken" />
      <button @click='login'>登陆</button>
    </div>
    <Alert alertText='test' v-if='showMessage'></Alert>
  </div>
</template>

<script>
import Header from './Header';
import { mapState } from "vuex";
import axios from 'axios';
import Alert from './Alert'
import { setStore } from '../units/localStorage.js';
export default {
  data() {
    return {
      accessToken: '',
      showMessage:false
    }
  },
  created() {

  },
  components: {
    Alert
  },
  methods: {
    computed: {
      ...mapState([
        'loginInfo'
      ])
    },
    back() {
      this.$router.back(-1)
    },
    login() {
      axios.post(`https://cnodejs.org/api/v1/accesstoken?accesstoken=${this.accessToken}`).then(res => {
        this.$store.dispatch('loginInfo', res.data);
        setStore('loginInfo', res.data);
        this.$store.dispatch('loginStatus', true)
        this.$router.back(-1);
        this.showMessage = true;
      }).catch(()=>{
         this.showMessage = true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.head {
  background-color: @base;
  display: flex;
  height: 80rem / @size;
  align-items: center;
  color: @colorBg;
  padding: 15rem / @size;
  .iconfontyyy {
    font-size: 20px;
  }
  h2 {
    font-size: 18px;
    text-indent: 20rem / @size;
  }
}

.content {
  width: 95%;
  margin: 50px auto;
  input {
    width: 70%;
    display: block;
    margin: 0 auto;
    height: 60rem / 75;
    border-radius: 10px;
    outline: none;
    border: 1px solid @base;
    text-indent: 5px;
  }
  button {
    width: 70%;
    display: block;
    margin: 40rem/75 auto;
    height: 80rem / 75;
    border-radius: 10px;
    outline: none;
    border: 1px solid @base;
    background-color: @base;
    color: #fff;
  }
}
</style>
