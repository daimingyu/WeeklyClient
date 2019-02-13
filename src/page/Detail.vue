<template>
  <div class="detail">
      <WDetail v-bind:id="id"/>
  </div>
</template>

<script>
import WDetail from '../components/WDetail';
export default {
  name: 'Detail',
  components: { WDetail },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: this.$route.params.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
    overflow: hidden;
    float: right;
}
</style>
