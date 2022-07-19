<template>
  <div class="character-list-body">
    <div v-if="isLoading">
      <SkeletonList />
    </div>
    <div v-else>
      <CharacterList @on-click-card="goToCharacter" :data="characters" />
    </div>
    <CharacterListPagination
      @update-list="updateData"
      :characterPages="charactersCount"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCharacters } from "../../composable/useCharacters";

const { characters, isLoading, charactersCount, getAllCharacters, updateData } =
  useCharacters();

onMounted(() => {
  getAllCharacters();
});

const router = useRouter();

const goToCharacter = (characterId) => {
  router.push({
    name: "character",
    params: { id: characterId },
  });
};
</script>

<script>
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
