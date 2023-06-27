<template>
    <!-- 封装下拉选择 -->
    <div>
        <select @change="changeOp" v-model="changValue">
            <option v-for="item in optionList" :value="item.value">{{item.lable}}</option>
        </select>
    </div>
</template>

<script>
import code from '../comfig/code'
export default {
    props: {
        value: {
            type: [String, Number],
            default: 0
        },
        opType: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            optionList: [],
            changValue: ''
        }
    },

    created() {
        this.optionList = code[this.opType]
    },
    watch: {
        value: {
            handler(newValue, oldValue) {
                this.changValue=newValue
            },
            immediate: true
        }
    },
    methods:{
        changeOp(){
            this.$emit('input',this.changValue)
        }
    }
}
</script>

<style lang="scss" scoped></style>