<template>
    <div class="colorBar" @click="choose">
        <div class="colors" style="background-color: red;">1</div>
        <div class="colors" style="background-color: yellow;">2</div>
        <div class="colors" style="background-color: blue;">3</div>
    </div>
</template>

<script>
    export default {
     
        
        methods:{
            choose(e){
                if (e.target.getAttribute('class')=='colors') {
                    let color =e.target.style.backgroundColor
                    this.$emit('isChooseColor',color)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.colorBar{
    position: absolute;
    width: 300px;
    height: 200px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 5px;
    display: flex;
    
    .colors{
        flex: 1;
        height: 100%;
        
    }
   }
</style>