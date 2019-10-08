<template>
  <div class="hello">
    <!-- <van-button type="primary">主要按钮</van-button> -->
     <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <div class="footer">
      <div class="nav" 
      v-for="(item,index) of list" 
      :key="item.id"
      :class="{navstyle:changeactive==index}"
      @click="routerclick(index,item.imgurl_,item.title)">
        <img :src="changeactive===index?item.imgurl_:item.imgurl"/>
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
// import { Button } from "vant";
import img1 from "@/assets/icon/m1.png";
import img2 from "@/assets/icon/m2.png";
import img3 from "@/assets/icon/m3.png";
import img4 from "@/assets/icon/m4.png";
import img1_ from "@/assets/icon/m1_.png";
import img2_ from "@/assets/icon/m2_.png";
import img3_ from "@/assets/icon/m3_.png";
import img4_ from "@/assets/icon/m4_.png";
export default {
  name: "manage",
  // components: {
  //   [Button.name]: Button
  // }
  data() {
    return {
      changeactive:0,
      list: [
        { id: 0, imgurl: img1,imgurl_: img1_, name: "首页",title:"首页"},
        { id: 1, imgurl: img2, imgurl_: img2_,name: "预约",title:"门店选择" },
        { id: 2, imgurl: img3, imgurl_: img3_,name: "订单",title:"我的订单"},
        { id: 3, imgurl: img4,imgurl_: img4_, name: "我的",title:"个人中心" }
      ]
    };
  },
  methods:{
    routerclick: function(index,url,title) {
      var that = this;
      that.changeactive = index;
      document.title = title
      // that.$router.push({
      //   path: url
      // });
      // if (index == 1) {
      //   that.show=!that.show
      // }else{
      //   that.show=false
      // }
    }
  },
  mounted (){
    document.title = "首页"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  height: 1.39rem;
  box-shadow: 0 0 0.32rem rgba(10, 2, 4, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
}
.nav {
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   color: #7d7e80;
}
.navstyle{
  color:#1989fa;
}
</style>
