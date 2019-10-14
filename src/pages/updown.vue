<template>
  <div class="page">
    <van-swipe @change="onChange" class="wrap" :show-indicators="false">
      <van-swipe-item><img src="@/assets/image/time2.jpg" alt=""></van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
     <div class="custom-indicator" slot="indicator">
         <span class="p1">长摁图片保存至相册</span>
         {{ current + 1 }}/4
         </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "updown",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
   data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style scoped>
.page{
padding:0.5rem;
box-sizing: border-box;
}
.wrap{
    width:100%;
    height:12rem;
}
img{
    width:100%;
    height:100%;
}
.custom-indicator{
    font-size:1rem;
    text-align: right;
     color:#666
}
.p1{
     font-size:0.5rem;
     margin-right: 1rem;
     color:#666
}
</style>