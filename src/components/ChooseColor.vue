<template>
    <div class="mian">
        <div class="box" @click="isShowColorBar" >
            <div class="colorShow" :style="{backgroundColor:bgColor}">
                <img src="@/assets/images/箭头_下.png" alt="">
            </div>
        </div>
        <ColorBar v-show="showColorBar" @isChooseColor="isChooseColor"></ColorBar>
    </div>
</template>

<script>
    import ColorBar from "@/components/ColorBar.vue";
    export default {
        components:{
            ColorBar
        },
        // props:['value'],
        props:{
            defaultColor:String,
            value:String
        },
        data(){
            return{
                showColorBar:false,
                bgColor:this.value
            }
        },
        methods: {
            isShowColorBar() {
                this.showColorBar=!this.showColorBar
            },
            isChooseColor(color){
               this. bgColor=color
               this.showColorBar=!this.showColorBar
            //    console.log(bgColor);
            this.$emit('input',color)
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.mian{
    position: relative;
   .box{
    
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    padding: 3px;
    border: 1px solid #837d7d;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    .colorShow{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 15px;
        height: 15px;
    }
   }

   
}
</style>