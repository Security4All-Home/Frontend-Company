<template>
<body>
  <SideBar></SideBar>

  <section class="column is-8 is-offset-3 box" style="margin-top: 50px">
    <h1 class="title is-3 has-text-centered">Manage Users</h1>
    <br />
    <div class="level">
      <div class="level-left">
        <div class="columns">
          <div class="column is-8">
            <!-- Search bar -->
            <b-autocomplete
              expanded
              v-model="inputSearch"
              placeholder="Search for username"
              icon="search"
              icon-pack="fas"
              type="search"
              @select="option => this.selected = option"
            ></b-autocomplete>
          </div>
          <div class="column is-4">
            <b-select
              v-model="filterSelected"
              placeholder="Filter by..."
              icon="sort"
              icon-pack="fas"
              expanded
            >
              <option value="1">By Id</option>
              <option value="2">Alphabetical order</option>
              <option value="3">More points first</option>
              <option value="4">More credit first</option>
            </b-select>
          </div>
          <div class="column is-2">
            <nav class="level">
              <div class="level-left">
                <button
                  class="button isSecondaryBGColor has-text-white"
                  @click="filteredUsersFunc"
                  expanded
                >Search</button>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <button
                    class="button isOurGrey has-text-white"
                    @click="() =>{inputSearch = '';filterSelected = 1; filteredUsersFunc()}"
                  >
                    <i class="fas fa-eraser"></i>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="level-right">
        <p>Vistas</p>
        <a
          class="button"
          @click="pageActive(1)"
          style="margin-right: 5px; margin-left: 10px"
          v-bind:style="isActive(1)"
        >
          <span class="icon is-small">
            <i class="fas fa-table"></i>
          </span>
        </a>

        <a class="button" @click="pageActive(2)" v-bind:style="isActive(2)">
          <span class="icon is-small">
            <i class="fas fa-address-card"></i>
          </span>
        </a>
      </div>
    </div>
    <!-- Cards -->
    <div class="columns is-multiline" v-if="view==2">
      <div class="column is-6-desktop" v-for="(user,i) in users" :key="i">
        <div class="card cardTheHover">
          <div class="card-content">
            <div class="media">
              <div class="media-left is-2" style="margin-top: 12px;margin-left: 12px ">
                <figure class="image is-64x64">
                  <img
                    src="https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-6.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content" style="margin-top: 12px">
                <p class="title is-4">{{user.username}}</p>
                <p>Points {{user.points}}</p>
                <p>Credit {{user.credit}}</p>
              </div>
              <div class="media-right" style="margin-top: 12px">
                <button class="button is-danger is-fullwidth" v-if="user.disabled">
                  <i class="fas fa-ban"></i>
                </button>
                <button class="button is-link is-fullwidth" v-if="!user.disabled">
                  <i class="fas fa-unlock"></i>
                </button>
                <br />
                <button class="button is-warning is-fullwidth" v-if="user.idType == 1">
                  <i class="fas fa-user"></i>
                </button>
                <button class="button is-success is-fullwidth" v-if="user.idType == 2">
                  <i class="fas fa-users-cog"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div v-if="view==1">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th></th>
            <th>
              <abbr title="Position">ID</abbr>
            </th>
            <th>Username</th>
            <th>Name</th>            
            <th>Type</th>
            <th>Status</th>
            <th>Credits</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-if="filteredCompaniesFunc != 0" -->

          <tr v-for="(user,i) in users" :key="i">
            <th>
              <figure class="image is-32x32">
                <img src="https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-6.png" />
              </figure>
            </th>
            <th>{{user.idUser}}</th>
            <th>{{user.username}}</th>
            <th>{{user.name}}</th>
            <th>{{user.idType}}</th>
            <th v-if="user.disabled==1">Active</th>
            <th v-if="user.disabled==0">Blocked</th>
            <th>{{user.credit}}</th>
            <th>{{user.points}}</th>
            <th width="20%">
                <button class="button is-info"  style="width: 50px">
                  <i class="fas fa-info-circle"></i>
                </button>
              <button class="button is-danger " v-if="user.disabled" style="margin-left: 10px; width: 50px">
                  <i class="fas fa-ban"></i>
                </button>
                <button class="button is-link " v-if="!user.disabled" style="margin-left: 10px; width: 50px">
                  <i class="fas fa-unlock"></i>
                </button>
                <button class="button is-warning " v-if="user.idType == 1" style="margin-left: 10px; width: 50px">
                  <i class="fas fa-user"></i>
                </button>
                <button class="button is-success " v-if="user.idType == 2" style="margin-left: 10px; width: 50px">
                  <i class="fas fa-users-cog"></i>
                </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Table -->
  </section>
</body>
</template>

<script>
import SideBar from "../components/sideBar";

//Axios
import { getAllUsers } from "../API/apiUser";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      users: [],
      inputSearch: "",
      view: 2,
      filterSelected: 1
    };
  },
  methods: {
    filteredUsersFunc() {},
    pageActive(n) {
      if (n == 1) {
        this.view = 1;
      } else if (n == 2) {
        this.view = 2;
      }
      localStorage.setItem("UserManager", this.view);
    },
    isActive(n) {
      return n == this.view
        ? { "background-color": "#F2F2F2" }
        : { "background-color": "white" };
    }
  },
  created() {
    if (localStorage.getItem("UserManager")) {
      this.view = localStorage.getItem("UserManager");
    }
    getAllUsers().then(response => {
      this.users = response.data.data;
      /* eslint-disable */
      console.log(response.data.data);
    });
  }
};
</script>

<style>
</style>