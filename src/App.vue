<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html, p, div, h1, h2, h3, h4, h5, h6, ul, li{
  padding: 0;
  margin: 0;
  border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
ol, ul {
	list-style: none;
}
.mask{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,.5);
}
body, html{
  background-color: #f5f5fa;
}
a{
  text-decoration: none;
}
.clearfix{
  display: block;
  clear: both;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  width: 980px;
}
</style>
