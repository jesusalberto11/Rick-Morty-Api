<template>
  <div class="character-detailed-card-body">
    <CharacterCardImage
      :name="characterData.name"
      :image="characterData.image"
      :imageWidth="300"
      :imageHeight="300"
      :classType="'box'"
      :paddingLeft="0"
    />
    <div class="character-details-body">
      <CharacterTitle :name="characterData.name" />
      <CharacterDetails
        :characterData="characterData"
        :firstSeenEpisodeData="firstSeenEpisodeData"
      />
    </div>
  </div>
</template>

<script>
import CharacterCardImage from "../CharacterCard/CharacterCardImage.vue";
import CharacterTitle from "../DetailedCard/CharacterTitle.vue";
import CharacterDetails from "../DetailedCard/CharacterDetails.vue";

export default {
  name: "CharacterDetailedCard",
  props: {
    characterData: Object,
    firstSeenEpisodeData: Object,
  },
  components: {
    CharacterCardImage,
    CharacterTitle,
    CharacterDetails,
  },
};
</script>

<style>
.character-detailed-card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5vh;

  padding-left: 50px;
  padding-right: 50px;
}

.character-details-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  flex-grow: 2;
  height: 100%;
}

@media screen and (max-width: 810px) {
  .character-detailed-card-body {
    padding-left: 0;
    padding-right: 0;
    gap: 2vh;
  }
}
</style>
