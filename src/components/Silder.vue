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
                    <span @clcik='longot'>登出</span>
                </div>
                <div class="img" v-else>
                    <router-link to='login'>
                        <img src="http://freevector.co/wp-content/uploads/2013/01/80889-male-avatar-circle.png" alt="Avatar">
                    </router-link>
                    <p>点击头像登陆</p>
                </div>
            </div>
            <Alert alertText='你确定注销吗？'></Alert>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex';
import Alert from './Alert';
export default {
    data() {
        return {
            silderClass: false
        }
    },
    components: {
        Alert
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
        longot() {

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
}
</style>
