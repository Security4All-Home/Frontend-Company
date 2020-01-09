<template>
  <!-- is-fullheight-with-navbar -->
  <body>
    <section class="hero isWhiteBG is-fullheight patternBG">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">                    

                    <div class="box isSecondaryBGColor">
                      <figure class="avatar">
                            <img src="../assets/Images/1.png" width="300" >
                        </figure>
                        <br>
                        <br>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input v-model="email" class="input" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input v-model="password" class="input" type="password" placeholder="Your Password">
                                </div>
                            </div>
                           <br>
                           <br>
                            <button @click="goTo('/dashboard')" class="button is-block isPrimaryBGColor is-medium is-fullwidth">Login <i class="fas fa-sign-in-alt"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>


  </body>
  
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: ""
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

<style>
.patternBG {
  background-image: url("../assets/Images/pattern2.png")
}
</style>
