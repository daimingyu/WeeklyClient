<template>
  <div class="list">
    <template v-if="hasLogin">
      <WList />
    </template>
    <template v-else>
      <Unlogin />
    </template>
  </div>
</template>

<script>
import WList from '../components/WList';
import Unlogin from '../components/Unlogin';
import Cookie from '../utils/cookie.vue';
export default {
  name: 'List',
  components: { WList, Unlogin },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
.list{
    overflow: hidden;
    float: right;
}
</style>
