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
                <ul>
                    <li>全部</li>
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
import {removeStore} from '../units/localStorage.js';
export default {
    data() {
        return {
            silderClass: false,
            show: false
        }
    },
    computed: {
        ...mapState([
            'loginInfo', 'loginStatus'
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
