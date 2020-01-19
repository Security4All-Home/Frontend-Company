<template>
<!-- is-fullheight-with-navbar -->
<body>
  <section class="hero isWhiteBG is-fullheight patternBG">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box isSecondaryBGColor">
            <figure class="avatar">
              <img src="../assets/Images/1.png" width="300" />
            </figure>
            <br />
            <br />
            <form>
              <div class="field">
                <label class="label has-text-light has-text-left">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="email"
                    class="input"
                    type="email"
                    placeholder="Your Email"
                    autofocus
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-light has-text-left">Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="password"
                    class="input"
                    type="password"
                    placeholder="Your Password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <br />
              <button
                @click="goTo('/dashboard')"
                class="button is-block isPrimaryBGColor is-fullwidth"
              >
                Login
                <i class="fas fa-sign-in-alt"></i>
              </button>
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
import { getStat1, getStat2, getStat3, getStat4, getStat5, getStat6, getStat7, getStat8 } from "../API/apiStats";


export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
      //
      a1: null,
      a2: null,
      a3: null,
      a4: null,
      a5: null,
      a6: null,
      a7: null,
      a8: null,
      
      };
  },
  created() {  


    setInterval(function() {
      /* eslint-disable */


      getStat1().then(response => {
      this.a1 = response.data.data[0].numUsers;
      });
      getStat2().then(response => {
      this.a2 = response.data.data[0].Quantity;   
      });
      getStat3().then(response => {
      this.a3 = response.data.data[0].Instalation_Requests;   
      });
      getStat4().then(response => {
      this.a4 = response.data.data[0].Orders_To_Pay;   
      });
      getStat5().then(response => {
      this.a5 = response.data.data[0].TotalHouses;   
      });
      getStat6().then(response => {
      this.a6 = response.data.data;   
      });
      getStat7().then(response => {
      this.a7 = response.data.data[0].totalUsersNotVerified;   
      });
      getStat8().then(response => {
      this.a8 = response.data.data;   
      });

      if(this.a1 >= 1 && this.a2 >= 1 && this.a3 >= 1 && this.a4 >= 1 && this.a5 >= 1 ){
        let temp = [this.a1,this.a2,this.a3,this.a4,this.a5,this.a6,this.a7,this.a8]
        localStorage.setItem("countUp", temp);
      }
    
    }, 10000);
  },
  methods: {
    goTo(path) {
      localStorage.setItem("page", 0);
      this.$router.push(path);
    }
  }
};
</script>

<style>
.patternBG {
  background-image: url("../assets/Images/pattern2.png");
}
</style>
