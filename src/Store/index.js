import { defineStore } from "pinia";

export const useStore = defineStore("characters", {
  state: () => {
    return {
      character: null,
      characters: [],
      charactersPages: 0,
      isLoading: true,
      currentPage: 1,
      firstEpisodeData: null,
    };
  },
  getters: {
    /* Getters */
  },
  actions: {
    setCharacter(character) {
      if (character === null || character === undefined) return;
      this.character = { ...character };
    },
    setCharacters(characters) {
      if (characters === null || characters === undefined) return;
      this.characters = characters;
    },
    setCharactersPages(count) {
      if (count === null || count === undefined) return;
      this.charactersPages = count;
    },
    setIsLoading(value) {
      if (value === null || value === undefined) return;
      this.isLoading = value;
    },
    setCurrentPage(value) {
      if (value === null || value === undefined) return;
      this.currentPage = value;
    },
    setFirstEpisodeData(data) {
      if (data === null || data === undefined) return;
      this.firstEpisodeData = data;
    },
  },
});
