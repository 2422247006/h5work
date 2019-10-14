<template>
  <div class="page">
    <div class="info">
      <p class="p1">拍摄人信息</p>
      <p class="mess">
        <span class="s1">姓名:</span>
        <input type="text" class="inp" />
      </p>
      <p class="mess" @click="birthclick">
        <span class="s1">生日:</span>
        <span class="inp"></span>
        <img src="@/assets/icon/jump.png" class="jump" />
      </p>
      <p class="mess" @click="sexclick">
        <span class="s1">性别:</span>
        <span class="inp"></span>
        <img src="@/assets/icon/jump.png" class="jump" />
      </p>
    </div>
    <div class="info">
      <p class="p1">已选产品</p>
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
    </div>
    <div class="info">
      <p class="mess">
        <span class="s2">到店时间</span>
        <span class="s2">2019-10-10 17:00</span>
      </p>
      <p class="mess">
        <span class="s2">预约时间</span>
        <span class="s2">长春卓展店</span>
      </p>
    </div>
    <div class="info">
      <!-- <p class="p1">预约须知</p>
     <p class="p2">*预约成功后可修改两次时间</p>
      <p class="p2">*若拍摄前48小时内申请退款需收取订单金额的15%作为手续费</p>-->
      <img src="@/assets/image/order.png" style="width:100%;height:100%;" />
    </div>
    <div class="price">
      <p class="p9">
        合计
        <span class="p10">￥229.00</span>
      </p>
      <p class="p11" @click="payclick">去支付</p>
    </div>
    <van-popup
      v-model="birth"
      round
      position="bottom"
      :style="{ height: '40%',padding:'0.37rem',boxSizing:'border-box'}"
    >
      <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" />
    </van-popup>
    <van-popup
      v-model="sex"
      round
      position="bottom"
      :style="{ height: '40%',padding:'0.37rem',boxSizing:'border-box'}"
    >
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <van-dialog v-model="show" title="请选择支付方式" show-cancel-button style="width:70%;">
      <van-radio-group v-model="radio" style="padding:0 0.5rem;">
        <van-radio name="1" class="radio">
          <span class="p5">微信支付</span>
        </van-radio>
        <van-radio name="2" class="radio">
          <span class="p5">支付宝支付</span>
        </van-radio>
      </van-radio-group>
    </van-dialog>
  </div>
</template>

<script>
import { DatetimePicker } from "vant";
import { Popup } from "vant";
import { Picker } from "vant";
import { Dialog } from "vant";
import { RadioGroup, Radio } from "vant";
export default {
  name: "city",
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Dialog.Component.name]: Dialog.Component,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  },
  data() {
    return {
      radio: 1,
      show: false,
      birth: false,
      sex: false,
      currentDate: new Date(),
      columns: ["男", "女"]
    };
  },
  methods: {
    birthclick() {
      this.birth = true;
    },
    sexclick() {
      this.sex = true;
    },
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    payclick() {
      this.show = true;
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
}
.s1 {
  font-size: 0.4rem;
  color: #45454d;
  width: 20%;
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
