<template>
  <div class="weekly">
    <WList />
  </div>
</template>

<script>
import WList from '../components/WList';
export default {
  name: 'Weekly',
  components: { WList },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
