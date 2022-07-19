<template>
  <div class="character-list-body">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <CharacterList @on-click-card="goToCharacter" :data="data" />
    </div>
    <CharacterListPagination
      @update-list="updateData"
      :characterPages="characterCount"
    />
  </div>
</template>

<script>
import axios from "axios";
import CharacterList from "../CharacterList/CharacterList.vue";
import CharacterListPagination from "../PagesComponents/CharacterListPagination.vue";
import SkeletonList from "../CharacterList/SkeletonList.vue";

export default {
  name: "CharacterListPage",
  components: {
    CharacterList,
    CharacterListPagination,
    SkeletonList,
  },
  data() {
    return {
      API_URL: `https://rickandmortyapi.com/api/character/?page=1`,
      data: null,
      isLoading: true,
      currentPage: 1,
      characterCount: null,
    };
  },
  mounted() {
    axios
      .get(this.API_URL)
      .then((response) => this.getData(response))
      .catch((error) => console.log("Error: ", error))
      .finally(() => (this.isLoading = false));
  },
  methods: {
    getData(response) {
      this.data = response.data.results;
      this.characterCount = response.data.info.pages;
    },
    updateData(id) {
      let newPageToFetch = `https://rickandmortyapi.com/api/character/?page=${id}`;
      this.isLoading = true;

      axios
        .get(newPageToFetch)
        .then((response) => this.getData(response))
        .catch((error) => console.log("Error: ", error))
        .finally(() => (this.isLoading = false));
    },
    goToCharacter(characterId) {
      this.$router.push({
        name: "character",
        params: { id: characterId },
      });
    },
  },
};
</script>

<style scoped>
.character-list-body {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5vh;

  justify-content: center;
  align-items: center;
}
</style>
