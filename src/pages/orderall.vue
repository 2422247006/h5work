<template>
  <div class="page">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="info">
          <p class="p1">
            <span class="p5">订单号：2019101155819084</span>
            <span class="p5">已完成</span>
          </p>
          <div class="infocon">
            <div class="proimg">
              <img src="@/assets/image/time2.jpg" style="width:100%;height:100%;" />
            </div>
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p2">证件照三底色套餐</p>
            </div>
            <p class="p4">￥229</p>
          </div>
          <div class="time">
            <p class="p5">拍摄门店：长春卓展店</p>
            <p class="p5">到店时间：2019-10-10 17:00</p>
            <!-- <p class="p3 abs">
              总计
              <span class="p4">￥2199</span>
            </p>-->
          </div>
          <div class="btn">
            <p class="delete">删除订单</p>
            <p class="updown" @click="updowmclick">下载成片</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="待拍摄">
        <div class="info">
          <p class="p1">
            <span class="p5">订单号：2019101155819084</span>
            <span class="p5">待拍摄</span>
          </p>
          <div class="infocon">
            <div class="proimg">
              <img src="@/assets/image/time2.jpg" style="width:100%;height:100%;" />
            </div>
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p2">证件照三底色套餐</p>
            </div>
            <p class="p4">￥229</p>
          </div>
          <div class="time">
            <p class="p5">拍摄门店：长春卓展店</p>
            <p class="p5">到店时间：2019-10-10 17:00</p>
            <!-- <p class="p3 abs">
              总计
              <span class="p4">￥2199</span>
            </p>-->
          </div>
          <div class="btn">
            <p class="delete">删除订单</p>
            <p class="updown">下载成片</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="进行中">
        <div class="info">
          <p class="p1">
            <span class="p5">订单号：2019101155819084</span>
            <span class="p5">进行中</span>
          </p>
          <div class="infocon">
            <div class="proimg">
              <img src="@/assets/image/time2.jpg" style="width:100%;height:100%;" />
            </div>
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p2">证件照三底色套餐</p>
            </div>
            <p class="p4">￥229</p>
          </div>
          <div class="time">
            <p class="p5">拍摄门店：长春卓展店</p>
            <p class="p5">到店时间：2019-10-10 17:00</p>
            <!-- <p class="p3 abs">
              总计
              <span class="p4">￥2199</span>
            </p>-->
          </div>
          <div class="btn">
            <p class="delete">删除订单</p>
            <p class="updown">下载成片</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div class="info">
          <p class="p1">
            <span class="p5">订单号：2019101155819084</span>
            <span class="p5">已完成</span>
          </p>
          <div class="infocon">
            <div class="proimg">
              <img src="@/assets/image/time2.jpg" style="width:100%;height:100%;" />
            </div>
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p2">证件照三底色套餐</p>
            </div>
            <p class="p4">￥229</p>
          </div>
          <div class="time">
            <p class="p5">拍摄门店：长春卓展店</p>
            <p class="p5">到店时间：2019-10-10 17:00</p>
            <!-- <p class="p3 abs">
              总计
              <span class="p4">￥2199</span>
            </p>-->
          </div>
          <div class="btn">
            <p class="delete">删除订单</p>
            <p class="updown">下载成片</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="已关闭">
        <div class="info">
          <p class="p1">
            <span class="p5">订单号：2019101155819084</span>
            <span class="p5">已关闭</span>
          </p>
          <div class="infocon">
            <div class="proimg">
              <img src="@/assets/image/time2.jpg" style="width:100%;height:100%;" />
            </div>
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p2">证件照三底色套餐</p>
            </div>
            <p class="p4">￥229</p>
          </div>
          <div class="time">
            <p class="p5">拍摄门店：长春卓展店</p>
            <p class="p5">到店时间：2019-10-10 17:00</p>
            <!-- <p class="p3 abs">
              总计
              <span class="p4">￥2199</span>
            </p>-->
          </div>
          <div class="btn">
            <p class="delete">删除订单</p>
            <p class="updown">下载成片</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup
      v-model="eval"
      round
      position="bottom"
      :style="{ height: 'auto',padding:'0.37rem',boxSizing:'border-box'}"
    >
      <p class="p5">提交评价后即可下载成片哦~</p>
      <ul>
        <li class="li">
          <p class="p3 li_left"></p>
          <div class="icon">
            <span class="p3">超满意</span>
            <span class="p3">基本满意</span>
            <span class="p3">不满意</span>
          </div>
        </li>
        <li class="li">
          <p class="p3 li_left">总体体验</p>
          <div class="icon">
            <img
              :src="changeactive===index?item.url:item.url_"
              :key="item.id"
              v-for="(item,index) of iconlist"
              @click="btnclick(0,index)"
            />
          </div>
        </li>
        <li class="li">
          <p class="p3 li_left">前台</p>
          <div class="icon">
            <img
              :src="changeactive2===index?item.url:item.url_"
              :key="item.id"
              v-for="(item,index) of iconlist2"
              @click="btnclick(1,index)"
            />
          </div>
        </li>
        <li class="li">
          <p class="p3 li_left">化妆师</p>
          <div class="icon">
            <img
              :src="changeactive3===index?item.url:item.url_"
              :key="item.id"
              v-for="(item,index) of iconlist3"
              @click="btnclick(2,index)"
            />
          </div>
        </li>
        <li class="li">
          <p class="p3 li_left">摄影师</p>
          <div class="icon">
            <img
              :src="changeactive4===index?item.url:item.url_"
              :key="item.id"
              v-for="(item,index) of iconlist4"
              @click="btnclick(3,index)"
            />
          </div>
        </li>
        <li class="li">
          <p class="p3 li_left">看片师</p>
          <div class="icon">
            <img
              :src="changeactive5===index?item.url:item.url_"
              :key="item.id"
              v-for="(item,index) of iconlist5"
              @click="btnclick(4,index)"
            />
          </div>
        </li>
      </ul>
      <textarea name id placeholder="请写下您的宝贵建议" v-if="ask" v-model="textarea"></textarea>
      <p class="p11" @click="submit">提交</p>
    </van-popup>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import { Popup } from "vant";
import m_png from "@/assets/icon/m_.png";
import jm_png from "@/assets/icon/jm_.png";
import bm_png from "@/assets/icon/bm_.png";
import mpng from "@/assets/icon/m.png";
import jmpng from "@/assets/icon/jm.png";
import bmpng from "@/assets/icon/bm.png";
export default {
  name: "orderall",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Popup.name]: Popup
  },
  data() {
    return {
      ask: false,
      textarea: "",
      changeactive: 0,
      changeactive2: 0,
      changeactive3: 0,
      changeactive4: 0,
      changeactive5: 0,
      active: 0,
      eval: false,
      iconlist: [
        { id: 0, url_: m_png, url: mpng },
        { id: 1, url_: jm_png, url: jmpng },
        { id: 2, url_: bm_png, url: bmpng }
      ],
      iconlist2: [
        { id: 0, url_: m_png, url: mpng },
        { id: 1, url_: jm_png, url: jmpng },
        { id: 2, url_: bm_png, url: bmpng }
      ],
      iconlist3: [
        { id: 0, url_: m_png, url: mpng },
        { id: 1, url_: jm_png, url: jmpng },
        { id: 2, url_: bm_png, url: bmpng }
      ],
      iconlist4: [
        { id: 0, url_: m_png, url: mpng },
        { id: 1, url_: jm_png, url: jmpng },
        { id: 2, url_: bm_png, url: bmpng }
      ],
      iconlist5: [
        { id: 0, url_: m_png, url: mpng },
        { id: 1, url_: jm_png, url: jmpng },
        { id: 2, url_: bm_png, url: bmpng }
      ]
    };
  },
  methods: {
    btnclick(b, index) {
      if (index == 2) {
        this.ask = true;
      } else {
        this.ask = false;
      }
      if (b == 0) {
        this.changeactive = index;
      } else if (b == 1) {
        this.changeactive2 = index;
      } else if (b == 2) {
        this.changeactive3 = index;
      } else if (b == 3) {
        this.changeactive4 = index;
      } else {
        this.changeactive5 = index;
      }
    },
    updowmclick(){
      this.eval=true
    },
    submit() {
      this.$router.push({
        path: "/updown"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
  width: 90%;
  margin: 0 auto;
  padding: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
  border-radius: 0.16rem;
  background: white;
  margin-bottom: 0.5rem;
}
.p1 {
  width: 100%;
  height: 1.17rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.infocon {
  width: 100%;
  display: flex;
}
.proimg {
  width: 30%;
  height: 2.8rem;
  margin-right: 0.2rem;
}
.txt {
  flex: 1;
}
.p3 {
  margin-top: 0.72rem;
  font-size: 0.37rem;
  font-weight: 700;
  line-height: 0.53rem;
  color: #333;
}
.p5 {
  font-size: 0.37rem;
  color: #333;
}
.p4 {
  font-size: 0.4rem;
  color: #f0024a;
  font-weight: 700;
}
.p2 {
  font-size: 0.3rem;
  color: #45454d;
}
.time {
  width: 100%;
  margin-top: 0.5rem;
}
.btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.abs {
  text-align: right;
}
.delete,
.updown {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.37rem;
  background: red;
  color: white;
  border-radius: 0.11rem;
}
.updown {
  background: #1989fa;
}
.li {
  display: flex;
  width: 100%;
  height: 1.2rem;
  justify-content: space-between;
  align-items: center;
}
.li_left {
  width: 50%;
  height: 1.2rem;
  line-height: 1.2rem;
  margin: 0;
}
.icon {
  width: 50%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon img {
  width: 0.85rem;
  height: 0.85rem;
}
.p11 {
  width: 100%;
  margin-top: 0.5rem;
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
textarea {
  width: 90%;
  min-height: 3rem;
  color: #666;
  font-size: 0.37rem;
  margin-top: 0.3rem;
  border: none;
  background: rgb(237, 237, 237);
}
</style>
<style>
.van-ellipsis {
  font-size: 0.4rem;
}
.van-tabs__line {
  background-color: #1989fa;
}
</style>
