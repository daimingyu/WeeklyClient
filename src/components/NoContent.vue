<template>
  <div class="no-content">
      <p>抱歉，目前没有总结。</p>
  </div>
</template>

<script>
export default {
  name: 'NoContent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-content{
    width: 720px;
    height: 500px;
    text-align: center;
    line-height: 500px;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    margin-top: 20px;
}
.no-content p span{
  color: #007fff;
  cursor: pointer;
}
</style>
