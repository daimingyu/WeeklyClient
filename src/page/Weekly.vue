<template>
  <div class="weekly">
      <router-view/>
  </div>
</template>

<script>
import Cookie from '../utils/cookie.vue';
export default {
  name: 'Weekly',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hasLogin: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weekly{
  overflow: hidden;
  float: right;
}
</style>
