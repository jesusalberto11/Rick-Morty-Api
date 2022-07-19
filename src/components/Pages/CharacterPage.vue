<template>
  <div class="character-page">
    <div v-if="isLoading">
      <SkeletonDetailedCard />
    </div>
    <div v-else>
      <CharacterDetailedCard
        :characterData="character"
        :firstSeenEpisodeData="firstEpisodeData"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCharacters } from "../../composable/useCharacters";
import CharacterDetailedCard from "../CharacterDetails/CharacterDetailedCard.vue";
import SkeletonDetailedCard from "../Skeletons/SkeletonDetailedCard.vue";

const { character, isLoading, firstEpisodeData, fetchSingleCharacterData } =
  useCharacters();

const route = useRoute();

onMounted(() => {
  fetchSingleCharacterData(route.params.id);
});
</script>

<style></style>
