<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-map" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <map-form :map="map" mapBtnTitle="Add a new map" @map-is-created-updated="updateMap"></map-form>
          </template>
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
      maps: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Map'
    }
  },
  components: {
    'map-form': MapForm
  },
  created () {
    this.getMap()
  },
  methods: {
    getMap: function () {
      MapServices.fetchMap(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.map = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Map in Edit: ' + JSON.stringify(this.map, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateMap: function (map) {
      console.log('Before PUT ' + JSON.stringify(map, null, 5))
      MapServices.putMap(this.$router.params, map)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(map, null, 5))
        })
        .catch(error => {
          this.errors(error)
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
