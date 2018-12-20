<template>
  <div id="appl" class="hero">
    <h3 class="vue-title"><i class="fa fa-users" style="padding: 3px"></i>Sign Up </h3>
    <input type="text" id="email" name="email" placeholder="Enter Email" v-model="email">
    <br/>
    <br/>
    <input type="text" id="password" name="password" placeholder="Enter Password" v-model="password">
    <br/>
    <br/>
    <button class="btn btn-primary btn1" :disabled="loading" :loading="loading" @click="onSignin">Sign In</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
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
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
