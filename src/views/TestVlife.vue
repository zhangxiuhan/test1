<template>
    <div id="life">
        生命周期{{ key }}
        <button @click="key=1">修改数据</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: 'value'
            }
        },

        beforeCreate(){
            console.log('创建阶段创建前',document.querySelector('#life'));
        },
        created(){
            console.log('创建阶段创建后',document.querySelector('#life'));
        },
        beforeMount(){
            console.log('挂载阶段挂载前',document.querySelector('#life'));
        },
        mounted(){
            console.log('挂载阶段挂载后',document.querySelector('#life'));
        },
        beforeUpdate(){
            console.log('更新阶段更新前',document.querySelector('#life'));
        },
        updated(){
            console.log('更新阶段更新后',document.querySelector('#life'));
        },
        beforeDestroy(){
            console.log('销毁阶段销毁前',document.querySelector('#life'));
        },
        destroyed(){
            console.log('销毁阶段销毁后',document.querySelector('#life'));
        }
    }
</script>

<style lang="scss" scoped>

</style>