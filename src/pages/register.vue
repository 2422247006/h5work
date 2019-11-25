<template>
  <div class="page">
    <p class="p1">繁减肖像馆</p>
    <input type="text" placeholder="请输入您的手机号" class="input" v-model="phone" />
    <input type="text" placeholder="请输入验证码" class="yzm" v-model="code" />
    <span class="get" v-if="btnTitle" :disabled="disabled" @click="getyzm()">{{btnTitle}}</span>
    <div class="submit" @click="login()">登录</div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  name: "register",
  components: {
    [Notify.name]: Notify
  },
  data() {
    return {
      phone: "", //手机号
      code: "", //验证码
      btnTitle: "获取验证码",
      disabled: false, //是否可点击
      errors: {} //验证提示信息
    };
  },
  methods: {
    validateBtn() {
      //倒计时
    },
    getyzm() {
      var that = this;
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          that.disabled = false;
          that.btnTitle = "获取验证码";
        } else {
          that.btnTitle = time + "秒后重试";
          that.disabled = true;
          time--;
        }
      }, 1000);
      that.$axios
        .get(that.$apiUrl + "/api/v1/user/login/verifyCode", {
          params: {
            phone: that.phone
          }
        })
        .then(function(res) {
          console.log(res.data.data);
         
        });
    },
    login() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/user/login/customer", {
          params: {
            phone: that.phone,
            verifyCode: that.code
          }
        })
        .then(function(res) {
          if (res.data.status == "0000") {
          console.log(res.data.data)
           sessionStorage.setItem("userId",res.data.data.id);
            sessionStorage.setItem("userphone",that.phone);
         
            that.$router.push({
        path: "/choice"
      });
          }else{
           
             Notify({
          message: "验证码错误",
          color: "white",
          background: "#ccc",
           duration: 600
        });
          }
        });
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}
.p1 {
  font-size: 1.07rem;
  font-weight: 600;
  color: #16161a;
  text-align: left;
  margin-bottom: 0.5rem;
}
.input {
  width: 100%;
  height: 1.5rem;
  border: none;
  border-bottom: 0.01rem solid rgb(242, 242, 242);
  font-size: 0.4rem;
}
.yzm {
  width: 60%;
  height: 1.5rem;
  border: none;
  border-bottom: 0.01rem solid rgb(242, 242, 242);
  font-size: 0.4rem;
}
.get {
  width: 40%;
  height: 1.5rem;
  border: none;

  font-size: 0.4rem;
  color: #142894;
}
.submit {
  width: 100%;
  margin: 1rem auto;
  height: 1.17rem;
  line-height: 1.17rem;
  text-align: center;
  background-color: #142894;
  border-radius: 0.11rem;
  font-size: 0.4rem;
  font-weight: 400;
  color: white;
  background-image: linear-gradient(90deg, #1769ff, #142894);
  box-shadow: 0 0.16rem 0.37rem -0.05rem rgba(0, 0, 0, 0.2),
    0 0.16rem 0.37rem -0.05rem #1769ff;
}
</style>