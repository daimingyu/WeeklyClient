<template>
  <div class="main">
    <Navigation />
    <WPublish />
  </div>
</template>

<script>
import Navigation from '../components/Navigation';
import WPublish from '../components/WPublish';
export default {
  name: 'Main',
  components: { Navigation, WPublish },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden;
}
</style>
