import * as VueRouter from "vue-router";

import Home from "./components/Pages/HomePage.vue";
import CharacterList from "./components/Pages/CharacterListPage.vue";
import CharacterPage from "./components/Pages/CharacterPage.vue";
import About from "./components/Pages/AboutPage.vue";
import NotFoundPage from "./components/Pages/PathNotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/characters", name: "characters", component: CharacterList },
  {
    path: "/characters/character/:id",
    name: "character",
    component: CharacterPage,
  },
  { path: "/about", name: "about", component: About },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
