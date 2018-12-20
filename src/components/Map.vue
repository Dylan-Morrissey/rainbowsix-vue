<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-map" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <map-form :map="map" mapBtnTitle="Add a new Map" @map-is-created-updated="submitMap"></map-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import MapForm from '@/components/MapForm'
import MapServices from '@/services/mapservices'

export default {
  data () {
    return {
      map: {name: '', location: '', terrain: '', maxplayers: 10, modes: 'All', floors: '1', ranked: 'No'},
      messagetitle: ' Add New Map'
    }
  },
  components: {
    'map-form': MapForm
  },
  methods: {
    submitMap: function (map) {
      MapServices.postMap(map)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
