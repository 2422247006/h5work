<template>
  <div class="page">
    <div class="header">
      <div class="head" @click="loginhehe()"></div>
      <p class="p3" v-if="login">吴亦凡</p>
      <p class="p3" v-else  >登录/注册</p>
      <p class="p1">生活需要仪式感</p>
    </div>
    <div class="yellow"></div>
    <ul>
      <li @click="infoclick">
        <img src="@/assets/icon/my1.png" alt class="icon" />
        <p class="p2">个人资料</p>
        <img src="@/assets/icon/jump.png" alt class="jump" />
      </li>
      <li @click="passwordclick">
        <img src="@/assets/icon/my2.png" alt class="icon" />
        <p class="p2">修改密码</p>
        <img src="@/assets/icon/jump.png" alt class="jump" />
      </li>
      <li @click="agreeclick">
        <img src="@/assets/icon/my3.png" alt class="icon" />
        <p class="p2">预约协议</p>
        <img src="@/assets/icon/jump.png" alt class="jump" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my",
  methods: {
    infoclick() {
      this.$router.push({
        path: "/info"
      });
    },
    passwordclick() {
      this.$router.push({
        path: "/password"
      });
    },
    agreeclick() {
      this.$router.push({
        path: "/agree"
      });
    },
    // login(){
    //   alert('123')
    //  sessionStorage.setItem("token", '2');　
    // }
    loginhehe(){
      alert(123)
      sessionStorage.setItem("token", '2');　
    }
  },
  created() {
    console.log(sessionStorage.getItem("token"))
    if (sessionStorage.getItem("token")==null) {
      this.login = false;
    } else {
      this.login = true;
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 4.5rem;
  background-color: #142894;
  background-image: linear-gradient(90deg, #1769ff, #142894);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.head {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: white;
}
.yellow {
  width: 100%;
  height: 0.2rem;
  background-color: yellow;
  background-image: linear-gradient(90deg, #ffd417, #948714);
}
.p1 {
  font-size: 0.43rem;
  color: #fff;
}
.p3 {
  margin-top: 0.2rem;
  font-size: 0.5rem;
  color: #fff;
}
ul {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 5rem;
  background: rgb(237, 237, 237);
}
li {
  width: 100%;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.37rem;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
  border-radius: 0.11rem;
}
.p2 {
  font-size: 0.45rem;
  font-weight: 400;
  color: #45454d;
  flex: 1;
  margin-left: 0.3rem;
}
.icon {
  width: 0.7rem;
  height: 0.6rem;
}
.jump {
  width: 0.5rem;
  height: 0.5rem;
}
</style>