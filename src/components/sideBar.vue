<template>
  <aside class="menu column is-2 section isSecondaryBGColor is-fullheight SideBar">
    <p class="is-size-4 isPrimaryColor has-text-centered">Admin</p>
  <p class="menu-label pWhite is-size-6">
    General
  </p>
  <ul class="menu-list">
    <li><a class="aWhite" @click="goTo('/dashboard')" >Dashboard</a></li>
  </ul>
  <p class="menu-label pWhite is-size-6">
    Administration
  </p>
  <ul class="menu-list">
    <li><a class="aWhite" >Validate installation requests</a></li>
    <li><a class="aWhite" >Subscription packages</a></li>
    <li><a class="aWhite" >Gamification</a></li>
  </ul>
  <p class="menu-label pWhite is-size-6">
    Sensors
  </p>
  <ul class="menu-list">
    <li><a class="aWhite" >New Sensor</a></li>
    <li><a class="aWhite" >Manage Sensors</a></li>
    <li><a class="aWhite" >Orders</a></li>
  </ul>
  <p class="menu-label pWhite is-size-6">
    Users
  </p>
  <ul class="menu-list">
    <li><a class="aWhite" >Manage Users</a></li>
  </ul>
  <br>
  <p class="menu-label pWhite is-size-6" @click="goTo('/')">
    <i class="fas fa-sign-out-alt"></i> Sign out
  </p>
</aside>
</template>

<style >

.pWhite {
  color: hsl(0, 0%, 96%) !important;
}

.aWhite {
  color: hsl(0, 0%, 70%) !important;
}

.SideBar {
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
}

</style>

<script>

export default {
  name: "Sidebar",
  data() {
    return {
    };
  },
  created() {
    
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
}
</script>