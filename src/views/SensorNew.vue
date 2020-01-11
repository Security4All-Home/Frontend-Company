<template>
<body>
  <SideBar></SideBar>
</body>
</template>

<script>
import SideBar from "../components/sideBar";

//Axios
import { addSensor } from "../API/apiSensor";
//import { getAllSensors,editSensor,addSensor,removeSensor } from "../../api/apiSolutions";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      sensor: {}
    };
  },
  methods: {
    createSensor() {

      addSensor(this.sensor)
        .then(res => {
          this.$toast.open({
            message: res,
            type: "is-success"
          });
        })
        .catch(error => {
          this.$toast.open({
            message: error,
            type: "is-danger"
          });
        });
    }
  }
};
</script>