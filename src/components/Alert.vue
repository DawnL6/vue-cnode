<template>
    <transition name='fade'>
        <div class="op" v-if='show'>
            <div class="alert">
                <i class="iconfontyyy">&#xe65a;</i>
                <p>{{alertText}}</p>
                <button @click='close'>确定</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        alertText: {//默认信息
            type: String,
            default: '我是弹出框！'
        },
        show: {//默认信息
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.fade-enter-active,
.fade-leave-active {
    transition: all .4s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}

.op {
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    .alert {
        position: fixed;
        top: 30%;
        left: 50%;
        z-index: 9999999999;
        width: 400rem/75;
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        transform: translate(-50%, 0);
        text-align: center;
        i {
            display: block;
            font-size: 50px;
            color: #f8cb86;
            margin-top: 20rem/75px;
        }
        p {
            padding: 20rem/75 0;
            font-size: 16px;
        }
        button {
            display: block;
            width: 100%;
            border: none;
            line-height: 70rem/75;
            background-color: #388e3c;
            font-size: 16px;
            color: #fff;
            outline: none;
            border-radius: 0 0 4px 4px;
        }
    }
}
</style>