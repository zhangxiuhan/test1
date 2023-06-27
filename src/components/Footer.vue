<template>
    <div class="footer">
        <a href="">官网</a>
        <a href="">社区</a>
        <a href="">文档</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    //position: absolute;
    //bottom: 0px;
    margin-top: 15px;
    height: 36px;
    display: flex;
    align-items: flex-start;
    
    a{
        display: block;
        margin: 0 10px;
        color: #606260;
        text-decoration: none;
        font-size: 14px;
        line-height: 14px;
        &:hover{
        text-decoration: underline;
            color: aqua;
        }
    }
    a:nth-child(1){
        padding-left: 10px;
        border-left: 1px solid #606260;
    }
}
</style>