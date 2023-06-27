<template>
    <div>

        <div>
            对象：{{ userObj }}
            <button v-on:click="delUserId"> 删除对象name</button>
            <button v-on:click="addUserGender"> 增加对象gender</button>
        </div>
        <div>
            数组：{{ userArr }}
            <button v-on:click="upArr"> 修改数组</button>
            <button v-on:click="upArrOName"> 修改数组中对象的属性值</button>
            <button v-on:click="addOneToArr"> 增加数据进数组</button>
            <button v-on:click="delZeroForUserArr">删除数组第一个</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

            userObj: {
                name: '张三',
                age: 18
            },

            userArr: [
                {
                    name: '老刘',
                    age: 19
                },
                {
                    name: '小x',
                    age: 25
                },
            ]
        }
    },
    methods: {
        delUserId() {
            delete this.userObj.name
            console.log(this.userObj);

            // this.$delete(this.userObj, 'name')

            // delete this.userObj.name
            // this.userObj=JSON.parse(JSON.stringify(this.userObj))


            // delete this.userObj.name
            // this.userObj={...this.userObj}

            // delete this.userObj.name
            // this.userObj=Object.assign({},this.userObj)

        },
        addUserGender() {
            //  this.userObj.Gender='man'

            // this.userObj.Gender='man'
            // this.userObj=JSON.parse(JSON.stringify(this.userObj))

            this.$set(this.userObj, 'Gender', 'man')

            // this.userObj=Object.assign({},this.userObj,{Gender:'man'})
        },
        upArr() {
            this.userArr = [
                {
                    name: '瘪三',
                    age: 22
                }
            ]
        },
        upArrOName() {
            this.userArr[0].name = '老六'
        },
        addOneToArr() {
            // this.userArr[2]={
            //     name:'瘪四',
            //     age:22
            // }

            this.userArr.push({
                name: '瘪四',
                age: 22
            })

            // this.$set(this.userArr,2,{
            //         name:'瘪w',
            //         age:22
            //     })

            
            // this.userArr=[...this.userArr,{
            //     name:'瘪四',
            //     age:22
            // }]

            // this.userArr[2]={
            //     name:'瘪四',
            //     age:22
            // };
            // this.userArr=Object.assign([],this.userArr)


            // this.userArr[2]={
            //     name:'瘪四',
            //     age:22
            // };
            // this.userArr=JSON.parse(JSON.stringify(this.userArr))
        },

        delZeroForUserArr(){
            // this.userArr.splice(0,1)
            // console.log(this.userArr);


            delete this.userArr[0]
            console.log(this.userArr);
        }





    },
}
</script>

<style lang="scss" scoped></style>