<template>
  <div class="page">
    <div class="place">
      <span class="p1">当前城市:</span>
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
export default {
  name: "home",
  data() {
    return {
      show: false,
      cityname: "上海",
      homeList: [],
      cityid: 21
    };
  },
  components: {
    [Popup.name]: Popup
  },
  watch: {
    cityid() {
      this.getinfohome();
    }
  },
  methods: {
    getinfohome() {
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/jfxx-0.1/api/v1/store/list/" + that.cityid, {
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
      // console.log(localStorage.getItem("userId"));
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
      console.log(query);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return false;
    }
  },
  created() {
    console.log(localStorage.getItem("code"))
    if(localStorage.getItem("code")==null){
 window.location.href =
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5e0a44419005b7f5&redirect_uri=http%3A%2F%2Fwww.hfqhj.cn%2Fjfxx&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";

    }
   
    this.getinfohome();
  },
  mounted() {
    // if (this.$route.query.name && this.$route.query.id) {
    //   this.cityname = this.$route.query.name;
    //   this.cityid = this.$route.query.id;
    // }

    var code = this.getQueryVariable("code");
    console.log(code);
    localStorage.setItem("code", code);
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
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
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

