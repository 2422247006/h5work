<template>
    <div class="page">
         <span class="p1">当前城市:</span>
      <span class="p2">上海</span>
      <div class="p3wrap">
        <span class="p3">切换城市</span>
          <img src="@/assets/icon/jump.png" class="jump"/>
      </div>
    </div>
</template>
<<script>
export default {
    name:"city"
}
</script>

<style scoped>
    .page{
        display: flex;
    height: 1.17rem;
    padding: 0 .48rem;
    background-color: #ededed;
    align-items: center;
    justify-content: space-between;
    }
    .p1 {
 font-size: .37rem;
    font-weight: 550;
    color: #333;
}
.p2 {
  font-size: .37rem;
    font-weight: 550;
    color: #1989fa;
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
</style>