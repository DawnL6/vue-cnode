<template>
    <transition name="fade">
        <div class="silder" v-show="silderClass">
            <div class="slderLeft" @click='toggle'></div>
            <div class="content">
                <div class="img">
                    <router-link to='login'>
                        <img src="http://freevector.co/wp-content/uploads/2013/01/80889-male-avatar-circle.png" alt="Avatar">
                        <p>点击头像登陆</p>
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    data() {
        return {
            silderClass: false
        }
    },
    methods: {
        toggle() {
            console.log(this)
            this.silderClass = !this.silderClass
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
                display: flex;
                height: 100%;
                align-items: center;
                img {
                    width: 30%;
                    height: 30%;
                    margin-left: 40rem / 75;
                    margin-top: 40rem / 75;
                }
                p {
                    color: #fff;
                    font-size: 16px;
                    margin-left: 20rem / 75;
                    margin-top: 20rem / 75;
                }
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
