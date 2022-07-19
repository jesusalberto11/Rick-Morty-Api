<template>
  <div class="character-status">
    <div class="character-status-text">
      <p :class="type">Status: {{ statusWithCapitalizedFirstLetter }}</p>
      <CharacterCircleIndicator :status="status" />
    </div>
  </div>
</template>

<script>
import CharacterCircleIndicator from "./CharacterCircleIndicator.vue";

export default {
  name: "CharacterCardStatus",
  props: {
    status: String,
    type: String,
  },
  components: {
    CharacterCircleIndicator,
  },
  computed: {
    statusWithCapitalizedFirstLetter() {
      return this.status?.charAt(0).toUpperCase() + this.status?.slice(1);
    },
  },
};
</script>

<style scoped>
.character-status {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1vh;
}

.character-status-text {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 0.5vh;
}

@media screen and (max-width: 810px) {
  .small-text {
    font-size: 14px;
  }
}
</style>
