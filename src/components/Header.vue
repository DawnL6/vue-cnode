<template>
  <div>
    <div class="head">
      <span class="iconfontyyy" @click='sliderLeft'>&#xe606;</span>
      <h2>{{tab | formatTitle}}</h2>
    </div>
    <div v-if="showTop" class="loading">
      <div>
        <img src="../assets/images/loading.svg" alt="" width="40">
        <p>加载中......</p>
      </div>
    </div>
    <ul class="lists">
      <li v-for="item in list" :key='item.id'>
        <div>
          <span class="type-top" v-if="item.top">置顶</span>
          <span class="type-top" v-else-if="item.good">精华</span>
          <span v-else-if="item.tab == 'share'">分享</span>
          <span v-else-if="item.tab == 'ask'">问答</span>
          <span v-else-if="item.tab == 'job'">招聘</span>
          <h3>{{item.title}}</h3>
        </div>
        <div class="info">
          <img :src="item.author.avatar_url" alt="">
          <div class="con">
            <p>
              <span>{{item.author.loginname}}</span>
              <span>{{item.reply_count}} / {{item.visit_count}}</span>
            </p>
            <p>
              <span>{{item.create_at | formatTime}}</span>
              <span>{{item.last_reply_at | formatTime}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="load" v-show="loadMore">
      <img src="../assets/images/spinning-circles.svg" alt="" width="30">
    </div>
    <Slider></Slider>
    <ToTop v-if='top'></ToTop>
  </div>
</template>

<script>
import Slider from './Silder'
import ToTop from './ToTop'
import { mapState } from 'vuex'
import { getStore } from '../units/localStorage.js'
import axios from 'axios'
export default {
  name: 'head',
  data() {
    return {
      url: 'https://cnodejs.org/api/v1/topics',
      list: [],
      loadMore: false,//加载更多动画
      top: false,//返回顶部
    }
  },
  computed: {
    ...mapState([
      'loginStatus', 'loginInfo', 'tab', 'page', 'loadPage', 'showTop'
    ])
  },
  created() {

  },
  mounted() {
    this.$nextTick(() => {
      this.getData(this.tab);
      document.body.scrollTop = 0;
      this.$store.dispatch('loadPage', 1);
      if (getStore('loginInfo') != null) {
        this.$store.dispatch('loginInfo', getStore('loginInfo'));
        this.$store.dispatch('loginStatus', true);
      }
      window.addEventListener('scroll', this.more);
    })
  },
  methods: {
    sliderLeft() {
      this.$children[0].toggle();
    },
    getData(tab) {
      axios.get(`${this.url}?limit=20&tab=${tab}`).then(res => {
        this.list = res.data.data;
        this.$store.dispatch('showTop', false);
      }).catch(() => {

      })
    },
    more() {
      let scrolled = document.body.scrollTop;
      if (scrolled + window.screen.height == (document.body.scrollHeight)) {
        this.loadMore = true;
        this.$store.dispatch('loadPage');
      }
      if (scrolled > 1500) {
        this.top = true;
      } else {
        this.top = false;
      }
    }
  },
  watch: {
    page(val) {
      if (val == 1) return;
      axios.get(`${this.url}?limit=20&tab=${this.tab}&page=${val}`).then(res => {
        this.list = this.list.concat(res.data.data);
        setTimeout(() => {
          this.loadMore = false;
        }, 100)
      })
    },
    tab(nTab) {
      this.getData(nTab);
    }
  },
  components: {
    Slider,
    ToTop
  },
  filters: {
    formatTime(str) {
      var date = new Date(str);
      var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
      if (time < 0) {
        return '';
      } else if (time / 1000 < 60) {
        return '刚刚';
      } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前';
      } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前';
      } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前';
      } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前';
      } else {
        return parseInt(time / 31536000000) + '年前';
      }
    },
    formatTitle(value) {
      switch (value) {
        case 'all':
          return 'CNode社区'
        case 'good':
          return '精华'
        case 'share':
          return '分享'
        case 'ask':
          return '问答'
        case 'job':
          return '招聘'
        case 'dev':
          return '测试'
        default:
          return 'CNode社区'
      }
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.loading {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1231233232;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  color: #fff;
  align-items: center;
  justify-content: center;
  div {
    margin-top: -50%;
  }
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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

.lists {
  width: 100%;
  margin-top: 110rem / @size;
  li {
    width: 100%;
    border-bottom: 1px solid #cecece;
    font-size: 14px;
    div:first-child {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      span {
        padding: 5px 8px;
        background-color: #cecece;
        border-radius: 4px;
        margin-right: 5px;
      }
      .type-top {
        background-color: @base;
        color: #fff;
      }
      h3 {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .info {
      display: flex;
      padding: 5px 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #cecece;
        margin-right: 5px;
      }
      .con {
        flex: 1;
        p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    }
  }
}

.load {
  position: fixed;
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, .1);
  z-index: 10000;
  bottom: 0;
  left: 0;
  text-align: center;

  img {
    margin-top: 5px;
  }
}
</style>
