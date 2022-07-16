<template>
  <div class="character-list">
    <div v-for="character in data" v-bind:key="character.id">
      <div @click="getCharacterName(character)" class="character-card">
        <CharacterCard :characterInfo="character" />
      </div>
    </div>
  </div>
</template>

<script>
import CharacterCard from "../CharacterCard/CharacterCard.vue";

export default {
  name: "CharacterList",
  props: {
    data: Object,
  },
  components: {
    CharacterCard,
  },
  methods: {
    getCharacterName(character) {
      this.$emit("on-click-card", character.id);
    },
  },
};
</script>

<style>
.character-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}
</style>
