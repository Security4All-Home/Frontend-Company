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
import { getAllUsers } from "../API/apiUser";

export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
      //
      users: []
    };
  },
  created() {
    getAllUsers().then(response => {
      this.users = response.data.data;

      let temp = this.users.length;

      setInterval(function() {
        localStorage.setItem("countUp", [temp, 5, 6, 7, 8, 9, 10, 11]);
      }, 5000);
    });
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
