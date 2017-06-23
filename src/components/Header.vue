<template>
  <div>
    <div class="head">
      <span class="iconfontyyy" @click='sliderLeft'>&#xe606;</span>
      <h2>Cnode 社区</h2>
    </div>
    <div v-if="loading" class="loading">
      <img src="../assets/images/loading.svg" alt="">
      <p>加载中......</p>
    </div>
    <ul class="lists">
      <li v-for="item in this.topicList" :key='item.id'>
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
    <Slider></Slider>
  </div>
</template>

<script>
import Slider from './Silder'
import { mapState } from 'vuex'
import { getStore } from '../units/localStorage.js'
import axios from 'axios';
//import lo from '../assets/images/loading.svg'
export default {
  name: 'head',
  data() {
    return {
      url: 'https://cnodejs.org/api/v1/topics',
      loading: true
    }
  },
  computed: {
    ...mapState([
      'loginStatus', 'loginInfo', 'tab', 'page', 'topicList'
    ])
  },
  created() {
    console.log(this.$route.query)
    this.getData(this.tab)
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
    },
    getData(tab) {
      axios.get(`${this.url}?limit=20&tab=${tab}`).then(res => {
        this.$store.dispatch('topicList', res.data.data);
        this.loading = false;
      }).catch(() => {

      })
    }
  },
  components: {
    Slider
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.loading {
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 1231233232;
  width: 100%;
  text-align: center;
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
</style>
