<template>
  <div class="page">
    <div class="top">
      <div class="headerbg"></div>
      <div class="headerwrap">
        <div class="txt">
          <p class="p">
            <span class="p1">证件照套餐专区</span>
            <span class="p2">￥159起</span>
          </p>
          <ul>
            <li>
              <img src="@/assets/icon/s1.png" alt />
              <span class="p3">化妆</span>
              <span class="p4">一套造型</span>
            </li>
            <li>
              <img src="@/assets/icon/s2.png" alt />
              <span class="p3">服装</span>
              <span class="p4">1至3套服装</span>
            </li>
            <li>
              <img src="@/assets/icon/s3.png" alt />
              <span class="p3">拍摄</span>
              <span class="p4">半身照</span>
            </li>
            <li>
              <img src="@/assets/icon/s4.png" alt />
              <span class="p3">修图</span>
              <span class="p4">2张精修照片</span>
            </li>
            <li>
              <img src="@/assets/icon/s1.png" alt />
              <span class="p3">冲印</span>
              <span class="p4">2种冲印尺寸</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="head">
        <img src="@/assets/image/time2.jpg" class="headimg" />
      </div>
      <div class="con">
        <div class="imglist">
          <van-sticky>
            <div class="title">
              <span
                class="span"
                v-for="(item,index) of btnlist"
                :key="item.id"
                :class="{btnstyle:changeactive==index}"
                @click="btnclick(index)"
              >{{item.txt}}</span>
            </div>
          </van-sticky>
          <div class="img_" v-if="!right">
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/c1d866d6f3b9c080ccfdbd213d8a6f06.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/0440ae36ce5cbe8b6d7f57f465cdc34e.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/01944429a0417498449d5ff5803d57fe.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/dfb4bb30e0e6eb1d58beb5a6ff1361ab.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/d45e7e26fb7771f070ee6699e249642f.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/6cf95a140e45b74b602e8eb05879c8d8.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/b66279bc6f8fc11a4dd1c64f6830dbc4.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/d5d5f46f5d0d16bc504ae54efd0600d0.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/8eb36db0900026fe08f66f9a1865c698.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/c45f34fa30476eaa1e0dd3c7a0043f4a.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/eb34d7753c48d6c3985a10b3e2ed1fee.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/02777e8c689371e22e078ac80dd8421f.jpg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/cd37ebaf962d64fccf68df51118c0be6.png"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/2a0e08c4dda060ec9b025e1aa12b1d42.png"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/58d6e69333d544842410a77242b17f3f.png"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/24966a4a2079d2661c453632e876cdb4.jpeg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/45c034b32dd78c33afa363c2fd977c80.jpeg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/c10e1389ffb081197ed40c9dfa478272.jpeg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/82313332e09f7d73e994795500d10ec9.jpeg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/5557a09b293e826b837c24db79bcfc08.jpeg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/e2fb2972cead9120a7eb65a65bcf8491.jpeg"
            />
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/82e14f201ee5f4fe2e035393bf9de9b3.jpeg"
            />
          </div>
          <div class="img_" v-if="right">
            <img
              width="100%"
              src="https://cdn.haimati.cn/himo/216a6bf35bc1072ebe95cde4195c4da1.jpg"
            />
            <img
              width="100%"
              class="clear"
              src="https://cdn.haimati.cn/himo/8b40aa38bea10165061a521b953e2b52.jpeg"
              lazy="loaded"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer" @click="popupclick">立即预约</div>
    <van-popup v-model="show" round position="bottom" :style="{ height: 'auto',padding:'0.37rem',boxSizing:'border-box' }">
        <p class="p5">证件照套餐专区</p>
        <p class="p6">已选：证件照三底色套餐</p>
        <div class="check">
            <p class="p7">产品类型</p>
            <ul class="ul">
                <li class="p8 p8col">证件照三底色套餐</li>
                 <li class="p8">证件照三底色套餐</li>
                  <li class="p8">证件照三底色套餐</li>
                   
            </ul>
        </div>
        <div class="price">
            <p class="p9">合计<span class="p10">￥229.00</span></p>
            <p class="p11" @click="timeclick">下一步</p>
        </div>
    </van-popup>
  </div>
</template>

<script>
import { Sticky } from "vant";
import { Popup } from "vant";
export default {
  name: "city",
  components: {
    [Sticky.name]: Sticky,
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false,
      right: false,
      changeactive: 0,
      btnlist: [{ id: 0, txt: "产品展示" }, { id: 1, txt: "产品内容" }]
    };
  },
  methods: {
    btnclick(index) {
      this.changeactive = index;
      if (index == 0) {
        this.right = false;
      } else {
        this.right = true;
      }
    },
    popupclick() {
      this.show = true;
    },
    timeclick(){
       this.$router.push({
        path: "/time"
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
.top {
  width: 100%;
  height: auto;
  position: relative;
  background: rgb(227, 227, 230);
}
.headerbg {
  width: 100%;
  height: 8rem;
  background-image: url("../assets/image/hbg.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.headerwrap {
  width: 95%;
  height: 11rem;
  background: white;
  position: absolute;
  top: 20%;
  left: 2.5%;
  border-radius: 0.21rem;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
}
.head {
  width: 85%;
  height: 10rem;
  position: absolute;
  top: 8%;
  left: 7.5%;
  border-radius: 0.11rem;
  box-shadow: 0 0.16rem 0.32rem -0.16rem rgba(0, 0, 0, 0.24);
}
.headimg {
  width: 100%;
  height: 100%;
  border-radius: 0.11rem;
}
.txt {
  width: 100%;
  height: 3.8rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  box-sizing: border-box;
}
.p {
  width: 100%;
  height: 40%;
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
  margin-top: 7.5rem;
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
.p5{
font-size: .48rem;
    font-weight: 700;
    line-height: 1.23rem;
    color: #161616;
}
.p6{
    font-size: .32rem;
    font-weight: 400;
    line-height: .48rem;
    color: #919199;
    text-align: left;
    white-space: pre-wrap;
}
.check{
    width:100%;
    margin-top:0.5rem;
    margin-bottom:1.5rem;
}
.p7{
    font-size: .37rem;
    font-weight: 400;
    line-height: .53rem;
    color: #333;
}
.ul{
    width:80%;
    display: flex;
    flex-wrap: wrap;
}
.p8{
    width: 36%;
    padding: .19rem .2rem;
    line-height: 1.2;
    color: #45454d;
    text-align: center;
    background: #f2f2f5;
    border: 1PX solid #f2f2f5;
    border-radius: .11rem;
    -webkit-transition: all .2s;
    transition: all .2s;
    font-size: .32rem;
    font-weight: 400;
    text-emphasis: nowrap;
    margin:0.15rem;
}
.p9,.p10{
    font-size: .4rem;
    font-weight: 600;
    line-height: .48rem;
    color: #16161a;
}
.p10{
    color: #f0024a
}
.p11{
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
.price{
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom:0;
    left:5%;
    right:0;
    width:85%;
    height:2rem;
}
.p8col{
    color: #1769ff;
    background-color: rgba(23,105,255,.1);
    border-color: #1769ff;
}
</style>
