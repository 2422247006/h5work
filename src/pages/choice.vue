<template>
  <div class="page">
    <div class="banner">
      <img src="@/assets/image/1136.jpg" style="width:100%;height:100%;" />
    </div>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="item in choiceList" :title="item.name" :key="item.id">
        <div class="time" id="home">
          <ul>
            <li v-for="itemchild in item.productList" :key="itemchild.id">
              <img :src="itemchild.indexImg" class="imglist" />
              <div class="txt">
                <p class="p3">{{itemchild.name}}</p>
                <p class="p4">Package Area</p>
                <p class="p5">
                  {{itemchild.minPrice}}
                  <span class="p6">元起</span>
                </p>
              </div>
              <div class="abs" @click="showclick(itemchild)">选套系</div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
export default {
  name: "choice",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      active: "",
      choiceList:[]
    };
  },

  methods: {
     getinfochoice(){
     var that=this;
      that.$axios
        .get(that.$apiUrl+"/jfxx-0.1/api/v1/product/list", {
          params: {}
        })
        .then(function(res) {
          console.log(res.data.data)
         that.choiceList=res.data.data
        })
    },
    showclick(item) {
      console.log(item)
      localStorage.setItem("productId", item.id);
       localStorage.setItem("productName", item.name);
        localStorage.setItem("productImg", item.indexImg);
       
      this.$router.push({
        path: "/show",
         query: { item: item }
      });
    }
  },
created() {
   // console.log(this.$route.query.id);
    this.getinfochoice()
}
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
}
.banner {
  width: 100%;
  height: 4.59rem;
}
.title {
  width: 100%;
  height: 1.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(227, 227, 230);
}
.span {
  height: 50%;
  /* border-bottom:0.1rem solid #1989fa; */
  font-size: 0.4rem;
  font-weight: 400;
  color: rgb(145, 145, 153);
  padding: 0.15rem 0;
}
.btnstyle {
  border-bottom: 0.1rem solid #1989fa;
  font-size: 0.45rem;
  font-weight: 700;
  color: black;
}
.con {
  width: 95%;
  height: auto;
  margin: 0 auto;
  background: white;
  border-radius: 0.11rem;
}
.time {
  padding: 0 0.37rem;
  box-sizing: border-box;
  background: white;
}
.txt {
  margin-left: 0.3rem;
}
.p {
  width: 100%;
  height: 1.5rem;
  line-height: 1.2rem;
}
.p1 {
  font-size: 0.4rem;
  font-weight: 400;
  color: rgb(51, 51, 51);
  margin-right: 0.2rem;
}
.p2 {
  font-size: 0.32rem;
  font-weight: 400;
  color: #b5b5c4;
}
ul {
  width: 100%;
  height: auto;
  padding:0.5rem 0rem;
  box-sizing: border-box;
}
li {
  width: 100%;
  height: 3.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  position: relative;
}
.imglist {
  width: 3rem;
  height: 100%;
  border-radius: 0.11rem;
}
.p3 {
  font-size: 0.43rem;
  font-weight: 400;
  color: #333;
}
.p4 {
  font-size: 0.32rem;
  font-weight: 300;
  color: #333;
}
.p5 {
  font-size: 0.59rem;
  font-weight: 600;
  color: #45454d;
  margin-top: 1.7rem;
}
.p6 {
  font-size: 0.32rem;
  font-weight: 600;
  color: #45454d;
}
.abs {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border: 0.01rem solid #919199;
  font-size: 0.35rem;
  font-weight: 400;
  color: #45454d;

  border-radius: 0.08rem;
  /* margin-left: 0.3rem; */
}
a:hover,
a.active {
  color: black;
  font-size: 0.45rem;
  border-bottom: 0.1rem solid #1989fa;
}
</style>