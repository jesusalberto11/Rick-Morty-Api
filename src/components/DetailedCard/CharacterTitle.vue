<template>
  <p class="name">{{ name }}</p>
</template>

<script>
export default {
  name: "CharacterTitle",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 900px;

  font-size: 48px;
  text-align: center;
  color: aliceblue;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

@media screen and (max-width: 810px) {
  .name {
    height: auto;
    width: auto;
  }
}
</style>
