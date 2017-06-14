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
  </div>
</template>

<script>
import Header from './Header';
import { mapActions } from "vuex";
export default {
  data() {
    return {
      accessToken: ''
    }
  },
  created() {

  },
  methods: {
    ...mapActions(['singin']),
    back() {
      this.$router.back(-1)
    },
    login() {
      this.$store.dispatch('singin',this.accessToken);
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
