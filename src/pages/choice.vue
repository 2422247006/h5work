<template>
  <div class="page">
    <div class="banner">
      <img src="@/assets/image/1136.jpg" style="width:100%;height:100%;" />
    </div>
    <van-sticky>
      <div class="title">
        <!-- <span class="span"
        v-for="(item,index) of btnlist" 
      :key="item.id"
      :class="{btnstyle:changeactive==index}"
      @click="btnclick(index)"
        >{{item.txt}}</span>-->
        <a
          class="span"
          href="javascript:void(0);"
          :class="active == '#home' ? 'active' : ''"
          @click="toTarget('#home')"
        >限时系列</a>
        <a
          class="span"
          href="javascript:void(0);"
          :class="active == '#team' ? 'active' : ''"
          @click="toTarget('#team')"
        >功能类</a>
        <a
          class="span"
          href="javascript:void(0);"
          :class="active == '#contact' ? 'active' : ''"
          @click="toTarget('#contact')"
        >轻写真</a>
      </div>
    </van-sticky>
    <div class="app-main" id="app">
      <div class="time" id="home">
        <P class="p">
          <span class="p1">限时系列</span>
          <span class="p2">UNIQUE</span>
        </P>
        <ul>
          <li>
            <img src="@/assets/image/time2.jpg" class="imglist" />
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p4">Package Area</p>
              <p class="p5">
                159
                <span class="p6">元起</span>
              </p>
            </div>
            <div class="abs" @click="showclick">选套系</div>
          </li>
          <li>
            <img src="@/assets/image/time2.jpg" class="imglist" />
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p4">Package Area</p>
              <p class="p5">
                159
                <span class="p6">元起</span>
              </p>
            </div>
            <div class="abs">选套系</div>
          </li>
        </ul>
      </div>
      <div class="time" id="team">
        <P class="p">
          <span class="p1">功能类</span>
          <span class="p2">HIMO-ID</span>
        </P>
        <ul>
          <li>
            <img src="@/assets/image/time2.jpg" class="imglist" />
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p4">Package Area</p>
              <p class="p5">
                159
                <span class="p6">元起</span>
              </p>
            </div>
            <div class="abs">选套系</div>
          </li>
          <li>
            <img src="@/assets/image/time2.jpg" class="imglist" />
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p4">Package Area</p>
              <p class="p5">
                159
                <span class="p6">元起</span>
              </p>
            </div>
            <div class="abs">选套系</div>
          </li>
        </ul>
      </div>
      <div class="time" id="contact">
        <P class="p">
          <span class="p1">轻写真</span>
          <span class="p2">LIGHTO</span>
        </P>
        <ul>
          <li>
            <img src="@/assets/image/time2.jpg" class="imglist" />
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p4">Package Area</p>
              <p class="p5">
                159
                <span class="p6">元起</span>
              </p>
            </div>
            <div class="abs">选套系</div>
          </li>
          <li>
            <img src="@/assets/image/time2.jpg" class="imglist" />
            <div class="txt">
              <p class="p3">证件照套餐专区</p>
              <p class="p4">Package Area</p>
              <p class="p5">
                159
                <span class="p6">元起</span>
              </p>
            </div>
            <div class="abs">选套系</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Sticky } from "vant";
export default {
  name: "choice",
  components: {
    [Sticky.name]: Sticky
  },
  data() {
    return {
      active: "#home",
      scrollIntoViewOptions: {
        block: "center",
        behavior: "smooth"
      }
    };
  },
  mounted() {
    // 一次性计算赋值，减少滚动计算节点位置次数
    this.distance_team = document.querySelector("#team").offsetTop - 250;
    this.distance_contact = document.querySelector("#contact").offsetTop - 250;
    this.$nextTick(function() {
      document.querySelector("#app").addEventListener("scroll", this.onScroll);
    });
    window.addEventListener("scroll", this.onScroll, true);
  },
  methods: {
    toTarget(target) {
      this.active = target;
      const toElement = document.querySelector(target);
      toElement.scrollIntoView(this.scrollIntoViewOptions);
    },
    onScroll() {
      const scrolled = document.querySelector(".app-main").scrollTop;
      console.log(scrolled);
      if (scrolled < this.distance_team) {
        this.active = "#home";
      } else if (
        scrolled >= this.distance_team &&
        scrolled < this.distance_contact
      ) {
        this.active = "#team";
      } else if (scrolled >= this.distance_contact) {
        this.active = "#contact";
      }
    },
    showclick(){
      this.$router.push({
        path: "/show"
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll, true);
  }
};
</script>

<style scoped>
.app-main {
  overflow: scroll;
  height: 10rem;
}
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