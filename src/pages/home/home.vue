<template>
  <div>
    <city></city>
    <swiper></swiper>
    <limittime></limittime>
  </div>
</template>

<script>
import city from "./component/city.vue";
import swiper from "./component/swiper.vue";
import limittime from "./component/limittime.vue";
export default {
  name: "home",
  components: {
    city,
    swiper,
    limittime
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
