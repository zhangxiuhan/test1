<template>
    <div class="allContent">
        <!-- 侧边导航 -->
        <Aside></Aside>

        <!-- 主内容 -->
        <div class="container">
            <!-- 顶部标题 -->
            <NavTitle></NavTitle>
            <!-- 切换标签 -->
            <NavTab></NavTab>

            <!-- 统计 -->
            <!-- <Stats></Stats> -->

            <!-- 拼团列表 -->
            <GroupList></GroupList>

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
import Footer from '@/components/Footer.vue'
import GroupList from '@/components/GroupList.vue'
import Stats from '@/components/Stats.vue'

export default {
    //2.注册组件
    components: {
        Aside,
        NavTitle,
        NavTab,
        GroupGoods,
        Footer,
        GroupList,
        Stats
    },
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d3d3d3;
    position: relative;




}
</style>