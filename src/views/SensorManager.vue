<template>
<body>
  <SideBar></SideBar>
  <section class="column is-8 is-offset-3 box" style="margin-top: 50px">
    <h1 class="title is-3 has-text-centered">Manage Sensors</h1>
    <br />
    <div class="level">
      <div class="level-left">
        <div class="columns">
          <div class="column is-9">
            <!-- Search bar -->
            <b-autocomplete
              v-model="inputSearch"
              placeholder="Pesquise aqui por um sensor"
              icon="magnify"
              @select="option => this.selected = option"
            ></b-autocomplete>
          </div>
          <div class="column is-3">
            <b-select
              v-model="CategorySelected"
              placeholder="Select CAE"
              icon="sort"
              icon-pack="fas"
              expanded
            >
              <option value>Todos</option>
              <option v-for="(cae,i) in caeArray" :value="cae" :key="i">{{cae}}</option>
            </b-select>
          </div>
          <div class="column is-3">
            <b-select
              v-model="OrderSelected"
              placeholder="Select Area"
              icon="sort"
              icon-pack="fas"
              expanded
            >
              <option value>Todos</option>
              <!-- <option v-for="(area,i) in areaArray" :value="area" :key="i">{{area}}</option> -->
            </b-select>
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

    <!-- Cards / Body -->
    <div class="columns is-multiline" v-if="view==2">
      <p class="has-text-centered" v-if="filteredSensorsFunc == 0">Não foram encontrados sensores</p> 
      <div class="column is-6-desktop" v-for="(sensor,i) in filteredSensors" :key="i">
        <div class="card is-rounded sameheight">
          <div class="card-content">
            <div class="media">
              <div class="media-left is-2" style="margin-top: 12px;margin-left: 12px ">
                <figure class="image is-64x64">
                  <img :src="sensor.image" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content" style="margin-top: 12px">
                <p class="title is-4">{{sensor.name}}</p>
                <p>Stock {{sensor.stock}}</p>
                <p>Price {{sensor.price}}</p>
              </div>
              <div class="media-right" style="margin-top: 12px">
                <button class="button is-info is-fullwidth">
                  <i class="fas fa-edit"></i>
                </button>
                <br />
                <button class="button is-success is-fullwidth">
                  <i class="fas fa-arrow-circle-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- table -->

    <div v-if="view==1">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th></th>
            <th>
              <abbr title="Position">ID</abbr>
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-if="filteredCompaniesFunc != 0" -->

          <tr v-for="(sensor,i) in sensors" :key="i">
            <th>
              <figure class="image is-32x32">
                <img :src="sensor.image" alt="Placeholder image" />
              </figure>
            </th>
            <th>{{sensor.idSensor}}</th>
            <th>{{sensor.name}}</th>
            <th>{{sensor.description}}</th>
            <th>{{sensor.categoryName}}</th>
            <th>{{sensor.stock}}</th>
            <th>{{sensor.price}}</th>
            <th>
              <button class="button is-info" @click="openEditSensor(sensor.idSensor)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="button is-success" style="margin-left: 10px">
                <i class="fas fa-arrow-circle-up"></i>
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Table -->
  </section>

  <!-- MODAL EDIT -->
  <b-modal :active.sync="editModal" has-modal-card>
    <form action>
      <div class="modal-background"></div>
      <div class="modal-card" style="width: 1000px;">
        <header class="modal-card-head">
          <!-- Title-->
          <div class="column is-7 is-6-mobile modal-title">
            <p class="modal-card-title">Editar {{editName}}</p>
          </div>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column is-12-mobile is-half">
              <b-field label="Escreva aqui a nova ioSolution">
                <b-input
                  placeholder="ioSolution"
                  icon-pack="fas"
                  icon="layer-group"
                  required
                  v-model="editName"
                ></b-input>
              </b-field>
            </div>
            <div class="column is-12-mobile is-half">
              <b-field label="Escreva aqui o link da imagem">
                <b-input
                  placeholder="link imagem"
                  icon-pack="fas"
                  icon="image"
                  required
                  v-model="editIcon"
                ></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12-mobile is-half">
              <b-field label="Escolha o tipo">
                <b-select
                  placeholder="Tipo"
                  icon-pack="fas"
                  icon="sort"
                  v-model="editType"
                  expanded
                  required
                >
                  <option
                    v-for="(type,i) in solutionTypes"
                    :value="type.name"
                    :key="i"
                  >{{ type.name }}</option>
                </b-select>
              </b-field>
            </div>
            <div class="column is-12-mobile is-half">
              <b-field label="Escreva aqui o link da solução">
                <b-input
                  placeholder="link do website"
                  icon-pack="fas"
                  icon="link"
                  required
                  v-model="editLink"
                ></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <b-field label="Escreva aqui a descrição da solução">
                <b-input
                  type="text"
                  maxlength="150"
                  placeholder="Descrição"
                  icon-pack="fas"
                  icon="font"
                  required
                  v-model="editDescription"
                ></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <b-field label="Escreva aqui a descrição da solução em Ingles">
                <b-input
                  type="text"
                  maxlength="100"
                  placeholder="Descrição EN"
                  icon-pack="fas"
                  icon="font"
                  v-model="editDescriptionEN"
                  required
                ></b-input>
              </b-field>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="editModal = false">Cancelar</button>
          <button class="button is-success" type="button" @click="editSolution()">Guardar</button>
        </footer>
      </div>
    </form>
  </b-modal>
</body>
</template>

<script>
import SideBar from "../components/sideBar";

//Axios
import { getAllSensors } from "../API/apiSensor"; //editSensor
import { getAllCategorys } from "../API/apiCategory";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      inputSearch: "",
      sensors: [],
      filteredSensors: [],
      CategorySelected: "",
      OrderSelected: "",
      categorys: [],
      view: 2,
      editModal: false,
      editName: "",
      editPrice: "",
      editDescription: "",
      editImage: ""
    };
  },
  computed: {
    filteredSensorsFunc() {
      if (this.sensors) {
        //Search for words
        this.filteredSensors = this.sensors.filter(sensor => {
          return (
            sensor.name
              .toString()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(this.inputSearch.toLowerCase()) >= 0
          );
        });

        // //Filter
        // this.filteredSolutions = this.filteredSolutions.filter(solution => {
        //   if (
        //     solution.type == this.solutionTypeSelected ||
        //     this.solutionTypeSelected == ""
        //   ) {
        //     count++;
        //     return true;
        //   } else {
        //     return false;
        //   }
        // });

        return this.filteredSensors.lenght;
      }
    }
  },
  methods: {
    pageActive(n) {
      if (n == 1) {
        this.view = 1;
      } else if (n == 2) {
        this.view = 2;
      }
      localStorage.setItem("SensorManager", this.view);
    },
    isActive(n) {
      return n == this.view
        ? { "background-color": "#F2F2F2" }
        : { "background-color": "white" };
    },
    openEditSensor(id) {
      let pos = this.getPosition(id);

      this.editName = this.sensors[pos].name;
      this.editPrice = this.sensors[pos].price;
      this.editDescription = this.sensors[pos].description;
      this.editImage = this.sensors[pos].image;

      this.editModal = true;
    },
    getPosition(id) {
      //Getting pos with the id
      let temp;
      this.sensors.forEach((sensor, i) => {
        if (sensor.idSensor.indexOf(id) != -1) {
          temp = i;
        }
      });
      return temp;
    }
  },
  created() {
    if (localStorage.getItem("SensorManager")) {
      this.view = localStorage.getItem("SensorManager");
    }
    getAllCategorys().then(response => {
      this.categorys = response.data.data;
    });
    getAllSensors().then(response => {
      /* eslint-disable */
      //console.log(response.data.data);
      this.sensors = response.data.data;

      this.sensors.forEach((sensor, i) => {
        this.categorys.forEach(category => {
          if (category.idCategory == sensor.idCategory) {
            this.sensors[i].categoryName = category.name;
          }
        });
      });
    });
  }
};
</script>