<template>
  <div class="page">
    <div class="searchwrap">
      <img src="@/assets/icon/s.png" class="sericon" />
      <input type="search" placeholder="搜索你的城市" class="search" v-model="keyword" />
    </div>
    <div class="list" v-if="keyword">
      <ul>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
        <li>北京</li>
      </ul>
    </div>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="C" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="D" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="E" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
// import city from "./component/city.vue";
// import swiper from "./component/swiper.vue";
// import limittime from "./component/limittime.vue";
import { IndexBar, IndexAnchor } from "vant";
import { Cell, CellGroup } from "vant";
export default {
  name: "city",
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
     keyword:''
    };
  },
  methods: {
    show() {
      this.key = true;
    },
    showno() {
      this.key = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped]>
.van-cell__title span {
  font-size: 0.4rem;
}
.van-index-bar__index {
  font-size: 0.3rem;
  margin-top: 0.05rem;
}
.searchwrap {
  width: 100%;
  height: 1.5rem;
  padding: 0.2rem 0.32rem;
  overflow: hidden;
  font-size: 0.37rem;
  color: #999;
  background-color: #f2f2f5;
  border-radius: 0.11rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
}
.search {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  border: none;
  margin: 0 auto;
  padding: 0 0.8rem;
  box-sizing: border-box;
}
.sericon {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  left: 0.5rem;
  top: 0.48rem;
}
.list {
  width: 100%;
  height: 100%;
  background: white;
  z-index: 10;
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  padding: 0 0.37rem;
}
ul li {
  font-size: 0.37rem;
  color: #999;
  margin: 0.3rem 0;
}
</style>
