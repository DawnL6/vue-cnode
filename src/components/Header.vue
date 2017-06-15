<template>
  <div>
    <div class="head">
      <span class="iconfontyyy" @click='sliderLeft'>&#xe606;</span>
      <h2>Cnode 社区</h2>
    </div>
    <Slider></Slider>
  </div>
</template>

<script>
import Slider from './Silder'
import { mapState } from 'vuex'
import { getStore } from '../units/localStorage.js'
export default {
  name: 'head',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState([
      'loginStatus', 'loginTip'
    ])
  },
  mounted() {
    this.$nextTick(() => {
      if (getStore('loginInfo') != null) {
        this.$store.dispatch('loginInfo', getStore('loginInfo'));
        this.$store.dispatch('loginStatus', true)
      }
    })
  },
  methods: {
    sliderLeft() {
      this.$children[0].toggle();
    }
  },
  components: {
    Slider
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
    font-size: 30px;
  }
  h2 {
    font-size: 18px;
    text-indent: 20rem / @size;
  }
}
</style>
