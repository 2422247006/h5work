<template>
  <div class="page">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/image/swiper1.jpg" class="size"></van-swipe-item>
      <van-swipe-item><img src="@/assets/image/swiper2.jpg" class="size"></van-swipe-item>
      <van-swipe-item><img src="@/assets/image/swiper1.jpg" class="size"></van-swipe-item>
      <van-swipe-item><img src="@/assets/image/swiper2.jpg" class="size"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "swiper",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  width: 95%;
  height: 3.89rem;
  margin: 0.5rem auto;
  border-radius: 0.11rem;

}
.size{
    width:100%;
    height:100%;
     border-radius: 0.11rem;
      box-shadow: 0 0.21rem 0.32rem -0.21rem rgba(0, 0, 0, 0.32);
}
</style>
