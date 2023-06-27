<template>
    <!-- 拼团商品 -->
    <div class="main">


        <!-- 统计 -->
        <!-- <Stats></Stats> -->
        <div class="stats">
            <div class="item">
                <div class="stat_box">
                    <img src="" alt="">
                    <div class="right">
                        <p>参与人数</p>
                        <h3>{{ getJoinCount }}</h3>
                    </div>
                </div>

                <div class="stat_box">
                    <img src="" alt="">
                    <div class="right">
                        <p>成团数量（个）</p>
                        <h3>{{ getGroupCount }}</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="center">
            <!-- 搜索相关 -->
            <div class="iput">
                <div class="item">
                    <span>时间选择：</span>
                    <div class="days">
                        <table>
                            <td style="border: none;" v-bind:class="{ active: 0 == num }" v-on:click="changeDay(0)">全部</td>
                            <td v-bind:class="{ active: 1 == num }" v-on:click="changeDay(1)">今天</td>
                            <td v-bind:class="{ active: 2 == num }" v-on:click="changeDay(2)">昨天</td>
                            <td v-bind:class="{ active: 3 == num }" v-on:click="changeDay(3)">最近7天</td>
                            <td v-bind:class="{ active: 4 == num }" v-on:click="changeDay(4)">最近30天</td>
                            <td v-bind:class="{ active: 5 == num }" v-on:click="changeDay(5)">本月</td>
                            <td v-bind:class="{ active: 6 == num }" v-on:click="changeDay(6)">本年</td>
                        </table>
                    </div>
                    <input type="date" name="" id="">
                </div>

                <div class="item">
                    <span>拼团状态：</span>
                    <select name="" id="">
                        <option value="">开启</option>
                        <option value="">关闭</option>
                    </select>
                </div>
                <button v-on:click="addGoods()">添加商品</button>
            </div>
            <!-- 导出 -->

            <!-- 商品信息 -->
            <div class="goods">
                <div class="table">
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>拼团图片</th>
                            <th>拼团名称</th>
                            <th>原价</th>
                            <th>拼团价</th>
                            <th>拼团人数</th>
                            <th>参与人数</th>
                            <th>成团数量</th>
                            <th>限量</th>
                            <th>限量剩余</th>
                            <th>结束时间</th>
                            <th>拼团状态</th>
                            <th>操作</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in newGoodList" v-bind:key="item.id">
                                <td>{{ item.id }}</td>
                                <td>
                                    <img :src="item.img" alt="" style="width:30px;" />
                                </td>
                                <td>
                                    {{ item.name }}</td>
                                <td>{{ item.srcPrice | formartMoney }}</td>
                                <td>{{ item.groupPrice }}</td>
                                <td>{{ item.groupCount }}</td>
                                <td>{{ item.joinCount }}</td>
                                <td>{{ item.finishGroup }}</td>
                                <td>{{ item.limitNum }}</td>
                                <td>{{ item.splusCount }}</td>
                                <td>{{ item.endTime | formartDate }}</td>
                                <td>{{ item.status }}</td>

                                <td style=" color:#1890FF" v-on:click="showDetail(item)">详情</td>
                            </tr>
                        </tbody>
                    </table>

                    

                </div>
            </div>
            <!-- 以上为商品信息 -->

            <DaiLog v-bind:isShowMe="showAdd" title="添加商品"  @closeMe="showAdd=false">
                <!-- 在父组件中将插槽的内容传入到子组件 -->
                <!-- 在父组件中通过作用域插槽的关键字来接收参数 -->
                <template slot-scope="vscope">
                    <div>
                        <div>商品名：</div>
                        <input type="text">
                        <br>
                        {{ vscope }}
                        <br>
                        {{ vscope.b }}
                    </div>
                </template>
                <template slot="butt" slot-scope="vscope">
                    <button>保存</button>
                    <button>取消</button>
                    {{ vscope.c }}
                </template>
            </DaiLog>

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

import Stats from '@/components/Stats.vue'
import DaiLog from '@/components/DaiLog.vue'
export default {

    components: {
        Stats,
        DaiLog
    },
    data() {
        return {
            num: 0,//日期选择
            isShow: false,//详情开关
            curRow: {},//当前行的对象数据
            listGoods: [
                {
                    id: 1,
                    img: require('@/assets/images/6659df4beaa53283.jpg'),//本地图片
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: "1888.00",
                    groupPrice: 239,
                    groupCount: 1,
                    joinCount: 0,
                    finishGroup: 0,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-15",
                    status: 0,

                    test: "<span>解析标签<span/>"
                },
                {
                    id: 2,
                    img: "https://picsum.photos/400/300/?random",//网络图片
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 2391.00,
                    groupPrice: 2392.00,
                    groupCount: 2,
                    joinCount: 2,
                    finishGroup: 0,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-15",
                    status: 0,
                },
                {
                    id: 3,
                    img: "@/assets/images/6659df4beaa53283.jpg",//本地图片必须require
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 3,
                    joinCount: 0,
                    finishGroup: 0,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-16",
                    status: 0,
                },
                {
                    id: 4,
                    img: "",
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 4,
                    joinCount: 4,
                    finishGroup: 8,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-16",
                    status: 0,
                },
                {
                    id: 5,
                    img: "",
                    name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
                    srcPrice: 239,
                    groupPrice: 239,
                    groupCount: 4,
                    joinCount: 4,
                    finishGroup: 8,
                    limitNum: 9999,
                    splusCount: 9999999,
                    endTime: "2023-06-16",
                    status: 0,
                },
            ],

            showAdd:false//开关添加商品弹窗
        }
    },
    //书写函数区域
    methods: {
        changeDay(pos) {
            this.num = pos
        },

        //展示详情
        showDetail(item) {
            console.log(item);
            this.curRow = item
            this.isShow = true
        },

        addGoods() {
            // for (let i = 0; i < 100; i++) {
            //     this.newGoodList.push(
            //         {
            //             id: i + 6,
            //             img: "https://picsum.photos/400/300/?random",//网络图片
            //             name: "安踏创2.5丨运动鞋男2023夏季专业跑步鞋透气舒适轻便缓震男鞋 白/魅力紫/火龙紫-3 8.5(男4",
            //             srcPrice: 2391.00,
            //             groupPrice: 2392.00,
            //             groupCount: 2,
            //             joinCount: 2,
            //             finishGroup: 0,
            //             limitNum: 9999,
            //             splusCount: 9999999,
            //             endTime: "2023-06-15",
            //             status: 0,
            //         }
            //     )
            // }
            // this.$nextTick(() => {
            //     window.scrollTo(0, document.body.scrollHeight);
            // })

            this.showAdd=true
                
        },//打开添加商品弹窗

    },
    created(){
        console.log('拼团列表created');
    },
    //计算属性区域
    computed: {
        //函数表现形式
        getJoinCount() {
            let sum = 0
            for (let item of this.newGoodList) {
                sum += item.joinCount
            }
            return sum
        },

        //对象表达形式
        getGroupCount: {
            get() {
                let sum = 0
                for (let item of this.newGoodList) {
                    sum += item.finishGroup
                }
                return sum
            }
        },

        //计算日期获取指定日期的商品信息
        newGoodList() {
            let result = [];//要返回的商品数组
            let chooseTime//选择的日期
            if (0 == this.num) {
                result = this.listGoods;
                return result
            } else if (1 == this.num) {
                //求出今天的日期
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                };
                let date = now.getDate();
                if (date < 10) {
                    date = '0' + date;
                };
                chooseTime = year + '-' + month + '-' + date
                // console.log(chooseTime);

            } else if (2 == this.num) {
                //求出昨天的日期
                let now = new Date();
                let year = now.getFullYear();
                now.setDate(now.getDate() - 1)//设置日减一
                let month = now.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                };
                let date = now.getDate();
                if (date < 10) {
                    date = '0' + date;
                };
                chooseTime = year + '-' + month + '-' + date
                // console.log(chooseTime);

            }
            result = this.listGoods.filter(item => item.endTime == chooseTime)
            return result
        }

    },

    // 定义过滤器演示，需要创建filter文件夹，在main.js引入filter全局注册过滤器
    // filters: {
    //     //金额格式化
    //     formartMoney(val) {
    //         if(!val){
    //             return ''
    //         };
    //         const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    //         return String(val).replace(regex, "$1,");
    //     },

    //     //日期格式化
    //     formartDate(val, formart) {
    //         if(!val){
    //             return ''
    //         };
    //         //formart格式规则 
    //         if ('xxxx.mm.dd'==formart) {
    //             let tempArray = val.split('-');
    //             return tempArray[0] + '.' + tempArray[1] + '.' + tempArray[2];

    //         } else {
    //             let tempArray = val.split('-');
    //             return tempArray[0] + '年' + tempArray[1] + '月' + tempArray[2]+ '日';
    //         }
    //     }
    // }

}
</script>

<style lang="scss" scoped>
//mian
.main {
    width: 100%;
    //height: 100%;
    max-height: 650px;
    flex: 1;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #f5f5f5;
    //overflow: hidden;
    //overflow-y: scroll;
    //overflow-x: hidden;
    //overflow-x: scroll;

    //统计
    .stats {
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;

        .item {
            margin: 0 0 20px;
            padding: 0 10px;
            display: flex;
        }

        .stat_box {
            padding: 25px;
            display: flex;
            //flex: 1;

            img {
                width: 50px;
                height: 50px;
                display: block;
                margin-right: 20px;
            }

            p {
                font-size: 14px;
            }

            h3 {
                padding: 3px 0 0 0;
                margin: 0;
                font-size: 28px;
                line-height: 28px;
            }
        }
    }

    .center {
        width: 100%;

        background-color: #fff;
        border: 1px solid #999;
        border-radius: 5px;
    }

    .iput {

        margin-top: 20px;
        margin-left: 40px;

        .item {
            display: flex;
            margin-right: 20px;
            margin-bottom: 20px;
            align-items: center;

            span {
                font-size: 14px;
            }


            .days {
                border: 1px solid #999;
                border-radius: 5px;
                margin-right: 20px;

            }

            .active {
                background-color: skyblue;
                color: white;
            }

            table {
                font-size: 12px;
                line-height: 12px;
                border-collapse: collapse;
                border-spacing: 0;


                tr {
                    border-radius: 5px;
                }

                td {
                    cursor: pointer;
                    height: 32px;
                    box-sizing: border-box;
                    padding: 9px 15px;
                    border-left: 1px solid #999;
                }
            }

            input {
                width: 250px;
                height: 32px;
                padding: 0;
                box-sizing: border-box;
                border: 1px solid #999;
                border-radius: 5px;
                outline: none;
            }
        }

        select {
            width: 300px;
            height: 40px;
            outline: none;
            border-radius: 4px;

        }
    }




    .goods {
        // height: 400px;
        max-width: 100%;
        padding: 10px;
        box-sizing: border-box;

    }

    //商品信息table
    .table {
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
                width: 400px;
                height: 400px;
                border-radius: 5px;
                background-color: white;
                position: relative;
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