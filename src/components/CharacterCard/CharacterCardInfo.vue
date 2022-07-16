<template>
  <div class="character-info">
    <CharacterCardName :name="name" />
    <CharacterCardStatus :status="status" :type="'small-text'" />
    <p>Click to see more</p>
  </div>
</template>

<script>
import CharacterCardName from "./CharacterCardName.vue";
import CharacterCardStatus from "./CharacterCardStatus.vue";

export default {
  name: "CharacterCardInfo",
  props: {
    name: String,
    status: String,
  },
  components: {
    CharacterCardName,
    CharacterCardStatus,
  },
};
</script>

<style>
.character-info {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  gap: 2vh;

  height: 150px;
  width: 180px;

  color: #000;
}
</style>
