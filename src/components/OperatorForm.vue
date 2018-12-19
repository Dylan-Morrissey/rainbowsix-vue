<template>
  <div id="appl" class="hero">
    <h3 class="vue-title"><i class="fa fa-users" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form-control-label" name="name">Enter the Name of the Operator</label>
              <input class="form__input" type="text" v-model.trim="name"/>
            </div>
            <div class="form-group">
              <label class="form-label">Select the Operators Side</label>
              <select id="side" name="side" class="form-control" type="text" v-model="side">
                <option value="null" selected disabled hidden>Chose a side for the operator</option>
                <option value="Defender">Defender</option>
                <option value="Attacker">Attacker</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="force">Enter the Force the operator is from</label>
              <input class="form__input" type="text" v-model.trim="force"/>
            </div>
            <div class="form-group">
              <label class="form__label" name="gadget">What is the operators gadget</label>
              <input class="form__input" type="text" v-model.trim="gadget"/>
            </div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Operator</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Operator!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['operatorBtnTitle', 'operator'],
  data () {
    return {
      messagetitle: ' Operator ',
      name: this.operator.name,
      side: this.operator.side,
      force: this.operator.force,
      gadget: this.operator.gadget,
      likes: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    gadget: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var operator = {
            name: this.name,
            side: this.side,
            likes: this.likes,
            force: this.force,
            gadget: this.gadget
          }
          this.operator = operator
          console.log('Submitting in new Operator request : ' + [this.operator, null, 5])
          this.$emit('operator-is-created-updated', this.operator)
        }, 60)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
