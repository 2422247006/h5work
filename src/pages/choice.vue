<template>
  <div class="page">
    <!-- <div class="banner">
      <img src="@/assets/image/1136.jpg" style="width:100%;height:100%;" />
    </div>-->
    <!-- <van-tabs v-model="active" swipeable>
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
    </van-tabs>-->
    <!-- <van-sidebar v-model="activeKey" style="width:25%;">
  <van-sidebar-item  v-for="item in choiceList" :title="item.name" :key="item.id" />
    </van-sidebar>-->
    <div style="width:100%;">
      <ul>
        <li class="li" v-for="item of choiceList" :key="item.id" @click="showclick(item)">
          <img :src="item.imgurl" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Sidebar, SidebarItem } from "vant";
import img0 from "../assets/image/2110.jpg";
import img1 from "../assets/image/2111.jpg";
import img2 from "../assets/image/2112.jpg";
import img3 from "../assets/image/2113.jpg";
import img4 from "../assets/image/2114.jpg";
import img5 from "../assets/image/2115.jpg";
import img6 from "../assets/image/2116.jpg";
import img7 from "../assets/image/2118.jpg";
import img8 from "../assets/image/2119.jpg";

export default {
  name: "choice",
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  data() {
    return {
      choiceList: [
        {
          id: 0,
          imgurl: img0,
          name: "国潮",
           minPrice: 99,
          productShow: img0,
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 199.23
            }
          ]
        },
        {
          id: 1,
          imgurl: img1,
          name: "证件照",
           minPrice: 59,
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 135.00
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.00
            }
          ]
        },
        {
          id: 2,
          imgurl: img2,
          name: "闺蜜照",
           minPrice: 88,
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        },
        {
          id: 3,
          imgurl: img3,
          name: "百年好合",
           minPrice: 188,
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        },
        {
          id: 4,
          imgurl: img4,
          name: "全家福",
           minPrice: 88,
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        },
        {
          id: 5,
          imgurl: img5,
           minPrice: 99,
          name: "I DO",
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        },
        {
          id: 6,
          imgurl: img6,
           minPrice: 66,
          name: "入学照",
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        },
        {
          id: 7,
          imgurl: img7,
           minPrice: 99,
          name: "写真照",
          productShow: "/img/fm_20191028_1.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        },
        {
          id: 8,
          imgurl: img8,
          minPrice: 98,
          name: "职业照",
          productShow: "../assets/image/112.jpg",
          comboList: [
            {
              id: 1,
              parentCombo: null,
              comboName: "套餐一",
              comboPrice: 122.24
            },
            {
              id: 2,
              parentCombo: null,
              comboName: "套餐二",
              comboPrice: 99.23
            }
          ]
        }
      ]
    };
  },

  methods: {
    //  getinfochoice(){
    //  var that=this;
    //   that.$axios
    //     .get(that.$apiUrl+"/api/v1/product/list", {
    //       params: {}
    //     })
    //     .then(function(res) {
    //       console.log(res.data.data)
    //      that.choiceList=res.data.data
    //     })
    // },
    showclick(item) {
      console.log(item);
      localStorage.setItem("productId", item.id);
      localStorage.setItem("productName", item.name);
      localStorage.setItem("product",JSON.stringify(item));
     

      this.$router.push({
        path: "/show"
      });
    }
  },
  created() {
    // console.log(this.$route.query.id);
    // this.getinfochoice()
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  /* background: rgb(237, 237, 237); */
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
/* ul {
  width: 100%;
  height: auto;
  padding: 0.5rem 0rem;
  box-sizing: border-box;
}
li {
  width: 100%;
  height: 3rem;
  margin-bottom: 0.8rem;
  display: flex;
  position: relative;
} */
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
  margin-top: 1.4rem;
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
/* a:hover,
a.active {
  color: black;
  font-size: 0.45rem;
  border-bottom: 0.1rem solid #1989fa;
} */
.li {
  width: 100%;
  height: 6rem;
  margin: 0.2rem 0;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.5);
}
.li img {
  width: 100%;
  height: 100%;
}
</style>

<style>
.van-sidebar-item__text {
  font-size: 0.4rem;
}
.van-sidebar-item--select {
  border-color: rgb(117, 164, 192);
}
a[data-v-a6bb16b6]:hover,
a.active[data-v-a6bb16b6] {
  border-bottom: none;
  background: none;
}
</style>