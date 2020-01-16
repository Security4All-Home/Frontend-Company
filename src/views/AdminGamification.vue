<template>
<body>
  <SideBar></SideBar>

  <section class="column is-8 is-offset-3 box" style="margin-top: 50px">
    <h1 class="title is-3 has-text-centered">Gamification</h1>
    <br />
    <div class="level">
      <div class="level-left"></div>

      <div class="level-right">
        <p>Add</p>
        <a
          class="button is-success"
          style="margin-right: 5px; margin-left: 10px"
          @click="addModal=true"
        >
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
        </a>
      </div>
    </div>
    <!-- Cards -->
    <div class="columns is-multiline">
      <div class="column is-6-desktop" v-for="(ach,i) in achievements" :key="i">
        <div class="card cardTheHover">
          <div class="card-content">
            <div class="media">
              <div class="media-left is-2" style="margin-top: 12px;margin-left: 12px ">
                <figure class="image is-64x64">
                  <img :src="ach.imageType.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content" style="margin-top: 12px">
                <p class="title is-4">{{ach.description}}</p>
                <p>Type: {{ach.imageType.type}}</p>
                <p>Goal: {{ach.goal}}</p>
              </div>
              <div class="media-right" style="margin-top: 12px">
                <!-- <button
                  class="button is-danger is-fullwidth is-light"
                  v-if="user.disabled==0"
                  @click="editAch(ach.id, ach.description, i)"
                >
                  <i class="fas fa-ban"></i>
                </button>
                <br />
                <button
                  class="button is-warning is-fullwidth is-light"
                  v-if="user.idType == 1"
                  @click="deleteAch(ach.id, ach.description, i)"
                >
                  <i class="fas fa-user"></i>
                </button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <b-modal :active.sync="addModal" has-modal-card>
    <form action>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <div class="column modal-title">
            <p class="modal-card-title">Create a new Achievement</p>
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
                  v-model="createAch.description"
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
                  v-model="createAch.goal"
                ></b-input>
              </b-field>
            </div>
            <div class="column is-half">
              <b-field label="Choose the type">
                <b-select
                  placeholder="Type of achievement"
                  icon-pack="fas"
                  icon="trophy"
                  v-model="createAch.imageType"
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
          <button class="button" type="button" @click="addModal = false">Cancel</button>
          <button
            class="button is-success"
            type="button"
            @click="addTheAchievement()"
          >Add Achievment</button>
        </footer>
      </div>
    </form>
  </b-modal>
</body>
</template>

<script>
import SideBar from "../components/sideBar";

import { getAllAchievements, addAchievement } from "../API/apiGamification";

import { ToastProgrammatic as toast } from "buefy";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      achievements: [],
      addModal: false,
      createAch: {
        description: "",
        goal: 0,
        imageType: {}
      },
      achImageType: [
        {
          type: "bronze",
          image:
            "https://pbs.twimg.com/media/ENmx441UcAAGY6J?format=png&name=small"
        },
        {
          type: "silver",
          image:
            "https://pbs.twimg.com/media/ENmx441U0AAv-KU?format=png&name=120x120"
        },
        {
          type: "gold",
          image: "https://image.flaticon.com/icons/svg/1152/1152810.svg"
        }
      ]
    };
  },
  methods: {
    addTheAchievement() {
      if (this.createAch.description != "" && this.createAch.goal != 0) {
        /* eslint-disable */
        console.log(this.createAch)
        addAchievement(this.createAch)
          .then(() => {
            toast.open({
              message: "New achievement added",
              type: "is-success"
            });
            this.createAch = {
              description: "",
              goal: 0,
              imageType: {}
            };
          })
          .catch(error => {
            toast.open({
              message: error,
              type: "is-danger"
            });
          });
      }
    }
  },
  created() {
    getAllAchievements().then(response => {
      this.achievements = response.data.data;
      /* eslint-disable */ 
      console.log(this.achievements)
    });
  }
};
</script>