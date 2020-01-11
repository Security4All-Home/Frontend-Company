<template>
<body>
  <SideBar class="is-hidden-mobile"></SideBar>
  <section class="info-tiles column is-10 is-offset-2">
    <div class="tile is-ancestor has-text-centered">
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[0]"></CountUp>
          <p class="subtitle">Users</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[1]"></CountUp>
          <p class="subtitle">Sensors Sold</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[2]"></CountUp>
          <p class="subtitle">Installation Requests</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[3]"></CountUp>
          <p class="subtitle">Orders</p>
        </article>
      </div>
    </div>
  </section>
  <section class="info-tiles column is-10 is-offset-2">
    <div class="tile is-ancestor has-text-centered">
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[4]"></CountUp>
          <p class="subtitle">Number of houses</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[5]"></CountUp>
          <p class="subtitle">Average sensor per house</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[6]"></CountUp>
          <p class="subtitle">Open Orders</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box hover-item">
          <CountUp v-bind:endValue="values[7]"></CountUp>
          <p class="subtitle">Exceptions</p>
        </article>
      </div>
    </div>
  </section>

  <section class="column is-10 is-offset-3">
    <div class="columns">
      <div class="column is-9">
        <div class="card events-card">
          <header class="card-header">
            <p class="card-header-title">Events</p>
            <a class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-table">
            <div class="content">
              <table class="table is-striped is-horable">
                <tbody>
                  <tr v-for="(event,i) in filterEvents(events)" :key="i">
                    <td width="5%">
                      <i class="far fa-bell"></i>
                    </td>
                    <td width="70%">{{event.name}}</td>
                    <td>{{event.date}}</td>

                    <td>
                      <a class="button is-small is-danger is-fullwidth" v-if="event.type=='danger'">Alert</a>
                      <a class="button is-small is-warning is-fullwidth" v-if="event.type=='warning'">Stock Out</a>
                      <a class="button is-small is-success is-fullwidth" v-if="event.type=='success'">Info</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" @click="eventsAll=!eventsAll" v-if="eventsAll==false">View All</a>
            <a class="card-footer-item" @click="eventsAll=!eventsAll" v-if="eventsAll==true">View Less</a>
          </footer>
        </div>
      </div>
    </div>   

  </section>
</body>
</template>

<script>
import SideBar from "../components/sideBar";
import CountUp from "../components/countUp";

export default {
  components: {
    SideBar,
    CountUp
  },
  data() {
    return {
      values: [200000,257,42156,122415,231,324,5003,1223],
      events: [
        {
          name: "O utilizador xpto45 carregou no botão de emergencia.",
          date: "25 May 2020",
          type: "danger"
        },
        {
          name:
            "O utilizador Matilde_Estrelinha carregou no botão de emergencia.",
          date: "1 April 2020",
          type: "danger"
        },
        {
          name: "Novo utilizador FilipeCardoso",
          date: "20 March 2020",
          type: "success"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        },
        {
          name: "O produto camera de video vigilancia ficou sem stock",
          date: "19 March 2020",
          type: "warning"
        }
      ],
      eventsAll: false
    };
  },
  created() {

    
  },
  methods: {
    filterEvents(events) {
        let temp = []
        if (!this.eventsAll){
          while(temp.length < 8){
            temp.push(events[temp.length])
          }
        }
        else if (this.eventsAll) {
          temp = events
        }
        return temp
    }
  }


};
</script>

<style>
.hover-item:hover {
  -webkit-transform: scale(1.055) translateY(-2px);
  transform: scale(1.055) translateY(-2px);
  -webkit-box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
  box-shadow: 0 2px 25px 0 rgba(30, 30, 30, 0.1);
}

.fullSize {
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
}

</style>