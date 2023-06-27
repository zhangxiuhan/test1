<template>
    <!-- 详情弹窗 -->
    <div class="dailog" v-show="isShowMe">
        <div class="mask">
            <div class="ifo">
                <img src="@/assets/images/关闭.png" alt=""
                    style="width: 20px; position:absolute;top: 5px; right:5px" @click="closeAdd">
                    <div class="title">
                        <div style="margin-left: 20px;">{{title}}</div>
                    </div>
                    <div class="content" style="height:100%">
                        <!-- 定义匿名插槽、传参到父组件 -->
                        <!-- 在子组件中通过动态绑定属性的方式来进行传参 -->
                        <slot :a="0" :b="'111'"></slot>
                    </div>
                    <div class="footer">
                        <!-- 定义具名插槽、传参到父组件 -->
                        <slot name="butt" :c="'传参到父组件'"></slot>
                    </div>
                
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        props: {
            isShowMe: {
                type: Boolean,
                default: false
            },
            title:{
                type:String,
                default:''
            }
        },
        methods:{
            closeAdd(){
                this.$emit('closeMe')
            }
        }
    }
</script>

<style lang="scss" scoped>
.dailog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .mask {
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ifo {
        width: 50%;
        height: 50%;
        border-radius: 5px;
        background-color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #ccc;
            line-height: 40px;
        }
        .content{
            width: 100%;
        }
        .footer{
            width: 100%;
            height: 40px;
            border-top: 1px solid #ccc;
            line-height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>