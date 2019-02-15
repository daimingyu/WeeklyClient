<template>
  <div class="proflie">
    <UProfile />
  </div>
</template>

<script>
import UProfile from '../components/UProfile';
export default {
  name: 'Profile',
  components: { UProfile },
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
