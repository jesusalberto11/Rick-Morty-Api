<template>
  <div class="character-page">
    <div v-if="isLoading">
      <SkeletonDetailedCard />
    </div>
    <div v-else>
      <CharacterDetailedCard
        :characterData="characterData"
        :firstSeenEpisodeData="firstSeenEpisodeData"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CharacterDetailedCard from "../CharacterDetails/CharacterDetailedCard.vue";
import SkeletonDetailedCard from "../Skeletons/SkeletonDetailedCard.vue";

export default {
  name: "CharacterPage",
  components: {
    CharacterDetailedCard,
    SkeletonDetailedCard,
  },
  data() {
    return {
      API_URL: "https://rickandmortyapi.com/api/character/2",
      characterData: null,
      isLoading: true,
      firstSeenEpisodeData: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let API_URL = `https://rickandmortyapi.com/api/character/${this.$route.params.id}`;

      axios
        .get(API_URL)
        .then((response) => this.onResponse(response))
        .catch((error) =>
          console.log("Error fetching character Data: ", error)
        );
    },
    onResponse(response) {
      this.characterData = response.data;
      this.fetchFirstEpisode(response.data.episode[0]);
    },
    fetchFirstEpisode(firstEpisodeURL) {
      axios
        .get(firstEpisodeURL)
        .then((response) => (this.firstSeenEpisodeData = response.data))
        .catch((error) =>
          console.log("Error fetching First Episode Data: ", error)
        )
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style></style>
