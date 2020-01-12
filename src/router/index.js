import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import dashBoard from '../views/DashBoard.vue';
import adminGamification from "../views/AdminGamification.vue";
import adminRequests from "../views/AdminSubscription.vue";
import adminSubscription from "../views/AdminValidateReq.vue";
import userManager from "../views/UserManager.vue";
import sensorManager from "../views/SensorManager.vue";
import sensorNew from "../views/SensorNew.vue";
import sensorOrders from "../views/SensorOrders.vue";
import userValidate from "../views/UserValidate.vue";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashBoard
  },
  {
    path: '/admin/gamification',
    name: 'adminGamification',
    component: adminGamification
  },
  {
    path: '/admin/subscription',
    name: 'adminSubscription',
    component: adminSubscription
  },
  {
    path: '/admin/requests',
    name: 'adminRequests',
    component: adminRequests
  },
  {
    path: '/sensor/manager',
    name: 'sensorManager',
    component: sensorManager
  },
  {
    path: '/sensor/new',
    name: 'sensorNew',
    component: sensorNew
  },
  {
    path: '/sensor/orders',
    name: 'sensorOrders',
    component: sensorOrders
  },
  {
    path: '/user/manager',
    name: 'userManager',
    component: userManager
  },
  {
    path: '/user/validate',
    name: 'userValidate',
    component: userValidate
  }
];

const router = new VueRouter({
  routes
});

export default router;