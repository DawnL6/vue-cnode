<template>
    <transition name='fade'>
        <div class="alert" v-if='show'>
            <p>{{alertText}}</p>
            <button @click='close'>关闭</button>
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
            this.$emit('close', this.show)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}

.alert {
    position: fixed;
    top: 20px;
    left: 50%;
    z-index: 9999999999;
    padding: 8px 16px;
    border-radius: 4px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, 0);
}
</style>