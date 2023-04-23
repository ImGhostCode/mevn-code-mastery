import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import App from "./App.vue";
import router from "./router";

import "./assets/style/main.css";
import "./assets/style/tailwind.css";

const app = createApp(App);

app.component(
  "default",
  defineAsyncComponent(() => import("./layouts/default.vue"))
);

app.use(createPinia());
app.use(router);
app.use(ToastPlugin);

app.mount("#app");
