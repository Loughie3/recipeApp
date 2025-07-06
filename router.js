// router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "./src/views/Home.vue";
import ViewRecipe from "./src/views/ViewRecipe.vue";
import CreateRecipe from "./src/views/CreateRecipe.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/createRecipe", name: "createRecipe", component: CreateRecipe },
  { path: "/recipe/:id", name: "recipe", component: ViewRecipe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
