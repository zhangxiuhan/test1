<template>
    <!-- 拼团商品 -->
    <div class="main">


        {{ RowGoods }}
        <div class="center" v-show="closeMain">
            <!-- 搜索相关 -->
            <div class="iput">
                <div class="classify">
                    <span v-bind:class="{ nowClassify: type == 'sell' }" v-on:click="changeType('sell')">出售中商品({{
                        getTypeNum.sells }})</span>
                    <span v-bind:class="{ nowClassify: type == 'warehouse' }" v-on:click="changeType('warehouse')">仓库中商品({{
                        getTypeNum.warehouses }})</span>
                    <span v-bind:class="{ nowClassify: type == 'sellOut' }" v-on:click="changeType('sellOut')">已经售罄商品({{
                        getTypeNum.sellOuts }})</span>
                    <span v-bind:class="{ nowClassify: type == 'warning' }" v-on:click="changeType('warning')">警戒库存({{
                        getTypeNum.warnings }})</span>
                    <span v-bind:class="{ nowClassify: type == 'recycle' }" v-on:click="changeType('recycle')">商品回收站({{
                        getTypeNum.recycles }})</span>

                </div>

                <div class="item">
                    <span>商品分类：</span>
                    <select name="" id="">
                        <option value="">家用电器</option>
                        <option value="">热门</option>
                    </select>
                    <span>商品搜索：</span>
                    <input type="text">
                </div>

                <div class="operate">
                    <button @click="showAdd">添加商品</button>
                    <button>商品采集</button>
                    <div>导出</div>
                </div>
            </div>
            <!-- 导出 -->

            <!-- 商品信息 -->
            <div class="goods">
                <div class="table">
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>商品图</th>
                            <th>商品名称</th>
                            <th>商品售价</th>
                            <th>销量</th>
                            <th>库存</th>
                            <th>排序</th>
                            <th>添加时间</th>
                            <th>状态</th>

                            <th>操作</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in nowTypeGoods" v-bind:key="item.id">
                                <td style="width: 50px;">{{ item.id }}</td>
                                <td style="width: 80px;">
                                    <img :src="item.image" alt="" style="width:30px;" />
                                </td>
                                <td>{{ item.storeName }}</td>
                                <td style="width:100px;">{{ item.price | formartMoney }}</td>
                                <td style="width:100px;">{{ item.sales }}</td>
                                <td style="width:100px;">{{ item.stock }}</td>
                                <td style="width:100px;">{{ item.sort }}</td>
                                <td>{{ new Date(item.addTime * 1000).toLocaleString().replaceAll('/', '-') }}</td>
                                <td style="width:100px; color:aquamarine">{{ item.status }}</td>


                                <td >
                                    <span style=" color:#1890FF" v-on:click="showDetail(item)">详情</span>
                                    <span @click="showModify(item)"
                                        style="color: blueviolet;backgroundColor:#1890FF;cursor:pointer">组件通讯切修改页面</span>
                                </td>

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

        <!-- 添加商品 -->

        <div class="center center_add" v-show="isShowAdd">
            <div class="dailog" v-show="isShowAdd">

                <div class="ifo" style="margin-left:20% ">
                    <img src="@/assets/images/关闭.png" alt="" style="width: 20px; position:absolute;top: 5px; right:5px"
                        v-on:click="closeAdd">

                    <div class="form_line">
                        <span>ID：</span>
                        <input type="number" v-model="addGood.id">
                    </div>
                    <div class="form_line">
                        <span>商品图：</span>
                        <input type="text" v-model="addGood.image">
                    </div>
                    <div class="form_line">
                        <span>商品名称：</span>
                        <input type="text" v-model="addGood.storeName">
                    </div>
                    <div class="form_line">
                        <span>商品关键字：</span>
                        <input type="text" v-model="addGood.keyword">
                    </div>
                    <div class="form_line">
                        <span>商品简介：</span>
                        <textarea style="width: 200px;height:20px" cols="30" rows="10"
                            v-model="addGood.storeInfo"></textarea>
                    </div>
                    <div class="form_line">
                        <span>单位：</span>
                        <input type="text" v-model="addGood.unitName">
                    </div>
                    <div class="form_line">
                        <span>商品轮播图：</span>
                        <input type="text" v-model="addGood.sliderImage">
                    </div>
                    <div class="form_line">
                        <span>商品售价：</span>
                        <input type="number" v-model="addGood.price">
                    </div>
                    <div class="form_line">
                        <span>销量：</span>
                        <input type="number" v-model="addGood.sales">
                    </div>
                    <div class="form_line">
                        <span>库存：</span>
                        <input type="number" v-model="addGood.stock">
                    </div>
                    <div class="form_line">
                        <span>排序：</span>
                        <input type="number" v-model="addGood.sort">
                    </div>
                    <div class="form_line">
                        <span>添加时间：</span>
                        <input type="number" v-model="addGood.addTime">
                    </div>

                    <div class="form_line" style="display: flex;">
                        <span>状态：</span>
                        <div>
                            <label>
                                <input type="radio" v-model="addGood.status" :value="0">
                                已结束
                            </label>
                            <label>
                                <input type="radio" v-model="addGood.status" :value="1">
                                拼团中
                            </label>
                        </div>
                    </div>

                    <div class="form_line" style="display: flex;">
                        <span>类型：</span>
                        <div>
                            <select v-model="addGood.type">

                                <option value="sell">出售中</option>
                                <option value="warehouse">仓库中</option>
                                <option value="sellOut">售罄</option>
                                <option value="warning">库存警戒</option>
                                <option value="recycle">商品回收站</option>
                            </select>


                        </div>
                    </div>


                    <div class="form_line" style="margin-left: 200px;">
                        <button @click="addGoodCom" style="margin-right: 20px;">保存</button>
                        <button @click="closeAdd">取消</button>

                    </div>

                </div>

            </div>
        </div>



    </div>
</template>

<script>


export default {

    
    // props在子组件中定义自定义属性接收父组件的参数，单向数据流，不允许修改
    props: {
        RowGoods: {
            type: Object,
            default: () => {
                return {}
            }
        }//引用数据类型需要函数return，防止数据污染
    },

    data() {
        return {
            type: 'all',//分类
            isShow: false,//详情开关
            curRow: {},//当前行的对象数据
            isShowAdd: false,
            closeMain: true,
            goods: [
                {
                    "id": 525,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/25/b00ad1905d84418b9e033e444aed5625cetdxrot1w.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "红米k20",//商品名称
                    "storeInfo": "这是一部手机",
                    "keyword": "手机",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "3100.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "部",
                    "sales": 0,//销量
                    "stock": 500,//库存
                    "sort": 5,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'sell'//出售中
                },
                {
                    "id": 527,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/store/2022/08/01/f52f839ffd1e4484bbe31ea7a97c8267183lfmb8ot.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "小米90",//商品名称
                    "storeInfo": "这是一部手机",
                    "keyword": "手机",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "8800.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "部",
                    "sales": 5,//销量
                    "stock": 8800,//库存
                    "sort": 6,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'sell'//出售中
                },
                {
                    "id": 528,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/25/b00ad1905d84418b9e033e444aed5625cetdxrot1w.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "iphone16",//商品名称
                    "storeInfo": "这是一部手机",
                    "keyword": "手机",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "7900.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "部",
                    "sales": 88,//销量
                    "stock": 1400,//库存
                    "sort": 9,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'warehouse'//仓库中
                },
                {
                    "id": 521,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/01/12/80f48f0e0a8c4ddc96c13f1f8f18aeacp0xcof4qs6.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "豆浆机",//商品名称
                    "storeInfo": "豆浆机",
                    "keyword": "豆浆机",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "450.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "台",
                    "sales": 64,//销量
                    "stock": 200,//库存
                    "sort": 11,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'warehouse'//仓库中
                },
                {
                    "id": 533,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/01/12/80f48f0e0a8c4ddc96c13f1f8f18aeacp0xcof4qs6.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "兔子",//商品名称
                    "storeInfo": "兔子",
                    "keyword": "兔子",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "50.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "只",
                    "sales": 64,//销量
                    "stock": 0,//库存
                    "sort": 18,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 1,
                    "type": 'sellOut'//售罄
                },
                {
                    "id": 532,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/01/12/80f48f0e0a8c4ddc96c13f1f8f18aeacp0xcof4qs6.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "狗",//商品名称
                    "storeInfo": "狗",
                    "keyword": "狗",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "250.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "只",
                    "sales": 85,//销量
                    "stock": 0,//库存
                    "sort": 19,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'sellOut'//售罄
                },
                {
                    "id": 536,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/01/12/80f48f0e0a8c4ddc96c13f1f8f18aeacp0xcof4qs6.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "vivo s88",//商品名称
                    "storeInfo": "vivo s88",
                    "keyword": "vivo s88",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "3550.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "台",
                    "sales": 96,//销量
                    "stock": 0,//库存
                    "sort": 25,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 1,
                    "type": 'sellOut'//售罄
                },
                {
                    "id": 576,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/01/12/80f48f0e0a8c4ddc96c13f1f8f18aeacp0xcof4qs6.jpg",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "vivo x90",//商品名称
                    "storeInfo": "vivo x90",
                    "keyword": "vivo x90",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "4690.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "台",
                    "sales": 150,//销量
                    "stock": 5,//库存
                    "sort": 29,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'warning'//库存警戒
                },
                {
                    "id": 544,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/content/2022/07/01/4bb1732b06b544c1891bdc0d4fc8481eexjlfotphg.png",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "iPhone12",//商品名称
                    "storeInfo": "iPhone12",
                    "keyword": "iPhone12",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "6690.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "台",
                    "sales": 660,//销量
                    "stock": 1,//库存
                    "sort": 7,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'recycle'//商品回收站
                },
                {
                    "id": 548,
                    "merId": 0,
                    "image": "https://api.java.crmeb.net/crmebimage/public/content/2022/07/01/4bb1732b06b544c1891bdc0d4fc8481eexjlfotphg.png",
                    "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                    "storeName": "iPhone16",//商品名称
                    "storeInfo": "iPhone16",
                    "keyword": "iPhone16",
                    "color":'red',
                    "barCode": "",
                    "cateId": "980",
                    "cateValues": "",
                    "price": "8880.00",//商品售价
                    "vipPrice": "0.00",
                    "otPrice": "3000.00",
                    "postage": "0.00",
                    "unitName": "台",
                    "sales": 9990,//销量
                    "stock": 18,//库存
                    "sort": 99,//排序
                    "addTime": 1675390733,//添加时间
                    "isShow": false,
                    "isHot": true,
                    "isBenefit": true,
                    "isBest": false,
                    "isNew": false,
                    "status": 0,
                    "type": 'recycle'//商品回收站
                },

            ],
            addGood: {
                "id": 0,
                "merId": 0,
                "image": "https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/25/b00ad1905d84418b9e033e444aed5625cetdxrot1w.jpg",
                "sliderImage": "[\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/b944736c746044a5a1eed0fe475c8a2fffrj0zj5c0.png\",\"https://api.java.crmeb.net/crmebimage/public/maintain/2023/02/02/45c50ac36017430085b46bf07bc4a543hghmilg9i7.png\"]",
                "storeName": "",//商品名称
                "storeInfo": "这是一部手机",
                "keyword": "手机",
                "color":'red',
                "barCode": "",
                "cateId": "980",
                "cateValues": "",
                "price": 0,//商品售价
                "vipPrice": "0.00",
                "otPrice": "3000.00",
                "postage": "0.00",
                "unitName": "部",
                "sales": 0,//销量
                "stock": 0,//库存
                "sort": 0,//排序
                "addTime": 1675390733,//添加时间
                "isShow": false,
                "isHot": true,
                "isBenefit": true,
                "isBest": false,
                "isNew": false,
                "status": 0,
                "type": 'sell'//出售中
            },
        }
    },
    //书写函数区域
    methods: {
        changeType(chooseType) {
            this.type = chooseType
        },
        //展示详情
        showDetail(item) {
            //this.curRow = item
            //this.isShow = true
        },

        //打开添加商品 
        showAdd() {
            this.isShowAdd = true;
            this.closeMain = false
        },
        //关闭添加商品
        closeAdd() {
            this.isShowAdd = false;
            this.closeMain = true

        },
        //添加确定
        addGoodCom() {
            this.nowTypeGoods.push(JSON.parse(JSON.stringify(this.addGood)))

            this.isShowAdd = false;
            this.closeMain = true
        },

        //组件通讯
        showModify(row) {
            this.$emit('showModify', row)
        }

    },
    created(){
        console.log('商品管理created');
    },
    //计算属性区域
    computed: {


        //计算各类型数量
        getTypeNum() {
            let sells = 0;
            let warehouses = 0;
            let sellOuts = 0;
            let warnings = 0;
            let recycles = 0;
            this.goods.forEach(item => {
                if (item.type == 'sell') {
                    sells++
                } else if (item.type == 'warehouse') {
                    warehouses++
                } else if (item.type == 'sellOut') {
                    sellOuts++
                } else if (item.type == 'warning') {
                    warnings++
                } else if (item.type == 'recycle') {
                    recycles++
                }
            })

            return { sells, warehouses, sellOuts, warnings, recycles }
        },


        //计算当前分类商品
        nowTypeGoods() {
            let result//筛选类型商品数组
            let nowtype//当前类型
            if (this.type == 'all') {
                result = this.goods
                return result
            } else if (this.type == 'sell') {
                nowtype = 'sell'
            } else if (this.type == 'warehouse') {
                nowtype = 'warehouse'
            } else if (this.type == 'sellOut') {
                nowtype = 'sellOut'
            } else if (this.type == 'warning') {
                nowtype = 'warning'
            } else if (this.type == 'recycle') {
                nowtype = 'recycle'
            }
            result = this.goods.filter(item => item.type == nowtype)
            return result
        },



    },
    watch: {
        RowGoods: {
            handler(nv, ov) {
                
                this.goods=this.goods.map(item=>{
                    if (item.id==this.RowGoods.id) {
                        console.log(1);
                       return this.RowGoods
                    }else{
                        return item;
                    }
                })
                console.log(this.goods);
            },
            immediate: true
        },
        
    }

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
    //background-color: #f5f5f5;
    //overflow: hidden;

    overflow-y: scroll;
    overflow-x: hidden;

    //统计


    .center {
        width: 100%;

        background-color: #fff;
        border: 1px solid #999;
        border-radius: 5px;
        margin-top: 20px;
    }

    .iput {

        margin-top: 20px;
        margin-left: 40px;

        //分类
        .classify {
            margin-bottom: 20px;
            border-bottom: 3px solid #606260;
            display: flex;

            span {
                display: block;
                padding-bottom: 10px;
                margin-right: 20px;
                cursor: pointer;
            }

            .nowClassify {
                color: #1890ff;
                border-bottom: 3px solid #1890ff;
            }
        }

        //搜索
        .item {
            display: flex;
            margin-right: 20px;
            margin-bottom: 20px;
            align-items: center;

            span {
                font-size: 14px;
                margin-right: 15px;
            }




            .active {
                background-color: skyblue;
                color: white;
            }



        }

        select {
            width: 300px;
            height: 40px;
            outline: none;
            border-radius: 4px;
            margin-right: 15px;

        }

        input {
            width: 300px;
            height: 40px;
            padding: 0;
            box-sizing: border-box;
            border: 1px solid #999;
            border-radius: 5px;
            outline: none;
        }


        //添加商品、采集
        .operate {
            margin-top: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;

            button {
                margin-right: 15px;
                padding: 9px 15px;
                border: none;
                border-radius: 3px;
                color: white;
            }

            button:nth-child(1) {
                background-color: #1890ff;
            }

            button:nth-child(2) {
                background-color: #13ce66;
            }

            div {
                margin-left: 5px;
                padding: 9px 15px;
                border-radius: 3px;
                border: 1px solid #999;
            }
        }
    }




    .goods {
        // height: 400px;
        max-width: 100%;
        padding: 10px;
        box-sizing: border-box;
        overflow-x: scroll;

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


    }

    .center_add {
        display: flex;
        justify-content: center;
        align-items: center;

        .dailog {
            position: relative;
            width: 100%;
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