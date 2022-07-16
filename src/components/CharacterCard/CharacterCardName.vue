<template>
  <div class="character-name">
    <div :class="checkNameLength">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "CharacterCardName",
  props: {
    name: String,
  },
  computed: {
    checkNameLength() {
      return {
        "character-name-normal": this.name.length < 15,
        "character-name-short": this.name.length >= 15 && this.name.length < 30,
        "character-name-extra-short": this.name.length >= 30,
      };
    },
  },
};
</script>

<style>
.character-name {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: aliceblue;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

.character-name-short {
  font-size: 18px;
  padding-top: 25px;
}

.character-name-normal {
  font-size: 19px;
  padding-top: 30px;
}

.character-name-extra-short {
  font-size: 14px;
  padding-top: 25px;
}

.character-name-short,
.character-name-normal,
.character-name-extra-short {
  text-align: left;
  width: 135px;
}
</style>
