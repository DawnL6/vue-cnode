<template>
    <transition name='fade'>
        <div class="top" @click="top">
            <i class="iconfontyyy">&#xe615;</i>
        </div>
    </transition>
</template>

<script>
export default { 
    data() {
        return {
            time: null,
            cancelScroll: false,
        }
    },
    methods: {
        top() {
            if (!this.cancelScroll) {
                this.time = setInterval(() => {
                    let osTop = document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 10);
                    document.body.scrollTop = osTop + ispeed;
                    if (osTop == 0) {
                        clearInterval(this.time);
                    }
                }, 10);
            } else {
                clearInterval(this.time);
                this.cancelScroll = true;
            }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-in-out;
}

.fade-enter,
.fade-leave-active {
    transform: scale(0, 0)
}

.top {
    position: fixed;
    right: 5%;
    bottom: 5%;
    width: 80rem/@size;
    height: 80rem/@size;
    background-color: #388e3c;
    text-align: center;
    border-radius: 8rem/@size;
    i {
        font-size: 26px;
        color: #fff;
        line-height: 80rem/@size;
    }
}
</style>


