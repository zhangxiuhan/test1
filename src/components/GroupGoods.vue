<template>
    <!-- 拼团商品 -->
    <div class="main">
        <div class="center">
            <!-- 搜索相关 -->
            <div class="iput">
                <div class="item">
                    <span>拼团状态：</span>
                    <select name="" id="">
                        <option value="">开启</option>
                        <option value="">关闭</option>
                    </select>
                </div>

                <div class="item">
                    <span>拼团状态：</span>
                    <select name="" id="">
                        <option value="">开启</option>
                        <option value="">关闭</option>
                    </select>
                </div>
            </div>
            <!-- 导出 -->
            <div class="button">
                <button style="margin-right: 20px;">导出</button>
                <button @click="showAdd">添加商品</button>
            </div>
            <!-- 商品信息 -->
            <div class="goods">

                <table>
                    <thead>
                        <th >ID</th>
                        <th >拼团图片</th>
                        <th >拼团名称</th>
                        <th >原价</th>
                        <th >拼团价</th>
                        <th >拼团人数</th>
                        <th >参与人数</th>
                        <th >成团数量</th>
                        <th >限量</th>
                        <th >限量剩余</th>
                        <th >结束时间</th>
                        <th >拼团状态</th>
                        <th >操作</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in listGoods" v-bind:key="item.id">
                            <td>{{ item.id }}</td>
                            <td>
                                <img :src="item.img" alt="" style="width:30px;" />
                            </td>
                            <td >{{ item.name }}</td>
                            <td>{{ item.srcPrice | formartMoney }}</td>
                            <td>{{ item.groupPrice }}</td>
                            <td>{{ item.groupCount }}</td>
                            <td>{{ item.finishGroup }}</td>
                            <td>{{ item.joinCount }}</td>
                            <td>{{ item.limitNum }}</td>
                            <td>{{ item.splusCount }}</td>
                            <td>{{ item.endTime | formartDate }}</td>
                            <td>{{ item.status }}</td>
                            <td style="width:100px; color:#1890FF" v-on:click="showDetail(item)">详情</td>
                        </tr>
                    </tbody>
                </table>
                <!-- 详情弹窗 -->
                <div class="dailog" v-if="isShow">
                    <div class="mask">
                        <div class="ifo">
                            <img src="@/assets/images/关闭.png" alt=""
                                style="width: 20px; position:absolute;top: 5px; right:5px" v-on:click="isShow = false">
                            <p>{{ curRow.id }}</p>
                            <p>{{ curRow.name }}</p>
                            <img v-bind:src="curRow.img" alt="" style="width: 30px;">
                        </div>
                    </div>
                </div>

                <!-- 添加商品 -->
                <div class="dailog" v-show="isShowAdd">
                    <div class="mask">
                        <div class="ifo">
                            <img src="@/assets/images/关闭.png" alt=""
                                style="width: 20px; position:absolute;top: 5px; right:5px" v-on:click="isShowAdd = false">

                            <div class="form_line">
                                <span>ID：</span>
                                <input type="text" v-model="addObj.id">
                            </div>
                            <div class="form_line">
                                <span>拼团图片：</span>
                                <input type="text" v-model="addObj.img">
                            </div>
                            <div class="form_line">
                                <span>拼团名称：</span>
                                <input type="text" v-model="addObj.name">
                            </div>
                            <div class="form_line">
                                <span>原价：</span>
                                <input type="number" v-model="addObj.srcPrice">
                            </div>
                            <div class="form_line">
                                <span>拼团价：</span>
                                <input type="number" v-model="addObj.groupPrice">
                            </div>
                            <div class="form_line">
                                <span>拼团人数：</span>
                                <input type="number" v-model="addObj.groupCount">
                            </div>
                            <div class="form_line">
                                <span>参与人数：</span>
                                <input type="number" v-model="addObj.joinCount">
                            </div>
                            <div class="form_line">
                                <span>成团数量：</span>
                                <input type="number" v-model="addObj.finishGroup">
                            </div>
                            <div class="form_line">
                                <span>限量：</span>
                                <input type="number" v-model="addObj.limitNum">
                            </div>
                            <div class="form_line">
                                <span>限量剩余：</span>
                                <input type="number" v-model="addObj.splusCount">
                            </div>
                            <div class="form_line">
                                <span>结束时间：</span>
                                <input type="date" v-model="addObj.endTime">
                            </div>
                            <div class="form_line" style="display: flex;">
                                <span>拼团状态：</span>
                                <RadioControl v-model="addObj.status" radioType="statusOps">

                                </RadioControl >
                                <!-- <div>
                                    <label>
                                        <input type="radio" v-model="addObj.status" :value="0">
                                        已结束
                                    </label>
                                    <label>
                                        <input type="radio" v-model="addObj.status" :value="1">
                                        拼团中
                                    </label>
                                </div> -->
                            </div>
                            <div class="form_line" style="display: flex;">
                                <span>包邮是否：</span>
                                <div>
                                    <SelectControl opType="postTemplate" v-model="addObj.posttemp"></SelectControl>
                                    <!-- <select v-model="addObj.posttemp">
                                        <option>包邮</option>
                                        <option>北上广10元</option>
                                        <option>江浙沪5元</option>
                                    </select> -->

                                </div>
                            </div>

                            <div class="form_line" style="margin-left: 200px;">
                                <button @click="addGood" style="margin-right: 20px;">保存</button>
                                <button @click="isShowAdd = false">取消</button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <!-- 以上为商品信息 -->


            <!-- 分页信息 -->
            <div class="change_page">
                <span>共12页</span>
                <p>20条/页 <img src="@/assets/images/箭头_下.png" alt="" style="width: 20px;"> </p>
                <img src="@/assets/images/向左箭头.png" alt="" style="width: 15px; margin-right:20px">
                <span style="color: #1890FF;">1</span>
                <img src="@/assets/images/向右箭头.png" alt="" style="width: 15px; margin-right:20px">
                <span style="margin-right: 0;">前往</span>
                <input type="text">
                <span>页</span>
            </div>
        </div>


    </div>
</template>

<script>
import SelectControl from './SelectControl.vue'
import RadioControl from './RadioControl.vue'
export default {
    components:{
        SelectControl,
        RadioControl
    },
    data() {
        return {
            isShow: false,
            curRow: {},
            addObj: {
                id: "",
                img: "",//网络图片https://picsum.photos/400/300/?random
                name: "",
                srcPrice: 0,
                groupPrice: 0,
                groupCount: 0,
                joinCount: 0,
                finishGroup: 0,
                limitNum: 0,
                splusCount: 0,
                endTime: "",
                status: '',
                posttemp: '包邮'
            },
            isShowAdd: false,
            listGoods: [
                {
                    id: 1,
                    img: require('@/assets/images/6659df4beaa53283.jpg'),//本地图片
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 0,
                    joinCount: 0,
                    finishGroup: 0,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-30",
                    status: 0,
                    posttemp: '包邮',
                    test: "<span>解析标签<span/>"
                },
                {
                    id: 2,
                    img: "https://picsum.photos/400/300/?random",//网络图片
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 0,
                    joinCount: 0,
                    finishGroup: 0,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-30",
                    status: 0,
                },
                {
                    id: 3,
                    img: "@/assets/images/6659df4beaa53283.jpg",//本地图片必须require
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 0,
                    joinCount: 0,
                    finishGroup: 0,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-30",
                    status: 0,
                },
                {
                    id: 4,
                    img: "",
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 0,
                    joinCount: 4,
                    finishGroup: 8,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-30",
                    status: 0,
                },
            ],
        }
    },
    methods: {
        //展示详情
        showDetail(item) {
            console.log(item);
            this.curRow = item
            this.isShow = true
        },
        showAdd() {
            this.isShowAdd = true
        },

        //添加商品
        addGood() {
            // console.log(this.addObj);
            this.listGoods.push(JSON.parse(JSON.stringify(this.addObj)))
            console.log(this.listGoods);
        }
    },

    created(){
        console.log('创建后');
    }
}
</script>

<style lang="scss" scoped>
//mian
.main {
    width: 100%;
    height: 100%;
    //flex: 1;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #f5f5f5;
    overflow: hidden;

    //overflow-y: scroll;
    //overflow-x: scroll;

    .center {
        width: 100%;

        background-color: #fff;
        margin-top: 10px;
        border: 1px solid #999;
        border-radius: 5px;
    }

    .iput {

        display: flex;
        margin-top: 10px;
        margin-left: 20px;

        .item {
            margin-right: 20px;
        }

        select {
            width: 300px;
            height: 40px;
            outline: none;
            border-radius: 4px;

        }
    }


    .button {
        padding-left: 20px;
        margin-top: 10px;
    }

    .goods {
        //height: 300px;
        //width: 500px;
        padding: 10px;
        box-sizing: border-box;
        overflow-x: scroll;
        overflow-y: scroll;

        //详情弹窗
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
                width: 600px;
                height: 600px;
                border-radius: 5px;
                background-color: white;
                position: relative;
            }


        }

        .form_line {
            margin-bottom: 20px;

            span {
                display: inline-block;
                width: 200px;
                margin-right: 30px;
                text-align: right;
            }

        }
    }

    //商品信息table
    table {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        font-size: 12px;
        border-collapse: separate;
        border-spacing: 0;

        tr {
            width: 100%;
            height: 50px;


        }

        th,
        td {
            padding: 0;
            line-height: 50px;
            border-bottom: 1px solid #050505;

            img {
                display: block;
                margin: 0 auto;

            }

        }

    }


    .change_page {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 40px 0;
        color: #606260;
        font-size: 12px;

        span {
            margin-right: 20px;
            display: flex;

        }

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20px;
            padding: 5px;
            border: 1px solid #999;
            border-radius: 4px;

            img {
                display: block;
                margin-left: 25px;
            }
        }

        input {
            width: 45px;
            height: 28px;
            border: 1px solid #999;
            border-radius: 4px;
        }
    }
}
</style>