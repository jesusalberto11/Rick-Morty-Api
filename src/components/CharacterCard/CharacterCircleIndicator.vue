<template>
  <div class="circle-indicator">
    <div class="character-circle-indicator" :class="checkStatus"></div>
  </div>
</template>

<script>
export default {
  name: "CharacterCircleIndicator",
  props: {
    status: String,
  },
  computed: {
    checkStatus() {
      return {
        alive: this.status === "Alive",
        dead: this.status === "Dead",
      };
    },
  },
};
</script>

<style scoped>
.character-circle-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;

  margin-top: 2px;
}

.alive {
  background-color: greenyellow;
}

.dead {
  background-color: red;
}
</style>
