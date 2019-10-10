<template>
  <div class="page">
    <div class="month">
      <span class="span col">今天10月13日</span>
      <span class="span">明天10月14日</span>
      <span class="span">星期日10月15日</span>
      <span class="span">星期日10月16日</span>
      <span class="span">星期日10月17日</span>
      <span class="span">星期日10月18日</span>
      <span class="span">星期日10月19日</span>
      <span class="span">其他日期</span>
    </div>
    <div class="con">
      <div class="am">
        <p class="p1">上午时段</p>
        <ul class="amlist">
          <li class="red">10:00</li>
          <li class="gary">10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
        </ul>
      </div>
      <div class="am">
        <p class="p1">下午时段</p>
        <ul class="amlist">
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
        </ul>
      </div>
      <div class="am">
        <p class="p1">晚上时段</p>
        <ul class="amlist">
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
          <li>10:00</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div style="t">
        <div class="top" @click="busclick">
          <img src="@/assets/icon/wz.png" class="icon" />
          <p class="p2">长春卓展店</p>
          <img src="@/assets/icon/jump.png" class="icon" />
        </div>
      </div>
      <p class="p3">若无合适时间可切换门店看看哦~</p>
      <p class="submit" @click="orderclick">确定</p>
    </div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '40%',padding:'0.37rem',boxSizing:'border-box'}"
    >
      <div class="bus">
        <p class="p">
          <span class="s1">长春卓展店</span>
          <span class="s2">距离5.23km</span>
        </p>
        <p class="p5">吉林省长春市朝阳区长春卓展购物中心C座 4层（斐乐旁）</p>
        <p class="p6">当天8时段可约</p>

        <a href="tel: 1688888888" class="btn">
          <img src="@/assets/icon/tel.png" class="tel" />
        </a>
      </div>
      <div class="bus">
        <p class="p">
          <span class="s1">长春卓展店</span>
          <span class="s2">距离5.23km</span>
        </p>
        <p class="p5">吉林省长春市朝阳区长春卓展购物中心C座 4层（斐乐旁）</p>
        <p class="p6">当天8时段可约</p>
        <a href="tel: 1688888888" class="btn">
          <img src="@/assets/icon/tel.png" class="tel" />
        </a>
      </div>
      <div class="bus">
        <p class="p">
          <span class="s1">长春卓展店</span>
          <span class="s2">距离5.23km</span>
        </p>
        <p class="p5">吉林省长春市朝阳区长春卓展购物中心C座 4层（斐乐旁）</p>
        <p class="p6">当天8时段可约</p>
        <a href="tel: 1688888888" class="btn">
          <img src="@/assets/icon/tel.png" class="tel" />
        </a>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from "vant";
export default {
  name: "time",
  components: {
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    busclick() {
      this.show = true;
    },
    orderclick(){
      this.$router.push({
        path: "/order"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
}
.month {
  width: 100%;
  height: 1.17rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background: #fff;
  padding: 0 0.37rem;
  box-sizing: border-box;
}
.span {
  font-size: 0.32rem;
  font-weight: 400;
  color: #919199;
  white-space: nowrap;
  margin-right: 0.3rem;
}
.col {
  font-size: 0.4rem;
  font-weight: 700;
  color: #16161a;
  line-height: 1rem;
  border-bottom: 0.05rem solid #1769ff;
}
.con {
  width: 100%;
  padding-top: 1.17rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 3.5rem;
}
.p1 {
  width: 100%;
  height: 1rem;
  font-size: 0.4rem;
  font-weight: 700;
  line-height: 1rem;
  color: #181818;
}
.am {
  margin-top: 0.3rem;
}
.amlist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.21rem 0.1rem;
  overflow: hidden;
  background: #fff;
  border-radius: 0.16rem;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}
li {
  width: 20%;
  height: 0.8rem;
  font-size: 0.4rem;
  font-weight: 400;
  line-height: 0.8rem;
  color: #16161a;
  text-align: center;
}
.red {
  background: #f0024a;
  color: white;
  border-radius: 0.11rem;
  box-shadow: 0 0.11rem 0.19rem -0.08rem #e21955;
}
.gary {
  color: #ddd;
}
.footer {
  width: 100%;
  padding: 0.37rem;
  box-sizing: border-box;
  box-shadow: 0 -0.05rem 0.11rem 0 rgba(0, 0, 0, 0.08);
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.p2 {
  font-size: 0.4rem;
  font-weight: 500;
  line-height: 0.48rem;
  color: #16161a;
  margin-left: 0.2rem;
  flex: 1;
}
.icon {
  /* width:0.6rem; */
  height: 0.5rem;
}
.p3 {
  height: 0.37rem;
  margin-top: 0.11rem;
  margin-left: 0.7rem;
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.37rem;
  color: #919199;
}
.submit {
  margin-top: 0.37rem;
  width: 100%;
  height: 1.17rem;
  line-height: 1.17rem;
  text-align: center;
  background-color: #142894;
  border-radius: 0.11rem;
  font-size: 0.4rem;
  font-weight: 400;
  color: white;
  background-image: linear-gradient(90deg, #1769ff, #142894);
}
.t {
  width: 100%;
  position: relative;
}
.jump {
  position: absolute;
  top: 50%;
  right: 0.37rem;
  width: 0.35rem;
  height: 0.38rem;
  margin-left: 0.2rem;
}

.bus {
  width: 80%;
  border-right: 0.01rem dashed gray;
  position: relative;
  margin-bottom: 1rem;
  padding-right: 0.2rem;
}
.tel {
  width: 10%;
  height: 1;
  top: 40%;
  right: -15%;
  position: absolute;
}
.p {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.s1 {
  height: 0.59rem;
  font-size: 0.43rem;
  font-weight: 700;
  line-height: 0.59rem;
  color: #333;
  text-align: left;
  vertical-align: bottom;
}
.s2 {
  height: 0.59rem;
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.59rem;
  color: #1769ff;
}
.p5 {
  margin-top: 0.21rem;
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.45rem;
  color: #919199;
  text-align: left;
}
.p6 {
  width: 2.75rem;
  margin-top: 0.11rem;
  line-height: 0.53rem;
  color: #1769ff;
  text-align: center;
  background-color: #dce9ff;
  border-radius: 0.05rem;
  font-size: 0.32rem;
}
</style>
