<template>
    <div class="loginBackground">
        <div class="content">
            <img src="@/assets/left_icon.jpg" alt="" class="leftImg">
            <div class="rightItems">
                <img src="@/assets/login_log.png" alt="">
                <input type="text" ref="username">
                <input type="password" ref="userpass" @keyup.enter="toLogin">
                <div class="codes">
                    <input type="text" id="code" >
                    <span></span>
                </div>
                <div class="notice" style="color:red" v-text="msg">
                    
                </div>
                <button v-on:click.prevent="toLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
           return {
            msg:''
           }
        },
        
        methods:{
            toLogin(){
                //this.$refs.username通过vue的refs获取标签
                if('zhangsan'==this.$refs.username.value&&'123'==this.$refs.userpass.value){
                    console.log('登陆成功');
                    this.msg=''
                }else{
                    this.msg='用户名密码有误！'
                }
            }
        }
    }
</script>

<style lang="scss">
.loginBackground{
    
    width: 100vw;
    height: 100vh;
    margin: 0;
    background: url('@/assets/login_bg.jpg');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        display: none;
        width: 600px;
        height: 400px;
        background-color: rgb(255, 255, 255);
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        .leftImg{
            width: 250px;
            height: 100%;
        }
        .rightItems{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 270px;
                height: 74px;
                display: block;
                padding: 20px 0;
            }
            input{
                margin-bottom: 22px;
                box-sizing: border-box;
                width: 300px;
                height: 35px;
                border-radius: 5px;
                border: 1px solid #999;
                outline: none;
            }
            .codes{
                display: flex;
                #code{
                    width: 220px;
                }

                span{
                    display: block;
                    width: 80px;
                    height: 35px;
                    background-color: palegreen;
                }
            }
            button{
                background-color: #1890ff;
                color: #fff;
                width: 300px;
                height: 35px;
                border: none;
                border-radius: 5px;
            }

        }
    }
    


  }


</style>