<template>
  <div class="page">
    <div class="top">
      <div class="headerbg"></div>
      <div class="headerwrap">
        <div class="txt">
          <p class="p">
            <span class="p1">{{showinfo.name}}</span>
            <span class="p2">￥{{showinfo.minPrice}}起</span>
          </p>
          <ul>
            <li>
              <img src="@/assets/icon/s1.png" style="width:0.8rem;height:0.8rem;" alt />
              <span class="p3">化妆</span>
              <span class="p4">{{showinfo.model}}</span>
            </li>
            <li>
              <img src="@/assets/icon/s2.png" style="width:0.8rem;height:0.8rem;" alt />
              <span class="p3">服装</span>
              <span class="p4">{{showinfo.clothing}}</span>
            </li>
            <li>
              <img src="@/assets/icon/s3.png" style="width:0.8rem;height:0.8rem;" alt />
              <span class="p3">拍摄</span>
              <span class="p4">{{showinfo.background}}</span>
            </li>
            <li>
              <img src="@/assets/icon/s4.png" style="width:0.8rem;height:0.8rem;" alt />
              <span class="p3">修图</span>
              <span class="p4">{{showinfo.negative}}</span>
            </li>
            <li>
              <img src="@/assets/icon/s5.png" style="width:0.8rem;height:0.8rem;" alt />
              <span class="p3">冲印</span>
              <span class="p4">{{showinfo.processing}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="head">
        <img  :src="showinfo.indexImg" class="headimg" />
      </div>
      <div class="con">
        <div class="imglist">
          <p class="ppp">产品展示</p>
          <!-- <img width="100%" src="../assets/image/999.jpg" /> -->
          <img :src="showinfo.productDetail" class="headimg" />
         
        </div>
      </div>
    </div>
    <div class="footer" @click="popupclick">立即预约</div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: 'auto',padding:'0.37rem',boxSizing:'border-box' }"
    >
      <p class="p5">{{showinfo.name}}</p>
      <p class="p6">已选：{{choice}}</p>
      <div class="check">
        <p class="p7">产品类型</p>
        <ul class="ul">
          <li
            class="p8"
            v-for="(item,index) in showinfo.comboList"
            :key="item.id"
            :class="{p8col:changeactive==index}"
            @click="choiceclick(index,item.comboName,item.comboPrice,item.id)"
          >{{item.comboName}}</li>
        </ul>
      </div>
      <div class="price">
        <p class="p9">
          合计
          <span class="p10">￥{{price}}</span>
        </p>
        <p class="p11" @click="timeclick">下一步</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from "vant";
import { Tab, Tabs } from "vant";
import { Notify } from "vant";
export default {
  name: "city",
  components: {
    [Popup.name]: Popup,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Notify.name]: Notify
  },
  data() {
    return {
      showinfo: {},
      changeactive: -1,
      show: false,
      active: "",
      price: 0,
      choice: "",
      
    };
  },
  methods: {
    popupclick() {
      this.show = true;
    },
    choiceclick(index, name, price, id) {
      this.changeactive = index;
      this.choice = name;
      this.price = price;
      sessionStorage.setItem("comboId", id);
      sessionStorage.setItem("comboName", name);
      sessionStorage.setItem("orderAmount", price);
    },
    timeclick() {
      if (this.changeactive == -1) {
        Notify({
          message: "请选择套餐",
          color: "white",
          background: "#666",
          duration: 800
        });
      } else {
        this.$router.push({
          path: "/time"
        });
      }
    }
  },
  created() {
   console.log(JSON.parse(sessionStorage.getItem("product")))
    // console.log(this.$route.query.url)
    this.showinfo = JSON.parse(sessionStorage.getItem("product"))
    // var date = new Date();
    // console.log(date);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ppp {
  width: 100%;
  height: 0.8rem;
  line-height: 0.5rem;
  font-size: 0.4rem;
  color: #666;
}
.page {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
}
.top {
  width: 100%;
  height: auto;
  position: relative;
  background: rgb(227, 227, 230);
}
.headerbg {
  width: 100%;
  height: 8rem;
  /* background-image: url("../assets/image/hbg.png"); */
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.headerwrap {
  width: 95%;
  height: 7.23rem;
  background: white;
  position: absolute;
  top: 20%;
  left: 2.5%;
  border-radius: 0.21rem;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
}
.head {
  width: 87%;
  height:5.8rem;
  position: absolute;
  top: 5%;
  left: 6.5%;
  border-radius: 0.3rem;
  box-shadow: 0 0.16rem 0.32rem -0.16rem rgba(0, 0, 0, 0.24);
}
.headimg {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
}
.txt {
  width: 100%;
  height: 4.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  box-sizing: border-box;
}
.p {
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.p1 {
  font-size: 0.48rem;
  font-weight: 700;
  line-height: 0.67rem;
  color: #16161a;
}
.p2 {
  font-size: 0.48rem;
  font-weight: 600;
  line-height: 0.67rem;
  color: #e21955;
}
ul {
  width: 100%;
  height: 60%;
  display: flex;
}
li {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.p3 {
  font-size: 0.35rem;
  font-weight: 400;
  color: #16161a;
}
.p4 {
  font-size: 0.32rem;
  font-weight: 400;
  color: #919199;
  white-space: nowrap;
  -webkit-transform: scale(0.83);
  transform: scale(0.83);
}
.con {
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
}
.imglist {
  width: 100%;
  margin: 0 auto;
  background: white;
  padding: 0.37rem;
  box-sizing: border-box;
}
.title {
  width: 100%;
  height: 1.49rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 0 2rem;
  box-sizing: border-box;
}
.span {
  font-size: 0.45rem;
  font-weight: 400;
  color: #16161a;
  width: 35%;
  height: 1.3rem;
  line-height: 1.3rem;
  text-align: center;
  display: inline-block;
}
.btnstyle {
  font-size: 0.45rem;
  font-weight: 700;
  color: #16161a;
  border-bottom: 0.1rem solid #1769ff;
}
.img_ {
  padding: 0.5rem 0;
}
.footer {
  width: 90%;
  height: 1.17rem;
  line-height: 1.17rem;
  text-align: center;
  background-color: #142894;
  border-radius: 0.11rem;
  font-size: 0.4rem;
  font-weight: 400;
  color: white;
  position: fixed;
  bottom: 0;
  left: 5%;
  right: 0;
  background-image: linear-gradient(90deg, #1769ff, #142894);
}
.p5 {
  font-size: 0.48rem;
  font-weight: 700;
  line-height: 1.23rem;
  color: #161616;
}
.p6 {
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.48rem;
  color: #919199;
  text-align: left;
  white-space: pre-wrap;
}
.check {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}
.p7 {
  font-size: 0.37rem;
  font-weight: 400;
  line-height: 0.53rem;
  color: #333;
}
.ul {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.p8 {
  width: 36%;
  padding: 0.19rem 0.2rem;
  line-height: 1.2;
  color: #45454d;
  text-align: center;
  background: #f2f2f5;
  border: 1px solid #f2f2f5;
  border-radius: 0.11rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-size: 0.32rem;
  font-weight: 400;
  text-emphasis: nowrap;
  margin: 0.15rem;
}
.p9,
.p10 {
  font-size: 0.4rem;
  font-weight: 600;
  line-height: 0.48rem;
  color: #16161a;
}
.p10 {
  color: #f0024a;
}
.p11 {
  width: 4.8rem;
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
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 5%;
  right: 0;
  width: 85%;
  height: 2rem;
}
.p8col {
  color: #1769ff;
  background-color: rgba(23, 105, 255, 0.1);
  border-color: #1769ff;
}
</style>
