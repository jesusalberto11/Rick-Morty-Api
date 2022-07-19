import { defineStore } from "pinia";

export const useStore = defineStore("characters", {
  state: () => {
    return {
      name: "Eduardo",
    };
  },
  getters: {
    /* Getters */
  },
  actions: {
    /* Actions */
  },
});
