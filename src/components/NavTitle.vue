<template>
    <!-- 顶部标题 -->
    <div class="nav">
        <div class="nav-left">
            <img src="" alt="" class="left-log">
            <p>
                <span>主页</span>
                /
                <span>营销</span>
                /
                <span>拼团管理</span>
                /
                <span class="page">拼团商品</span>
            </p>
        </div>
        <div class="nav-right">
            <img src="" alt="" class="serch">
            <img src="" alt="" class="serch">
            <img src="" alt="" class="serch">
            <div class="user">
                <span>demo</span>
                <img src="@/assets/left_icon.jpg" alt="" class="userIfo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 50px;
    background-color: #795f5f;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    .nav-left {
        display: flex;
        align-items: center;

        .left-log {
            display: block;
            width: 20px;
            height: 20px;
            padding: 0 15px;
        }

        p {

            color: #303133;

            .page {
                color: #97a8be;

            }
        }
    }

    .nav-right {
        //width: 220px;
        display: flex;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
            padding: 0 8px;
            margin-right: 5px;
        }

        .user {
            display: flex;
            align-items: center;
            width: 60px;
            box-sizing: border-box;
            margin-right: 30px;
            height: 50px;

            .userIfo {
                width: 14px;
                height: 14px;
            }
        }
    }
}
</style>