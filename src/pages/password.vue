<template>
  <div>
        <div class="info">
      <p class="mess">
        <span class="s1">旧密码:</span>
        <input type="text" class="inp" />
      </p>
       <p class="mess">
        <span class="s1">新密码:</span>
        <input type="text" class="inp" />
      </p>
    </div>
    <div class="footer">确定修改</div>
  </div>
</template>

<script>
export default {
  name: "password",
  data() {
    return {
    };
  },
  methods: {
  },
  
};
</script>

<style scoped>
.info {
  width: 90%;
  margin: 0 auto;
  padding: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0.08rem 0.32rem -0.11rem rgba(0, 0, 0, 0.08);
  border-radius: 0.16rem;
  background: white;
  margin-bottom: 0.5rem;
}
.s1 {
  font-size: 0.4rem;
  color: #45454d;
  width: 20%;
}
.jump {
  width: 0.4rem;
  height: 0.4rem;
}
.mess {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inp {
  width: 80%;
  height: 100%;
  font-size: 0.4rem;
  border: none;
}
.footer{
  width: 90%;
  margin:0 auto;
  height: 1.17rem;
  line-height: 1.17rem;
  text-align: center;
  background-color: #142894;
  border-radius: 0.11rem;
  font-size: 0.4rem;
  font-weight: 400;
  color: white;
  background-image: linear-gradient(90deg, #1769ff, #142894);

}
</style>