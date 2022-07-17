<template>
  <div class="character-details">
    <CharacterCardStatus :status="characterData.status" />
    <p>Species: {{ characterData.species }}</p>
    <p>Gender: {{ characterData.gender }}</p>
    <p>Origin: {{ characterData.origin.name }}</p>
    <p>Last know Location: {{ characterData.location.name }}</p>

    <p>First seen in: {{ firstSeenEpisodeData.name }}</p>
    <p>Aired on: {{ firstSeenEpisodeData.air_date }}</p>
    <p>Episode Code: {{ firstSeenEpisodeData.episode }}</p>
  </div>
</template>

<script>
import CharacterCardStatus from "../CharacterCard/CharacterCardStatus.vue";

export default {
  name: "CharacterDetails",
  props: {
    characterData: Object,
    firstSeenEpisodeData: Object,
  },
  components: {
    CharacterCardStatus,
  },
};
</script>

<style scoped>
.character-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  font-size: 22px;
}

@media screen and (max-width: 810px) {
  .character-detailed-card-body {
    padding-left: 0;
    padding-right: 0;
    gap: 2vh;
  }

  .character-details {
    align-items: flex-start;
    padding-left: 25px;
    padding-right: 25px;
    text-align: left;
    padding-bottom: 50px;
  }
}
</style>
