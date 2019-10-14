<template>
  <div>
        <div class="info">
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
    <div class="footer">确定修改</div>
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
  </div>
</template>

<script>
import { DatetimePicker } from "vant";
import { Popup } from "vant";
import { Picker } from "vant";
import { Dialog } from "vant";
import { RadioGroup, Radio } from "vant";
export default {
  name: "info",
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
    }
  },
  
};
</script>

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
.s1 {
  font-size: 0.4rem;
  color: #45454d;
  width: 20%;
}
.jump {
  width: 0.4rem;
  height: 0.4rem;
}
.mess {
  width: 100%;
  height: 1.5rem;
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
.footer{
  width: 90%;
  margin:0 auto;
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
</style>