import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import AppBodyStructure from "./components/AppBodyStructure.vue";
import AppHome from "./components/AppHome.vue";
import AppAboutUs from "./components/AppAboutUs.vue";
import AppProduct from "./components/AppProduct.vue";
import AppServices from "./components/AppServices.vue";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


Vue.config.productionTip = false;
Vue.use(VueRouter);

// creating a router
const routes = [
  { path: "/", component: AppBodyStructure},
  { path: "/home", component: AppHome},
  { path: "/about us", component: AppAboutUs},
  { path: "/services", component: AppServices},
  { path: "/product", component: AppProduct},
];
const router = new VueRouter({ routes, mode: "history"});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
