<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="operators" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editOperator(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteOperator(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import OperatorService from '@/services/operatorservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Operators',
  data () {
    return {
      messagetitle: ' Operators List ',
      operators: [],
      props: ['_id'],
      errors: [],
      columns: ['name', 'side', 'force', 'gadget', 'likes', 'like', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['likes', 'name', 'force', 'gadget', 'side'],
        sortable: ['likes'],
        headings: {
          _id: 'ID',
          name: 'name',
          side: 'side',
          force: 'force',
          gadget: 'gadget',
          likes: 'likes'
        }
      }
    }
  },
  created () {
    this.loadOperators()
  },
  methods: {
    loadOperators: function () {
      OperatorService.fetchOperators()
        .then(response => {
          // JSON responses are automatically parsed.
          this.operators = response.data
          console.log(this.operators)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    like: function (id) {
      OperatorService.likeOperator(id)
        .then(response => {
          this.loadOperators()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editOperator: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteOperator: function (id) {
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
          OperatorService.deleteOperator(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadOperators()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Operator ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Please Log in or sign up to delete an operator!', 'info')
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
