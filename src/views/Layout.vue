<template>
    <div class="allContent">
        <!-- 侧边导航 -->
        <Aside @changePage="changePage"></Aside>

        <!-- 主内容 -->
        <div class="container">
            <!-- 顶部标题 -->
            <NavTitle ></NavTitle>
            <!-- 切换标签 -->
            <NavTab @changePage="changePage"></NavTab>

            <!-- 拼团商品 -->
            <!-- <GroupGoods></GroupGoods> -->

            <!-- 拼团列表 -->
            <!-- <GroupList></GroupList> -->

            <!-- 商品管理 -->

            <!-- <GoodsManage v-show="showModifyPage == 'GoodsManage'" v-bind:RowGoods="curRow"  @showModify="showModifyMethod"></GoodsManage> -->

            <!-- 添加商品 -->
            <!-- <ModifyGoods v-if="showModifyPage == 'ModifyGoods'" v-bind:rowGoods="curRow" msg="向子组件传参了" :count="99" :sex="0" @upRow="upRow"></ModifyGoods> -->


            <!-- 选择颜色 -->
            <!-- <ChooseColor></ChooseColor> -->

            <!-- 数组、对象新增删除数据渲染 -->
            <!-- <UpDataTest></UpDataTest> -->

            <!-- 生命周期 -->
            <!-- <TestVlife></TestVlife> -->

            <!-- include="GroupGoods" :include="['GroupGoods','TestVlife']" :exclude="['GroupGoods']",  :include="/Group[a-zA-Z]+/"-->
            <KeepAlive :include="/^Group/">
                
                <component :is="comPage" v-bind:rowGoods="curRow" 
                v-bind:RowGoods="curRow"
                @showModify="showModifyMethod" @upRow="upRow"></component> 
            </KeepAlive>
            
            <!-- 底部footer -->
            <Footer></Footer>

        </div>
    </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import NavTitle from '@/components/NavTitle.vue'
import NavTab from '@/components/NavTab.vue'
import GroupGoods from '@/components/GroupGoods.vue'
import GroupList from '@/components/GroupList.vue'
import Footer from '@/components/Footer.vue'
import GoodsManage from '@/components/GoodsManage.vue'
import UpDataTest from '@/components/UpDataTest.vue'
import ModifyGoods from '@/components/ModifyGoods.vue'
import ChooseColor from '@/components/ChooseColor.vue'
import TestVlife from './TestVlife.vue'
export default {
    //2.注册组件
    components: {
        Aside,
        NavTitle,
        NavTab,
        GroupGoods,
        Footer,
        GroupList,
        GoodsManage,
        UpDataTest,
        ModifyGoods,
        ChooseColor,
        TestVlife
    },

    data() {
        return {
            showModifyPage: 'GoodsManage',//显示哪个页面
            curRow: {}, //用于保存子页面传过来的商品对象
            comPage: 'TestVlife'
        }
    },
    methods: {
        showModifyMethod(row) {
            // console.log(111,row);
            // this.showModifyPage = 'ModifyGoods'
            this.comPage='ModifyGoods'
            this.curRow = row//修改前的数据用于传到修改页面
        },
        upRow(newRow) {
            // this.showModifyPage = 'GoodsManage'
            this.comPage='GoodsManage'
            this.curRow = Object.assign({}, newRow)//修改后的数据用于传到显示页面
        },
        changePage(comPage) {
            this.comPage = comPage
            // console.log(comPage,this.comPage);
        }
    }
}
</script>

<style lang="scss" scoped>
.allContent {
    display: flex;
    background-color: #f5f5f5;
}



.container {
    width: 100vw;
    //height: 100vh;
    box-sizing: border-box;
    //padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d3d3d3;
    //position: relative;




}
</style>