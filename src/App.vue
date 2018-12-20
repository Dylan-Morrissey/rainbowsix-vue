<template>
  <div id="app">
    <b-navbar  toggleable="md" type="dark">
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">.
        <b-navbar-nav class ="ml-auto">
          <b-nav-item to="/"><img src="./assets/rblogotp.jpeg"></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Operators" right>
            <b-dropdown-item to="/operators">Operators</b-dropdown-item>
            <b-dropdown-item to="/operator">Add a new operator</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Maps" right>
            <b-dropdown-item to="/maps">Maps</b-dropdown-item>
            <b-dropdown-item to="/map">Add a new Map</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
        <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
        <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
        <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    padding-top: 20px;
    background: url("./assets/background.jpg") repeat center top;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
