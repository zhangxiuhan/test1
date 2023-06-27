<template>
    <!-- 切换标签 -->
    <!-- <div class="nav_tab">
        <div class="tab" v-bind:class="num == 0 ? 'active' : ''" v-on:click="num = 0">主页</div>
        <div class="tab" v-bind:class="num == 1 ? 'active' : ''" v-on:click="num = 1">拼团列表</div>
        <div class="tab" v-bind:class="num == 2 ? 'active' : ''" v-on:click="num = 2">拼团商品</div>
        <div class="tab" v-bind:class="num == 3 ? 'active' : ''" v-on:click="changeTab(3)">砍价商品</div>
    </div> -->

    <!-- 对象类型绑定class -->
    <div class="nav_tab">
        <div class="tab" v-bind:class="{active:comPage == 'TestVlife',activebg:comPage == 'TestVlife'}" v-on:click="changeTab('TestVlife')">主页</div>
        <div class="tab" v-bind:class="{active:comPage == 'GroupList',activebg:comPage == 'GroupList'}" v-on:click="changeTab('GroupList')">拼团列表</div>
        <div class="tab" :class="{active:comPage == 'GroupGoods',activebg:comPage == 'GroupGoods'}" v-on:click="changeTab('GroupGoods')">拼团商品</div>
        <div class="tab" v-bind:class="{active:comPage == 'GoodsManage',activebg:comPage == 3}" v-on:click="changeTab('GoodsManage')">商品管理</div>
    </div>

    <!-- 数组类型绑定class -->
    <!-- <div class="nav_tab">
        <div class="tab " v-bind:class="[num == 0 ? 'active' : '',num == 0 ? 'activebg' : '']" v-on:click="num = 0">主页</div>
        <div class="tab" v-bind:class="[num == 1 ? 'active' : '']" v-on:click="num = 1">拼团列表</div>
        <div class="tab" v-bind:class="[num == 2 ? 'active' : '']" v-on:click="num = 2">拼团商品</div>
        <div class="tab" v-bind:class="[num == 3 ? 'active' : '']" v-on:click="changeTab(3)">砍价商品</div>
    </div> -->

    <!-- style切换 -->
    <!-- <div class="nav_tab">
        <div class="tab" v-bind:style="{color: 0==num?'#1890ff':'',backgroundColor: 0==num?'saddlebrown':''}" v-on:click="num = 0">主页</div>
        <div class="tab" v-bind:style="{color: 1==num?'#1890ff':'',backgroundColor: 1==num?'saddlebrown':''}" v-on:click="num = 1">拼团列表</div>
        <div class="tab" v-bind:style="{color: 2==num?'#1890ff':'',backgroundColor: 2==num?'saddlebrown':''}" v-on:click="num = 2">拼团商品</div>
        <div class="tab" v-bind:style="{color: 3==num?'#1890ff':'',backgroundColor: 3==num?'saddlebrown':''}" v-on:click="changeTab(3)">砍价商品</div>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            comPage: 'TestVlife',

        }
    },

    methods: {
        changeTab(comPage) {
            this.comPage = comPage
            this.$emit('changePage',comPage)
        }
    }
}
</script>

<style lang="scss" scoped>
//切换标签
.nav_tab {
    width: 100%;
    //height: 40px;
    font-size: 14px;
    background-color: #97a8be;
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;

    

    .tab {
        cursor: pointer;
        background-color: #fff;
        padding: 5px;
        margin: 10px;
        border-radius: 4px;
    }

    .active {
        color: #1890ff;
    }

    .activebg{
        background-color: rgb(96, 86, 79);
    }
}
</style>