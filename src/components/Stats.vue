<template>
    <div class="stats">
        <div class="item">
            <div class="stat_box">
                <img src="" alt="">
                <div class="right">
                    <p>参与人数</p>
                    <h3>106</h3>
                </div>
            </div>
            
            <div class="stat_box">
                <img src="" alt="">
                <div class="right">
                    <p>成团数量（个）</p>
                    <h3>14</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.stats {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;

    .item {
        margin: 0 0 20px;
        padding: 0 10px;
        display: flex;
    }

    .stat_box{
        padding: 25px;
        display: flex;
        flex: 1;

        img{
            width: 50px;
            height: 50px;
            display: block;
            margin-right: 20px;
        }
        p{
            font-size: 14px;
        }
        h3{
            padding: 3px 0 0 0;
            margin: 0;
            font-size: 28px;
            line-height: 28px;
        }
    }
}
</style>