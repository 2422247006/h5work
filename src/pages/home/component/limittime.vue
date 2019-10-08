<template>
  <div class="page">
    <div class="title">
      <span class="p1">限时系列</span>
      <span class="p2">UNIQUE</span>
      <div class="p3wrap">
        <span class="p3">MORE</span>
          <img src="@/assets/icon/jump.png" class="jump"/>
      </div>
    </div>
    <div class="con">
      <div class="top">
        <div class="t_item">
          <img src="@/assets/image/time1.jpg" class="time_t">
          <p>全家福套餐专区</p>
        </div>
        <div class="t_item">
           <img src="@/assets/image/time2.jpg" class="time_t">
            <p>证件照套餐专区</p>
        </div>
      </div>
      <div class="bottom">
          <img src="@/assets/image/time3.png" class="time_b">
            <p>形象套餐专区</p>
      </div>
    </div>
     <div class="title">
      <span class="p1">功能类</span>
      <span class="p2">HIMO-ID</span>
      <div class="p3wrap">
        <span class="p3">MORE</span>
          <img src="@/assets/icon/jump.png" class="jump"/>
      </div>
    </div>
    <div class="con">
      <div class="top">
        <div class="t_item">
          <img src="@/assets/image/t3.jpg" class="time_t">
          <p>精致证件照</p>
        </div>
        <div class="t_item">
           <img src="@/assets/image/t4.jpg" class="time_t">
            <p>精致签证照</p>
        </div>
      </div>
      <div class="bottom">
          <img src="@/assets/image/t5.jpg" class="time_b">
            <p>结婚登记照/结婚纪念照</p>
      </div>
      <div class="bottom">
          <img src="@/assets/image/t6.jpg" class="time_b">
            <p>职业形象照</p>
      </div>
    </div>
     <div class="title">
      <span class="p1">轻写真</span>
      <span class="p2">LIGHTO</span>
      <div class="p3wrap">
        <span class="p3">MORE</span>
          <img src="@/assets/icon/jump.png" class="jump"/>
      </div>
    </div>
    <div class="con" style="margin-bottom:1.39rem">
      <div class="top">
        <div class="t_item">
          <img src="@/assets/image/t11.jpg" class="time_t">
          <p>生日照</p>
        </div>
        <div class="t_item">
           <img src="@/assets/image/t10.jpg" class="time_t">
            <p>文艺照-单人</p>
        </div>
          <div class="t_item">
          <img src="@/assets/image/t9.jpg" class="time_t">
          <p>文艺照-情侣</p>
        </div>
        <div class="t_item">
           <img src="@/assets/image/t8.jpg" class="time_t">
            <p>文艺照-闺蜜</p>
        </div>
      </div>
      <div class="bottom">
          <img src="@/assets/image/t7.jpg" class="time_b">
            <p>全家福</p>
      </div>
       <div class="top">
        <div class="t_item">
          <img src="@/assets/image/t14.jpg" class="time_t">
          <p>小幸孕</p>
        </div>
        <div class="t_item">
           <img src="@/assets/image/t13.jpg" class="time_t">
            <p>亲子照</p>
        </div>
      </div>
      <div class="bottom">
          <img src="@/assets/image/t12.jpg" class="time_b">
            <p>宠物照</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "limittime"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.61rem 0.37rem 0.37rem 0.48rem;
  box-sizing: border-box;
}
.p1 {
  font-size: 0.53rem;
  font-weight: 300;
  line-height: 0.64rem;
  color: #16161a;
}
.p2 {
  font-family: IBMPlexSerif-LightItalic;
  font-size: 0.43rem;
  font-weight: 500;
  color: #b5b5c4;
  margin-left:0.2rem;
  flex: 1;
}
.p3wrap{
display: flex;
  align-items: center
}
.p3 {
  height: 0.64rem;
  font-size: 0.37rem;
  font-weight: 400;
  line-height: 0.64rem;
  color: #45454d;
  
}
.jump{
  width:0.35rem;
  height:0.38rem;
  margin-left:0.2rem;
}
.con{
  width:100%;
  padding: .43rem;
  box-sizing: border-box;
  border-bottom: 0.27rem solid #ededed;
}
.top{
width:100%;
display: flex;
justify-content: space-between;
 margin-bottom: 0.5rem;
  flex-wrap: wrap;
}
.t_item{
  width:48%;
  height:7rem;
}
.t_item p,.bottom p{
  font-size: .37rem;
    font-weight: 500;
    line-height: 1;
    color: #000;
}
.bottom{
  width:100%;
  height:7rem;

}
.time_t{
  width:100%;
  height:88%
}
.time_b{
  width:100%;
  height:85%
}
</style>
