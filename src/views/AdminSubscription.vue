<template>
<body>
  <SideBar></SideBar>

  <section class="column is-8 is-offset-3 box" style="margin-top: 50px">
    <h1 class="title is-3 has-text-centered">Subscription Packages</h1>
    <br />
    <br />
    <!-- Cards -->
    <div class="columns is-multiline">
      <div class="column is-6-desktop" v-for="(pack,i) in packages" :key="i">
        <div class="card cardTheHover">
          <div class="card-content">
            <div class="media">
              <div class="media-left is-2" style="margin-top: 12px;margin-left: 12px ">
                <!-- <figure class="image is-64x64">
                  <img :src="ach.imageType.image" alt="Placeholder image" />
                </figure> -->
              </div>
              <div class="media-content" style="margin-top: 12px">
                <p class="title is-4">{{pack.name}}</p>
                <p>{{pack.description}}</p>
                <p>Price: {{pack.price}}</p>
              </div>
              <div class="media-right" style="margin-top: 12px">
                <button class="button is-success is-fullwidth is-light"><!--  @click="editAch(i)"-->
                  <i class="fas fa-edit"></i>
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--   
  <b-modal :active.sync="editModal" has-modal-card>
    <form action>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <div class="column modal-title">
            <p class="modal-card-title">Edit {{editDescription}}</p>
          </div>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column is-12">
              <b-field label="Achievement description">
                <b-input
                  placeholder="Achievement description"
                  icon-pack="fas"
                  icon="file-signature"
                  required
                  v-model="editDescription"
                ></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-half">
              <b-field label="Achievement goal">
                <b-input
                  placeholder="Define the goal for this achievement"
                  icon-pack="fas"
                  icon="bullseye"
                  type="number"
                  min="0"
                  required
                  v-model="editGoal"
                ></b-input>
              </b-field>
            </div>
            <div class="column is-half">
              <b-field label="Choose the type">
                <b-select
                  placeholder="Type of achievement"
                  icon-pack="fas"
                  icon="trophy"
                  v-model="ediType"
                  expanded
                  required
                >
                  <option v-for="(a,i) in achImageType" :value="a" :key="i">{{ a.type }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="editModal = false">Cancel</button>
          <button class="button is-success" type="button" @click="editPackage()">Edit Package</button>
        </footer>
      </div>
    </form>
  </b-modal> -->
</body>
</template>
<script>
import SideBar from "../components/sideBar";

import { getAllPackages } from "../API/apiPackages";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      editmOdal: false,
      packages: []
    };
  },
  methods: {
    // editPackage() {}
  },
  created() {
    getAllPackages().then(response => {
      this.packages = response.data.data;
      /* eslint-disable */

      console.log(this.packages);
    });
  }
};
</script>