<template>
  <div class="page">
    <p class="p1">繁简照相馆</p>
    <input type="text" placeholder="请输入您的手机号" class="input" />
    <input type="password" placeholder="请输入验证码" class="yzm" />
    <span class="get" v-if="btnTitle" :disabled="disabled" @click="validateBtn()">{{btnTitle}}</span>
    <div class="submit">登录</div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      phone: "", //手机号
      verifyCode: "", //验证码
      btnTitle: "获取验证码",
      disabled: false, //是否可点击
      errors: {} //验证提示信息
    };
  },
  methods: {
    validateBtn() {
      //倒计时
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "获取验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
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
  border-bottom: 0.01rem solid rgb(242, 242, 242);
  font-size: 0.4rem;
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