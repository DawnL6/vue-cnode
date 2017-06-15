<template>
    <div class="alert">
        <section>
            <p>{{alertText}}</p>   
        </section>
    </div>
</template>

<script>

export default{
    props:['alertText']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/conment.less';
.alert {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    position: fixed;
    top:0;
    left: 0;
    z-index: 9999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    section{
        width: 600rem/75;
        height: 200rem/75;
        background-color: #fff;
        border-radius: 2px;
        p{
            padding: 30rem/75 0 0 30rem/75;
            font-size: 18px;
        }
    }
}
</style>
