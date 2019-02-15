<template>
  <div class="proflie">
    <template v-if="hasLogin">
        <UProfile />  
      </template>
      <template v-else>
        <Unlogin />
      </template>
  </div>
</template>

<script>
import UProfile from '../components/UProfile';
import Unlogin from '../components/Unlogin';
import Cookie from '../utils/cookie.vue';
export default {
  name: 'Profile',
  components: { UProfile, Unlogin },
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
.proflie{
  overflow: hidden;
  float: right;
}
</style>
