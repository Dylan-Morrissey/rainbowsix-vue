<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-users" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <operator-form :operator="operator" operatorBtnTitle="Add a new operator" @operator-is-created-updated="submitOperator"></operator-form>
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
      operator: {name: '', side: 'Defender', force: '', gadget: ''},
      messagetitle: ' Add New Operator'
    }
  },
  components: {
    'operator-form': OperatorForm
  },
  methods: {
    submitOperator: function (operator) {
      OperatorService.postOperator(operator)
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
