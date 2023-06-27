<template>
    <!-- 侧边导航 -->
    <div class="aside">
        <div class="top_log"><img src="@/assets/index-log.png" alt="" class="log"></div>
        <!-- 运营 -->
        <div class="menus">
            <div class="menu" @click="changeAsid('GroupGoods')">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>拼团商品</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>


        <!-- 商品 -->
        <div class="menus">
            <div class="menu" @click="changeAsid('GroupList')">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>拼团列表</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 订单 -->
        <div class="menus">
            <div class="menu" @click="changeAsid('GoodsManage')">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>商品管理</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 用户 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>用户</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 内容 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>内容</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 应用 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>应用</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 营销 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>营销</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 分销 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>分销</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 财务 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>财务</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 设置 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>设置</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

        <!-- 维护 -->
        <div class="menus">
            <div class="menu">
                <div class="left-title">
                    <span class="icon"></span>
                    <span>维护</span>
                </div>
                <span class="icon-right"></span>
            </div>
            <ul>
                <li>控制台</li>
                <li>商品统计</li>
                <li>用户统计</li>
                <li>交易统计</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {


        methods:{
            changeAsid(comPage){
                console.log(1);
                this.$emit('changePage',comPage)
            }
        }
    }
</script>

<style lang="scss" scoped>
.aside {
    min-width: 200px;
    height: 100vh;
    background-color: rgb(48, 65, 86);
    font-size: 14px;
    color: #fff;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }

    .top_log {
        width: 200px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;

        .log {
            width: 150px;
            height: 40px;
            margin-right: 12px;
        }
    }


    .menus {
        width: 100%;
        box-sizing: border-box;


        .menu {
            width: 100%;
            height: 56px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            box-sizing: border-box;

            .left-title {
                display: flex;

                .icon {
                    display: block;
                    width: 24px;
                    height: 18px;
                    background-color: aqua;
                    margin-right: 5px;
                }

            }

            .icon-right {
                display: block;
                width: 12px;
                height: 12px;
                background-color: beige;
            }
        }

        ul {
            display: none;
        }

        li {
            box-sizing: border-box;
            width: 100%;
            padding: 0 45px 0 40px;
            height: 50px;
            display: flex;
            align-items: center;
        }
    }

}
</style>