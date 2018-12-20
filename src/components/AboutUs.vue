<template>
  <div id="appl" class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
  <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=wit&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="1000" scrolling="no" marginheight="100" marginwidth="100"></iframe><a href="https://www.pureblack.de/webdesign/"></a>
  <p>We are located at Waterford Institute of Technoloy</p>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      messagetitle: ' About Us '
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .mapouter{text-align:right;height:500px;width:600px;}
  .gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
</style>
