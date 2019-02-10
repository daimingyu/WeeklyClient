<template>
  <div class="proflie">
    <WPublish />
  </div>
</template>

<script>
import WPublish from '../components/WPublish';
export default {
  name: 'Profile',
  components: { WPublish },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
