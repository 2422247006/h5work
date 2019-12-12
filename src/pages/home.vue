<template>
  <div class="page">
    <div class="place">
      <span class="p1" @click="clear111()">当前城市:</span>
      <span class="p2">{{cityname}}</span>
      <div class="p3wrap" @click="cityclick">
        <span class="p3">切换城市</span>
        <img src="@/assets/icon/jump.png" class="jump" />
      </div>
    </div>
    <ul>
      <li v-for="item of homeList" :key="item.id">
        <div class="top">
          <img :src="item.storeImg" class="img" />
        </div>
        <p class="p5">{{item.storeName}}</p>
        <p class="p6">{{item.storeAddr}}</p>
        <div class="bottom">
          <a :href="'tel: '+item.storeTel" class="btn">联系门店</a>
          <a
            :href="'https://uri.amap.com/marker?position=经度,维度&name='+item.storeName"
            class="btn"
          >地图导航</a>
          <span class="btn btncol" @click="choiceclick(item.id,item.storeName)">立即预约</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Popup } from "vant";
// import BMap from "BMap";
import img1 from "../assets/image/1136.jpg";
import img2 from "../assets/image/1152.jpg";
import img3 from "../assets/image/1153.jpg";
export default {
  name: "home",
  data() {
    return {
      LocationCity: "正在定位",
      show: false,
      cityname: "上海",
      homeList: [
        // {
        //   id: 1,
        //   storeName: "繁减肖像（普陀店）",
        //   storeAddr: "上海市普陀区武宁路101号我格广场4F-11",
        //   storeTel: "021-6125016",
        //   storeImg: img1,
        //   latitude: null,
        //   longitude: null
        // }
      ],
      cityid: 21,
      code: null
    };
  },
  components: {
    [Popup.name]: Popup
  },
  watch: {
    // cityid() {
    //   this.getinfohome();
    // }
  },
  methods: {
    clear111() {
      alert(123);
     
      sessionStorage.removeItem("storeId");
      sessionStorage.removeItem("storeName");
      sessionStorage.removeItem("productId");
      sessionStorage.removeItem("productName");
      sessionStorage.removeItem("comboId");
      sessionStorage.removeItem("comboName");
      sessionStorage.removeItem("orderAmount");
      sessionStorage.removeItem("orderDate");
      sessionStorage.removeItem("orderTime");
      sessionStorage.removeItem("productImg");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("openId");
    },
    getinfohome() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/store/list/" + that.cityid, {
          params: {}
        })
        .then(function(res) {
          // console.log(res.data.data);
          that.homeList = res.data.data;
        });
    },
    cityclick() {
      this.$router.push({
        path: "/city"
      });
    },
    choiceclick(id, name) {
      // sessionStorage.setItem("storeId", id);
      // sessionStorage.setItem("storeName", name);
      // this.$router.push({
      //   path: "/choice",
      //   query: { id: id }
      // });
      // console.log(sessionStorage.getItem("userId"));
      sessionStorage.setItem("storeId", id);
      sessionStorage.setItem("storeName", name);
      if (localStorage.getItem("userId") == null) {
        this.$router.push({
          path: "/register"
        });
      } else {
        this.$router.push({
          path: "/choice",
          query: { id: id }
        });
      }
    },
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return null;
    }
    // city() {
    //定义获取城市方法
    //   const geolocation = new BMap.Geolocation();
    //   var _this = this;
    //   geolocation.getCurrentPosition(
    //     function getinfo(position) {
    //       let city = position.address.city; //获取城市信息
    //       let province = position.address.province; //获取省份信息
    //       _this.LocationCity = city;
    //       console.log(_this.LocationCity);
    //     },
    //     function(e) {
    //       _this.LocationCity = "定位失败";
    //     },
    //     { provider: "baidu" }
    //   );
    // }
    //获取openid
    // getcode(c) {
    //   var that = this;
    //   console.log(c + "354");
    //   that.$axios
    //     .post(that.$apiUrl + "/api/v1/order/openId", {
    //       code: c
    //     })
    //     .then(function(res) {
    //       console.log(res.data.data);
    //       sessionStorage.setItem("openId", res.data.data);
    //     });
    // }
  },
  created() {
   
    // var that = this;
    // if (this.getQueryVariable("code")== null) {
    //   window.location.href =
    //     "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5e0a44419005b7f5&redirect_uri=http%3A%2F%2Fwww.hfqhj.cn%2Fjfxx&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    // }else {
    //   this.code = this.getQueryVariable("code");
    //   this.getcode(this.code);
    // }
    // if (this.getQueryVariable("code") == null) {
    // this.code = this.getQueryVariable("code");
    //   this.getcode(this.code);
    // }
    // console.log(this.getQueryVariable("code")+123)
  },
  mounted() {
     this.getinfohome()
    if (sessionStorage.getItem("openId") == null) {
      var that = this;
      var c = that.getQueryVariable("code");
      console.log(c);
      that.$axios
        .get(that.$apiUrl + "/api/v1/order/openId", {
          params: { code: c }
        })
        .then(function(res) {
          console.log(res.data.data);
          sessionStorage.setItem("openId", res.data.data);
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
  /* background: rgb(237, 237, 237); */
}
.place {
  display: flex;
  height: 1.17rem;
  padding: 0 0.48rem;
  background-color: #ededed;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
.p1 {
  font-size: 0.37rem;
  font-weight: 550;
  color: #333;
}
.p2 {
  font-size: 0.37rem;
  font-weight: 550;
  color: #1989fa;
  margin-left: 0.2rem;
  flex: 1;
}
.p3wrap {
  display: flex;
  align-items: center;
}
.p3 {
  height: 0.64rem;
  font-size: 0.37rem;
  font-weight: 400;
  line-height: 0.64rem;
}
.jump {
  width: 0.35rem;
  height: 0.38rem;
  margin-left: 0.2rem;
}
ul {
  width: 100%;
  height: auto;
  margin: 1.17rem 0rem;
  padding: 0.37rem;
  box-sizing: border-box;
}
li {
  width: 100%;
  height: 8rem;
  box-sizing: border-box;
  margin: 0.37rem 0;
  overflow: hidden;
  border-radius: 0.21rem;
  -webkit-box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.5);
  position: relative;
  background: white;
}
.top {
  width: 100%;
  height: 55%;
  background: grey;
}
.img {
  width: 100%;
  height: 100%;
}
.p5 {
  margin-top: 0.21rem;
  font-size: 0.43rem;
  font-weight: 600;
  color: #333;
  margin-left: 0.37rem;
}
.p6 {
  margin-top: 0.21rem;
  font-size: 0.32rem;
  font-weight: 400;
  line-height: 0.45rem;
  color: #919199;
  white-space: pre-wrap;
  margin-left: 0.37rem;
}
.bottom {
  width: 100%;
  height: 1.3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 0.03rem solid #e3e3e6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.btn {
  width: 2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border: 0.01rem solid #919199;
  font-size: 0.32rem;
  font-weight: 400;
  color: #45454d;

  border-radius: 0.08rem;
  margin-left: 0.3rem;
}
.btncol {
  background: #1769ff;
  color: white;
  border: none;
  font-weight: 500;
}
</style>
<style>
.van-dialog__header {
  padding-top: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  font-size: 0.4rem;
}
.van-dialog__message {
  font-size: 0.5rem;
}
.van-button__text {
  font-size: 0.5rem;
}
</style>

