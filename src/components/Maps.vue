<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="maps" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editMap(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteMap(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import MapServices from '@/services/mapservices'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Maps',
  data () {
    return {
      messagetitle: ' Maps List ',
      maps: [],
      props: ['_id'],
      errors: [],
      columns: ['name', 'location', 'terrain', 'maxplayers', 'modes', 'floors', 'ranked', 'likes', 'like', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['likes', 'name', 'location', 'ranked', 'side'],
        sortable: ['likes'],
        headings: {
          _id: 'ID',
          name: 'name',
          location: 'location',
          terrain: 'terrain',
          maxplayers: 'maxplayers',
          modes: 'modes',
          floors: 'floors',
          ranked: 'ranked',
          likes: 'likes'
        }
      }
    }
  },
  created () {
    this.loadMaps()
  },
  methods: {
    loadMaps: function () {
      MapServices.fetchMaps()
        .then(response => {
          // JSON responses are automatically parsed.
          this.maps = response.data
          console.log(this.maps)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    like: function (id) {
      MapServices.likeMap(id)
        .then(response => {
          this.loadMaps()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editMap: function (id) {
      this.$router.params = id
      this.$router.push('editmap')
    },
    deleteMap: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          MapServices.deleteMap(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadMaps()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Map ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Please Log in or sign up to delete an Map!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #appl {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  body{
    background: url("../assets/opsbackground.jpg");
  }
</style>
