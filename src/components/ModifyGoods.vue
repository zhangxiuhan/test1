<template>
    
        <div class="dailog" >

            <div class="ifo" style="margin-left:20% ">
                <!-- <img src="@/assets/images/关闭.png" alt="" style="width: 20px; position:absolute;top: 5px; right:5px"
                    v-on:click="closeAdd"> -->
                    {{ newRow}}
                <div class="form_line">
                    <span>ID：</span>
                    <input type="number" v-model="newRow.id">
                </div>
                <div class="form_line">
                    <span>商品图：</span>
                    <input type="text" v-model="newRow.image">
                </div>
                <div class="form_line">
                    <span>商品名称：</span>
                    <input type="text" v-model="newRow.storeName">
                </div>
                <div class="form_line">
                    <span>商品关键字：</span>
                    <input type="text" v-model="newRow.keyword">
                </div>
                <div class="form_line" style="display: flex;">
                    <span>商品颜色：</span>
                    <ChooseColor v-model="newRow.color" ></ChooseColor>
                    
                </div>
                <div class="form_line">
                    <span>商品简介：</span>
                    <textarea style="width: 200px;height:20px" cols="30" rows="10"
                        v-model="newRow.storeInfo"></textarea>
                </div>
                <div class="form_line">
                    <span>单位：</span>
                    <input type="text" v-model="newRow.unitName">
                </div>
                <div class="form_line">
                    <span>商品轮播图：</span>
                    <input type="text" v-model="newRow.sliderImage">
                </div>
                <div class="form_line">
                    <span>商品售价：</span>
                    <input type="number" v-model="newRow.price">
                </div>
                <div class="form_line">
                    <span>销量：</span>
                    <input type="number" v-model="newRow.sales">
                </div>
                <div class="form_line">
                    <span>库存：</span>
                    <input type="number" v-model="newRow.stock">
                </div>
                <div class="form_line">
                    <span>排序：</span>
                    <input type="number" v-model="newRow.sort">
                </div>
                <div class="form_line">
                    <span>添加时间：</span>
                    <input type="number" v-model="newRow.addTime">
                </div>

                <div class="form_line" style="display: flex;">
                    <span>状态：</span>
                    <RadioControl v-model="newRow.status" radioType="statusOps">

                    </RadioControl >
                    <!-- <div>
                        <label>
                            <input type="radio" v-model="newRow.status" :value="0">
                            已结束
                        </label>
                        <label>
                            <input type="radio" v-model="newRow.status" :value="1">
                            拼团中
                        </label>
                    </div> -->
                </div>

                <div class="form_line" style="display: flex;">
                    <span>类型：</span>
                    <SelectControl opType="typeTemplate" v-model="newRow.type"></SelectControl>
                        <!-- <select v-model="newRow.type">

                            <option value="sell">出售中</option>
                            <option value="warehouse">仓库中</option>
                            <option value="sellOut">售罄</option>
                            <option value="warning">库存警戒</option>
                            <option value="recycle">商品回收站</option>
                        </select> -->


                    
                </div>


                <div class="form_line" style="margin-left: 200px;">
                    <button @click="addGoodCom" style="margin-right: 20px;">保存</button>
                    <button >取消</button>

                </div>

            </div>

        </div>
   
</template>

<script>

import ChooseColor from '@/components/ChooseColor.vue'
import SelectControl from './SelectControl.vue'
import RadioControl from './RadioControl.vue'
export default {
    components:{
        ChooseColor,
        SelectControl,
        RadioControl
    },
    //props在子组件中定义自定义属性接收父组件的参数，单向数据流，不允许修改
    props: {
        rowGoods: {
            type: Object,
            default: () => {
                return {

                }
            }//引用数据类型需要函数return，防止数据污染
        },
        msg:String,
        count:{
            type:Number,
            default:0
        },
        sex:{
            type:[String,Number],//数据类型为字符串或者数字
            default:'男'

        }
    },

    data() {
        return {
            newRow:Object.assign({},this.rowGoods)
        }
    },

    methods:{
        //添加确定
        addGoodCom() {
           this.$emit('upRow',this.newRow)

            
        },
        
    }
}
</script>

<style lang="scss" scoped>


    .dailog {
        position: relative;
        width: 100%;
        background-color: #fff;

        //height: 100vh;

    }

    .ifo {
        span {
            display: inline-block;
            width: 200px;
            margin-right: 20px;
            text-align: right;
        }
    }

</style>