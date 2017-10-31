<template>
    <div>
        <div class="head">
            <span class="iconfontyyy" @click="back">&#xe600;</span>
            <h2>话题</h2>
        </div>
        <div class="detail">
            <h3 class="title">{{obj.title}}</h3>
            <!-- //<div v-html="obj.content"></div> -->
            <section class='markdown-body topic-content' v-html="obj.content"></section>
        </div>
        <ToTop v-if='top'></ToTop>
    </div>
</template>

<script>
import axios from 'axios';
import ToTop from './ToTop';
//import 'github-markdown-css';
export default {
    data() {
        return {
            url: 'https://cnodejs.org/api/v1/topic',
            obj: {},
            top: false
        }
    },
    created() {
        this.getDetail(this.$route.query.id);
        //alert(document.body.scrollTop)
    },
    methods: {
        back() {//返回
            this.$router.back(-1);
        },
        getDetail(userId) {//获取信息
            axios.get(`${this.url}/${userId}`).then(res => {
                this.obj = res.data.data
            }).catch(() => {

            })
        },
        toTop() {
            let scrolled = document.body.scrollTop;
            if (scrolled > 1500) {
                this.top = true;
            } else {
                this.top = false;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', this.toTop);
        })
    },
    components: {
        ToTop
    },
    beforeDestroy() {
        //  window.event.returnValue = false; 
        document.body.scrollTop = 0;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
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
        font-size: 24px;
    }
    h2 {
        font-size: 18px;
        text-indent: 20rem / @size;
    }
}

.detail {
    width: 100%;
    padding-top: 110rem / @size;
    .title {
        font-size: 16px;
        font-weight: 500;
    }
    .topic-content {
        padding: 0 15px;
    }
}
</style>