<template>
    <div>
        <label v-for="item in radioList">
            <input type="radio" @change="changeStau" v-model="chooseVal" :value="item.value">
            {{ item.lable }}
        </label>
    </div>
</template>

<script>
import code from '@/comfig/code';
export default {
    props: {
        radioType: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            radioList: [],
            chooseVal: ''
        }
    },
    created() {
        this.radioList = code[this.radioType]
    },
    watch: {
        value: {
            handler(nv, ov) {
                this.chooseVal = nv

            },
            immediate: true
        }
    },
    methods: {
        changeStau() {
            this.$emit('input', this.chooseVal)
        }
    }
}
</script>

<style lang="scss" scoped></style>