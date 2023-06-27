<template>
  <div class="outbg" >
    <!--3.使用组件  -->
    <Login></Login>
    <!-- <Layout></Layout> -->
    <!-- <Laylist></Laylist> -->
  </div>
</template>

<script>
//1.导入组件
import Login from "@/views/Login.vue"
import Layout from "@/views/Layout.vue"
import Laylist from "@/views/Laylist.vue"

export default {
  //2.注册组件
  components: {
    Login,
    Layout,
    Laylist
  }
}
</script>

<style>
body,p,ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

</style>
