<template>
  <div class="main">
      <template v-if="hasLogin">
        <WPublish />
      </template>
      <template v-else>
        <Unlogin />
      </template>
  </div>
</template>

<script>
import WPublish from '../components/WPublish';
import Unlogin from '../components/Unlogin';
import Cookie from '../utils/cookie.vue';
export default {
  name: 'Main',
  components: { WPublish, Unlogin },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hasLogin: false
    }
  },
  created(){
    if(Cookie.get('PPU')){
        this.hasLogin = true;
    }else{
        this.hasLogin = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden;
	float: right;
}
</style>
