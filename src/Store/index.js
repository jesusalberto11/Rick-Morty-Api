import { defineStore } from "pinia";

export const useStore = defineStore("characters", {
  state: () => {
    return {
      characters: [],
      charactersCount: 0,
      isLoading: true,
      currentPage: 1,
    };
  },
  getters: {
    /* Getters */
  },
  actions: {
    setCharacters(characters) {
      if (characters === null || characters === undefined) return;
      this.characters = characters;
    },
    setCharactersCount(count) {
      if (count === null || count === undefined) return;
      this.charactersCount = count;
    },
    setIsLoading(value) {
      if (value === null || value === undefined) return;
      this.isLoading = value;
    },
    setCurrentPage(value) {
      if (value === null || value === undefined) return;
      this.currentPage = value;
    },
  },
});
