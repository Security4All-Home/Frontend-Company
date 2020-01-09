<template>
<body>

    <SideBar></SideBar>
    <section class="isWhiteBG column is-10 is-offset-2">
        
        <nav class="level is-mobile">
  <div class="level-item has-text-centered box">
    <div>
      <p class="heading">Users</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered box">
    <div>
      <p class="heading">Sensors Sold</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered box">
    <div>
      <p class="heading">Installation Requests</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered box">
    <div>
      <p class="heading">Orders</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>


    </section>
        
   
</body>
    

</template>

<script>
import SideBar from "../components/sideBar"


export default {
    components: {
    SideBar, 
  }
}
</script>