<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-users" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <operator-form :operator="operator" operatorBtnTitle="Add a new operator" @operator-is-created-updated="updateOperator"></operator-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import OperatorForm from '@/components/OperatorForm'
import OperatorService from '@/services/operatorservice'

export default {
  data () {
    return {
      operator: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Operator'
    }
  },
  components: {
    'operator-form': OperatorForm
  },
  created () {
    this.getOperator()
  },
  methods: {
    getOperator: function () {
      OperatorService.fetchOperator(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.operator = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Operator in Edit: ' + JSON.stringify(this.operator, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateOperator: function (operator) {
      console.log('Before PUT ' + JSON.stringify(operator, null, 5))
      OperatorService.putOperator(this.$router.params, operator)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(operator, null, 5))
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
