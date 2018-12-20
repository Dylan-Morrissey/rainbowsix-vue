<template>
  <div id="appl" class="hero">
    <h3 class="vue-title"><i class="fa fa-user" style="padding: 3px"></i>Sign Up </h3>
    <input type="text" id="email" name="email" placeholder="Enter Email" v-model="email">
    <br/>
    <br/>
    <input type="text" id="password" name="password" placeholder="Enter Password" v-model="password">
    <br/>
    <br/>
    <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword" rules="[comparePasswords]">
    <br/>
    <br/>
    <button class="btn btn-primary btn1" :disabled="loading" :loading="loading" @click="onSignup">Sign Up</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
