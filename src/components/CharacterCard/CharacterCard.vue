<template>
  <div class="character-card">
    <div class="character-card-image">
      <CharacterCardImage
        :name="characterInfo.name"
        :image="characterInfo.image"
        :imageWidth="100"
        :imageHeight="100"
        :classType="'rounded'"
        :paddingLeft="50"
      />
    </div>
    <div class="character-card-info">
      <CharacterCardInfo
        :name="characterInfo.name"
        :status="characterInfo.status"
      />
    </div>
  </div>
</template>

<script>
import CharacterCardInfo from "./CharacterCardInfo.vue";
import CharacterCardImage from "./CharacterCardImage.vue";

export default {
  name: "CharacterCard",
  components: {
    CharacterCardInfo,
    CharacterCardImage,
  },
  props: {
    characterInfo: Object,
  },
};
</script>

<style>
.character-card {
  height: 150px;
  width: 300px;
  background-color: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1vh;

  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #354259;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.character-card:hover {
  box-shadow: 0 0 5px yellow, 0 0 5px yellowgreen, 0 0 10px yellow;
}

.character-card-image {
  flex-grow: 1;
}

.character-card-info {
  flex-grow: 2;
}
</style>
