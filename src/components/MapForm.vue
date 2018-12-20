<template>
  <div id="appl" class="hero">
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form-control-label" name="name">Enter the Name of the Map</label>
              <input class="form__input" type="text" v-model.trim="name"/>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="location">Enter the Maps Location</label>
              <input class="form__input" type="text" v-model.trim="location"/>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="terrain">What is the Maps Terrain</label>
              <input class="form__input" type="text" v-model.trim="terrain"/>
            </div>
            <div class="form-group">
              <label class="form-label">What is the Max Number of Players for the Map?</label>
              <select id="maxplayers" name="maxplayers" class="form-control" type="number" v-model="maxplayers">
                <option value= 10>10</option>
                <option value= 12>12</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="modes">Does the map have all playable modes?</label>
              <input class="form__input" type="text" v-model.trim="modes"/>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="floors">How many floors does the map have?</label>
              <input class="form__input" type="number" v-model.trim="floors"/>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="ranked">Is this a ranked map? Yes or No></label>
              <input class="form__input" type="text" v-model.trim="ranked"/>
            </div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Map</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Map!</p>
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

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['mapBtnTitle', 'map'],
  data () {
    return {
      name: this.map.name,
      location: this.map.location,
      terrain: this.map.terrain,
      maxplayers: this.map.maxplayers,
      modes: this.map.modes,
      floors: this.map.floors,
      ranked: this.map.ranked,
      likes: this.map.likes,
      submitStatus: null
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      if (this.$v) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var map = {
            name: this.name,
            location: this.location,
            terrain: this.terrain,
            maxplayers: this.maxplayers,
            modes: this.modes,
            floors: this.floors,
            ranked: this.ranked,
            likes: this.likes
          }
          this.map = map
          console.log('Submitting in new Map request : ' + [this.map, null, 5])
          this.$emit('map-is-created-updated', this.map)
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
