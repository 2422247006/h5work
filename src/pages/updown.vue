<template>
  <div class="page">
      <van-swipe @change="onChange" class="wrap" :show-indicators="false" >
      <van-swipe-item v-for="(item, index) in imglist" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
    <div class="custom-indicator" slot="indicator">
      <span class="p1">长摁图片保存至相册</span>
      {{ current + 1 }}/{{length}}
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
      current: 0,
      imglist:[],
      orderNum:'',
      length:''
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    getimglist(){
      var that = this;
      that.$axios
        .get(that.$apiUrl + "/api/v1/user/photo/download",{
          params:{
            orderNum:that.orderNum
          }
        })
        .then(function(res) {
          console.log(res.data.data)
          that.imglist=res.data.data
          that.length=res.data.data.length
        });
      
    }
  },
  mounted() {
    this.orderNum= sessionStorage.getItem("orderNum")
    this.getimglist()
    console.log(this.imglist+"hahah")
  },
};
</script>

<style scoped>
.page {
  padding: 0.5rem;
  box-sizing: border-box;
}
.wrap {
  width: 100%;
  height: 12rem;
}
img {
  width: 100%;
  height: 100%;
}
.custom-indicator {
  font-size: 1rem;
  text-align: right;
  color: #666;
}
.p1 {
  font-size: 0.5rem;
  margin-right: 1rem;
  color: #666;
}
</style>