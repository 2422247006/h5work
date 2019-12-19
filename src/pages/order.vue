<template>
  <div class="page">
    <div class="info">
      <p class="p1">拍摄人信息</p>
      <p class="mess">
        <span class="s1">姓名:</span>
        <input type="text" class="inp" v-model="custName" placeholder="请填写姓名" />
      </p>
      <p class="mess" @click="sexclick">
        <span class="s1">性别:</span>
        <span class="inp">{{sex_}}</span>
        <img src="@/assets/icon/jump.png" class="jump" />
      </p>
      <p class="mess">
        <span class="s1">手机号码:</span>
        <input type="text" class="inp" v-model="custPhone" placeholder="请填写手机号码" />
      </p>
      <p class="mess">
        <span class="s1">备注:</span>
        <input type="text" class="inp" v-model="remark" placeholder="需要和店家说的话" />
      </p>
    </div>
    <div class="info">
      <p class="p1">已选产品</p>
      <div class="infocon">
        <div class="proimg">
           <img  :src="productImg" class="headimg" />
          <!-- <img v-if="productId==0" src="../assets/image/2110.jpg" class="headimg" />
          <img v-if="productId==1" src="../assets/image/2111.jpg" class="headimg" />
          <img v-if="productId==2" src="../assets/image/2112.jpg" class="headimg" />
          <img v-if="productId==3" src="../assets/image/2113.jpg" class="headimg" />
          <img v-if="productId==4" src="../assets/image/2114.jpg" class="headimg" />
          <img v-if="productId==5" src="../assets/image/2115.jpg" class="headimg" />
          <img v-if="productId==6" src="../assets/image/2116.jpg" class="headimg" />
          <img v-if="productId==7" src="../assets/image/2118.jpg" class="headimg" />
          <img v-if="productId==8" src="../assets/image/2119.jpg" class="headimg" /> -->
        </div>
        <div class="txt">
          <p class="p3">{{productName}}</p>
          <p class="p2">{{comboName}}</p>
        </div>
        <p class="p4">￥{{orderAmount}}</p>
      </div>
    </div>
    <div class="info">
      <p class="mess">
        <span class="s2">到店时间</span>
        <span class="s2">{{orderDate_}}{{orderTime}}</span>
      </p>
      <p class="mess">
        <span class="s2">预约门店</span>
        <span class="s2">{{storeName}}</span>
      </p>
    </div>

    <div class="price">
      <p class="p9">
        合计
        <span class="p10">￥{{orderAmount}}</span>
      </p>
      <p class="p11" @click="payclick()">去支付</p>
    </div>

    <van-popup
      v-model="sex"
      round
      position="bottom"
      :style="{ height: '40%',padding:'0.37rem',boxSizing:'border-box'}"
    >
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker } from "vant";
import { Popup } from "vant";
import { Picker } from "vant";
import { Notify } from "vant";

export default {
  name: "city",
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Notify.name]: Notify
  },
  data() {
    return {
      remark: "",
      custName: "",
      custPhone: "",
      sex_: "",
      sex: false,
      columns: ["男", "女"],
      storeName: "",
      productName: "",
      comboName: "",
      orderAmount: "",
      orderDate: "",
      orderDate_: "",
      orderTime: "",
      userId: "",
      storeId: "",
      productId: "",
      comboId: "",
      productImg: "",
      openId: ""
    };
  },
  methods: {
    sexclick() {
      this.sex = true;
    },
    onConfirm(value, index) {
      this.sex_ = value;
      this.sex = false;
    },
    onCancel() {
      this.sex = false;
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
      return 0;
    },
    payclick() {
      console.log(this.sex_)
      var that = this;
      if (that.custName == "" || that.custPhone == "") {
        Notify({
          message: "请填写您的姓名和手机号",
          color: "white",
          background: "#ccc",
          duration: 600
        });
      } else {
        that.$axios
          .post(that.$apiUrl + "/api/v1/order/create/wx", {
            comboId: that.comboId,
            custName: that.custName,
            custPhone: that.custPhone,
            orderAmount: that.orderAmount,
            orderDate: that.orderDate,
            orderTime: that.orderTime,
            payType: "WEI_XIN",
            productId: that.productId,
            remark: that.remark,
            custSex:that.sex_,
            storeId: that.storeId,
            openId: that.openId,
            userId: that.userId
          })
          .then(function(res) {
            const zfdata = res.data.data;
            if (typeof WeixinJSBridge == "undefined") {
              if (document.addEventListener) {
                document.addEventListener(
                  "WeixinJSBridgeReady",
                  onBridgeReady,
                  false
                );
              } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
              }
            } else {
              that.onBridgeReady(zfdata);
            }
          });
      }
    },
    //调用微信支付
    onBridgeReady(zfdata) {
      var pay_data = zfdata;
      console.log(pay_data);
      WeixinJSBridge.invoke("getBrandWCPayRequest", pay_data, function(res) {
       alert(res)
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          alert('支付成功')
          window.location.href="http://www.hfqhj.cn/jfxx/#/orderall";
        }else{
           alert('支付失败')
        }
      });
    }
  },
  created() {
    this.userId =  localStorage.getItem("userId");
    this.storeId = sessionStorage.getItem("storeId");
    this.storeName = sessionStorage.getItem("storeName");
    this.productId = sessionStorage.getItem("productId");
    this.productName = sessionStorage.getItem("productName");
    this.comboId = sessionStorage.getItem("comboId");
    this.comboName = sessionStorage.getItem("comboName");
    this.orderAmount = sessionStorage.getItem("orderAmount");
    this.orderDate_ = sessionStorage.getItem("orderDate_");
    this.orderDate = sessionStorage.getItem("orderDate");
    this.orderTime = sessionStorage.getItem("orderTime");
    this.productImg = sessionStorage.getItem("productImg");
    this.openId =  sessionStorage.getItem("openId");
    this.custPhone=localStorage.getItem("userphone");
  },
  mounted() {
    // sessionStorage.setItem("code", code);
    // this.city();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headimg {
  width: 100%;
  height: 100%;
}
.page {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
  padding-bottom: 2rem;
}
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
  font-size: 0.43rem;
  font-weight: 700;
  line-height: 1.17rem;
  color: #161616;
}
.mess {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inp {
  width: 80%;
  height: 100%;
  font-size: 0.4rem;
  border: none;
  color: #666;

  display: flex;
  align-items: center;
}
.s1 {
  font-size: 0.4rem;
  color: #45454d;
  width: 30%;
}
.s2 {
  font-size: 0.4rem;
  color: #45454d;
}
.p2 {
  font-size: 0.3rem;
  color: #45454d;
}
.jump {
  width: 0.4rem;
  height: 0.4rem;
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
.p4 {
  font-size: 0.4rem;
  color: #f0024a;
  font-weight: 700;
}
.p5 {
  font-size: 0.45rem;
  line-height: 0.53rem;
  color: #333;
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 2rem;
  background: white;
  padding: 0.37rem;
  box-sizing: border-box;
}
.radio {
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
}
</style>
<style >
.van-picker-column__item {
  font-size: 0.5rem;
}
</style>
