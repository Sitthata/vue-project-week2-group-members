import "./styles/styles.css";

import App from "./App.vue";
import HelloWorldVue from "./components/HelloWorld.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from "vue";
import MainContentVue from "./components/MainContent.vue";

const routes = [
  { path: "/", component: MainContentVue },
  {
    path: "/test",
    component: HelloWorldVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");
