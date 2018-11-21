<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-users" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="operators" :options="options">
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
      messagetitle: ' Operators ',
      operators: [],
      errors: [],
      columns: ['name', 'side', 'force', 'gadget', 'likes'],
      options: {
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
</style>
