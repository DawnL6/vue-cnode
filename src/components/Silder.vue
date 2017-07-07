<template>
    <transition name="fade">
        <div class="silder" v-show="silderClass">
            <div class="slderLeft" @click='toggle'></div>
            <div class="content">
                <div class="img" v-if="loginStatus">
                    <router-link to='/'>
                        <img :src="loginInfo.avatar_url" alt="Avatar">
                    </router-link>
                    <p>{{loginInfo.loginname}}</p>
                    <span @click='longout'>登出</span>
                </div>
                <div class="img" v-else>
                    <router-link to='login'>
                        <img src="http://freevector.co/wp-content/uploads/2013/01/80889-male-avatar-circle.png" alt="Avatar">
                    </router-link>
                    <p>点击头像登陆</p>
                </div>
                <ul class="menu">
                    <li :class="{ active: this.tab=='all' }" @click="switchTab('all')">
                        <i class="iconfontyyy">&#xe606;</i>
                        <span>全部</span>
                    </li>
                    <li :class="{ active: this.tab=='good' }" @click="switchTab('good')">
                        <i class="iconfontyyy">&#xe66b;</i>
                        <span>精华</span>
                    </li>
                    <li :class="{ active: this.tab=='share' }" @click="switchTab('share')">
                        <i class="iconfontyyy">&#xe601;</i>
                        <span>分享</span>
                    </li>
                    <li :class="{ active: this.tab=='ask' }" @click="switchTab('ask')">
                        <i class="iconfontyyy">&#xe729;</i>
                        <span>问答</span>
                    </li>
                    <li :class="{ active: this.tab=='job' }" @click="switchTab('job')">
                        <i class="iconfontyyy">&#xe645;</i>
                        <span>招聘</span>
                    </li>
                    <li :class="{ active: this.tab=='dev' }" @click="switchTab('dev')">
                        <i class="iconfontyyy">&#xe60d;</i>
                        <span>客户端测试</span>
                    </li>
                </ul>
            </div>
            <div class="logout" v-if='show'>
                <section>
                    <span class="iconfontyyy">&#xe65a;</span>
                    <p>确定要退出吗</p>
                    <div class="but">
                        <button @click='cancel'>在等等</button>
                        <button class="quit" @click='ok'>退出登陆</button>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex';
import { removeStore } from '../units/localStorage.js';
export default {
    data() {
        return {
            silderClass: false,
            show: false
        }
    },
    created() {
        //console.log(this.tab)
    },
    computed: {
        ...mapState([
            'loginInfo', 'loginStatus', 'tab', 'changeTab'
        ])
    },
    methods: {
        toggle() {
            this.silderClass = !this.silderClass
        },
        longout() {
            this.show = true;
        },
        cancel() {
            this.show = false;
        },
        ok() {
            removeStore('loginInfo');
            this.$store.dispatch('loginInfo', {});
            this.$store.dispatch('loginStatus', false);
            this.show = false;
        },
        switchTab(tab) {
            if (this.tab === tab) return;
            this.$store.dispatch('changeTab', tab);
            this.$router.push({ path: 'topic', query: { tab: tab } })
            this.$store.dispatch('loadPage', 1);
            document.body.scrollTop = 0;
            this.$store.dispatch('showTop', true);
            this.toggle();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.fade-enter-active,
.fade-leave-active {
    transition: all .5s
}

.fade-enter,
.fade-leave-active {
    transform: translateX(-100%);
}

.silder {
    position: fixed;
    top: 0;
    right: 0%;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    z-index: 1;
    height: 100%;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: #fff;
        transition: all .3s;
        z-index: 2;
        .img {
            width: 100%;
            min-height: 300rem / 75;
            background: url("../assets/images/bg.png") no-repeat center;
            background-size: 100% 100%;
            a {
                display: block;
                width: 120rem/75;
                height: 120rem/75;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    margin-top: 20rem/75;
                }
            }
            p {
                color: #fff;
                font-size: 16px;
                width: 120rem/75;
                margin: 0 auto;
                margin-top: 40rem/75;
                text-align: center;
            }
            span {
                display: block;
                width: 120rem/75;
                height: 45rem/75;
                margin: 0 auto;
                margin-top: 20rem/75;
                background-color: @base;
                text-align: center;
                line-height: 45rem/75;
                color: #fff;
            }
        }
        .menu {
            margin-top: 10rem/75;
            li {
                font-size: 18px;
                height: 46px;
                line-height: 46px;
                display: flex;
                align-items: center;
                i {
                    margin: 0 10px;
                    font-size: 24px;
                }
                span {
                    margin-left: 15px;
                }
            }
            .active {
                background: #f0f0f0;
            }
            li:first-child i {
                color: #388e3c;
            }
            li:nth-child(2) i {
                color: #d32f2f;
            }
            li:nth-child(3) i {
                color: #1976d2;
            }
            li:nth-child(4) i {
                color: #f57c00;
            }
            li:nth-child(5) i {
                color: #388e3c;
            }
            li:nth-child(6) i {
                color: #1976d2;
            }
        }
    }
    .slderLeft {
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: all .3s;
        z-index: 2;
    }
    .logout {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999999999;
        display: flex;
        align-items: center;
        justify-content: center;
        section {
            width: 600rem/75;
            background-color: #fff;
            border-radius: 2px;
            margin-top: -0.8rem;
            span {
                display: block;
                font-size: 100px;
                text-align: center;
                color: #f8bb86;
            }
            p {
                text-align: center;
                font-size: 18px;
                margin: 0.1333rem 0;
            }
            .but {
                width: 100%;
                text-align: center;
                button {
                    outline: none;
                    border: none;
                    display: inline-block;
                    padding: .2rem .8rem;
                    border-radius: 0.0667rem;
                    font-size: 18px;
                    color: #fff;
                    margin: 0.2667rem 0.0667rem;
                }
                .quit {
                    background: #dd6b55;
                }
            }
        }
    }
}
</style>
